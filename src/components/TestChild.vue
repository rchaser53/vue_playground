<template>
  <div>
    <h2>{{aon}}</h2>
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
