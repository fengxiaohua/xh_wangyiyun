<!--
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-24 09:45:12
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-24 15:18:19
 * @FilePath: /vite-vue3-ts/src/components/navbar/src/components/navbar-content-menu-title.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="navbar-content-menu-title flex h-10 items-center">
    <Icon icon="shousuo1" />
    <div class="flex justify-between w-full pr-5 items-center">
      <div class="text-xs">{{ menuTitle.name }}</div>
      <Icon
        v-if="menuTitle?.meta?.icon"
        :icon="menuTitle.meta.icon  as string"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouteItem } from "/@/api/menu/model/menuModel"
import { Icon } from "/@/components/icon"
defineProps<{
  menuTitle: RouteItem
}>()
</script>
<style lang="less" scoped></style>
