/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-22 15:08:32
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-22 15:39:00
 * @FilePath: /vite-vue3-ts/src/utils/http/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// service统一出口
import XHRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

// 创建一个新的请求,并传入参数
const xhRequest = new XHRequest({
  // 传入baseurl
  baseURL: BASE_URL,
  // 传入超时时间
  timeout: TIME_OUT,
  // 传入拦截器
  interceptors: {
    requestInterceptor: (config) => {
      // 给当前请求实例所有的请求添加token
      const token = ""
      if (token && config.headers) {
        // 模板字符串进行拼接
        config.headers.Authorization = `Bearer ${token}`
      }

      console.log("请求成功的拦截")
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log("请求失败的拦截")
      return err
    },
    responseInterceptor: (res) => {
      console.log("响应成功的拦截")
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log("响应失败的拦截")
      return err
    },
  },
})

export default xhRequest
