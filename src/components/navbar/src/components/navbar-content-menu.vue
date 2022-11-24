<!--
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-22 10:20:17
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-24 15:24:23
 * @FilePath: /vite-vue3-ts/src/components/navbar/src/components/navbar-content-menu.vue
 * @Description: 基础菜单（固有）
-->
<template>
  <div class="navbar-content-menu overflow-y-auto overflow-x-hidden">
    <div v-for="route in menusData">
      <NavbarContentMenuTitle v-if="route[0]?.name" :menuTitle="route[0]" />
      <NavbarContentMenuItem
        v-if="route[0]?.children?.length"
        :menuItems="route[0]?.children"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavbarContentMenuTitle from "./navbar-content-menu-title.vue"
import NavbarContentMenuItem from "./navbar-content-menu-item.vue"
import { getMenuListResultModel } from "/@/api/menu/model/menuModel"

const router = useRouter()
const routes = router.getRoutes()
let menusData: Array<getMenuListResultModel> = []

// 设置四个目录数据
enum MENU {
  BASE_MENU = "base",
  MY_MUSIC = "myMusic",
  CREATE_MUSIC = "createMusic",
  COLLECT_MUSIC = "collectMusic",
}
const PROJECT_NAME = "wangyiyun_xh"

const fotmarMenusData = (routes: getMenuListResultModel) => {
  let key: keyof typeof MENU
  for (key in MENU) {
    menusData.push(getMenusItem(routes, MENU[key]))
  }
}

const getMenusItem = (routes: getMenuListResultModel, menuType: MENU) => {
  return routes?.filter(
    (route) => route.path === `/${PROJECT_NAME}/${menuType}`
  )
}

fotmarMenusData(routes as any)
</script>
<style lang="less" scoped></style>
