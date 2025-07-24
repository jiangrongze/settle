<template>

  <!--   
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
 -->
<!-- <div> -->
  <section id="app">
    <TodoHeader @add="handleAdd1"></TodoHeader>
    <TodoMain @del="handleDel1" :list="list1"></TodoMain>
    <TodoFooter @clear="handleClear1"></TodoFooter>
<br/>
<br/><br/><br/>
  <BaseA></BaseA>
    <BaseB></BaseB>

  </section>


  

<!-- </div> -->
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'

import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
import BaseA from './components/BaseA.vue';
import BaseB from './components/BaseB.vue';


// console("APP主模块")
export default {
  data() {
    return {
      list1:JSON.parse(localStorage.getItem('list1')) || [
        { id: 1, name: '打篮球' },
        { id: 2, name: '看电影' },
        { id: 3, name: '逛街' }
      ]

    }
  },

  // name: 'App',
  components: {
    // HelloWorld

    TodoHeader,
    TodoMain,
    TodoFooter,

    BaseA,
    BaseB

  },
  methods: {

    handleAdd1(todoName1) {

      this.list1.unshift({
        id: +new Date(),
        name: todoName1

      })

    },
    handleDel1(id) {
      this.list1.filter(item => item.id !== id)
      // alert(id)
      // console(id)
    },
    handleClear1(){
      this.list1=[]

    }

  },
  watch:{
    list1:{
      deep:true,
      handler(newValue){
        localStorage.setItem('list1',JSON.stringify(newValue))
      }
    }
  }
}
</script>

<style></style>
