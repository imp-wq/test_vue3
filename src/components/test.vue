<template>
  <div>
    <h2>Test组件</h2>
    <input
      type="text"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
  export default {
    props: ['modelValue'],
    emit: ['update:modelValue']
  }
</script>

<style></style>
