<!--
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-14 14:47:54
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-24 13:15:26
 * @FilePath: /vite-vue3-ts/src/views/home/component/navbar/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="navbar">
    <NavbarTop />
    <NavbarContent />
  </div>
</template>

<script lang="ts" setup>
import NavbarTop from "./components/navbar-top.vue"
import NavbarContent from "./components/navbar-content.vue"
</script>
<style lang="less" scoped>
.navbar {
  width: 230px;
}
</style>
