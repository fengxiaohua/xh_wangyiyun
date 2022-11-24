/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-22 10:25:16
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-22 16:20:50
 * @FilePath: /vite-vue3-ts/src/api/menu/index.ts
 * @Description: 路由数据，模拟后端数据
 */

import { Result } from "../baseModal"
import { getMenuListResultModel } from "./model/menuModel"
import xhRequest from "/@/utils/http"

enum API {
  GET_ROUTES = "/api/route/getRoutes",
}

export function getRouterApi() {
  return xhRequest.get<Result<getMenuListResultModel>>({ url: API.GET_ROUTES })
}
