<template>
  <div class="hello">
    <button v-on:click="show = !show">
      Toggle
    </button>
      <transition name="fade">
        <p class="nyan" v-if="show">hello</p>
      </transition>
    <div class="outer">

    </div>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
  .outer {
    display: block;
    position: relative;
    height: 30px;
    width: 500px;
  }

  .hello {
    --test-opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: left 1.5s ease, opacity 1s ease-in;
  }

  .nyan {
    position: absolute;
    left: 150px;
  }

  .fade-enter {
    left: 300px;
    opacity: var(--test-opacity);
  }
  .fade-leave-to {
    left: -50px;
    opacity: var(--test-opacity);
  }
    
</style>
