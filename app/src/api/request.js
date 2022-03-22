//对于axios进行二次封装
import axios from 'axios'
//プログレスバーをインポート
import nprogress from 'nprogress'

import store from '@/store'
//引入进度条样式
import 'nprogress/nprogress.css'
//START进度条开始 Done进度条结束

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000,
})
//请求拦截器
requests.interceptors.request.use((config) => {
  //进度条开始动
  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token
  }
  nprogress.start()
  return config
})

// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    //进度条结束
    nprogress.done()
    return res.data
  },
  (error) => {
    return Promise.reject(new Error('faile'))
  }
)

export default requests
