<template>
  <div class="hello">
      HelloWorld #2 => {{ id }} 
      <br/>
      Нужна-ли тут авторизация: {{$route.meta.requiresAuth}}
    <hr>
      <router-link :to="{ name: 'main', params: {id:333} }" replace>REPLACE 2</router-link>
    <hr>

  <router-view />
  <router-view name="second" />
  </div>
</template>

<script>
export default {
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
