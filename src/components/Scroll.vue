<template>
  <div>
    <div :key='index' v-for="(item, index) in items">
      {{ item }}
    </div>
    <p class="poyo">poyo</p>
    <div :key='index' v-for="(item, index) in items">
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    data: () => {
      // use native browse function for scroll
      return {
        items: [
          1, 2, 3, 4, 5,
          1, 2, 3, 4, 5,
          1, 2, 3, 4, 5,
          1, 2, 3, 4, 5,
          1, 2, 3, 4, 5,
          1, 2, 3, 4, 5,
          1, 2, 3, 4, 5,
          1, 2, 3, 4, 5
        ]
      }
    }
  }
</script>
