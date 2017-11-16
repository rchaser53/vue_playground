<template>
  <div @click="onClick">
    <div class="inline field">
      <label>Name: </label>
      <span>{{rowData.name}}</span>
    </div>
    <div class="inline field">
      <label>Email: </label>
      <span>{{rowData.email}}</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClick (event) {
      console.log('my-detail-row: on-click', event.target)
    }
  }
}
</script>
