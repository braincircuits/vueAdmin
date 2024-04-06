import type {AxiosInstance} from "axios";
import axios from "axios";
import {ElMessage} from "element-plus";

const request: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 2000,//毫秒
})

request.interceptors.request.use(config => {

        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(response => {
        const res = response.data;
        if (res.code = "00000") {
            return res;
        }
        ElMessage.error(res.message);
        return Promise.reject(res);
    },
    error => {
        const {message, response} = error;
        if (message.indexOf('timeout') != -1) {
            ElMessage.error('网络超时');
        } else if (message == 'Network Error') {
            ElMessage.error('网络连接错误');
        } else {
            if (message.data) ElMessage.error(response.statusText);
            else ElMessage.error("接口路径找不到");
        }
        return Promise.reject(error);
    })

export default request;