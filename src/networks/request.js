import axios from 'axios'

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //2.网络拦截
  //2.1请求拦截器
  axios.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
    return err;
  })

  //2.2响应拦截器
  axios.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
    return err;

  })


  //3.发送真正的网络请求
  return instance(config)
}