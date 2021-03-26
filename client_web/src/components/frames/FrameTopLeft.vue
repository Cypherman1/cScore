<template>
  <div class="d-flex flex-column flex-grow-1 ui-frame">
    
    <Header @goToHome="goToHome" v-show="loggedIn" />
    
    <div class="app-main">
      <LNB v-show="loggedIn">
        <div class="ml-4 mr-4">
          <div>
            <span>Text input 1</span>
            <ur-text-field class="w-100 mt-1" placeholder="Hint text 1" />
          </div>
          <div class="mt-3">
            <span>Text input 2</span>
            <ur-text-field class="w-100 mt-1" placeholder="Hint text 2" />
          </div>
          <div class="mt-3">
            <span>Radio</span>
            <div class="mt-1">
              <ur-radio v-model="radioValue" value="1">01</ur-radio>
              <ur-radio class="ml-3" v-model="radioValue" value="2">02</ur-radio>
              <ur-radio class="ml-3" v-model="radioValue" value="3">03</ur-radio>
            </div>
          </div>
          <div class="mt-3">
            <span>Dropdown</span>
            <ur-dropdown class="mt-1" :items="['Lorem Ipsum 1', 'Lorem Ipsum 2', 'Lorem Ipsum 3']" v-model="dropdownValue"/>
          </div>
          <ur-button class="mt-4" main full>Button</ur-button>
        </div>
        
      </LNB>

      <div class="app-contents" :class="{'with-lnb' : loggedIn}">
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
import LNB from '@/components/frames/commons/LNB'
import LNBMenus from '@/components/frames/commons/LNBMenus.vue'
import Footer from '@/components/frames/commons/Footer'
import { mapGetters } from 'vuex'


export default {
  components: {
    Header, LNB, LNBMenus, Footer
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
  data() {
    return {
      radioValue: '1',
      dropdownValue: 'Lorem Ipsum 1'
    }
  },
  mounted () {
    //Set menu depth to 1
    this.$store.commit('menu/setMenuDepth', 1)
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