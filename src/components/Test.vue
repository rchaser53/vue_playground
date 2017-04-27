<template>
  <div>
    <h2>use vuex</h2>
    <input :value="nState" @input="changeState">
    <div>{{ nState }}</div>

    <h2>use data-binding</h2>
    <input v-model="aon" />
    <div>{{ aon }}</div>
  </div>
</template>

<script lang="ts">
  import { mapState, mapActions } from 'vuex'

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
    }
  }
</script>
