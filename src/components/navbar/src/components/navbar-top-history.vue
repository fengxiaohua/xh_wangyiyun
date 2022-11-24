<!--
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-14 17:14:54
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-21 14:07:37
 * @FilePath: /vite-vue3-ts/src/components/navbar/src/navbar-top-history.vue
 * @Description: 导航：前进后退（没有前进或者后退则隐藏）
-->
<template>
  <div class="navbar-top-history flex items-end pb-2.5">
    <left-outlined @click="goBack" />
    <right-outlined class="mr-2.5 ml-3" @click="goNext" />
  </div>
</template>

<script lang="ts" setup>
import { LeftOutlined, RightOutlined } from "@ant-design/icons-vue"

const goBack = () => {}
const goNext = () => {}
</script>
<style lang="less" scoped>
:deep(span) {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9c9c9c;
  font-size: 14px;
  width: 24px;
  height: 24px;
  &:hover {
    border-radius: 12px;
    background-color: #858383;
  }
}
</style>
