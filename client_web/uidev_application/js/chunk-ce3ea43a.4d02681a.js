(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce3ea43a"],{"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/frames/commons/LNBMenus.vue?vue&type=style&index=0&id=356d9481&lang=scss&scoped=true&":function(e,n,s){},"./src/components/frames/commons/LNBMenus.vue":function(e,n,s){"use strict";s.r(n);var u=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"ui-lnb-menu"},[e._l(e.menus,(function(n){return[s("div",{key:n.key,class:e.menuItemClass(n)},[s("div",{staticClass:"ui-lnb-menu__item-box",on:{click:function(s){return e.selectMenu(n)}}},[e._t("default",[s("a",[e._v(e._s(n.label))]),n.badgeLabel?s("ur-badge",{staticStyle:{"margin-left":"12px"},attrs:{value:n.badgeLabel}}):e._e()],{menu:n}),e.noExpand?e._e():s("div",{class:[{"ui-lnb-menu__item-icon":!0},{"ui-lnb-menu__item-icon--selected":n===e.expandedMenu||n.menus&&n.menus.includes(e.selectedMenu)}]},[n.menus?[n===e.expandedMenu||n.menus.includes(e.selectedMenu)?s("ur-icon",{attrs:{small:"",spacing:""}},[e._v("collapse_menu")]):s("ur-icon",{attrs:{small:"",spacing:""}},[e._v("expand_menu")])]:e._e()],2)],2),n.menus&&(n===e.expandedMenu||n.menus.includes(e.selectedMenu))?[s("ui-lnb-menus",{attrs:{activeMenu:e.selectedMenu,menus:n.menus,depth:e.depth+1},on:{changeActiveMenu:e.selectMenu},scopedSlots:e._u([{key:"default",fn:function(n){var u=n.menu;return[e._t("default",[s("a",[e._v(e._s(u.label))]),u.badgeLabel?s("ur-badge",{staticStyle:{"margin-left":"12px"},attrs:{value:u.badgeLabel}}):e._e()],{menu:u})]}}],null,!0)})]:e._e()],2)]}))],2)},t=[],d=(s("./node_modules/core-js/modules/es7.array.includes.js"),s("./node_modules/core-js/modules/es6.string.includes.js"),s("./node_modules/core-js/modules/es6.number.constructor.js"),{name:"ui-lnb-menus",props:{menus:{type:Array,default:function(){return[]}},noExpand:{type:Boolean,default:!1},depth:{type:Number,default:1},activeMenu:{type:Object,default:function(){}}},data:function(){return{expandedMenu:null,selectedMenu:null}},watch:{menus:function(){this.expandedMenu=null,this.selectedMenu=null},activeMenu:function(e){this.selectedMenu=e},selectedMenu:function(e){}},mounted:function(){this.selectedMenu=this.activeMenu},methods:{menuItemClass:function(e){return[{"ui-lnb-menu__item":!0,"ui-lnb-menu__item--selected":e===this.selectedMenu,"ui-lnb-menu__item--opened":e.menus&&(e===this.expandedMenu||e.menus.includes(this.selectedMenu)),"ui-lnb-menu__item-depth2":2===this.depth,"ui-lnb-menu__item-depth3":3===this.depth}]},selectMenu:function(e){if(this.depth>1)this.$emit("changeActiveMenu",e);else if(e===this.expandedMenu)this.expandedMenu=null;else if(e.menus)this.expandedMenu=e;else if(e&&e.route&&"_"!==e.route){var n=e.route;e.menus||n===this.$route.path||this.$router.push(n)}}}}),l=d,o=(s("./src/components/frames/commons/LNBMenus.vue?vue&type=style&index=0&id=356d9481&lang=scss&scoped=true&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),i=Object(o["default"])(l,u,t,!1,null,"356d9481",null);n["default"]=i.exports},"./src/components/frames/commons/LNBMenus.vue?vue&type=style&index=0&id=356d9481&lang=scss&scoped=true&":function(e,n,s){"use strict";s.r(n);var u=s("./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/frames/commons/LNBMenus.vue?vue&type=style&index=0&id=356d9481&lang=scss&scoped=true&");for(var t in u)["default"].indexOf(t)<0&&function(e){s.d(n,e,(function(){return u[e]}))}(t)}}]);