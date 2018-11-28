<template>
  <v-toolbar
  :clipped-left="$vuetify.breakpoint.lgAndUp"
  color="primary"
  dark
  app
  fixed
  >
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>

    <v-toolbar-title>CMB TOPOLOGY</v-toolbar-title>

    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
  export default {
    data: () => ({

    }),
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

