<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      Нужна-ли тут авторизация: {{$route.meta.requiresAuth}}
      <h1>Переключение роутов</h1>
       <hr>

      $router.push('/test/1232')
    <br>
    <button @click="$router.push('/test/1232')">го в тест</button>

    <hr>
      $router.push({ path: '/test/1232' })
    <br>
    <button @click="$router.push({ path: '/test/1232' })">го в тест</button>
    <hr>
    

      $router.push({ name: 'test', params: {id: '123'} })
    <br>
    <button @click="$router.push({ name: 'testName', params: {id: '123'} })">го в тест</button>
    

    <hr>

    <h1>router-link</h1>
    <i>:to="{ name: 'testName', params: {id:333} }"</i>
<br>
    <router-link tag="button" :to="{ name: 'testName', params: {id:333} }">
      <h3>GOOO!!!</h3>
    </router-link>
    
    <hr>
      <router-link :to="{ name: 'testName', params: {id:333} }" replace>link with REPLACE</router-link>
    <hr> 
 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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

</style>
