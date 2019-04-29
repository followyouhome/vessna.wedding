/**
 * The application server.
 *
 * The entry point for the app is the instance exported by src/main.server.js. It is loaded through the server bundle
 * generated by webpack.server.config.js (vue-ssr-server-bundle.json).
 *
 * Uses the bundle renderer from vue-server-renderer to render the entire content in <!--vue-ssr-outlet-->
 * of index.template.html. It also injects the bundle requests into the head and body. Uses a client manifest
 * (created by webpack.client.config.js) to allow for preloading and prefetching of priority assets.
 *
 * @see https://ssr.vuejs.org/en/bundle-renderer.html
 * @see https://ssr.vuejs.org/en/build-config.html
 * @see src/main.server.js
 */

const fs = require('fs');
const LRU = require('lru-cache');
const path = require('path');
const pretty = require('pretty');
const {createBundleRenderer} = require('vue-server-renderer');
const config = require('../../config');
const uidCookie = require('../lib/uid-cookie');

const isProd = process.env.NODE_ENV === 'production';
const resolve = file => path.resolve(__dirname, file);

module.exports = app => {
  let renderer, enableHMR;
  const template = fs.readFileSync(resolve('../../src/index.template.html'), 'utf8');

  function createRenderer (bundle, options) {
    return createBundleRenderer(bundle, Object.assign(options, {
      template,
      inject: false,

      // for component caching
      cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15,
      }),

      // this is only needed when vue-server-renderer is npm-linked
      basedir: resolve('../../dist'),

      // recommended for performance
      runInNewContext: false,
    }));
  }


  if (isProd) {
    // render using built server bundle generated by vue-server-renderer/server-plugin via webpack.config.server.js
    const bundle = require('../../dist/vue-ssr-server-bundle.json');

    // also include the client manifest generated by vue-server-renderer/client-plugin via webpack.config.client.js
    const clientManifest = require('../../dist/vue-ssr-client-manifest.json');


    renderer = createRenderer(bundle, {clientManifest});
  } else {
    // setup the dev server with watch and hot-reload, and create a new renderer on bundle / index template update.
    enableHMR = require('../lib/hmr')(app, (bundle, options) => {
      renderer = createRenderer(bundle, options);
    });
  }

  app.get('*', isProd ? render : (req, res) => {
    enableHMR.then(() => render(req, res));
  });

  function render (req, res) {
    res.setHeader('Content-Type', 'text/html');
    uidCookie.set(req, res);

    const context = {
      title: config.title,
      url: req.url,
      amp: req.url.match('amp'),
      canonical: req.url.match('amp') ? req.url.replace(/amp\//, '') : req.url,
      cookie: req.headers.cookie,
    };

    renderer.renderToString(context, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found');
        } else {
          res.status(500).end('Internal Server Error');
        }

        console.log(req.method, req.url);
        console.error(err.stack || err);
      } else {
        res.end(req.url.match('amp') ? pretty(html) : html);
      }
    });
  }
};
