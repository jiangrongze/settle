<template>
    <div class="article-detail-page">
        <nav class="nav"><span @click="$router.back()" class="back">&lt;</span></nav>
        <header class="header">
        
            <h1>{{ article[id].title }}</h1>
            <!-- "https://pic.rmb.bdstatic.com/bjh/240115/5eb574c8235cdc8ecc9c8bd82f4ba42639.jpeg@h_1280<p>2022-01 | 315 浏览量 | 44点赞数</p> -->

            <p>

                 <img :src="article[id].img" alt="图片" />
                <!-- <img src="" 
                    style="height: 3%; width: 3%" alt="" /> -->
                <span>青春少年</span>
            </p>
        </header>
        <main class="body">
           <h2> {{ article[id].source }} </h2>
        </main>
    </div>
</template>

<script>
 import axios from 'axios';

export default {
    name: 'ArticleDetailPage',
    data() {
        return {
            id:String,
            article: []
        }

    },
    async created() {
        // console.log(this.$route.query.id);

        this.id = this.$route.params.id
        console.log(this.id)


            const res = await axios.get('https://hmajax.itheima.net/api/news')

           this.article = res.data.data
           console.log(this.article)

    }

}
</script>

<style></style>