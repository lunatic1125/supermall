import { request } from './request'
// 封装所有首页请求的数据  统一管理
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}