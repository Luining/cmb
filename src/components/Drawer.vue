<template>
  <v-navigation-drawer
    :clipped="$vuetify.breakpoint.lgAndUp"
    v-model="drawer"
    fixed
    app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
          v-if="item.heading"
          :key="item.heading"
          row
          align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
          v-else-if="item.children"
          v-model="item.model"
          :key="item.text"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
            @click="{}">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content @click="redirect(child.path)">
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="redirect(item.path)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      <v-list><v-list-tile @click="saveposition()">保存拓扑</v-list-tile></v-list>
      <v-list><v-list-tile @click="gettime()">数据回滚</v-list-tile></v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { icon: 'contacts', text: '保存拓扑', path: '/about'},
        { icon: 'history', text: '数据回滚', path: '/' },
        { icon: 'help', text: '使用说明', path: '/about' },
        { icon: 'work', text: '登出系统', path: '/logout' }
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
    mounted(){
      // this.saveposition();
    },
    methods: {
      redirect ( url ) {
        this.$router.push( url )
      },
      saveposition () {
        let nodes = this.$store.state.localStor;
        console.log(nodes)
        this.$http.post('http://127.0.0.1:3000/history',{position:nodes}).then(res=>{
          // var data = res.data;
          console.log(11)
        })
      },
      gettime(){
				 //将发送ajax请求服务器保存变量中 main.js
         //1:发送ajax请求
				this.$http.get("http://127.0.0.1:3000/dataroll").then(result=>{
					console.log(result);
	        //2:判断获取结果是否正确
					if(result.body.code == 1){
            //3:保存数据
						this.newslist = result.body.msg;
					}else{
            Toast("获取数据失败");
					}
				}); 
			 }
    }
  }
</script>

