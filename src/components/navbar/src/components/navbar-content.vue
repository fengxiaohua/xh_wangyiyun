<!--
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-14 16:28:35
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-24 15:02:11
 * @FilePath: /vite-vue3-ts/src/views/home/component/navbar/navbar.content.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="navbar-content flex flex-col">
    <NavbarContentLogin />
    <NavbarContentMenu />
  </div>
</template>

<script lang="ts" setup>
import NavbarContentLogin from "./navbar-content-login.vue"
import NavbarContentMenu from "./navbar-content-menu.vue"
</script>
<style lang="less" scoped>
.navbar-content {
  height: calc(100% - @header-height);
  background-color: @navbar-content-color;
  color: #b1b1b1;
  font-weight: 600;
}
</style>
