<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <label>{{ di }}</label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { SymbolA } from "../App.vue";
import { createComponent, inject } from "@vue/composition-api";

export default createComponent({
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup() {
    return {
      di: inject(SymbolA)
    };
  }
});
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
