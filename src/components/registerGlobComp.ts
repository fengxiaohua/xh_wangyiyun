/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-21 17:21:54
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-21 17:23:53
 * @FilePath: /vite-vue3-ts/src/components/registerGlobComp.ts
 * @Description: 全局注册组件
 */
import type { App } from "vue"
import { Icon } from "./icon"

export function registerGlobComp(app: App) {
  app.component(Icon.name, Icon)
}
