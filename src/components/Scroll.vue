<template>
  <div>
    <div v-for="item in items">
      {{ item }}
    </div>
    <p class="poyo">poyo</p>
    <div v-for="item in items">
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
