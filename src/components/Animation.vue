<template>
  <div class="hello">
    <button v-on:click="show = !show">
      Toggle
    </button>    
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
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
  .hello {
    --test-opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: transform 1.5s ease;
  }

  .fade-enter {
    opacity: var(--test-opacity);
  }
  .fade-leave-to {
    opacity: var(--test-opacity);
  }
    
</style>
