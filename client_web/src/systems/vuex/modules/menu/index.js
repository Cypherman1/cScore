import menuMutations from "./mutations";
import menuActions from "./actions";
import menuGetters from "./getters";

export default {
  namespaced: true,
  state: () => ({
    menus: [],
    activeMenu: null,
    activeMenuId: null,
    menuDepth: 2,
    selectedGnbMenu: null,
  }),
  mutations: menuMutations,
  actions: menuActions,
  getters: menuGetters,
};
