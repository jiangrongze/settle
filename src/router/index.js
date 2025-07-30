import Vue from 'vue'
import FindPage from '@/views/FindPage.vue';
import MyPage from '@/views/MyPage.vue';
import FriendPage from '@/views/FriendPage.vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Search from '@/views/Search.vue';
import NotFound from '@/views/NotFound.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';
import Layout from '@/views/Layout.vue';

import ArticlePage from '@/views/ArticlePage.vue';
import CollectPage from '@/views/CollectPage.vue';
import LikePage from '@/views/LikePage.vue';
import UserPage from '@/views/UserPage.vue';

Vue.use(VueRouter)

// { path: '/home', component: Home },
// { path: '/search', component: Search }，

const router = new VueRouter({
    routes: [
        { path: '/', 
            redirect: 'layout' },

        { path: '/detail/:id', component: ArticleDetail },
        {
            path: '/layout',
            component: Layout,
            redirect: 'article',
            children: [
                { path: '/article', component: ArticlePage },
                { path: '/collect', component: CollectPage },
                { path: '/like', component: LikePage },
                { path: '/user', component: UserPage },
            ]
        },




        { path: '/findpage', component: FindPage },
        { path: '/mypage', component: MyPage },
        { path: '/friendpage', component: FriendPage },
        { path: '/home', component: Home },


        { name: 'search', path: '/search/:words?', component: Search },
        { path: '*', component: NotFound }


    ],
    mode: "history",
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'

})

export default router

