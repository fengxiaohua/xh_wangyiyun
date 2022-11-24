<!--
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-21 16:45:48
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-24 15:36:14
 * @FilePath: /vite-vue3-ts/src/components/navbar/src/components/navbar-content-login.vue
 * @Description: 登录
-->
<template>
  <div class="navbar-content-login flex h-12 items-center pl-5 pt-2.5 mb-2.5">
    <Icon icon="user" size="40" color="#FFFFFF" />
    <div @click="login" class="ml-3 cursor-pointer">未登录</div>
    <Icon
      @click="login"
      class="ml-2.5 cursor-pointer"
      icon="24gf-play"
      size="12"
      color="#636363"
    />
  </div>
</template>

<script lang="ts" setup>
const login = () => {
  console.log("login")
}
</script>
<style lang="less" scoped>
.navbar-content-login {
  color: #b1b1b1;
}
</style>
