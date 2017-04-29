<template>
  <div>
    <h2>{{aon}}</h2>
    <router-link to="nyan2">nyan2</router-link>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'test-child',
    props: ['aon'],
    data: () => {
      return {
        hogera: 'fdsfsd'
      }
    }
  }
</script>
