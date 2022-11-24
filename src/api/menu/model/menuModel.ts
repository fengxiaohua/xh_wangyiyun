/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-22 14:43:56
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-22 14:44:40
 * @FilePath: /vite-vue3-ts/src/api/menu/model/menuModel.ts
 * @Description: router信息
 */
import type { RouteMeta } from "vue-router"
export interface RouteItem {
  path: string
  component: any
  meta: RouteMeta
  name?: string
  alias?: string | string[]
  redirect?: string
  caseSensitive?: boolean
  children?: RouteItem[]
}

/**
 * @description: Get menu return value
 */
export type getMenuListResultModel = RouteItem[]
