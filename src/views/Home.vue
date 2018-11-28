<template>
  <div id="cy"></div>
</template>

<script>
  import "@/lib/cy/css/style.css"

  export default {
    data: () => ({
      updataelems:{},
    }),
    methods: {
      redirect ( url ) {
        this.$router.push( url );
      }
    },
    mounted(){
      var cy = this.$cy({
        container: document.getElementById('cy'),
        autounselectify: true,
        style: [
          {"selector":"core","style":
            {"selection-box-color":"#AAD8FF","selection-box-border-color":"#8BB0D0","selection-box-opacity":"0.5"}
          },
          {"selector":"node","style":
            {"width":"118px","height":"100px","content":"data(id)","font-size":"24px","text-valign":"center","text-halign":"center","background-color":"#555","text-outline-color":"#555","text-outline-width":"2px","color":"#fff","overlay-padding":"6px","z-index":"10"}
          },
          {"selector":"node[?attr]","style":
            {"shape":"rectangle","background-color":"#aaa","text-outline-color":"#aaa","width":"16px","height":"16px","font-size":"6px","z-index":"1"}
          },
          {"selector":"node:selected","style":
            {"border-width":"6px","border-color":"#AAD8FF","border-opacity":"0.5","background-color":"#77828C","text-outline-color":"#77828C"}
          },
          {"selector":"edge","style":
            {"curve-style":"haystack","haystack-radius":"0","opacity":"0.4","line-color":"#bbb","width": "10px","overlay-padding":"3px"}
          }
        ],
        elements: this.$store.state.elems,
        layout: {
              name: 'circle',
              directed: true,
              padding: 10
        }
      });

      cy.on('tap', 'node', function(){
        if (this.connectedEdges().targets()[1].style("display") == "none"){
          this.connectedEdges().targets().style("display", "element");
          console.log(this.connectedEdges().targets())
        } else {
          this.successors().targets().style("display", "none");
        }
      });
      
      let localStor = JSON.parse(localStorage.getItem('posArr')) || []

      cy.nodes().positions((node,i)=>{
        for(let j=0; j<localStor.length; j++){
          if(i === j){
            return {
              x:localStor[j].x,
              y:localStor[j].y
            }
          }
        };
        !localStor.length && localStor.push(node.position())
      });

      cy.on('mouseup','node',function(evt){
        var node = evt.target
        localStor = []
        cy.nodes().positions((node)=>{
          localStor.push(node.position())
        });
        localStorage.setItem('posArr',JSON.stringify(localStor))
      });
    }
  }
</script>

<style scoped>
  #btn{
        width: 100px;
        float:left;
        margin-top:500px;
        margin-right: 200px;
        position: fixed;
        Z-index:9999;
    }
    #display{
        width: 100px;
        float:left;
        margin-top:500px;
        margin-right: 200px;
        position: absolute;
        left:200px;
        Z-index:9999;
    }
</style>
