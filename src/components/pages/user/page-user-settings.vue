<template>
  <main class="main main--layout-1-1 main--width-limit">
    <form-user-settings/>
    <module-article :article="content"/>
  </main>
</template>

<script>
  import Page from '@/components/pages/page.vue';
  import ModuleArticle from '@/components/module/module-article/module-article.vue';
  import FormUserSettings from '@/components/forms/form-user-settings/form-user-settings.vue';
  import store from '@/store/';

  function fetch (store) {
    return Promise.all([
      store.dispatch('fetch', {
        namespace: 'page',
        endpoint: 'page/user-settings',
      }),
    ]);
  }

  export default {
    name: 'PageUserSettings',

    extends: Page,

    components: {
      'module-article': ModuleArticle,
      'form-user-settings': FormUserSettings,
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
      content () {
        return this.$store.state.page.content;
      },
    },
  };
</script>

<style lang="scss">

</style>
