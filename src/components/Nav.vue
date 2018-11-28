<template>
  <v-bottom-nav
  :active.sync="bottomNav"
  :value="true"
  absolute
  color="transparent"
  >
    <v-btn
    color="red darken-1"
    flat
    value="recent"
    @click="redirect('/about')"
    >
      <span>競標紀錄</span>
      <v-icon>history</v-icon>
    </v-btn>

    <v-btn
    color="red darken-1"
    flat
    value="test"
    @click="redirect('/home')"
    >
      <span>訂單紀錄</span>
      <v-icon>assignment</v-icon>
    </v-btn>

    <v-btn
    color="red darken-1"
    flat
    value="start"
    >
      <span>開始競標</span>
      <v-icon>gavel</v-icon>
    </v-btn>

    <v-btn
    color="red darken-1"
    flat
    value="favorites"
    >
      <span>使用教學</span>
      <v-icon>help</v-icon>
    </v-btn>

    <v-btn
    color="red darken-1"
    flat
    value="nearby"
    >
      <span>開播設定</span>
      <v-icon>settings</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
  export default {
    data: () => ({
      bottomNav: 'recent',
      items: [
        { icon: 'contacts', text: '開始直播', path: '/about'},
        { icon: 'history', text: '競標紀錄', path: '/home' },
        { icon: 'receipt', text: '訂單查詢', path: '/about' },
        { icon: 'settings', text: '物流設定', path: '/home' },
        { icon: 'help', text: '使用教學', path: '/about' }
      ]
    }),
    computed: {
      drawer: {
        get: function () {
          return this.$store.getters.getDrawer;
        },
        set: function ( boolean ) {
          this.$store.dispatch('setDrawer', boolean );
        }
      }
    },
    methods: {
      redirect ( url ) {
        this.$router.push( url )
      }
    }
  }
</script>

