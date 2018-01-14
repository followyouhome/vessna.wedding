/**
 * The main entry point for the server. Only used if SSR is enabled.
 *
 * A file /dist/vue-ssr-server-bundle.json is generated by webpack.server.config.js, and represents the webpack-built
 * version of this entry point. The bundle is used by the app-server to pre-fetch data store and pre-render HTML.
 *
 * When the router is ready, all components with an asyncData() method will execute them. When the async data is ready,
 * it is stored in the shared data store. This represents the "state" of the app.
 *
 * the state is attached to the context object used by the bundle renderer (from vue-server-renderer). The renderer
 * will inject window.__INITIAL_STATE__ into the template. This variable is picked up by main.client.js (the client's
 * entry point) when loaded in the browser.
 *
 * @see server/app-server.js
 * @see src/main.client.js
 * @see src/core/store.js
 */
import Vue from 'vue';
import Cookies from './lib/cookies';
import { createApp } from './app';

export default context => {
  return new Promise((resolve, reject) => {
    Vue.use({
      install: (Vue) => {
        Vue.cookies = new Cookies(context.cookie || '');
      }
    });

    const { app, router, store } = createApp();
    const { url } = context;
    const fullPath = router.resolve(url).route.fullPath;

    if (fullPath !== url) {
      reject({ url: fullPath });
    }

    router.push(context.url); // // sets the router's location

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        reject({ code: 404 });
      }

      Promise.all(matchedComponents.map(component => component.asyncData && component.asyncData.call(component, {
          store,
          route: router.currentRoute
      }))).then(() => {
        context.state = store.state;
        resolve(app);
      }).catch(reject)
    }, reject);
  });
}
