<template>
  <v-content>
    <v-container fluid fill-height>
      <v-flex lg4 md3 class="hidden-sm-and-down"></v-flex>
      <v-flex lg4 md6 xs12>
        <router-view></router-view>
      </v-flex>
      <v-flex lg4 md3 class="hidden-sm-and-down"></v-flex>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data: () => ({

    }),
    methods: {
      redirect ( url ) {
        this.$router.push( url )
      }
    }
  }
</script>

