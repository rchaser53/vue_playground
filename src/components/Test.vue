<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>nya-n</div>
    <input type="text" v-model="aon" />
    <div>{{ aon }}</div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        msg: 234,
        aon: ''
      }
    }
  }
</script>
