/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-22 16:19:42
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-22 16:20:20
 * @FilePath: /vite-vue3-ts/src/api/baseModal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface Result<T> {
  code: number | string
  msg: string
  data: T
}
