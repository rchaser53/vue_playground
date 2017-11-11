<template>
  <div>
    <h2>use vuex</h2>
    <input :value="nState" @input="changeState">
    <div>{{ nState }}</div>

    <h2>use data-binding</h2>
    <input v-model="aon" />
    <div v-on:click="hoge">{{ aon }}</div>

    <TestChild :aon="aon" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapState, mapActions } from 'vuex'
  import TestChild from './TestChild.vue'

  export interface State {
    nState: string
  }

  export default {
    computed: mapState < State > ({
      nState: (state) => {
        return state.nState
      }
    }),
    mixins: [{
      // if some property has already declared, it will be ignored.
      // i mean this 'data' is ignored
      data: () => {
        return {
          aon: 'hogerappa'
        }
      }
    }],
    methods: {
      ...mapActions([
        'changeState'
      ]),
      hoge: () => {
        console.log(111)
      }
    },
    data: () => {
      return {
        aon: ''
      }
    },
    component: Vue.component('TestChild', TestChild)
  }
</script>
