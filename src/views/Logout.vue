<template>
</template>

<script>
  export default {
    created: function () {
      this.redirect('/');
      this.$store.commit('SET_LOGGED', false);
    },
    methods: {
      redirect ( url ) {
        this.$router.push( url );
      }
    }
  }
</script>