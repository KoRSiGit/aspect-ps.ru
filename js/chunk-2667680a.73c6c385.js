(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2667680a"],{"1cd8":function(e,t,a){e.exports=a.p+"img/3.d5ed0e5c.jpg"},"45a1":function(e,t,a){},"5f9c":function(e,t,a){e.exports=a.p+"img/4.d5ed0e5c.jpg"},6633:function(e,t,a){"use strict";a("45a1")},b276:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),a("Slider"),a("About"),a("Service"),a("div",{staticClass:"waxon_tm_portoflio",attrs:{id:"portfolio"}},[a("Portfolio")],1),a("Testimonial"),a("div",{staticClass:"waxon_tm_news",attrs:{id:"news"}},[a("div",{staticClass:"container"},[e._m(0),a("News")],1)]),a("div",{staticClass:"waxon_tm_contact",attrs:{id:"contact"}},[a("div",{staticClass:"bg_image"}),a("div",{staticClass:"container"},[a("div",{staticClass:"contact_inner"},[a("div",{staticClass:"waxon_tm_main_title"},[a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:20,distance:"20px"},expression:"{ delay: 20, distance: '20px' }"}],staticClass:"title"},[e._m(1)])]),a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:30,distance:"20px"},expression:"{ delay: 30, distance: '20px' }"}],staticClass:"desc"},[a("p",[e._v(" Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday ")])]),a("div",{staticClass:"wrapper"},[a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:40},expression:"{ delay: 40 }"}],staticClass:"left"},[a("Contact")],1),a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:60},expression:"{ delay: 60 }"}],staticClass:"right"},[a("Map")],1)])])])]),a("Footer")],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"waxon_tm_main_title"},[a("div",{staticClass:"title"},[a("h3",[e._v("Latest News"),a("span",{staticClass:"bg"},[e._v("News")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[e._v("Get in Touch"),a("span",{staticClass:"bg"},[e._v("Contact")])])}],r=a("0418"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"AppSlider"},[a("div",{staticClass:"waxon_tm_hero",attrs:{id:"home"}},[a("div",{staticClass:"background"},[a("div",{staticClass:"leftpart"}),a("div",{staticClass:"rightpart"},[a("div",{staticClass:"inner"},[a("transition-group",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:e.next,expression:"next",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.left",value:e.prev,expression:"prev",arg:"swipe",modifiers:{left:!0}}],staticClass:"AppSlider__slides",style:{paddingBottom:e.aspectRatio+"%"},attrs:{duration:1e3,tag:"div","enter-active-class":"AppSlider__enterActive","enter-class":"AppSlider__enter","leave-active-class":"AppSlider__leaveActive","leave-to-class":"AppSlider__leaveTo"},on:{mouseenter:function(t){e.paused=!0},mouseleave:function(t){e.paused=!1}}},e._l(e.images,(function(t,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.activeIndex===s,expression:"activeIndex === i"}],key:s,staticClass:"image AppSlider__image",style:{backgroundImage:"url("+t.src+")"}})})),0),a("div",{staticClass:"overlay_image"}),a("div",{staticClass:"myOverlay"})],1)])]),a("div",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content_inner"},[a("div",{staticClass:"name"},[a("h3",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:1e3},expression:"{ delay: 1000 }"}],staticClass:"stroke"},[e._v(" Bernard ")]),a("h3",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:1050},expression:"{ delay: 1050 }"}]},[e._v("Sydney")]),a("span",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:1100},expression:"{ delay: 1100 }"}]},[e._v("Creative Web & App Developer")])])]),e._m(0)])])])])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"waxon_tm_down",attrs:{"data-skin":"dark","data-position":""}},[a("div",{staticClass:"line_wrapper"},[a("div",{staticClass:"line"})])])}],c=(a("a9e3"),{name:"AppSlider",props:{height:{default:950,type:Number},interval:{default:1e4,type:Number},width:{default:1280,type:Number}},data:function(){return{activeIndex:0,paused:!1,time:this.interval,images:[{src:a("1cd8")},{src:a("fec6")},{src:a("5f9c")}]}},computed:{aspectRatio:function(){return this.height/this.width*100}},created:function(){this.startInterval()},methods:{goToIndex:function(e){this.activeIndex=e,this.time=this.interval},next:function(){var e=this.activeIndex+1;this.images[e]||(e=0),this.goToIndex(e)},prev:function(){var e=this.activeIndex-1;this.images[e]||(e=this.images.length-1),this.goToIndex(e)},startInterval:function(){var e=this,t=100,a=setInterval((function(){e.paused||(e.time-=t),e.time<=0&&e.next()}),t);this.$once("hook:destroyed",(function(){return clearInterval(a)}))}}}),o=c,d=(a("6633"),a("2877")),v=Object(d["a"])(o,n,l,!1,null,null,null),p=v.exports,u=a("06ff"),m=a("35ce"),_=a("7572"),h=a("335f"),f=a("dea1"),w=a("371a"),x=a("a0be"),C=a("fd2d"),g={components:{Header:r["a"],Slider:p,About:u["a"],Service:m["a"],Portfolio:_["a"],Testimonial:h["a"],News:f["a"],Contact:w["a"],Map:x["a"],Footer:C["a"]}},y=g,b=Object(d["a"])(y,s,i,!1,null,"c2867b28",null);t["default"]=b.exports},fec6:function(e,t,a){e.exports=a.p+"img/1.190d5a89.jpg"}}]);
//# sourceMappingURL=chunk-2667680a.73c6c385.js.map