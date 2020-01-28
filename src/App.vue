<template>
  <div id="app">
    {{ funyan }}
    <HelloWorld :msg="state.message" />
    <input @change="changeMessage" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { createComponent, reactive, ref } from "@vue/composition-api";

interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
}

export default createComponent({
  name: "app",
  components: {
    HelloWorld
  },
  setup() {
    const state = reactive({
      message: "initialValue"
    });

    const funyan = ref<number>(111);
    const changeMessage = (message: HTMLElementEvent<HTMLInputElement>) => {
      state.message = message.target.value;
      funyan.value++;
    };

    return {
      state,
      changeMessage,
      funyan
    };
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
