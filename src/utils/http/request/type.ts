/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-22 15:08:52
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-22 15:26:48
 * @FilePath: /vite-vue3-ts/src/utils/http/request/type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { AxiosRequestConfig, AxiosResponse } from "axios"

// 定义一个接口,表示这个接口的实例要有这4个属性,当然不是必须的,是可选的
// 传入一个泛型,默认值是AxiosResponse
export interface XHRequestInterceptors<T = AxiosResponse> {
  // 拦截器都是可选的
  // 请求拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  // 请求错误拦截
  requestInterceptorCatch?: (error: any) => any
  // 响应拦截
  // 由于我们在前面直接将res.data返回了,所以这里如果传入了T,那么返回的类型就是传入的T
  responseInterceptor?: (res: T) => T
  // 响应错误拦截
  responseInterceptorCatch?: (error: any) => any
}

// 定义一个新的接口,继承于AxiosRequestConfig,表示我们传入的参数要有interceptors和showLoading,当然也是可选的
export interface XHRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  // 对原来的AxiosRequestConfig进行扩展,添加拦截器和是否显示loading,可选的
  interceptors?: XHRequestInterceptors<T>
  loading?: boolean
}
