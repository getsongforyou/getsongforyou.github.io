import axios from 'axios'
import store from '@/store'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

instance.interceptors.request.use(function (config) {
    console.log('start interceptor')
    console.log(store.state?.token, 'token')
    if (store.state.token) {
        config.headers['Authorization'] = store.state.token
    }
    return config
},
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)


// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance
