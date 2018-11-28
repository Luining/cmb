<template>
  <v-app id="inspire" v-cloak>
    <Login v-if="!logged"></Login>
    <div v-if="logged">
      <Sheet></Sheet>
      <Toolbar></Toolbar>
      <Content></Content>
    </div>
  </v-app>
</template>

<script>
  import Sheet from '@/components/Drawer.vue';
  import Toolbar from '@/components/Toolbar.vue';
  import Content from '@/components/Content.vue';
  import Login from '@/components/Login.vue';
  export default {
    components: {
      /* eslint-disable vue/no-unused-components */
      Login,
      Sheet,
      Toolbar,
      Content
    },
    data: () => ({
    }),
    props: {
    },
    computed: {
      logged() {
        return this.$store.getters.getLogger;
      },
    },
    methods: {
      redirect ( url ) {
        this.$router.push( url )
      },
      toggleDrawer() {
        this.$store.dispatch('setDrawer', ! this.$store.getters.getDrawer)
      }
    },
  }
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>