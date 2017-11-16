<template>
  <div id="app">
    <vuetable></vuetable>
  </div>
</template>

<script>
import vuetable from './VueTable2'
export default {
  name: 'app',
  components: {
    vuetable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
