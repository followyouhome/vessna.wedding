export default [{
  name: 'page-user-registration',
  path: '/user/registartion',
  component: () => import(/* webpackChunkName: "page-user-registration" */ '@/components/pages/user/page-user-registration.vue'),
}, {
  name: 'page-user-login',
  path: '/user/login',
  component: () => import(/* webpackChunkName: "page-user-login" */ '@/components/pages/user/page-user-login.vue'),
}, {
  name: 'page-user-logout',
  path: '/user/logout',
  component: () => import(/* webpackChunkName: "page-user-logout" */ '@/components/pages/user/page-user-logout.vue'),
  meta: {
      auth: true,
  },
}, {
  name: 'page-user-settings',
  path: '/user/settings',
  component: () => import(/* webpackChunkName: "page-user-settings" */ '@/components/pages/user/page-user-settings.vue'),
  meta: {
      auth: true,
  },
}];
