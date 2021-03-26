export default {
  setMenus(state, menus) {
    state.menus = Object.preventExtensions(menus);
  },
  selectMenu(state, menu) {
    state.activeMenu = menu;
  },
  releaseMenu(state) {
    state.activeMenu = null;
  },
  selectMenuId(state, menuid) {
    state.activeMenuId = menuid;
    state.selectedGnbMenu = null;
  },
  releaseMenuId(state) {
    state.activeMenuId = null;
  },
  setMenuDepth(state, depth) {
    state.menuDepth = depth;
  },

  selectGnbMenu(state, menu) {
    state.selectedGnbMenu = menu;
  },
};
