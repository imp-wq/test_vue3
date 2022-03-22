<template>
  <div>
    <h2>Composition API</h2>
    <h2>reactive:{{ state.count }}</h2>
    <h2>ref:{{num}}</h2>
    <button @click="increment">reactive +1</button>
    <button @click="ref_increment">ref +1</button>
  </div>
</template>

<script>
  import { reactive, ref ,computed,toRefs} from 'vue'
  export default {
    setup() {
      // reactive的使用
      const state = reactive({
        count: 1
      })
      
      const increment = () => {
        state.count++
      }

      // ref的使用
      const num = ref(0)
      let num2= computed(()=>num.value*2)
      const ref_increment = () => {
        num.value++
        console.log(num2.value)
      }


      return {
        state,
        increment,
        num,
        ref_increment,
      }
    }
  }
</script>

<style></style>
