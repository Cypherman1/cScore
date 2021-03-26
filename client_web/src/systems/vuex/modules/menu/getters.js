const setMenuDepth1 = (menuMap) => {
  Object.values(menuMap).forEach((menu) => {
    let parentId = menu.parent_id;
    let parentMenu = null;

    while (parentId) {
      parentMenu = menuMap[parentId];
      parentId =
        parentMenu && parentMenu.parent_id ? parentMenu.parent_id : null;
    }

    if (parentMenu) menu.parent_id = parentMenu.id;
  });

  Object.values(menuMap)
    .filter((menu) => menu.parent_id && !menu.route)
    .forEach((menu) => delete menuMap[menu.id]);
};

export default {
  menus: (state) => {
    let menuMap = {};

    state.menus
      .sort((a, b) => {
        return a.order - b.order;
      })
      .forEach((menu) => {
        menuMap[menu.id] = menu;
      });

    // If menu depth is 1, All page menu should be located GNB menus
    if (state.menuDepth === 1) setMenuDepth1(menuMap);

    // Create hierachy structure menu object
    Object.values(menuMap).forEach((menu) => {
      if (menu.parent_id) {
        if (menuMap[menu.parent_id]) {
          if (!menuMap[menu.parent_id].menus)
            menuMap[menu.parent_id].menus = [];
          menuMap[menu.parent_id].menus.push(menu);
        }
      }
    });

    const setFirstRoute = (menu, menus) => {
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].route) {
          menu.route = menus[i].route;
          return menus[i].route;
        } else if (menus[i].menus) {
          const firstRoute = setFirstRoute(menus[i], menus[i].menus);
          if (firstRoute) {
            menu.route = firstRoute;
            return firstRoute;
          }
        }
      }

      return null;
    };

    // Object.values(menuMap).forEach((menu) => {
    //   if (!menu.route && menu.menus) setFirstRoute(menu, menu.menus);
    // });

    // Setup all menu data
    return menuMap;
  },
  gnbMenus: (state, getters) => {
    return Object.values(getters.menus).filter((menu) => !menu.parent_id);
  },
  activeMenu: (state, getters) => getters.menus[state.activeMenuId],
  activeGnbMenu: (state, getters) => {
    if (state.selectedGnbMenu) return state.selectedGnbMenu;

    let menu = getters.activeMenu;

    if (menu) {
      let parentId = menu.parent_id;

      while (parentId) {
        menu = getters.menus[parentId];
        parentId = menu && menu.parent_id ? menu.parent_id : null;
      }

      return menu;
    } else {
      return null;
    }
  },
  lnbMenus: (state, getters) =>
    getters.activeGnbMenu ? getters.activeGnbMenu.menus : [],
  activeMenuPath: (state, getters) => {
    let menu = getters.activeMenu;

    if (menu) {
      let parentId = menu.parent_id;

      const menuPath = [];
      menuPath.push(menu.label);

      while (parentId) {
        menu = getters.menus[parentId];
        menuPath.splice(0, 0, menu.label);
        parentId = menu && menu.parent_id ? menu.parent_id : null;
      }

      return menuPath.join(" > ");
    } else {
      return "";
    }
  },
};
