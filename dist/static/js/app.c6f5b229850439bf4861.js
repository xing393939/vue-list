webpackJsonp([1,0],[function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var o=i(3),n=s(o),a=i(6),l=s(a);new n.default({el:"#app",template:"<App/>",components:{App:l.default}})},function(t,e){},function(t,e){},,function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(7),n=s(o);window.COUNT=1,e.default={name:"app",data:function(){return{list:[],data:{}}},created:function(){for(var t=0;t<200;t++)this.list.push({title:"item "+COUNT++})},methods:{setData:function(t){this.data=t}},components:{vueList:n.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vue-list",props:{list:{type:Array,required:!0,default:[],twoWays:!0},height:{type:Number,default:44},canScroll:{type:Boolean,default:!0},dispatchData:{type:Function}},data:function(){return{lastScrollTop:null,distance:44,lineTopHeight:0,lineBottomHeight:0,canLoadmore:!0,previewList:[],displayCount:0}},mounted:function(){this.initData(),this.handleScroll()},methods:{initData:function(){this._rowsInWindow=Math.ceil(this.$el.offsetHeight/this.height),this._above=2*this._rowsInWindow,this._below=this._rowsInWindow,this._max=this._rowsInWindow*this.height},handleScroll:function(){var t=this,e=this.$el.scrollTop,i=this.$el.querySelectorAll("ul")[0].offsetHeight,s=this.$el.offsetHeight;if(e/this.height-Math.floor(e/this.height)>.5?this.displayCount=Math.ceil(e/this.height):this.displayCount=Math.floor(e/this.height),!(null===this.lastScrollTop||Math.abs(e-this.lastScrollTop)>this._max))return void(this.to===this.list.length&&i-e-s<this.distance&&this.canScroll&&this.loadmore(this.from,this.to));this.lastScrollTop=e;var o=parseInt(e/this.height)-this._above;o<0&&(o=0);var n=o+this._above+this._below+this._rowsInWindow;n>this.list.length&&(n=this.list.length),this.from=o,this.to=n,this.lineTopHeight=o*this.height,this.lineBottomHeight=(this.list.length-n)*this.height,"function"==typeof this.dispatchData&&this.dispatchData(this),this.resetPreviewList(o,n),this.$nextTick(function(){var e=t.$el.scrollTop,i=t.$el.querySelectorAll("ul")[0].offsetHeight,s=t.$el.offsetHeight;n===t.list.length&&i-e-s<0&&t.canScroll&&t.loadmore(t.from,t.to)})},loadmore:function(t,e){var i=this;this.canLoadmore&&(this.canLoadmore=!1,setTimeout(function(){for(var s=0;s<200;s++)i.list.push({title:"item "+COUNT++});var o=t,n=e+i._below;i.resetPreviewList(o,n),i.lineBottomHeight=(i.list.length-n)*i.height,i.handleScroll(),i.canLoadmore=!0},2e3))},resetPreviewList:function(t,e){for(this.previewList=[];t<e;t++)this.previewList.push(this.list[t])}},components:{}}},function(t,e,i){var s,o;i(2),s=i(4);var n=i(9);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=n.render,o.staticRenderFns=n.staticRenderFns,t.exports=s},function(t,e,i){var s,o;i(1),s=i(5);var n=i(8);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=n.render,o.staticRenderFns=n.staticRenderFns,t.exports=s},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue-list",on:{scroll:t.handleScroll}},[i("ul",[i("li",{staticClass:"line-top",style:{height:t.lineTopHeight+"px"}}),t._v(" "),t._l(t.previewList,function(e){return i("li",[t._v(t._s(e.title))])}),t._v(" "),i("li",{staticClass:"line-bottom",style:{height:t.lineBottomHeight+"px"}})],2),t._v(" "),i("div",{staticClass:"load-more-gif"},[t._v("loading...")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"preview"},[i("div",{staticClass:"setting"},[i("p",[t._v("Total items: "),i("span",[t._v(t._s(t.list.length))])]),t._v(" "),i("p",[t._v("Item height: "),i("span",[t._v(t._s(t.data.height)+"px")])]),t._v(" "),i("p",[t._v("Above items: "),i("span",[t._v(t._s(t.data._above))])]),t._v(" "),i("p",[t._v("Below items: "),i("span",[t._v(t._s(t.data._below))])]),t._v(" "),i("p",[t._v("Rows in window: "),i("span",[t._v(t._s(t.data.displayCount+1)+"-"+t._s(t.data.displayCount+t.data._rowsInWindow>t.list.length?t.list.length:t.data.displayCount+t.data._rowsInWindow))])]),t._v(" "),i("p",[i("span",[t._v(t._s(4*t.data._rowsInWindow))]),t._v(" items from "),i("span",[t._v(t._s(t.data.from))]),t._v(" to "),i("span",[t._v(t._s(t.data.to))])]),t._v(" "),i("p",[t._v("Top height: "),i("span",[t._v(t._s(t.data.lineTopHeight)+"px")])]),t._v(" "),i("p",[t._v("Bottom Height: "),i("span",[t._v(t._s(t.data.lineBottomHeight)+"px")])]),t._v(" "),i("p",[t._v("Will load more items: "),i("span",[t._v(t._s(!t.data.canLoadmore))])])]),t._v(" "),i("div",{staticClass:"preview-content"},[i("vue-list",{attrs:{list:t.list,dispatchData:t.setData},on:{"update:list":function(e){t.list=e}}})],1)])])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.c6f5b229850439bf4861.js.map