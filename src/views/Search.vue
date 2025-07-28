<template>
    <div class="search">
        <!-- <p>搜索关键字：{{ $route.query.key }}</p> -->

        <p>搜索关键字：{{ $route.query.key }}</p>
        <!-- <p>搜索关键字：{{ $route.params.words }}</p> -->
        <p>搜索结果：</p>
        <ul>
            <li>........................</li>
            <li>........................</li>
            <li>........................</li>
            <li>........................</li>
        </ul>


    </div>
</template>

<script>
export default {

    name: 'MyFriend',
    created() {
         this.$route.query.key
        // this.$route.params.words
    }
}
</script>

<style>
.search {
    widows: 400px;
    height: 240px;
    padding: 0 20px;
    margin: 0 auto;
    border: 2px solid #c4c7ce;
    border-radius: 5px;

}
</style>