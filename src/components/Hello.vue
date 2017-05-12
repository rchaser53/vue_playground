<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  beforeRouteEnter: (to, from, next) => {
    setTimeout(() => {
      next((elem) => {
        elem.msg = 23
      })
    }, 1000)
  },
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "poyo.css";
  .hello {
    color: blue;
  }
</style>
