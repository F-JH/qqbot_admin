import axios from "axios";
import { message } from 'ant-design-vue';
import vueConfig from "../../vue.config";


export default function(router){
    const instance = axios.create({
        timeout: 5000
    });
    // response拦截器
    instance.interceptors.response.use(response=>{
            if(response.data.code === 1001){
                console.log('登陆失效，重新登陆');
                message.info('身份过期，请重新登陆');
                localStorage.removeItem('userInfo');
                router.push({
                    path: response.data.moreInfo.location,
                    query: { redirect: router.currentRoute.value.fullPath }
                });
            }
            return response;
        },
        error => {
            return Promise.reject(error);
    });

    return instance;
};