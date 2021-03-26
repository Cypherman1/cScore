import Vue from "vue";
import Vuex from "vuex";

import VueCookies from "vue-cookies";
import auth from "./commons/auth/index";
import menu from "./modules/menu/index";
import sevm from "./modules/sevm/index";
Vue.use(Vuex);
Vue.use(VueCookies);

export default new Vuex.Store({
  state: {
    ...auth.state,
  },
  mutations: {
    ...auth.mutations,
  },
  actions: {
    ...auth.actions,
  },
  getters: {
    ...auth.getters,
  },
  modules: {
    menu: menu,
    sevm: sevm,
  },
});
