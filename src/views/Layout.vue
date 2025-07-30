<template>
    <div class="h9-wrapper5">
        <div class="content" style="padding: 10px 10px 10px 10px;">
            内容部分
            <router-view></router-view>
        </div>

        <!-- <a href="/article">面径</a><span>  --- </span>
            <a href="/collect">收藏</a><span>  --- </span>
            <a href="/like">喜欢</a><span>  --- </span>
            <a href="/user">我的</a> -->

        <nav class="tabber">
            <router-link to="/article">面径</router-link><span> --- </span>
            <router-link to="/collect">收藏</router-link><span> --- </span>
            <router-link to="/like">喜欢</router-link><span> --- </span>
            <router-link to="/user">我的</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'LayoutPage'

}
</script>

<style lang="less" scoped>
.h9-wrapper5{
width: 90%;
height: 90%;
background-color: #063f80;

}

.tabbar {
    position: fixed;
    left: 0;
    bottom:0;
    width: 100%;
    height: 50%;
    line-height: 50px;
    text-align: center;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    a{
        flex: 1;
        text-decoration: none;
        font-size: 14px;
        color:#333;
 
    }
    a.router-link-active{

        color:#a3f708;
      
    }
}
</style>