import Vue from 'vue'
import FindPage from '@/views/FindPage.vue';
import MyPage from '@/views/MyPage.vue';
import FriendPage from '@/views/FriendPage.vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Search from '@/views/Search.vue';
import NotFound from '@/views/NotFound.vue';
Vue.use(VueRouter)

// { path: '/home', component: Home },
// { path: '/search', component: Search }，

const router = new VueRouter({
    routes: [
        { path: '/',redirect:'home' },
        { path: '/findpage', component: FindPage },
        { path: '/mypage', component: MyPage },
        { path: '/friendpage', component: FriendPage },
        { path: '/home', component: Home },
 
        { path: '/search/:words?', component: Search },
 { path: '*', component: NotFound }

    ],
    mode:"history",
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'

})

export default router

