<template>
  <div class="article-page">

    <!-- @click="$router.push('/detail?id=${item.title}')"  -->
    <div 
    v-for="(item, index) in articles" 
    :key="index" 
    @click="$router.push('/detail/1')"
      class="article-item">
      <div class="head">
        <!-- <img src="item.img" style="height: 10%; width: 20%" alt="" /> -->
        <img :src="item.img"
          style="height: 5%; width: 10%" alt="" />

        <div class="con">
          <p class="title">{{ item.title }}</p>
          <p class="other">{{ item.time }} | 2033-01-20</p>
        </div>
      </div>
      <div class="body">
        {{ item.source }}
      </div>
      <div class="foot">点赞 315 </div>


    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'ArticlePage',

  data() {
    return {
      articles: []
    }
  },
  async created() {
    // const { data } = await axios.get('#');
    // this.articles = data.result.item;
    const res = await axios.get('https://hmajax.itheima.net/api/news')
    // this.articles = res.data.result.item;

    setTimeout(() => {
      this.articles = res.data.data;
      console.log(this.articles)
      //    this.isLoading = false; // 停止加载状态
    }, 1000);
  }






}
</script>

<style lang="less" scoped>
.article-page {
  padding: 10px 10px 10px 10px;
  width: 90%;
  height: 80%;
  background: #f5f5f5;
}

.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;

}
</style>