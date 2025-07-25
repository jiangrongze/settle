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
    <br />
    <br /><br /><br />
    <BaseA></BaseA>
    <BaseB></BaseB>
    <BaseC></BaseC>
    <GrandSon></GrandSon>
    <br />
    <br />
    <br />
    <input v-model="msg" type="text" />
    <input :value="msg2" @input="inpt" type="text" />
    <input :value="msg3" @input="msg = $event.target.value" type="text" />
    <br />
    <br />
    <button class="logout" @click="isShow = !isShow">退出按钮</button>

    <br />
    <br />
    <BaseDialog :visible.sync="isShow"></BaseDialog>

    <!-- ********************************************** -->
    <BaseSelect :cityId="selectId" @changId="selectId=$event" ></BaseSelect>
    <BaseSelectV v-model="SelectId1"></BaseSelectV>
  </section>

  <!-- </div> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
import BaseA from "./components/BaseA.vue";
import BaseB from "./components/BaseB.vue";
import BaseC from "./components/BaseC.vue";
import GrandSon from "./components/GrandSon.vue";
import BaseDialog from "./components/BaseDialog.vue";
import BaseSelect from "./components/BaseSelect.vue";
import BaseSelectV from "./components/BaseSelectV.vue";

// console("APP主模块")
export default {
  provide() {
    return {
      color: this.color,
      userInfo: this.userInfo,
    };
  },

  data() {
    return {
      // console(JSON.parse(localStorage.getItem('list1')).tos )
      list1:
        JSON.parse(localStorage.getItem("list1")) != ""
          ? JSON.parse(localStorage.getItem("list1"))
          : [
            //  list1:[
            { id: 1, name: "打篮球" },
            { id: 2, name: "看电影" },
            { id: 3, name: "逛街" },
          ],
      color: "red",
      userInfo: {
        name: "张三",
        age: 18,
      },
      msg: "我是msg1",
      msg2: "我是msg2",
      msg3: "我是msg3",

      isShow: false,
      selectId:'102',
      selectId1:'103'



    };
  },

  // name: 'App',
  components: {
    // HelloWorld

    TodoHeader,
    TodoMain,
    TodoFooter,

    BaseA,
    BaseB,
    BaseC,
    GrandSon,
    BaseDialog,
    BaseSelect,
     BaseSelectV
  },
  methods: {
    inpt(e) {
      this.msg = e.target.value;
      // console.log(this.msg)
    },

    handleAdd1(todoName1) {
      this.list1.unshift({
        id: +new Date(),
        name: todoName1,
      });
    },
    handleDel1(id) {
      this.list1.filter((item) => item.id !== id);
      // alert(id)
      // console(id)
    },
    handleClear1() {
      this.list1 = [];
    },
  },
  watch: {
    list1: {
      deep: true,
      handler(newValue) {
        localStorage.setItem("list1", JSON.stringify(newValue));
      },
    },
  },
};
</script>

<style></style>
