<!--
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-14 17:14:32
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-21 11:16:07
 * @FilePath: /vite-vue3-ts/src/components/navbar/src/navbar-top-actions.vue
 * @Description: 操作栏(可自定义配置颜色，自定义触发事件)
-->
<template>
  <div class="navbar-top-actions flex justify-between">
    <!-- <close-outlined class="circle close" />
    <minus-outlined class="circle narrow" />
    <arrows-alt-outlined class="circle zoom" /> -->
    <slot></slot>
    <component
      v-for="navbar in navbars"
      :is="navbar.icon"
      class="circle"
      v-bind="{ ...navbar }"
    ></component>
  </div>
</template>

<script lang="ts" setup>
import { NavbarActionsInstance, NavbarActionsProps } from "../types/actions"
const navbars = shallowRef<NavbarActionsProps>([])

const emit = defineEmits<{
  (e: "register", methods: NavbarActionsInstance): void
}>()

const setNavbarActionsProps = (props: NavbarActionsProps) => {
  navbars.value = props
}

const methods: NavbarActionsInstance = {
  setNavbarActionsProps,
}

emit("register", methods)
</script>
<style lang="less" scoped>
.navbar-top-actions {
  margin: 10px 10px 0;
  width: 70px;
  height: 16px;

  :deep(svg) {
    visibility: hidden;
    width: 8px;
    height: 16px;
  }

  &:hover {
    :deep(svg) {
      visibility: visible;
    }
  }

  .circle {
    width: 16px;
    height: 16px;
    border-radius: 8px;
  }

  .close {
    background-color: #ee655a;
  }

  .narrow {
    background-color: #e0c04c;
  }

  .zoom {
    background-color: #72be47;
  }
}
</style>
