webpackJsonp([1],{"9M+g":function(e,t){},G7Fb:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("/5sW"),l=s("T2eB"),n={components:{Carousel3d:l.Carousel3d,Slide:l.Slide},props:{slides:{type:Array,default:function(){return[]}},isAtlasSelected:Boolean,selectedChannel:String},mounted:function(){var e=this;window.addEventListener("keyup",function(t){39==t.keyCode&&e.$refs.carousel.goNext(),37==t.keyCode&&e.$refs.carousel.goPrev()});var t=document.createElement("p");t.setAttribute("id","rostralLabel"),t.setAttribute("style","position: absolute; z-index: 1000; top: 65px; left: 10px;"),t.innerHTML="Rostral";var s=document.createElement("p");s.setAttribute("id","caudalLabel"),s.setAttribute("style","position: absolute; z-index: 1000; top: 65px; right: 10px"),s.innerHTML="Caudal",document.getElementsByClassName("carousel-3d-controls")[0].appendChild(t),document.getElementsByClassName("carousel-3d-controls")[0].appendChild(s)},computed:{currentSection:function(){}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-10",attrs:{id:"carousel"}},[s("carousel-3d",{ref:"carousel",attrs:{count:e.slides.length,border:0,perspective:0,"controls-visible":!0,"controls-prev-html":"&#10092;","controls-next-html":"&#10093;",width:1e3,height:700,display:1,inverseScaling:0,loop:!1}},e._l(e.slides,function(t,a){return s("slide",{attrs:{index:a}},[s("img",{staticClass:"carousel-image atlas",class:{activeLayer:e.isAtlasSelected},attrs:{src:t.atlasHref}}),e._v(" "),s("img",{staticClass:"carousel-image",class:{activeLayer:"1"==e.selectedChannel},attrs:{src:t.purpleHref}}),e._v(" "),s("img",{staticClass:"carousel-image",class:{activeLayer:"2"==e.selectedChannel},attrs:{src:t.greenHref}}),e._v(" "),s("img",{staticClass:"carousel-image",class:{activeLayer:"3"==e.selectedChannel},attrs:{src:t.blueHref}}),e._v(" "),s("img",{staticClass:"carousel-image",class:{activeLayer:"4"==e.selectedChannel},attrs:{src:t.redHref}}),e._v(" "),s("figcaption",{staticClass:"figcaption"},[e._v("Section "+e._s(t.section))])])}),1)],1)},staticRenderFns:[]};var i=s("VU/8")(n,c,!1,function(e){s("VceN")},"data-v-51bf4a42",null).exports,r=s("ZTUR"),d=s.n(r),o={name:"app",components:{Carousel:i},methods:{selectOnlyThis:function(e){this.selectedChannels=[];for(var t=1;t<=4;t++)document.getElementById("ch"+t).checked=!1;document.getElementById("ch"+e).checked=!0,this.selectedChannels.push(e)}},data:function(){return{images:d.a,selectedChannel:"1",isAtlasSelected:!0}}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container-fluid vh-100",attrs:{id:"app"}},[s("div",{staticClass:"row vh-100"},[s("div",{staticClass:"col-2 toggle-menu"},[s("p",{attrs:{id:"sidebarTitle"}},[e._v("Channel")]),e._v(" "),s("div",{attrs:{id:"toggles"}},[s("div",{staticClass:"channel",attrs:{id:"atlas"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.isAtlasSelected,expression:"isAtlasSelected"}],attrs:{type:"checkbox",id:"ch0"},domProps:{checked:Array.isArray(e.isAtlasSelected)?e._i(e.isAtlasSelected,null)>-1:e.isAtlasSelected},on:{change:function(t){var s=e.isAtlasSelected,a=t.target,l=!!a.checked;if(Array.isArray(s)){var n=e._i(s,null);a.checked?n<0&&(e.isAtlasSelected=s.concat([null])):n>-1&&(e.isAtlasSelected=s.slice(0,n).concat(s.slice(n+1)))}else e.isAtlasSelected=l}}}),e._v(" "),s("label",{attrs:{for:"atlas"}},[e._v("Atlas")])]),e._v(" "),s("div",{staticClass:"channel",attrs:{id:"neun"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedChannel,expression:"selectedChannel"}],attrs:{type:"radio",id:"ch1",value:"1"},domProps:{checked:e._q(e.selectedChannel,"1")},on:{change:function(t){e.selectedChannel="1"}}}),e._v(" "),s("label",{attrs:{for:"neun"}},[e._v("NeuN")])]),e._v(" "),s("div",{staticClass:"channel",attrs:{id:"th"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedChannel,expression:"selectedChannel"}],attrs:{type:"radio",id:"ch2",value:"2"},domProps:{checked:e._q(e.selectedChannel,"2")},on:{change:function(t){e.selectedChannel="2"}}}),e._v(" "),s("label",{attrs:{for:"th"}},[e._v("Tyrosine Hydroxylase")])]),e._v(" "),s("div",{staticClass:"channel",attrs:{id:"nissl"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedChannel,expression:"selectedChannel"}],attrs:{type:"radio",id:"ch3",value:"3"},domProps:{checked:e._q(e.selectedChannel,"3")},on:{change:function(t){e.selectedChannel="3"}}}),e._v(" "),s("label",{attrs:{for:"nissl"}},[e._v("NISSL")])]),e._v(" "),s("div",{staticClass:"channel",attrs:{id:"ca"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedChannel,expression:"selectedChannel"}],attrs:{type:"radio",id:"ch4",value:"4"},domProps:{checked:e._q(e.selectedChannel,"4")},on:{change:function(t){e.selectedChannel="4"}}}),e._v(" "),s("label",{attrs:{for:"ca"}},[e._v("Choline Acetyltransferase")])])])]),e._v(" "),s("carousel",{attrs:{slides:e.images,isAtlasSelected:e.isAtlasSelected,selectedChannel:e.selectedChannel}})],1)])},staticRenderFns:[]};var p=s("VU/8")(o,u,!1,function(e){s("G7Fb")},null,null).exports,h=s("Tqaz");s("Jmt5"),s("9M+g");a.default.use(h.a),a.default.config.productionTip=!1,new a.default({el:"#app",render:function(e){return e(p)}})},VceN:function(e,t){},ZTUR:function(e,t){e.exports=[{section:245,atlasHref:"static/245_L3_atlas.png",purpleHref:"static/245_L3_NeuN.jpg",greenHref:"static/245_L3_TH.jpg",blueHref:"static/245_L3_nissl.jpg",redHref:"static/245_L3_ChAT.jpg"},{section:263,atlasHref:"static/263_L4_atlas.png",purpleHref:"static/263_L4_NeuN.jpg",greenHref:"static/263_L4_TH.jpg",blueHref:"static/263_L4_nissl.jpg",redHref:"static/263_L4_ChAT.jpg"}]}},["NHnr"]);
//# sourceMappingURL=home.f21aa3c916e8f78aedec.js.map