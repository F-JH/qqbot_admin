import axios from "axios";

// response拦截器
axios.interceptors.response.use(response=>{
    if(response.data.code === 401){

    }
});