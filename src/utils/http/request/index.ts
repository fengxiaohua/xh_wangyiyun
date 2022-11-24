/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-22 15:08:47
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-22 15:36:55
 * @FilePath: /vite-vue3-ts/src/utils/http/request/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { AxiosInstance } from "axios"
import axios from "axios"
import { XHRequestInterceptors, XHRequestConfig } from "./type"

const DEFAULT_LOADING = true

class XHRequest {
  // axios实例
  instance: AxiosInstance
  // 当前请求实例的拦截器
  interceptors?: XHRequestInterceptors
  // 是否显示loading
  loading: boolean

  constructor(config: XHRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存的基本信息
    this.interceptors = config.interceptors
    this.loading = config.loading ?? DEFAULT_LOADING

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 2.添加所有的实例都有的拦截器
    // 请求的时候，先添加的拦截器后执行
    // 响应的时候，后添加的拦截器先执行
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有的实例都有的拦截器：请求成功拦截")
        return config
      },
      (err) => {
        console.log("所有的实例都有的拦截器：请求失败拦截")
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有的实例都有的拦截器: 响应成功拦截")
        // 因为我们需要的就是res.data,所以我们可以在所有请求实例的请求的响应拦截器里面,直接把res.data返回,这样我们就可以直接使用了
        const data = res.data
        // 判断当HttpErrorCode是200的时候,服务端和客户端一块自定义的错误信息
        if (data.returnCode === "-1001") {
          console.log("请求失败~, 错误信息")
        } else {
          return data
        }
      },
      (err) => {
        console.log("所有的实例都有的拦截器: 响应失败拦截")

        // 判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log("404的错误~")
        }
        return err
      }
    )
  }

  // 1.传入返回结果的类型T,这样在Promise中我们就知道返回值的类型是T了
  // 2.通过HYRequestConfig<T>,将返回值类型T告诉接口,从而在接口的返回响应拦截中指明返回值类型就是T
  request<T>(config: XHRequestConfig<T>): Promise<T> {
    // 返回一个Promise对象,好让使用者在外面拿到数据
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        // 如果有单个请求的拦截器,就执行一下这个函数,然后返回
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        // request里面有两个泛型,第一个泛型默认是any,第二个泛型是AxiosResponse
        // 由于前面我们已经将res.data直接返回了,所以其实最后的数据就是T类型的,所以我们在第二个泛型中要指定返回值的类型T
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading设置true, 这样不会影响下一个请求
          reject(err)
          return err
        })
    })
  }

  get<T>(config: XHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T>(config: XHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }

  delete<T>(config: XHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }

  patch<T>(config: XHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}

export default XHRequest
