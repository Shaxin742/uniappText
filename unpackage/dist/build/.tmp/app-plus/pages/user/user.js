(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{1475:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[t._m(0),a("view",{staticClass:"userinfo"},[a("view",{staticClass:"alignRight",attrs:{eventid:"613c9cd4-0"},on:{click:t.editPortrait}},[t._v("更换头像")]),a("view",{staticClass:"portrait",attrs:{eventid:"613c9cd4-1"},on:{click:t.login}},[a("img",{attrs:{src:"/static/img/my/portraitDefault.png",alt:""}}),a("view",{staticClass:"col333"},[t._v("点击登录")])])]),a("view",{staticClass:"mb40"},t._l(t.listCells,function(e,i){return a("view",{key:i,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",eventid:"613c9cd4-2-"+i},on:{click:function(a){t.jump(e)}}},[a("view",{staticClass:"uni-list-cell-navigate",class:{"uni-navigate-right":e.has_arrow}},[a("img",{attrs:{src:e.img,alt:e.text}}),a("text",[t._v(t._s(e.text))])])])})),a("view",[a("button",{staticClass:"logout",attrs:{eventid:"613c9cd4-3"},on:{click:t.logout}},[t._v("退出登录")])],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"status_bar"},[a("view",{staticClass:"top_view"})])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},2173:function(t,e,a){},"32b4":function(t,e,a){"use strict";a("bdf4");var i=s(a("b0ce")),n=s(a("6cb9"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},"5d73":function(t,e,a){"use strict";var i=a("2173"),n=a.n(i);n.a},"6cb9":function(t,e,a){"use strict";a.r(e);var i=a("1475"),n=a("7f62");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("5d73");var c=a("2877"),o=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,"8e018b34",null);e["default"]=o.exports},"7f62":function(t,e,a){"use strict";a.r(e);var i=a("a1ce"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},a1ce:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{listCells:[{img:"/static/img/my/wodeyouxi.png",text:"我的游戏",url:"/pages/my_game/my_game",has_arrow:!0},{img:"/static/img/my/xiaoxitongzhi.png",text:"消息通知",url:"/pages/message/message",has_arrow:!0},{img:"/static/img/my/qinglihuancun.png",text:"清理缓存",url:"",has_arrow:!1},{img:"/static/img/my/banbengengxin.png",text:"版本更新",url:"/pages/version_update/version_update",has_arrow:!0},{img:"/static/img/my/guanyuwomen.png",text:"关于我们",url:"/pages/about/about",has_arrow:!0}]}},methods:{editPortrait:function(){t.navigateTo({url:"/pages/change_aver/change_aver"})},login:function(){t.navigateTo({url:"/pages/login/login",success:function(t){},fail:function(){},complete:function(){}})},logout:function(){t.showToast({title:"登出",icon:"success",duration:2e3})},jump:function(e){e.has_arrow?t.navigateTo({url:e.url}):(console.log(1),t.removeStorage({key:"storage_key",success:function(e){t.showToast({title:"清理成功",mask:!1,duration:1500})}}))}}};e.default=a}).call(this,a("649d")["default"])}},[["32b4","common/runtime","common/vendor"]]]);