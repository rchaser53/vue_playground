<template>
  <div id="app">
    {{ funyan }}
    <HelloWorld :msg="state.message" />
    <button @click="clickRectiveTest">{{ foo.x }}</button>
    <input @change="changeMessage" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { createComponent, reactive, ref } from "@vue/composition-api";

interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
}

const useMousePosition = () => {
  return reactive({
    x: 1,
    y: 2
  });
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

    const foo = useMousePosition();
    const clickRectiveTest = (_: HTMLElementEvent<HTMLInputElement>) => {
      foo.x++;
    };

    return {
      state,
      changeMessage,
      clickRectiveTest,
      funyan,
      foo
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
