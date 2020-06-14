<template>
  <div id="app">
    <div class="row">
      <div>
        <a href="#" @click.prevent="$router.go(-1)">go -1</a>
        <br>
        <label for="check">is auth</label>
        <input id=check type="checkbox" v-model="isAuth">
      </div>
      <img alt="Vue logo" src="./assets/logo.png">
      
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    isAuth: {
      get() {
        return this.$root.isAuth
      },
      set (state) {
        this.$root.isAuth = state
      }
    }
  }
}
</script>

<style>
a {
  color: #42b983;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.row {
  display: flex;
  justify-content: center;
  align-items: center;;
}
</style>
