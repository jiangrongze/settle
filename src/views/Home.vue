<template>
    <div class="home">
        <div class="logo-box"></div>
        <div class="search-box">
            <input type="text">
            <button>搜索一下</button>

        </div>
        <div class="hot-link">
            熱門搜索：
            <!-- <a href="#">黑馬程序員</a>
            <a href="#">前端培訓</a>
            <a href="#">如何成為前端大生</a> -->

            <!-- <router-link to="/search?key=黑馬程序員">黑馬程序員</router-link>
            <router-link to="/search?key=前端培训">前端培訓</router-link>
            <router-link to="/search?key=如何成為前端大牛">如何成為前端大牛</router-link> -->

           <router-link to="/search/黑馬程序員">黑馬程序員</router-link>
            <router-link to="/search/前端培训">前端培訓</router-link>
            <router-link to="/search/如何成為前端大牛">如何成為前端大牛</router-link>
 
        </div>
    </div>

</template>

<script>
export default {
    name: 'FindMusic'

}
</script>

<style></style>