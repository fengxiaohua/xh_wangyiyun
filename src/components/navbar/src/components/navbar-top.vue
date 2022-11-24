<!--
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-14 16:28:27
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-21 11:22:43
 * @FilePath: /vite-vue3-ts/src/views/home/component/navbar/navbar-top.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="navbar-top flex justify-between">
    <NavbarTopActions @register="registerNavbarActions" />
    <NavbarTopHistory />
  </div>
</template>

<script lang="ts" setup>
import NavbarTopActions from "./navbar-top-actions.vue"
import NavbarTopHistory from "./navbar-top-history.vue"
import {
  ArrowsAltOutlined,
  MinusOutlined,
  CloseOutlined,
} from "@ant-design/icons-vue"
import { useNavbarActions } from "../hooks/useNavbarActions"

const [registerNavbarActions] = useNavbarActions([
  {
    icon: CloseOutlined,
    class: "close",
    onClick: () => {
      console.log("close")
    },
  },
  {
    icon: MinusOutlined,
    class: "narrow",
    onClick: () => {
      console.log("narrow")
    },
  },
  {
    icon: ArrowsAltOutlined,
    class: "zoom",
    onClick: () => {
      console.log("zoom")
    },
  },
])
</script>
<style lang="less" scoped>
.navbar-top {
  min-height: @header-height;
  max-height: @header-height;
  background-color: @navbar-top-color;
}
</style>
