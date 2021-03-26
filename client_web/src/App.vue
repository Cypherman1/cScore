<template>
  <div id="app">
    
    <app-frame>
        <router-view />
    </app-frame>

  </div>
</template>

<script>
export default {
  created () { 
    const doLogout = () => {
      //Logging-out
      this.$store.dispatch('logout')
      //Move to Login Page
      this.$router.push('/login')
    }

    //Setup global HTTP Communication interceptors
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function (resolve, reject) {
        if (!err.response) {
          // alert(err)
          reject()
        } else {
          //If 401 Error and it's not retry request
          if (err.response.status === 401 && err.response.config && !err.response.config.__isRetryRequest) {
            //Logging-out
            doLogout()
            throw err
          } else {
            // alert(err.response.status + ' ' + err.response.statusText)
            reject()
          }
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
#app {
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;

  // min-width: 1800px;
}
</style>