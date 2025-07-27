<template>
  <div id="app">
    <div class="box1">
      <h1>MyTable组件</h1>
      <p>这是一个自定义的表格组件</p>
      <MyTable1 :data="goods">
        <template #header>
          <th>序号</th>
          <th>描述</th>
          <th>图片</th>
          <th>操作</th>
        </template>

        <template #body="{ item, index }">
          <td style="width: 100px">{{ index + 1 }}</td>
          <td style="width: 100px">{{ item.name }}</td>
          <td>
            <img style="height: 15%; width: 15%" :src="item.picture" />
          </td>
          <td>
            <MyTag v-model="item.tag"></MyTag>
          </td>
        </template>
      </MyTable1>
    </div>
    <br />
    <div>---------------------------------------------------------</div>

    <div class="box1">
      <MyTable :data="listF1">
        <template #default="item">
          <!-- {{ item}} -->
          <button @click="handleDelF1(item.item.id)">删除</button>
          <!-- <button @click="handleEditF1">编辑</button> -->
        </template>
      </MyTable>

      <MyTable :data="listF2">
        <template #default="{ item, msg }">
          {{ item.name }} - {{ item.age }} - {{ msg }}
          <!-- <button @click="handleDelF1(item.item.id)">删除</button> -->
          <!-- <button @click="handleEditF1">编辑</button> -->
          <button @click="handleEditF1(item)">编辑</button>
        </template>
      </MyTable>
    </div>

    <br />
    <div>---------------------------------------------------------</div>

    <BaseDialog :visible.sync="isShow1">
      <!-- <template v-slot:title> -->
      <template #title>
        我是MyDialog组件
        <p>这里可以放置标题内容</p>
      </template>
      <template #content>
        我是MyDialog组件
        <p>这里可以放置内容</p>
      </template>
    </BaseDialog>

    <br />
    <br />
    <br />
    <div>---------------------------------------------------------</div>

    <div class="box1" v-loading="isLoading">
      <ul>
        <li v-for="(item, index) in listNews" :key="index" class="news-item">
          <div class="left">
            <div class="title">{{ item.title }}</div>
            <div class="info">
              <span>{{ item.source }}</span>
              <span>{{ item.time }}</span>
            </div>
          </div>
          <div class="right">
            <img :src="item.img" alt="图片" />
          </div>
        </li>
      </ul>
    </div>
    <br />
    <div>---------------------------------------------------------</div>

    <h1 v-color="blue">自定义指令</h1>
    <!-- <input v-focus type="text" placeholder="输入框自动获取焦点" /> -->
    <input v-focus type="text" />
    <br />
    <div>---------------------------------------------------------</div>

    <div v-if="isShowEdit">
      <input ref="editVal" v-model="editValue" type="text" />
      <button @click="isShowEdit = false">确认</button>
    </div>
    <div v-else>
      <span>{{ editValue }}</span>
      <button @click="handleEdit">编辑</button>
    </div>
    <br />
    <div>---------------------------------------------------------</div>

    <BaseForm ref="baseForm"></BaseForm>
    <div>{{ acount }}</div>
    <div>{{ password }}</div>
    <button @click="handleSubmitForm">提交表单</button>
    <button @click="handleGetFormData">获取表单值</button>
    <button @click="$refs.baseForm.resetForm()">重置表单</button>
    <br />
    <div>---------------------------------------------------------</div>

    <BaseChart></BaseChart>
    <!-- <BaseSelectV v-model="SelectId1"></BaseSelectV> -->
    <br />
    <div>---------------------------------------------------------</div>

    <TodoHeader @add="handleAdd1"></TodoHeader>
    <TodoMain @del="handleDel1" :list="list1"></TodoMain>
    <TodoFooter @clear="handleClear1"></TodoFooter>
    <br />
    <div>---------------------------------------------------------</div>

    <BaseA></BaseA>
    <BaseB></BaseB>
    <BaseC></BaseC>
    <GrandSon></GrandSon>
    <br />
    <div>---------------------------------------------------------</div>

    <input v-model="msg" type="text" />
    <input :value="msg2" @input="inpt" type="text" />
    <input :value="msg3" @input="msg = $event.target.value" type="text" />
    <br />
    <div>---------------------------------------------------------</div>

    <button class="logout" @click="isShow = !isShow">退出按钮</button>
    <BaseDialog :visible.sync="isShow"></BaseDialog>
    <br />
    <div>---------------------------------------------------------</div>

    <BaseSelect :cityId="selectId" @changId="selectId = $event"></BaseSelect>
    <br />
    <div>---------------------------------------------------------</div>

    <BaseSelectV v-model="SelectId1"></BaseSelectV>
    <br />
    <div>---------------------------------------------------------</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// import Vue from "vue";
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
import BaseChart from "./components/BaseChart.vue";
import BaseForm from "./components/BaseForm.vue";
import axios from "axios";
import MyTable from "./components/MyTable.vue";
import MyTag from "./components/MyTag.vue";
import MyTable1 from "./components/MyTable1.vue";

//import { color } from "echarts";

// console("APP主模块")
export default {
  name: "App",
  derectives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
    color: {
      inserted(el) {
        el.style.color = "yellow"; // 默认颜色为红色
      },
      update(el, binding) {
        el.style.color = binding.value || "blue"; // 更新颜色
      },
      unbind(el) {
        el.style.color = ""; // 清除颜色
      },
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.$refs.editVal.focus();
    });
  },
  async created() {
    // 模拟获取数据
    // this.listNews = await axios.get("https://api.example.com/news").then(res => res.data);
    //const res=await axios.get(https://hmajax.itheima.net/api/news)
    const res = await axios.get("https://hmajax.itheima.net/api/news");
    //   .then((res) => res.data);
    setTimeout(() => {
      this.listNews = res.data.data;
      this.isLoading = false; // 停止加载状态
    }, 2000);
  },

  provide() {
    return {
      color: this.color,
      userInfo: this.userInfo,
    };
  },

  data() {
    return {
      tempText: "茶具子", // 用于MyTag组件的双向绑定
      goods: [
        {
          id: 101,
          picture:
            "https://pic.rmb.bdstatic.com/bjh/240115/5eb574c8235cdc8ecc9c8bd82f4ba42639.jpeg@h_1280",
          name: "商品1",
          tag: "标签1",
        },
        {
          id: 102,
          picture:
            "https://pic.rmb.bdstatic.com/bjh/240115/5eb574c8235cdc8ecc9c8bd82f4ba42639.jpeg@h_1280",
          name: "商品2",
          tag: "标签2",
        },
        {
          id: 103,
          picture:
            "https://pic.rmb.bdstatic.com/bjh/240115/5eb574c8235cdc8ecc9c8bd82f4ba42639.jpeg@h_1280",
          name: "商品3",
          tag: "标签3",
        },
        {
          id: 104,
          picture:
            "https://pic.rmb.bdstatic.com/bjh/240115/5eb574c8235cdc8ecc9c8bd82f4ba42639.jpeg@h_1280",
          name: "商品4",
          tag: "标签4",
        },
      ],

      listNews: [], // 新闻列表
      // console(JSON.parse(localStorage.getItem('list1')).tos )

      listF1: [
        { id: 1, name: "张三", age: 16 },
        { id: 2, name: "李四", age: 12 },
        { id: 3, name: "王五", age: 18 },
      ],

      listF2: [
        { id: 1, name: "刘六", age: 22 },
        { id: 2, name: "赵七", age: 25 },
        { id: 3, name: "孙八", age: 22 },
      ],

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
      isShow1: true,
      selectId: "105",
      selectId1: "103",

      acount: "********",
      password: "0000000",

      editValue: "编辑内容",
      isShowEdit: false, // 控制编辑状态的变量

      isLoading: true, // 控制加载状态的变量
    };
  },

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
    BaseSelectV,
    BaseChart,
    BaseForm,
    MyTable,
    MyTag,
    MyTable1,
  },

  methods: {
    inpt(e) {
      this.msg = e.target.value;
    },

    handleAdd1(todoName1) {
      this.list1.unshift({
        id: +new Date(),
        name: todoName1,
      });
    },

    handleEditF1(obj) {
      //console.log(id);
      //this.listF1.filter((item) => item.id !== id);
      alert(obj.id + obj.name + obj.age);
      // console(id)
    },
    handleDelF1(id) {
      // alert(id);
      this.listF1 = this.listF1.filter((item) => item.id !== id);
    },

    handleDel1(id) {
      this.list1 = this.list1.filter((item) => item.id !== id);
      // alert(id)
      // console(id)
    },

    handleClear1() {
      this.list1 = [];
    },

    handleGetFormData() {
      this.acount = this.$refs.baseForm.getValues().acount;
      this.password = this.$refs.baseForm.getValues().password;
    },

    handleSubmitForm() {
      this.$refs.baseForm.submitForm();
    },

    handleEdit() {
      this.isShowEdit = true;
      // console.log(this.editValue);
      this.$nextTick(() => {
        this.$refs.editVal.focus();
      });
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

<style >
.loading::before {
  content: "加载中...";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  background: rgba(255, 255, 255, 0.8) url("") no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.box1 {
  width: 500px;
  height: 500px;
  border: 1px solid #ccc;
  margin: 20px;
  overflow: auto;
}
.news-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.news-item .left {
  flex: 1;
}
.news-item .left .title {
  font-weight: bold;
}
.news-item .left .info {
  color: #999;
}
.news-item .right {
  width: 100px;
  height: 100px;
  margin-left: 10px;
}
.news-item .right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.news-item .right img:hover {
  transform: scale(1.1);
  transition: transform 0.3s;
}
.news-item .right img:active {
  transform: scale(0.9);
  transition: transform 0.1s;
}
.logout {
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #f00;
  color: #fff;
  border: none;
  cursor: pointer;
}
.logout:hover {
  background-color: #c00;
}
.logout:active {
  background-color: #900;
}

.table-case1 {
  margin: 50px auto;
  padding: 20px;
  overflow-x: auto;
}

.my-table {
  border-spacing: 0;
  /* img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }  */
}
</style>
