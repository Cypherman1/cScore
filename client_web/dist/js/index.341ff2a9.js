(function(e){function t(t){for(var a,c,s=t[0],u=t[1],i=t[2],d=0,l=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&l.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);m&&m(t);while(l.length)l.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},c={index:0},r={index:0},o=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0092bcbe":"481c7be2","chunk-01b5998a":"65b08fbc","chunk-0499a857":"2d917d61","chunk-0f670c21":"8257ef91","chunk-149f9d32":"2cee4fc3","chunk-1c6f421e":"25542658","chunk-1d22e73d":"6f087ac4","chunk-1ff62ccc":"2b725b4f","chunk-2d0c7e1b":"93877343","chunk-2d20e7aa":"a695e324","chunk-337b10d6":"2ecb3584","chunk-3555c277":"7ff392ce","chunk-ba2b275a":"9831abcc","chunk-35a34f64":"97d8a6a8","chunk-39d3bb5f":"d32066f9","chunk-425cb1d6":"18a04604","chunk-43d4b811":"eedd658c","chunk-451c932f":"458175a0","chunk-46e685ce":"982686fd","chunk-59872530":"c8479752","chunk-5c888b5b":"024538bc","chunk-60dcc982":"f04bbe39","chunk-7c31e8a3":"559f1ea9","chunk-7da78090":"0b4c32c9","chunk-81070e9e":"78f695ca","chunk-a6028662":"2a265b7a"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0092bcbe":1,"chunk-01b5998a":1,"chunk-0499a857":1,"chunk-0f670c21":1,"chunk-149f9d32":1,"chunk-1c6f421e":1,"chunk-1d22e73d":1,"chunk-1ff62ccc":1,"chunk-337b10d6":1,"chunk-3555c277":1,"chunk-ba2b275a":1,"chunk-35a34f64":1,"chunk-39d3bb5f":1,"chunk-425cb1d6":1,"chunk-43d4b811":1,"chunk-451c932f":1,"chunk-46e685ce":1,"chunk-59872530":1,"chunk-5c888b5b":1,"chunk-60dcc982":1,"chunk-7c31e8a3":1,"chunk-7da78090":1,"chunk-81070e9e":1,"chunk-a6028662":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0092bcbe":"d445c936","chunk-01b5998a":"e5cfbe9b","chunk-0499a857":"0b9c2d2f","chunk-0f670c21":"fe1e7bc4","chunk-149f9d32":"50ae5468","chunk-1c6f421e":"f25ad4a5","chunk-1d22e73d":"e3a2c9aa","chunk-1ff62ccc":"44070c7c","chunk-2d0c7e1b":"31d6cfe0","chunk-2d20e7aa":"31d6cfe0","chunk-337b10d6":"f76aa987","chunk-3555c277":"f3938e36","chunk-ba2b275a":"ca71c273","chunk-35a34f64":"c86d3d8d","chunk-39d3bb5f":"45af69ca","chunk-425cb1d6":"98d3caba","chunk-43d4b811":"df42f068","chunk-451c932f":"acd739af","chunk-46e685ce":"c87f2998","chunk-59872530":"c023c2f7","chunk-5c888b5b":"dcf1504b","chunk-60dcc982":"dd9d867d","chunk-7c31e8a3":"c1e5afbd","chunk-7da78090":"b52208c9","chunk-81070e9e":"5806d2e3","chunk-a6028662":"0c032a22"}[e]+".css",r=u.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===r))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){i=l[s],d=i.getAttribute("data-href");if(d===a||d===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],m.parentNode.removeChild(m),n(o)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(e);var l=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,n[1](l)}r[e]=void 0}};var m=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var m=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08cd":function(e,t,n){"use strict";n("551f")},1011:function(e,t,n){var a={"./Frame":["6602",3],"./Frame.json":["6602",3],"./FrameCustom":["b017",9,"chunk-2d20e7aa"],"./FrameCustom.vue":["b017",9,"chunk-2d20e7aa"],"./FrameEmpty":["5307",9,"chunk-2d0c7e1b"],"./FrameEmpty.vue":["5307",9,"chunk-2d0c7e1b"],"./FrameTop":["e517",9,"chunk-1ff62ccc"],"./FrameTop.vue":["e517",9,"chunk-1ff62ccc"],"./FrameTopLeft":["af57",9,"chunk-5c888b5b"],"./FrameTopLeft.vue":["af57",9,"chunk-5c888b5b"],"./FrameTopLeftMenu1":["6847",9,"chunk-451c932f"],"./FrameTopLeftMenu1.vue":["6847",9,"chunk-451c932f"],"./FrameTopLeftMenu2":["b2b7",9,"chunk-35a34f64"],"./FrameTopLeftMenu2.vue":["b2b7",9,"chunk-35a34f64"],"./FrameTopMenu":["053f",9,"chunk-3555c277","chunk-ba2b275a"],"./FrameTopMenu.vue":["053f",9,"chunk-3555c277","chunk-ba2b275a"],"./commons/Footer":["a5a0",9,"chunk-0f670c21"],"./commons/Footer.vue":["a5a0",9,"chunk-0f670c21"],"./commons/GNB":["5da5",9,"chunk-1c6f421e"],"./commons/GNB.vue":["5da5",9,"chunk-1c6f421e"],"./commons/GNBTop":["8742",9,"chunk-3555c277"],"./commons/GNBTop.vue":["8742",9,"chunk-3555c277"],"./commons/Header":["c419",9,"chunk-7c31e8a3"],"./commons/Header.vue":["c419",9,"chunk-7c31e8a3"],"./commons/LNB":["1fab",9,"chunk-0499a857"],"./commons/LNB.vue":["1fab",9,"chunk-0499a857"],"./commons/LNBMenus":["0235",9,"chunk-81070e9e"],"./commons/LNBMenus.vue":["0235",9,"chunk-81070e9e"],"./commons/LNBTop":["1fa1",9,"chunk-a6028662"],"./commons/LNBTop.vue":["1fa1",9,"chunk-a6028662"]};function c(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],c=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(c,t[1])}))}c.keys=function(){return Object.keys(a)},c.id="1011",e.exports=c},"1be0":function(e,t,n){},"211b":function(e,t,n){},4643:function(e,t,n){"use strict";n("b48b")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id="4678"},"4fd2":function(e,t,n){"use strict";n("e59b")},"551f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("551c"),n("8a81");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-frame",[n("router-view")],1)],1)},r=[],o={created:function(){var e=this,t=function(){e.$store.dispatch("logout"),e.$router.push("/login")};this.$http.interceptors.response.use(void 0,(function(e){return new Promise((function(n,a){if(e.response){if(401===e.response.status&&e.response.config&&!e.response.config.__isRetryRequest)throw t(),e;a()}else a()}))}))}},s=o,u=(n("4643"),n("2877")),i=Object(u["a"])(s,c,r,!1,null,"8b52df50",null),d=i.exports,l=(n("96cf"),n("1da1")),m=n("8c4f"),f=(n("8e6e"),n("ac6a"),n("cadf"),n("456d"),n("ade3")),p=n("2f62"),h=n("2b27"),b=n.n(h),g={auth_request:function(e){e.status="loading"},auth_success:function(e,t,n){e.status="success",e.token=t,e.user=n},auth_error:function(e){e.status="error"},logout:function(e){e.status="",e.token=""}},k=n("bc3a"),v=n.n(k),j="http://107.107.53.207:80/",y=v.a.create({baseURL:j,headers:{Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache"}}),_=y,O={login:function(e,t){var n=e.commit;return new Promise((function(e,a){n("auth_request"),_.post("auth/login",t).then((function(t){var a=t.data.token,c=t.data.user;localStorage.setItem("token",a),n("auth_success",a,c),e(t)})).catch((function(e){n("auth_error"),localStorage.removeItem("token"),a(e)}))}))},logout:function(e){var t=e.commit;return new Promise((function(e,n){t("logout"),localStorage.removeItem("token"),e()}))}},w={isLoggedIn:function(e){return!!e.token},authStatus:function(e){return e.status}},x={state:{status:"",token:localStorage.getItem("token"),user:{}},mutations:g,actions:O,getters:w},S=(n("9aea"),{setMenus:function(e,t){e.menus=Object.preventExtensions(t)},selectMenu:function(e,t){e.activeMenu=t},releaseMenu:function(e){e.activeMenu=null},selectMenuId:function(e,t){e.activeMenuId=t,e.selectedGnbMenu=null},releaseMenuId:function(e){e.activeMenuId=null},setMenuDepth:function(e,t){e.menuDepth=t},selectGnbMenu:function(e,t){e.selectedGnbMenu=t}}),I={getMenus:function(e){var t=e.commit;return new Promise((function(e,n){_.get("api/menu").then((function(e){var n=e.data.menus||[];t("setMenus",n)}),(function(e){t("setMenus",[])}))}))}},C=(n("55dd"),n("8615"),function(e){Object.values(e).forEach((function(t){var n=t.parent_id,a=null;while(n)a=e[n],n=a&&a.parent_id?a.parent_id:null;a&&(t.parent_id=a.id)})),Object.values(e).filter((function(e){return e.parent_id&&!e.route})).forEach((function(t){return delete e[t.id]}))}),D={menus:function(e){var t={};e.menus.sort((function(e,t){return e.order-t.order})).forEach((function(e){t[e.id]=e})),1===e.menuDepth&&C(t),Object.values(t).forEach((function(e){e.parent_id&&t[e.parent_id]&&(t[e.parent_id].menus||(t[e.parent_id].menus=[]),t[e.parent_id].menus.push(e))}));return t},gnbMenus:function(e,t){return Object.values(t.menus).filter((function(e){return!e.parent_id}))},activeMenu:function(e,t){return t.menus[e.activeMenuId]},activeGnbMenu:function(e,t){if(e.selectedGnbMenu)return e.selectedGnbMenu;var n=t.activeMenu;if(n){var a=n.parent_id;while(a)n=t.menus[a],a=n&&n.parent_id?n.parent_id:null;return n}return null},lnbMenus:function(e,t){return t.activeGnbMenu?t.activeGnbMenu.menus:[]},activeMenuPath:function(e,t){var n=t.activeMenu;if(n){var a=n.parent_id,c=[];c.push(n.label);while(a)n=t.menus[a],c.splice(0,0,n.label),a=n&&n.parent_id?n.parent_id:null;return c.join(" > ")}return""}},M={namespaced:!0,state:function(){return{menus:[],activeMenu:null,activeMenuId:null,menuDepth:2,selectedGnbMenu:null}},mutations:S,actions:I,getters:D},P={set_selected_camera:function(e,t){e.selectedCamera=t},set_camera_list:function(e,t){e.cameras=t},set_date_range:function(e,t){e.selectedDateRange=t},set_table_data:function(e,t){e.tableData=t},set_loading:function(e,t){e.loading=t}},E="http://107.120.70.222:9005/",R=v.a.create({baseURL:E,headers:{Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache"}}),T=function(e){return"".concat(E,"/api/images/").concat(e,"/raw")},F=function(e){return"".concat(E,"/api/images/").concat(e,"/detected")},z=R,L={setCamera:function(e,t){var n=e.commit;n("set_selected_camera",t)},getCameras:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,z.get("api/cameras");case 4:a=e.sent,"success"===a.data.status&&n("set_camera_list",a.data.data),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}(),setDateRange:function(e,t){var n=e.commit;n("set_date_range",t)},getTableData:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,n){var a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.prev=1,a("set_loading",!0),e.next=5,z.get("api/images?from_date=".concat(n.fromDate,"&to_date=").concat(n.toDate,"&").concat("all cameras"!==n.camera?"camera_id="+n.camera:""));case 5:c=e.sent,"success"===c.data.status&&a("set_table_data",c.data.data),a("set_loading",!1),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),a("set_loading",!1);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));function t(t,n){return e.apply(this,arguments)}return t}()};function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){Object(f["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={selectedCamera:function(e){return e.selectedCamera},cameras:function(e){var t=e.cameras;return t.unshift("all cameras"),t},dateRange:function(e){return e.selectedDateRange},tableData:function(e){return e.tableData.map((function(e){return A(A({},e),{},{key:e.image_id,rawUrl:T(e.image_id),detectedUrl:F(e.image_id)})}))},loading:function(e){return e.loading}},q=n("c1df"),B=n.n(q),U={namespaced:!0,state:function(){return{tableData:[],cameras:[],selectedCamera:"all cameras",selectedDateRange:[B()(),B()()],loading:!1}},mutations:P,actions:L,getters:N};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){Object(f["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}a["default"].use(p["a"]),a["default"].use(b.a);var J=new p["a"].Store({state:K({},x.state),mutations:K({},x.mutations),actions:K({},x.actions),getters:K({},x.getters),modules:{menu:M,sevm:U}}),Y=[{path:"/:menuid/page/Empty",name:"/page/Empty",component:function(){return n.e("chunk-7da78090").then(n.bind(null,"c3bd"))},meta:{requiresAuth:!0}},{path:"/:menuid/page/sample/Samples/Sample1",name:"/page/sample/Samples/Sample1",component:function(){return n.e("chunk-59872530").then(n.bind(null,"489d"))},meta:{requiresAuth:!0}},{path:"/:menuid/page/sample/Samples/Sample2",name:"/page/sample/Samples/Sample2",component:function(){return n.e("chunk-0092bcbe").then(n.bind(null,"de1f"))},meta:{requiresAuth:!0}},{path:"/:menuid/page/sample/Samples/Sample3",name:"/page/sample/Samples/Sample3",component:function(){return n.e("chunk-01b5998a").then(n.bind(null,"7724"))},meta:{requiresAuth:!0}},{path:"/:menuid/page/template/Complex/Complex01",name:"/page/template/Complex/Complex01",component:function(){return n.e("chunk-337b10d6").then(n.bind(null,"965e"))},meta:{requiresAuth:!0}},{path:"/:menuid/page/template/Complex/Complex02",name:"/page/template/Complex/Complex02",component:function(){return n.e("chunk-43d4b811").then(n.bind(null,"e93a"))},meta:{requiresAuth:!0}},{path:"/:menuid/page/template/Split/Split01",name:"/page/template/Split/Split01",component:function(){return n.e("chunk-46e685ce").then(n.bind(null,"0f3a"))},meta:{requiresAuth:!0}},{path:"/:menuid/page/template/Split/Split02",name:"/page/template/Split/Split02",component:function(){return n.e("chunk-60dcc982").then(n.bind(null,"73d3"))},meta:{requiresAuth:!0}},{path:"/:menuid/page/template/Split/Split03",name:"/page/template/Split/Split03",component:function(){return n.e("chunk-149f9d32").then(n.bind(null,"c9fa"))},meta:{requiresAuth:!0}},{path:"/:menuid/page/template/Stack/Stack01",name:"/page/template/Stack/Stack01",component:function(){return n.e("chunk-1d22e73d").then(n.bind(null,"8d35"))},meta:{requiresAuth:!0}},{path:"/:menuid/page/template/Stack/Stack02",name:"/page/template/Stack/Stack02",component:function(){return n.e("chunk-425cb1d6").then(n.bind(null,"43db"))},meta:{requiresAuth:!0}},{path:"/:menuid/page/template/Stack/Stack03",name:"/page/template/Stack/Stack03",component:function(){return n.e("chunk-39d3bb5f").then(n.bind(null,"9fbd"))},meta:{requiresAuth:!0}}],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-2 container-fluit"},[n("div",{staticClass:"row"}),n("div",{staticClass:"row header align-items-center justify-content-between m-2"},[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"ml-2 text-primari",staticStyle:{"font-weight":"bold"}},[e._v("Total:")]),n("div",{staticClass:"ml-2",staticStyle:{"font-weight":"bold",color:"red"}},[e._v("\n        "+e._s(e.tableData.length)+"\n      ")])]),n("div",{staticClass:"d-flex"},[n("div",{staticClass:"align-self-center",staticStyle:{"margin-right":"10px","margin-left":"10px"}},[e._v("\n        Date range\n      ")]),n("a-range-picker",{attrs:{value:e.dateRange,format:e.dateFormat},on:{change:e.handleRangePick}}),n("div",{staticClass:"align-self-center",staticStyle:{"margin-right":"10px","margin-left":"10px"}},[e._v("\n        Camera\n      ")]),n("a-select",{ref:"select",staticStyle:{width:"200px","margin-right":"10px"},attrs:{value:e.selectedCamera},on:{change:e.handleSelectCamera}},e._l(e.cameras,(function(t){return n("a-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])})),1)],1)]),n("div",{staticClass:"row m-2"},[n("a-table",{staticStyle:{width:"100%"},attrs:{columns:e.columns,"data-source":e.tableData,loading:e.loading}})],1)])},W=[];function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){Object(f["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X={data:function(){var e=this.$createElement;return{dateFormat:"YYYY/MM/DD",columns:[{title:"ID",dataIndex:"key",key:"key",width:"10%"},{title:"Camera",dataIndex:"camera_id",key:"camera_id",width:"20%"},{title:"Time",dataIndex:"time",key:"time",width:"20%"},{title:"Original Image",key:"rawUrl",dataIndex:"rawUrl",width:"20%",customRender:function(t){return e("div",{class:"images",directives:[{name:"viewer",value:!0}]},[e("img",{style:"width: 100px",attrs:{src:t}})])}},{title:"Detected Image",dataIndex:"detectedUrl",key:"detectedUrl",width:"20%",customRender:function(t){return e("div",{class:"images",directives:[{name:"viewer",value:!0}]},[e("img",{style:"width: 100px",attrs:{src:t}})])}}]}},created:function(){},mounted:function(){this.getCameras()},methods:Q(Q({},Object(p["b"])({setCamera:"sevm/setCamera",getCameras:"sevm/getCameras",setDateRange:"sevm/setDateRange",getTableData:"sevm/getTableData"})),{},{handleSelectCamera:function(e){this.setCamera(e),this.getTableData({fromDate:B()(this.dateRange[0]).format(this.dateFormat),toDate:B()(this.dateRange[1]).format(this.dateFormat),camera:this.selectedCamera})},handleRangePick:function(e){this.setDateRange(e),this.getTableData({fromDate:B()(this.dateRange[0]).format(this.dateFormat),toDate:B()(this.dateRange[1]).format(this.dateFormat),camera:this.selectedCamera})}}),computed:Q({},Object(p["c"])({selectedCamera:"sevm/selectedCamera",cameras:"sevm/cameras",dateRange:"sevm/dateRange",tableData:"sevm/tableData",loading:"sevm/loading"}))},Z=X,ee=(n("80c2"),Object(u["a"])(Z,H,W,!1,null,"63b771db",null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{componentid:"div002"}},[n("span",{attrs:{componentid:"span_common_text_001"}},[e._v("SEV Mobile")]),n("img",{attrs:{componentid:"img_common_image_001",src:"/images/login/background.png"}}),n("div",{attrs:{componentid:"div001"}},[n("span",{attrs:{componentid:"span_common_text_002"}},[e._v("Sign-in")]),n("ur-text-field",{attrs:{componentid:"ur_text_field_001",placeholder:"ID",shape:"border",type:"none",size:"medium"},model:{value:e.loginInfo.userId,callback:function(t){e.$set(e.loginInfo,"userId",t)},expression:"loginInfo.userId"}}),n("ur-text-field",{attrs:{componentid:"ur_text_field_002",placeholder:"Password",type:"password",shape:"border",size:"medium"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doLogin(t)}},model:{value:e.loginInfo.authCode,callback:function(t){e.$set(e.loginInfo,"authCode",t)},expression:"loginInfo.authCode"}}),n("ur-button",{attrs:{componentid:"ur_button_001",color:"primary",shape:"solid",size:"large"},on:{click:e.doLogin}},[e._v("Sign-in")]),n("ur-checkbox",{attrs:{componentid:"ur_checkbox_001",size:"medium"},model:{value:e.rememberId,callback:function(t){e.rememberId=t},expression:"rememberId"}},[e._v("Remeber ID")]),n("ur-button",{attrs:{componentid:"ur_button_002",color:"primary",size:"large",shape:"border"},on:{click:e.doKnoxSSO}},[e._v("Login with Knox Portal ID")]),n("ur-button",{attrs:{componentid:"ur_button_003",color:"primary",size:"large",shape:"border"},on:{click:e.gotoRegistPage}},[e._v("Sign-up")]),n("span",{attrs:{componentid:"span_common_text_003"}},[e._v(e._s(e.errorMsg))])],1)])])},ae=[],ce={name:"login-page",data:function(){return{loginInfo:{userId:"",authCode:""},rememberId:!1,errorMsg:"",loadingFlag:!1}},created:function(){var e=this.$route.query.errorMessage;null!==e&&void 0!==e&&(this.errorMsg=JSON.parse(decodeURI(e)).message)},mounted:function(){var e=this;this.$cookies.get("uidevId")&&(this.loginInfo.userId=this.$cookies.get("uidevId"),this.rememberId=!0),setTimeout((function(){!0===e.rememberId?e.$refs["loginPW"]&&e.$refs["loginPW"].focus():e.$refs["loginID"]&&e.$refs["loginID"].focus()}),500)},methods:{doLogin:function(){var e=this;this.errorMsg="",!0!==this.loadingFlag&&(0!==this.loginInfo.userId.trim().length?0!==this.loginInfo.authCode.trim().length?(this.rememberId?this.$cookies.set("uidevId",this.loginInfo.userId):this.$cookies.remove("uidevId"),this.$store.dispatch("login",this.loginInfo).then((function(){return e.$router.push("/")})).catch((function(e){return console.log(e)}))):this.errorMsg="Password is empty.":this.errorMsg="ID is empty.")},doKnoxSSO:function(){console.log("Not implemented... Knox SSO")},gotoRegistPage:function(){console.log("Not implemented... Register Page")},gotoFindPasswordPage:function(){console.log("Not implemented... Find Password")}}},re=ce,oe=(n("08cd"),Object(u["a"])(re,ne,ae,!1,null,"3ba609b2",null)),se=oe.exports;a["default"].use(m["a"]);var ue=new m["a"]({routes:[{path:"/",name:"home",component:te,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:se}].concat(Y)});ue.beforeEach(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.params.menuid?J.commit("menu/selectMenuId",t.params.menuid):J.commit("menu/releaseMenuId"),t.matched.some((function(e){return e.meta.requiresAuth}))?J.getters.isLoggedIn?a():a("/login"):t.matched.some((function(e){return"/login"===e.path}))&&J.getters.isLoggedIn?a(!1):a();case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}());var ie=ue;a["default"].prototype.$http=v.a,a["default"].prototype.$http.defaults.baseURL="/api";var de=localStorage.getItem("token");de&&(a["default"].prototype.$http.defaults.headers.common["Authorization"]=de);var le=v.a,me=n("9839"),fe=n("0bb7"),pe=n("0020"),he=n("6944"),be=n.n(he),ge=(n("202f"),n("0808"),n("2688")),ke=n("01a8"),ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.module?n(e.component,{tag:"component",attrs:{data:e.item}}):e._e()},je=[],ye={props:{item:{type:Object,default:function(){}},module:{type:Object}},data:function(){return{component:this.module}}},_e=ye,Oe=Object(u["a"])(_e,ve,je,!1,null,null,null),we=Oe.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item-container d-flex flex-wrap align-items-start justify-content-start"},e._l(e.items,(function(t,a){return n(e.component,{key:a,tag:"component",staticClass:"item-box",style:e.itemBoxStyle,attrs:{item:t,event:e.event}})})),1)},Se=[],Ie={props:{module:{type:Object},items:{type:Array,default:function(){return[]}},event:{type:Object,default:function(){}}},data:function(){return{component:this.module}},computed:{itemBoxStyle:function(){return[{width:"300px"}]}}},Ce=Ie,De=(n("aebf"),Object(u["a"])(Ce,xe,Se,!1,null,"488a7df2",null)),Me=De.exports,Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:"none"!=e.type,expression:"type != 'none'"}],staticClass:"tab-box"},e._l(e.items,(function(t,a){return n("div",{key:a,staticClass:"tab-item p-2 pl-3 pr-3",class:{selected:e.selectedIndex===a},on:{click:function(t){e.selectedIndex=a}}},[e._v("\n            "+e._s(t.label)+"\n        ")])})),0),e.selectedItem?n(e.selectedItem.module,{tag:"component",staticClass:"item-box",attrs:{item:e.selectedItem.data,event:e.selectedItem.event}}):e._e()],1)},Ee=[],Re={props:{tabIndex:{type:String},items:{type:Array,default:function(){return[]}},type:{type:String,default:"tab"}},data:function(){return{component:this.module,selectedIndex:null}},computed:{selectedItem:function(){return this.items.length>0&&this.selectedIndex>=0?this.items[this.selectedIndex]:null}},mounted:function(){this.tabIndex?this.selectedIndex=parseInt(this.tabIndex):this.selectedIndex=-1}},Te=Re,Fe=(n("4fd2"),Object(u["a"])(Te,Pe,Ee,!1,null,"a4c2f826",null)),ze=Fe.exports,Le=n("6602");a["default"].use(ge["a"]),a["default"].component("ur-grid",ke["a"]),a["default"].component("module-box",we),a["default"].component("module-list-box",Me),a["default"].component("module-tab-box",ze),a["default"].component("app-frame",(function(){return n("1011")("./"+Le.frame)}));n("1be0");a["default"].use(me["b"]),a["default"].use(fe["a"]),a["default"].use(pe["a"]),a["default"].use(be.a),a["default"].config.productionTip=!1,new a["default"]({router:ie,store:J,http:le,render:function(e){return e(d)}}).$mount("#app")},6602:function(e){e.exports=JSON.parse('{"frame":"FrameTopMenu"}')},"80c2":function(e,t,n){"use strict";n("8a82")},"8a82":function(e,t,n){},aebf:function(e,t,n){"use strict";n("211b")},b48b:function(e,t,n){},e59b:function(e,t,n){}});