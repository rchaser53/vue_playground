<template>
  <div>
    <div v-on:click="watched">
      <router-link to="nyan">nyan</router-link>
    </div>
    <div>
      <router-link to="nyan3">nyan3</router-link>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    created: () => {
      console.log('create!')
    },
    watch: {
      '$route': 'watched'
    },
    methods: {
      watched: (event) => {
        console.log('watched', event)
      }
    }
  }
</script>
