webpackJsonp([0],{100:function(t,e,i){var s=i(88);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(60)("7f7a03d3",s,!0,{})},104:function(t,e,i){var s=i(92);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(60)("4bfb7bc1",s,!0,{})},108:function(t,e,i){function s(t){i(97)}var n=i(3)(i(75),i(114),s,"data-v-72917189",null);t.exports=n.exports},109:function(t,e,i){function s(t){i(100)}var n=i(3)(i(78),i(117),s,"data-v-8d835f3c",null);t.exports=n.exports},110:function(t,e,i){function s(t){i(104)}var n=i(3)(i(79),i(121),s,"data-v-c7cb1802",null);t.exports=n.exports},111:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"main"}},[i("div",{staticClass:"main_fixed_top"},[t._m(0),t._v(" "),i("div",{staticClass:"job_nav"},[i("ul",{staticClass:"flex_parent"},t._l(t.navlist,function(e,s){return i("li",{key:s,staticClass:"flex_child",class:{selected:e.isSelected},on:{click:function(i){return t.changeColor(e,s)}}},[t._v("\n                 "+t._s(e.title)),i("span",{staticClass:"icon-down"})])}),0),t._v(" "),i("keep-alive",[0==t.slideIndex?i("slideTabComp",{directives:[{name:"show",rawName:"v-show",value:t.navlist[0].isSelected,expression:"navlist[0].isSelected"}],attrs:{slideTemp:t.slideTemp},on:{toParent:t.fromChild,hide:t.hide}}):1==t.slideIndex?i("selectCityComp",{directives:[{name:"show",rawName:"v-show",value:t.navlist[1].isSelected,expression:"navlist[1].isSelected"}],on:{hide:t.hide}}):2==t.slideIndex?i("compRequireComp",{directives:[{name:"show",rawName:"v-show",value:t.navlist[2].isSelected,expression:"navlist[2].isSelected"}],attrs:{indexArr:t.indexArr[0],slideTemp:t.slideTemp},on:{hide:t.hide}}):t._e(),t._v(" "),i("compRequireComp",{directives:[{name:"show",rawName:"v-show",value:t.navlist[3].isSelected,expression:"navlist[3].isSelected"}],attrs:{else:"slideIndex==3",indexArr:t.indexArr[1],slideTemp:t.slideTemp},on:{hide:t.hide}})],1)],1)]),t._v(" "),i("div",{ref:"wrapper",staticClass:"job_content",attrs:{id:"jobcontent"}},[i("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"page-infinite-list job_lists",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"50"}},t._l(t.jobs,function(e,s){return i("li",{key:s},[i("router-link",{attrs:{to:{name:"detail",params:{jobId:e.id}}},on:{click:function(i){return t.changeDetialId(e)}}},[i("h4",{staticClass:"clear"},[t._v(t._s(e.need_job)),i("span",{staticClass:"inforight"},[t._v(t._s(e.job_money))])]),t._v(" "),i("p",{staticClass:"clear"},[i("span"),t._v(t._s(e.conmpany))]),t._v(" "),i("p",{staticClass:"clear"},[i("span",{staticClass:"icon-position"}),i("span",[t._v(t._s(e.con_place))]),t._v(" "),i("span",{staticClass:"icon-seniority"}),i("span",[t._v(t._s(e.seniority))]),t._v(" "),i("span",{staticClass:"icon-education"}),i("span",[t._v(t._s(e.education))])]),t._v(" "),i("p",{staticClass:"clear title"},[i("img",{staticClass:"infoleft",attrs:{src:e.src,alt:""}}),t._v(" "),i("span",{staticClass:"infoleft"},[t._v(t._s(e.ceo))]),t._v(" "),i("span",{staticClass:"infoleft"},[t._v(t._s(e.title))])])])],1)}),0),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"page-infinite-loading"},[i("mt-spinner",{attrs:{type:"fading-circle"}}),t._v("客官您滑慢点...\n        ")],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"job_header clear"},[i("div",{staticClass:"job_header_left"},[i("span",[t._v("web前端")]),t._v(" "),i("span",[t._v("HTML5")])]),t._v(" "),i("div",{staticClass:"inforight job_header_icon"},[i("span",[i("i",{staticClass:"iconfont icon-jiahao"})]),t._v(" "),i("b"),t._v(" "),i("span",[i("i",{staticClass:"iconfont icon-sousuo"})])])])}]}},114:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"same_mask"},[i("div",{staticClass:"slide_sametab"},t._l(t.slideTemp,function(e,s){return i("div",{key:s,staticClass:"same_list"},[i("p",[t._v(t._s(e.title))]),t._v(" "),i("ul",t._l(e.list,function(n,a){return i("li",{key:a,class:{actived:t.checkOut(s,a)},on:{click:function(i){return t.addClass(e,s,a)}}},[t._v(t._s(n))])}),0)])}),0),t._v(" "),i("ul",{staticClass:"reset_city flex_parent"},[i("li",{staticClass:"flex_child",on:{click:t.resetSelect}},[t._v("重置")]),t._v(" "),i("li",{staticClass:"flex_child on",on:{click:t.hide}},[t._v("确定 "+t._s(t._f("filterZero")(t.viewCount)))])]),t._v(" "),i("div",{staticClass:"mask",attrs:{id:"mask"},on:{click:t.hide}})])},staticRenderFns:[]}},117:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide_tab"},[i("div",{staticClass:"tab_box"},[i("ul",{staticClass:"tab_bar flex_parent"},t._l(t.tabbar,function(e,s){return i("li",{key:s,staticClass:"flex_child",class:{on:e.isSelected},on:{click:function(i){return t.toggleSelect(e,s)}}},[i("i",{staticClass:"iconfont",class:e.iconClass}),t._v(t._s(e.title)+"\n      ")])}),0),t._v(" "),i("div",{staticClass:"tab_list_box"},t._l(t.tabbar,function(e,s){return i("div",{directives:[{name:"show",rawName:"v-show",value:e.isSelected,expression:"nav.isSelected"}],key:s,staticClass:"tab_list"},[i("div",{staticClass:"tab_position"},[i("div",{staticClass:"tab_position_left"},t._l(e.places,function(e,n){return i("p",{key:n,class:{on:e.isOn},on:{click:function(i){return t.toggleClass(e,s,n)}}},[t._v(t._s(e.name))])}),0),t._v(" "),i("div",{staticClass:"tab_position_right"},t._l(t.tempList,function(e,s){return i("p",{key:s,class:{ishad:e.isHad},attrs:{"data-id":e.pfid},on:{click:function(i){return t.toggleChange(e,s)}}},[i("span",[t._v(t._s(e.road))]),i("i",{staticClass:"iconfont icon-correct"})])}),0)])])}),0),t._v(" "),i("ul",{staticClass:"reset_city flex_parent"},[i("li",{staticClass:"flex_child",on:{click:t.resetSelect}},[t._v("重置")]),t._v(" "),i("li",{staticClass:"flex_child on",on:{click:t.hide}},[t._v("确定 "+t._s(t._f("filterZero")(t.viewCount)))])]),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"mask",attrs:{id:"mask"},on:{click:t.hide}})])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"toggle_cities"},[i("p",[i("i",{staticClass:"icon-position"}),t._v("切换城市")])])}]}},121:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide_tab"},[i("ul",{staticClass:"slide_one"},t._l(t.slideTemp,function(e,s){return i("li",{key:s,class:{selected:e.hadSelested},on:{click:function(i){return t.toggleSelected(e,s)}}},[i("span",[t._v(t._s(e.name))]),i("i",{staticClass:"iconfont icon-correct"})])}),0),t._v(" "),i("div",{staticClass:"mask",attrs:{id:"mask"},on:{click:t.hide}})])},staticRenderFns:[]}},66:function(t,e,i){function s(t){i(94)}var n=i(3)(i(77),i(111),s,"data-v-03cef4df",null);t.exports=n.exports},75:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"slide",props:{slideTemp:{type:Array,default:[]},indexArr:{type:Array}},data:function(){return{viewNum:[0,0],viewCount:0}},filters:{filterZero:function(t){return 0==t?"":t}},watch:{},computed:{},methods:{resetSelect:function(){for(var t=0;t<this.indexArr.length;t++)-1==this.indexArr[t].indexOf(0)&&(this.indexArr[t].splice(0,this.indexArr[t].length),this.indexArr[t].push(0))},checkOut:function(t,e){return-1!=this.indexArr[t].indexOf(e)},addClass:function(t,e,i){if(t.isCheckbox)if(0!=i){if(-1!=this.indexArr[e].indexOf(0)&&this.indexArr[e].splice(0,1),-1!=this.indexArr[e].indexOf(i)){var s=this.indexArr[e].indexOf(i);this.indexArr[e].splice(s,1)}else this.indexArr[e].push(i);var n=this.indexArr[e].length;0==n&&this.indexArr[e].push(0)}else{var a=this.indexArr[e].length;this.indexArr[e].splice(0,a),this.indexArr[e].push(i)}else{var l=this.indexArr[e].length;-1==this.indexArr[e].indexOf(i)&&(this.indexArr[e].splice(0,l),this.indexArr[e].push(i))}},hide:function(){this.$emit("hide")},cantScroll:function(){document.getElementById("mask").addEventListener("touchmove",function(t){t.preventDefault()})}},mounted:function(){this.cantScroll()},created:function(){}}},77:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(110),n=i.n(s),a=i(109),l=i.n(a),o=i(108),c=i.n(o);e.default={data:function(){return{navlist:[{title:"推荐",isSelected:!1},{title:"上海",isSelected:!1},{title:"公司",isSelected:!1},{title:"要求",isSelected:!1}],slideIndex:"",isShowSlide:!1,slideTemp:[],indexArr:[[[0],[0],[0]],[[0],[0],[0]]],slideData:[[{name:"推荐",hadSelested:!0},{name:"最新",hadSelested:!1}],[0,1],[{title:"融资规模",isCheckbox:!0,list:["全部","未融资","天使轮","A轮","B轮","C轮","D轮及以上","已上市","不需要融资"]},{title:"团队规模",isCheckbox:!0,list:["全部","0-20人","20-99人","100-499人","500-999人","1000-9999人","10000人以上"]},{title:"行业",isCheckbox:!0,list:["全部","非互联网行业","健康医疗","生活服务","旅游","金融","信息安全","广告营销","数据服务","智能硬件","文化娱乐","网络招聘","分类信息","电子商务","移动互联网","企业服务","社交网络","教育培训","O2O","游戏","互联网","媒体","IT软件"]}],[{title:"最低学历",isCheckbox:!0,list:["全部","中专及以下","高中","大专","本科","硕士","博士"]},{title:"经验",isCheckbox:!0,list:["全部","应届生","1年以内","1-3年","3-5年","5-10年","10年以上"]},{title:"薪资(单选)",isCheckbox:!1,list:["全部","3k以下","3k-5k","5k-10k","10k-20k","20k-50k","50k以上"]}]],willshow:!1,timer:null,mainscroll:null,apiUrl:"",jobs:[],temp:[],jobId:"",loading:!1,allLoaded:!1,wrapperHeight:0}},components:{slideTabComp:n.a,selectCityComp:l.a,compRequireComp:c.a},computed:{},methods:{fromChild:function(t){this.navlist[0].title=t},hide:function(){this.navlist.filter(function(t){t.isSelected=!1})},changeColor:function(t,e){this.slideIndex=e,this.slideTemp=this.slideData[e],t.isSelected?t.isSelected=!1:(this.navlist.filter(function(t){t.isSelected=!1}),t.isSelected=!0)},willscroll:function(){var t=this;window.scrollTime&&window.clearTimeout(window.scrollTime),window.scrollTime=window.setTimeout(function(){var e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;t.willshow=e>300},100)},gotop:function(){var t=this;this.willshow=!this.willshow;var e=document.documentElement,i=document.body;this.timer=window.setInterval(function(){e.scrollTop-=Math.ceil(.1*(e.scrollTop+i.scrollTop)),i.scrollTop-=Math.ceil(.1*(e.scrollTop+i.scrollTop)),e.scrollTop+i.scrollTop===0&&clearInterval(t.timer,window.onscroll=t.willscroll)},10)},loadData:function(){var t=this;this.$http.get(t.apiUrl).then(function(e){"0"==e.data.code&&(t.jobs=e.data.main,t.temp=e.data.main)}).catch(function(t){console.log(t)})},loadMore:function(){var t=this;this.loading=!0,setTimeout(function(){t.jobs=t.jobs.concat(t.temp),t.loading=!1},2500)},initApiUrl:function(){var t="http://"+window.location.host+"/";this.apiUrl=t+"static/data/joblist.json"},stopScroll:function(){document.getElementById("jobcontent").addEventListener("touchmove",function(t){t.preventDefault()},!1)},removeStopScroll:function(){document.getElementById("jobcontent").removeEventListener("touchmove",function(t){t.preventDefault()},!1)}},mounted:function(){this.wrapperHeight=document.documentElement.clientHeight-this.$refs.wrapper.getBoundingClientRect().top},created:function(){this.initApiUrl(),this.$nextTick(function(){this.loadData()})}}},78:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"slide",data:function(){return{apiUrl:"",tabbar:[],tempList:[{pfid:"1",road:"全上海",isHad:!1}],tempOne:[{index:"",count:0},{index:"",count:0}],domIndex:0,viewCount:""}},watch:{},computed:{},filters:{filterZero:function(t){return 0==t?"":t}},methods:{resetSelect:function(){for(var t=this,e=this.tabbar,i=0;i<e.length;i++){for(var s=e[i].places,n=0;n<s.length;n++){s[n].isOn=!1;for(var a=s[n].list,l=0;l<a.length;l++)a[l].isHad=!1}s[0].isOn=!0,this.tempOne[i].index="",this.tempList=[{pfid:"1",road:"全上海",isHad:!1}]}document.getElementsByClassName("tab_position_left")[this.domIndex].scrollTop=0,t.tempOne.filter(function(t){t.count=0}),t.viewCount=0},hide:function(){this.$emit("hide")},cantScroll:function(){document.getElementById("mask").addEventListener("touchmove",function(t){t.preventDefault()})},initApiUrl:function(){var t="http://"+window.location.host+"/";this.apiUrl=t+"static/data/city.json"},getData:function(){var t=this;t.$http.get(t.apiUrl).then(function(e){"0"==e.data.code&&(t.tabbar=e.data.data)}).catch(function(t){console.log(t)})},toggleSelect:function(t,e){var i=this;i.viewCount=i.tempOne[e].count,i.domIndex=e;var s=i.tempOne[e].index,n=i.tabbar[e].places;t.isSelected||(this.tabbar.filter(function(t){t.isSelected=!1}),t.isSelected=!0,i.tempList=s?n[s].list:n[0].list)},toggleClass:function(t,e,i){var s=this;s.tempList.filter(function(t){t.isHad=!1}),s.tempOne[s.domIndex].count=0,s.viewCount=0;var n=s.tabbar[e].places;t.isOn||(n.filter(function(t){t.isOn=!1}),t.isOn=!0,s.tempList=n[i].list,s.tempOne[e].index=i)},toggleChange:function(t,e){var i=this;0!==e?(i.tempList[0].isHad=!1,t.isHad=!t.isHad,t.isHad?i.tempOne[i.domIndex].count++:i.tempOne[i.domIndex].count--,i.viewCount=i.tempOne[i.domIndex].count):(i.tempList.filter(function(t){t.isHad=!1}),t.isHad=!t.isHad,i.tempOne.filter(function(t){t.count=0}),i.viewCount=0)}},mounted:function(){this.cantScroll()},created:function(){this.initApiUrl(),this.getData()}}},79:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"slide",props:{slideTemp:{type:Array,default:[]}},data:function(){return{msg:"Welcome to Your Vue.js App"}},watch:{},computed:{},methods:{toggleSelected:function(t,e){t.hadSelested||(this.slideTemp.filter(function(t){t.hadSelested=!1}),t.hadSelested=!0,this.$emit("toParent",t.name))},hide:function(){this.$emit("hide")},cantScroll:function(){document.getElementById("mask").addEventListener("touchmove",function(t){t.preventDefault()})}},mounted:function(){this.cantScroll()},created:function(){}}},82:function(t,e,i){e=t.exports=i(59)(!1),e.push([t.i,"",""])},85:function(t,e,i){e=t.exports=i(59)(!1),e.push([t.i,"",""])},88:function(t,e,i){e=t.exports=i(59)(!1),e.push([t.i,"",""])},92:function(t,e,i){e=t.exports=i(59)(!1),e.push([t.i,"",""])},94:function(t,e,i){var s=i(82);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(60)("3d6a6b0e",s,!0,{})},97:function(t,e,i){var s=i(85);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(60)("3158a6b2",s,!0,{})}});