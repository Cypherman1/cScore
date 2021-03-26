<template>
  <div class="d-flex flex-column flex-grow-1 ui-frame">
    
    <GNB :activeGnbMenu="activeGnbMenu" :gnbMenus="gnbMenus" @goToHome="goToHome" v-show="loggedIn" />

    <div class="app-main">
      <LNB v-show="loggedIn && lnbMenus.length > 0">
        <LNBMenus :activeMenu="activeMenu" :menus="lnbMenus"/>
      </LNB>

      <div class="app-contents" :class="{'with-lnb' : loggedIn && lnbMenus.length > 0 }">
        <div class="row justify-content-between mb-2 ml-0 mr-0" v-if="activeMenu">
          <div class="col-auto p-0">
              <h5 class="title">{{activeMenu.label}}</h5>
          </div>
          <div class="col-auto d-flex align-items-end">
              <span>{{activeMenuPath}}</span>
          </div>
        </div>
        <div class="flex-grow-1" :class="{'position-relative': loggedIn}">
          <slot></slot>
        </div>
      </div>
      
    </div>

    <Footer />

  </div>
</template>

<script>
import GNB from '@/components/frames/commons/GNB'
import LNB from '@/components/frames/commons/LNB'
import LNBMenus from '@/components/frames/commons/LNBMenus.vue'
import Footer from '@/components/frames/commons/Footer'
import { mapGetters } from 'vuex'


export default {
  components: {
    GNB, LNB, LNBMenus, Footer
  },
  computed: {
    ...mapGetters({
      loggedIn: 'isLoggedIn',
      menus: 'menu/menus',
      gnbMenus: 'menu/gnbMenus',
      activeGnbMenu: 'menu/activeGnbMenu',
      activeMenu: 'menu/activeMenu',
      lnbMenus: 'menu/lnbMenus',
      activeMenuPath: 'menu/activeMenuPath'
    })
  },
  mounted () {
    //If Logged-in Status, Get menu info
    if (this.loggedIn) this.$store.dispatch('menu/getMenus')
  },
  watch: {
    //Watching logged-in status
    loggedIn(newValue) {

      //When logging-in, get accessable menu info from server
      if(newValue) {
        // Call API for getting menu info
        this.$store.dispatch('menu/getMenus')

      //When logged-out, delete all menu data
      } else {
        this.$store.commit('menu/setMenus', [])
      }
    }
  },
  methods: {
    //Go to home page
    goToHome() {
      if (this.activeGnbMenu) {
        this.$store.dispatch('menu/getMenus')
        this.$router.push('/')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.app-main {
  display: flex;
  flex: 1 0 auto;
  text-align: left;

  background-color: #EAEAEA;
}

.app-contents {
  margin: 12px auto;
  background: white;
  padding: 24px;
  width: 1414px;
  min-height: 820px;

  display: flex;
  flex-flow: column nowrap;
}
.app-contents.with-lnb {
  margin: 12px 24px;
}

h5.title {
  font-weight: 600;
}
</style>