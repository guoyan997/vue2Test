/**
 * Created by guoyan on 2018/6/21.
 */
export default {
  method: 'get',
  // 基础url前缀
  baseURL: 'http://localhost:8080',
  // 请求头信息
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: false,
  // 返回数据类型
  responseType: 'json'
}
