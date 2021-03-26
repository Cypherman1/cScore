<template>
  <div class="ui-gnb">
    <div class="ui-gnb-main">
      <div class="ui-gnb-lead">
        <div
          class="ui-gnb-title"
          @click="
            () => {
              toHome();
            }
          "
        >
          <div class="ui-gnb-title__main">
            {{ title }}
          </div>
        </div>
        <div class="ui-gnb-menu text-white">
          <div
            class="ui-gnb-menu__item"
            v-for="item in gnbMenus"
            :key="item.key"
            :class="{ active: selectedMenu(item) }"
            @click="moveToMenu(item)"
          >
            <span> {{ item.label }}</span>
          </div>
        </div>
      </div>
      <div class="ui-gnb-tail">
        <img
          src="../../../../public/images/avatar_68x68.png"
          class="ui-gnb-action__profile-thumb"
        />
        <div class="ui-gnb-action__profile-name">
          Sev_user1
        </div>

        <ur-button class="ui-gnb-action__logout  text-white " @click="logout"
          >Logout</ur-button
        >
      </div>
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseIcon from "../../icons/BaseIcon";
export default {
  name: "ui-gnb",
  components: { BaseIcon },
  props: {
    title: { type: String, default: "SDS Quantum " },
    subTitle: { type: String, default: "SDSRV" },
    gnbMenus: {
      type: Array,
      default: () => {
        return [];
      },
    },
    activeGnbMenu: { type: Object, default: () => {} },
  },
  computed: {
    ...mapState("menu", ["selectedGnbMenu"]),
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  // watch: {
  //     activeGnbMenu(newMenu) {
  //         console.log(newMenu)
  //         this.selectedMenu = newMenu
  //     }
  // },
  methods: {
    selectedMenu(item) {
      if (item && this.activeGnbMenu) {
        return item.id === this.activeGnbMenu.id;
      } else {
        return false;
      }
    },
    moveToMenu(menu) {
      if (menu === this.selectedGnbMenu)
        this.$store.commit("menu/selectGnbMenu", null);
      else this.$store.commit("menu/selectGnbMenu", menu);

      if (menu && menu.route && menu.route !== "_") {
        const routePath = menu.route;
        if (routePath !== this.$route.path) this.$router.push(routePath);
      }
    },
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    toHome() {
      this.$store.commit("menu/selectGnbMenu", { id: 1 });

      if (this.$route.path !== "/") {
        this.$route.push("/");
      }
    },
  },
};
</script>

<style lang="scss">
.ui-gnb {
  background: white;
  display: flex;
  flex-flow: column nowrap;
}
.ui-gnb-main {
  display: flex;
  flex-flow: row nowrap;
  height: 50px;
  padding: 0 16px;
  position: relative;
  background-color: #101b58;
  border-bottom: 0px solid #707070;
}
.ui-gnb-main + .ui-gnb-main {
  border-top: 1px solid #cccccc;
}
.ui-gnb-lead {
  display: flex;
  flex-flow: row nowrap;
  flex-shrink: 0;
  margin-right: 20px;
}
.ui-gnb-tail {
  display: flex;
  margin-left: auto;
  flex-flow: row nowrap;
  align-items: center;
  flex-shrink: 0;
}

.ui-gnb-title {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0 16px;
  width: 304px;
  color: #fff;
}
.ui-gnb-title:hover {
  cursor: pointer;
}
.ui-gnb-title__center {
  align-items: center;
}
.ui-gnb-title__main {
  font-size: 24px;
  font-weight: bold;
}
.ui-gnb-title__sub {
  font-size: 12px;
  color: #767676;
  align-items: center;
}

.ui-gnb-menu {
  display: flex;
}

.ui-gnb-menu > .ui-gnb-menu__item {
  line-height: 52px;
  font-size: 16px;
  padding: 0 4px;
}

.ui-gnb-menu > .ui-gnb-menu__item:hover {
  cursor: pointer;
  color: orange;
}

.ui-gnb-menu > .ui-gnb-menu__item + .ui-gnb-menu__item {
  margin-left: 48px;
}

.ui-gnb-menu > .ui-gnb-menu__item.active {
  // font-weight: bold;
  border-bottom: 3px solid $color--primary;
}

.ui-gnb-action__profile-thumb {
  width: 32px;
  height: 32px;
}
.ui-gnb-action__profile-name {
  margin-left: 8px;
  color: white;
}
.ui-gnb-action__logout {
  margin-left: 12px;
}
body {
  min-width: 2000;
}
</style>
