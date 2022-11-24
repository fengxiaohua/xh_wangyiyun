/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-03 09:11:02
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-23 13:41:54
 * @FilePath: /vite-vue3-ts/src/router/index.ts
 * @Description: 路由信息（图标，路由，中文名称）
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { getRouterApi } from "/@/api/menu"
import { RouteItem } from "./../api/menu/model/menuModel"
const modules = import.meta.glob("../views/**/*.vue")

let { data } = await getRouterApi()

data?.map((item) => replaceComponentPath(item))
function replaceComponentPath(routerItem: RouteItem) {
  const component = routerItem?.component
  component &&
    (routerItem.component = modules[`../views${routerItem.component}`])
  if (routerItem?.children?.length) {
    routerItem.children.forEach((item) => {
      replaceComponentPath(item)
    })
  }
}

const history = createWebHistory()
const routes: Array<RouteRecordRaw> = data as Array<RouteRecordRaw>
const router = createRouter({
  history,
  routes,
})
export default router
