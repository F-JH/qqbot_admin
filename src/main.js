import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { createStore } from "vuex";
import axios from './axiosConfig/config';
const config = require('../static/config/config');

const store = createStore({
    state(){
        return {
            count: 0,
            config: config
        }
    },
    mutations:{
        increment(state){
            state.count++;
        }
    }
});

// 全局路由拦截器
router.beforeEach((to, from, next)=>{
    if(to.matched.length != 0){
        if(to.meta.requireAuth){
            if(Boolean(localStorage.getItem('userInfo'))){ // localStorage:本地存储
                next();
            }else{
                next({
                    path: '/login',
                    query: { redirect: to.fullPath }
                });
            }
        }else{
            // if(Boolean(localStorage.getItem('userInfo'))){
            //     next();
            // }else{
            //     next({
            //         path: '/index'
            //     });
            // }

            next();
        }
    }else{
        if(Boolean(localStorage.getItem('userInfo'))){
            next();
        }else{
            next({
                path: '/login',
                query: { redirect:to.fullPath }
            });
        }
    }
});

const app = createApp(App);
app.config.globalProperties.$axios = axios(router);
const vm = app.use(Antd).use(store).use(router).mount('#app');