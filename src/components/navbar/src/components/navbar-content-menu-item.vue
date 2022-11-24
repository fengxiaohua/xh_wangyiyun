<!--
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-24 09:45:44
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-24 15:41:41
 * @FilePath: /vite-vue3-ts/src/components/navbar/src/components/navbar-content-menu-item.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="flex px-4 py-1.5 hover:bg-dark-700" v-for="item in menuItems">
    <Icon :icon="item.meta.icon" />
    <div class="flex justify-between items-center w-full px-1.5">
      <div>{{ item.name }}</div>
      <Icon v-if="item.name === '我喜欢的音乐'" icon="A" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouteItem } from "/@/api/menu/model/menuModel"
defineProps<{
  menuItems: Array<RouteItem>
}>()
</script>
<style lang="less" scoped></style>
