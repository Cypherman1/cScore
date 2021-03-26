import Vue from "vue";

import App from "./App.vue";
import router from "./systems/router/router";
import store from "./systems/vuex/store";
import http from "./systems/http/http";
import { Select, DatePicker, Table, Images, Tabs } from "ant-design-vue";
import Viewer from "v-viewer";
import "ant-design-vue/dist/antd.css";
import "viewerjs/dist/viewer.css";
import VueKonva from "vue-konva";

import "./components";
import "./styles/common.scss";
Vue.use(VueKonva);
Vue.use(Select);
Vue.use(DatePicker);
Vue.use(Table);
Vue.use(Viewer);
Vue.use(Tabs);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  http,
  render: (h) => h(App),
}).$mount("#app");