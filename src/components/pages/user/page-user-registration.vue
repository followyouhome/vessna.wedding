<template>
  <main class="main main--layout-1-1 main--width-limit">
    <form-user-registration v-if="!user"/>
    <form-user-logout v-if="user"/>
    <module-article :article="content"/>
  </main>
</template>

<script>
  import Page from '@/components/pages/page.vue';
  import ModuleArticle from '@/components/module/module-article/module-article.vue';
  import FormUserLogout from '@/components/forms/form-user-logout/form-user-logout.vue';
  import FormUserRegistration from '@/components/forms/form-user-registration/form-user-registration.vue';

  import store from '../../../store/';

  import {
    mapGetters,
  } from 'vuex';

  function fetch (store) {
    return Promise.all([
      store.dispatch('fetch', {
        namespace: 'page',
        endpoint: 'page/user-registration',
      }),
    ]);
  }

  export default {
    name: 'PageUserRegistration',

    extends: Page,

    components: {
      'module-article': ModuleArticle,
      'form-user-logout': FormUserLogout,
      'form-user-registration': FormUserRegistration,
    },

    asyncData ({ store, route }) {
      return Promise.all([
        this.extends.asyncData({store, route}),
        fetch(store, route),
      ]);
    },

    beforeRouteEnter (to, from, next) {
      __VUE_ENV__ === 'server' ? next() : fetch(store, to).then(() => next());
    },

    beforeRouteUpdate (to, from, next) {
      __VUE_ENV__ === 'server' ? next() : fetch(store, to).then(() => next());
    },

    data () {
      return {

      };
    },

    computed: {
      ...mapGetters({
        user: 'isUserAvailable',
      }),
      content () {
        return this.$store.state.page.content;
      },
    },
  };
</script>

<style lang="scss">

</style>
