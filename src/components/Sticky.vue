<template>
  <div class="outer">
    <div class="sticky">hoge</div>
    <div class="backbone"></div>
  </div>


</template>

<script lang="ts">
export default {
  name: 'sticky',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .outer {
    display:block;
    width: 500px;
    height: 500px;
    overflow: scroll;
  }
  .backbone {
    display:block;
    width: 500px;
    height: 700px;
    background-color:aqua;
  }
  .sticky {
    color: blue;
    position: sticky;
    background-color: yellow;
    display: block;
    top: 0px;
  }
</style>
