<template>
  <div class="d-flex flex-column flex-grow-1 ui-frame">
    
    <Header @goToHome="goToHome" v-show="loggedIn" />
    
    <div class="app-main">
      <div class="app-contents">
        <div class="row justify-content-between mb-3 ml-0 mr-0" v-if="activeMenu">
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
import Header from '@/components/frames/commons/Header'
import Footer from '@/components/frames/commons/Footer'
import { mapGetters } from 'vuex'

export default {
  components: {
    Header, Footer
  },
  computed: {
    ...mapGetters({
      loggedIn: 'isLoggedIn',
      menus: 'menu/menus',
      gnbMenus: 'menu/gnbMenus',
      activeGnbMenu: 'menu/activeGnbMenu',
      activeMenu: 'menu/activeMenu',
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
  justify-content: center;
  background-color: #EAEAEA;
  padding: 12px 0px;
}

.app-contents {
    background: white;
    padding: 24px;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
}

h5.title {
  font-weight: 600;
}
</style>