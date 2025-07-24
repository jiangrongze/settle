<template>
    <footer class="footer">

    <span class="todo-count">合计：<strong> 1 </strong></span><br/>
    <button @click="clear" class="clear-completed">清空任务</button>

  </footer>
</template>

<script>
export default {

  methods:{
    clear(){
      this.$emit('clear')
    }
  }

}
</script>

<style>

</style>