<template>
  <div>
    <div v-on:click="watched">
      <router-link to="nyan">nyan</router-link>
    </div>
    <div>
      <router-link to="nyan3">nyan3</router-link>
    </div>
    <div>
      <router-link to="scroll">scroll</router-link>
    </div>
    <input v-on:change="nyan">
  </div>
</template>

<script lang="ts">
  import Cookies from 'js-cookie'
  export default {
    created: () => {
      // Cookies.set('hoge', 1234)
    },
    watch: {
      '$route': 'watched'
    },
    methods: {
      watched: (event) => {
        console.log('watched', event)
      },
      nyan: (event) => {
        // console.log(window.localStorage)
        console.log(4444, Cookies.get('hoge'))
      }
    }
  }
</script>
