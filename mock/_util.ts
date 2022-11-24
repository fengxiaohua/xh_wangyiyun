/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-22 14:14:52
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-22 14:34:06
 * @FilePath: /vite-vue3-ts/mock/_util.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function resultSuccess<T = Recordable>(
  data: T,
  { msg = "ok", code = 200 } = {}
) {
  return {
    code,
    msg,
    data,
  }
}

export function resultError(
  message = "Request failed",
  { code = -1, result = null } = {}
) {
  return {
    code,
    result,
    message,
    type: "error",
  }
}
