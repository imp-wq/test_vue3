<template>
  <div>
    <h2>Composition API</h2>
    <h2>{{ state.count }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    setup() {
      const state = reactive({
        count: 1
      })
      const increment = () => {
        state.count++
      }
      return {
        state,
        increment
      }
    }
  }
</script>

<style></style>
