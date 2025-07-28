<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input v-model="inpValue" type="text" />
      <button @click="goSearch">搜索一下</button>
    </div>
    <div class="hot-link">
      熱門搜索：
      <!-- <a href="#">黑馬程序員</a>
            <a href="#">前端培訓</a>
            <a href="#">如何成為前端大生</a> -->

      <router-link to="/search?key=黑馬程序員">黑馬程序員</router-link>
            <router-link to="/search?key=前端培训">前端培訓</router-link>
            <router-link to="/search?key=如何成為前端大牛">如何成為前端大牛</router-link>

      <!-- <router-link to="/search/黑馬程序員">黑馬程序員</router-link>
      <router-link to="/search/前端培训">前端培訓</router-link>
      <router-link to="/search/如何成為前端大牛">如何成為前端大牛</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "FindMusic",

  data() {
    return {
      inpValue: "", // 用于双向绑定输入框的值
    };
  },
  methods: {
    goSearch() {
      // 获取输入框的值
      //const inputValue = document.querySelector('.search-box input').value;
      // 使用路由跳转到搜索页面
            this.$router.push({ path: `/search?key=${this.inpValue}` });
      // this.$router.push({ path: `/search/${inpValue}` });
      // this.$router.push({ path: `/search/${this.inpValue}` });
      // this.$router.push(`/search/${inputValue}` );
        // this.$router.push({
        //     name: 'search',
        //     query: {
        //         key: this.inpValue
        //     }   

        // }); // 使用params传递参数

        // 使用params传递参数
    //   this.$router.push({
    //     name: 'search',
    //     params: {
    //       words: this.inpValue
    //     }
    //   })
    }
  }
};
</script>

<style></style>