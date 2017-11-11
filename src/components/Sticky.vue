<template>
  <div @click="nyan" style="position: relative;">
    <div class="outer">
      <div class="sticky-top">top</div>
      <div class="backbone"></div>
    </div>
    <div style="display: block; width: 500px; position: absolute; bottom:0px;">
      <div class="sticky-bottom">bottom</div>
    </div>
    
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    propMessage: String
  }
})
export default class extends Vue {
  name = 'sticky'

  constructor () {
    super()
    this.hoge = 1
  }
  hoge: number
  nyan () {
    console.log(this.hoge)
  }
}
</script>

<style scoped>
  .outer {
    --outer-height: 500px;
    display: block;
    width: 500px;
    height: var(--outer-height);
    overflow: scroll;
    position: relative;
  }
  .backbone {
    display:block;
    width: 500px;
    height: 700px;
    background-color:aqua;
  }
  .sticky-bottom {
    display:block;
    width:100%;
    background-color:green;
    position: sticky;
    top: var(--outer-height);
  }
  .sticky-top {
    color: blue;
    position: sticky;
    background-color: yellow;
    display: block;
    width: 100%;
    top: 0px;
  }
</style>
