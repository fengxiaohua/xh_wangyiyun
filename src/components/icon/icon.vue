<!--
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-21 15:33:33
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-24 15:00:21
 * @FilePath: /vite-vue3-ts/src/components/icon/icon.vue
 * @Description: icon组件
-->
<template>
  <i :class="`xiaohang-icons wangyiyun-icon-${icon}`" :style="getWrapStyle" />
</template>
<script lang="ts">
export default {
  name: "Icon",
}
</script>
<script lang="ts" setup>
import { isString } from "@vue/shared"
import { CSSProperties } from "vue"

const props = withDefaults(
  defineProps<{
    size?: number | string
    icon: string
    color?: string
  }>(),
  {
    size: () => 16,
  }
)

const getWrapStyle = computed((): CSSProperties => {
  const { size, color } = props
  let fs = size
  if (isString(size)) {
    fs = parseInt(size, 10)
  }

  return {
    fontSize: `${fs}px`,
    color: color,
    display: "inline-flex",
  }
})
</script>
<style lang="less" scoped></style>
