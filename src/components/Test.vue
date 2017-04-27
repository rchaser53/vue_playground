<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>nya-n</div>
    <input :value="message" @input="changeState">
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
      message: state => state.nState
    }),
    methods: mapActions([
      'changeState'
    ]),
    data: () => {
      return {
        msg: 234,
        aon: ''
      }
    }
  }
</script>
