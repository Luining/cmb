<template>
    <div :id='this.id' :style="idBackground">11111</div>
</template>

<script>


// var cy = cytoscape({
//   container: document.getElementById('cy'),
//   autounselectify: true,
//   style: [
//     {"selector":"core","style":
//       {"selection-box-color":"#AAD8FF","selection-box-border-color":"#8BB0D0","selection-box-opacity":"0.5"}
//     },
//     {"selector":"node","style":
//       {"width":"118px","height":"100px","content":"data(id)","font-size":"24px","text-valign":"center","text-halign":"center","background-color":"#555","text-outline-color":"#555","text-outline-width":"2px","color":"#fff","overlay-padding":"6px","z-index":"10"}
//     },
//     {"selector":"node[?attr]","style":
//       {"shape":"rectangle","background-color":"#aaa","text-outline-color":"#aaa","width":"16px","height":"16px","font-size":"6px","z-index":"1"}
//     },
//     {"selector":"node:selected","style":
//       {"border-width":"6px","border-color":"#AAD8FF","border-opacity":"0.5","background-color":"#77828C","text-outline-color":"#77828C"}
//     },
//     {"selector":"edge","style":
//       {"curve-style":"haystack","haystack-radius":"0","opacity":"0.4","line-color":"#bbb","width": "10px","overlay-padding":"3px"}
//     }
//   ],
//   elements: this.$store.state.elems,
//   layout: {
//         name: 'breadthfirst',
//         directed: true,
//         padding: 10
//   }
// });

// var nodes = this.$store.state.elems.nodes
// //recursively removing all children of the Start node (all nodes but the Start node will be removed)
// //递归地删除开始节点的所有子节点(所有节点但将删除开始节点)
// cy.$("#" + nodes[0].data.id).successors().targets().style("display", "none");

// //removes and restores nodes' children on click
// //在单击时删除和恢复节点的子节点
// cy.on('tap', 'node', function(){
//   //if the node's children have been hidden
//   //getting the element at 1 because the element at 0 is the node itself
//   //want to check if its children are hidden
//   //如果节点的子节点已经隐藏
//   //得到1处的元素，因为0处的元素就是节点本身
//   //想检查它的子对象是否隐藏
//   if (this.connectedEdges().targets()[1].style("display") == "none"){
//     //show the nodes and edges
//     //显示节点和边
//     this.connectedEdges().targets().style("display", "element");
//   } else {
//     //hide the children nodes and edges recursively
//     //递归地隐藏子节点和边
//     this.successors().targets().style("display", "none");
//   }
// });

// export default {
//   // data: () => ({
//   //   id:'netWorkId',
//   //   idBackground: {backgroundColor: "white", height: "650px"},
//   //   filter:0.5, //  edge数据展示的控制
//   //   clusterInfo:{},
//   //   networkData:{},
//   //   cy: {},
//   // }),
//   // methods:{
//   //   show(){
//   //     this.networkData = {nodes: NetWorkData.data.nodes, edges: NetWorkData.data.edges};
//   //     this.clusterInfo = NetWorkData.data.clusterInfo;
//   //     this.drawNetwork();
//   //   },
//   //   drawNetwork(){
//   //     var elements = this.formatCoexpression(this.filter)
//   //       this.cy = this.generateCyto(elements, this.id);
//   //       // 图注的添加。样式的设置是设置classes,位置的设置是position
//   //       this.cy.add([{
//   //             group: "nodes",
//   //             data: {id: 'legend1', name: 'Cluster1', width: 30},
//   //             position: {x: 50, y: 50},
//   //             classes: 'legend1',
//   //             locked: true,
//   //             grabbable: false,
//   //           },{
//   //             group: "nodes",
//   //             data: {id: 'legend2', name: 'Cluster2', width: 30},
//   //             position: {x: 50, y: 100},
//   //             classes: 'legend2',
//   //             locked: true,
//   //             grabbable: false,
//   //           }]);
//   //           // A panzoom UI widget
//   //     this.cy.panzoom({
//   //           zoomFactor: 0.05, // zoom factor per zoom tick
//   //           zoomDelay: 45, // how many ms between zoom ticks
//   //           minZoom: 0.1, // min zoom level
//   //           maxZoom: 10, // max zoom level
//   //           fitPadding: 50, // padding when fitting
//   //           panSpeed: 10, // how many ms in between pan ticks
//   //           panDistance: 10, // max pan distance per tick
//   //           panDragAreaSize: 75, // the length of the pan drag box in which the vector for panning is calculated (bigger = finer control of pan speed and direction)
//   //           panMinPercentSpeed: 0.25, // the slowest speed we can pan by (as a percent of panSpeed)
//   //           panInactiveArea: 8, // radius of inactive area in pan drag box
//   //           panIndicatorMinOpacity: 0.5, // min opacity of pan indicator (the draggable nib); scales from this to 1.0
//   //           zoomOnly: false, // a minimal version of the ui only with zooming (useful on systems with bad mousewheel resolution)
//   //           fitSelector: undefined, // selector of elements to fit
//   //           animateOnFit: function () { // whether to animate on fit
//   //             return false;
//   //           },
//   //           fitAnimationDuration: 1000, // duration of animation on fit

//   //           // icon class names
//   //           //sliderHandleIcon: 'fa fa-minus',
//   //           sliderHandleIcon: 'ivu-icon ivu-icon-ios-remove',
//   //           zoomInIcon: 'ivu-icon ivu-icon-ios-add',
//   //           //zoomOutIcon: 'fa fa-minus',
//   //           zoomOutIcon: 'ivu-icon ivu-icon-ios-remove"',
//   //           //resetIcon: 'fa fa-expand'
//   //           resetIcon: 'ivu-icon ivu-icon-ios-resize'
//   //         })
//   //   },
//   //   generateCyto(elements, containerId) {
//   //       return cytoscape({
//   //         container: document.getElementById(containerId),
//   //         style: cytoscape.stylesheet().selector('node').css({
//   //           'content': 'data(name)'
//   //         }).selector('node').css({
//   //           'height': 'data(width)',
//   //           'width': 'data(width)',
//   //           'text-halign': "center",
//   //           'text-valign': "center",
//   //           'font-size':'12px',
//   //           'text-opacity':1,
//   //           'background-fit': 'cover'
//   //         }).selector('node.cluster1').css({
//   //           'background-color': '#ff9f03',
//   //           'cursor': 'pointer'
//   //         }).selector('node.cluster2').css({
//   //           'background-color': '#0075b0',
//   //         }).selector('node.legend1').css({
//   //           'background-color': '#ff9f03',
//   //         }).selector('node.legend2').css({
//   //           'background-color': '#0075b0',
//   //         }).selector('node.positiveNodeSelect').css({
//   //           'background-color': '#00FF00'
//   //         }).selector('node.negativeNodeSelect').css({
//   //           'background-color': '#FF0000'
//   //         }).selector('edge').css({
//   //           'target-arrow-shape': 'none',
//   //           'curve-style': 'bezier',
//   //           'control-point-step-size': 20,
//   //           'line-color': '#B2B2B2',
//   //           'width': 'data(weight)'
//   //         }),
//   //         elements: elements,
//   //         layout: {
//   //           name: cose, // 算法的不同展示方法
//   //           padding: 20,
//   //           boundingBox: {x1: 0, y1: 0, w: 550, h: 650},
//   //           fit: true,
//   //         },
//   //         // zoomingEnabled:false,
//   //         zoom: 1,
//   //         minZoom: 0.5,
//   //         maxZoom: 2,
//   //         ready: function () {
//   //         }
//   //       })
        
//   //   },
//   //   formatCoexpression() {
//   //     let elements = [];
//   //     var tempObj = {}
//   //     // 对node的处理，包括复合节点的动态添加，就是下面父节点和子节点的代码片段
//   //     if (this.networkData.nodes[0].node_number) {//自己加的判断，没有用可以删除
//   //       this.networkData.nodes.forEach(item => {
//   //         tempObj = {
//   //           id: item["id"],
//   //           name: item["name"],
//   //           cluster: item["cluster"],
//   //           node_number: item["node_number"],
//   //           width: item["node_number"] / 5,
//   //         }
//   //         elements.push({
//   //           data: tempObj,
//   //           classes: "cluster" + item["cluster"]
//   //         })
//   //       })
//   //     } else {
//   //       //父节点
//   //       this.clusterInfo.forEach(clusterItem=>{
//   //         tempObj = {
//   //           id: `cluster${clusterItem}`,
//   //           name: clusterNameMap[clusterItem],
//   //           width: 30,
//   //           height: 50
//   //         }
//   //         elements.push({
//   //           data: tempObj,
//   //           classes: "clusterParent" + clusterItem
//   //         })
//   //       });
//   //       //子节点
//   //       this.networkData.nodes.forEach(item => {
//   //         tempObj = {
//   //           id: item["id"],
//   //           name: item["name"],
//   //           //cluster: item["cluster"],
//   //           parent: `cluster${item["cluster"]}`,
//   //           width: 30
//   //         };
//   //         elements.push({
//   //           data: tempObj,
//   //           classes: "cluster" + item["cluster"]
//   //         })
//   //       })
//   //     }
//   //     // 对edge的处理，根据filter控制线显示的数据多少。
//   //     this.networkData.edges.forEach(item => {
//   //       let tempObj = {
//   //         id: item["source"] + "_" + item["target"],
//   //         source: item["source"],
//   //         target: item["target"],
//   //         weight: item["edge_weight"] * 2,
//   //         edgeWeight: item['edge_weight'],
//   //       }
//   //       if (item["edge_weight"] > this.filter) {
//   //         elements.push({
//   //           data: tempObj,
//   //           //classes:"cluster"+item["cluster"]
//   //         })
//   //       }
//   //     })
//   //     return elements
//   //   }
//   // },
//   // created(){
//   //   this.show();
//   //   // this.drawNetwork();
//   //   // this.generateCyto(elements, containerId);
//   //   this.formatCoexpression();
//   // }
// }
</script>

<style>

</style>
