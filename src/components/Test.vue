<template>
  <div>
    <h2>use vuex</h2>
    <input :value="nState" @input="changeState">
    <div>{{ nState }}</div>

    <h2>use data-binding</h2>
    <input v-model="aon" />
    <div>{{ aon }}</div>

    <TestChild :aon="aon" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapState, mapActions } from 'vuex'
  import TestChild from './TestChild'

  export interface State {
    nState: string
  }

  export default {
    computed: mapState < State > ({
      nState: (state) => {
        return state.nState
      }
    }),
    methods: mapActions([
      'changeState'
    ]),
    data: () => {
      return {
        aon: ''
      }
    },
    // component: Vue.component('TestChild', TestChild)
    component: Vue.component('TestChild', TestChild)
  }
</script>
