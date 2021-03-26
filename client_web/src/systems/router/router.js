import Vue from "vue";
import Router from "vue-router";
import store from "../vuex/store.js";
import pageRoutes from "./pageRoutes";

import Home from "@/layouts/contents/commons/Home.vue";
import Login from "@/layouts/contents/commons/Login.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ].concat(pageRoutes),
});

// Logged-in Router Guard
router.beforeEach(async (to, from, next) => {
  //Update Activated Menu Id
  if (to.params.menuid) {
    store.commit("menu/selectMenuId", to.params.menuid);
  } else {
    store.commit("menu/releaseMenuId");
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) next();
    else next("/login");
  } else if (to.matched.some((record) => record.path === "/login")) {
    if (store.getters.isLoggedIn) next(false);
    else next();
  } else {
    next();
  }
});

export default router;
