<template>
  <v-content>
    <v-container fluid fill-height class="primary">
      <v-layout align-center justify-center >
        <v-flex xs10 sm6 md3 >
          <v-card class="elevation-12">
            <v-img
            src="./assets/images/logo.png"
            lazy-src="./assets/images/logo.png"
            aspect-ratio="1"
            class="white" @click="login"></v-img>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                <v-text-field v-model="password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="text-lg-center">
              <v-btn color="primary" block @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      password:"",
    }),
    methods: {
      login () {
        this.$store.commit('SET_LOGGED', true);
      },
      redirect ( url ) {
        this.$router.push( url );
      }
    }
  }
</script>