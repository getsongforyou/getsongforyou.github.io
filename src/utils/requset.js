import axios from 'axios'

const instance = axios.create({
    baseURL: ' https://mock.presstime.cn/mock/669375e8b60619df17f220b4/qing-ming',
    timeout: 5000
})

export default instance
