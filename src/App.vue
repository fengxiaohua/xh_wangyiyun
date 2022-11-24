<!--
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-02 17:50:34
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-24 13:26:22
 * @FilePath: /vite-vue3-ts/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="flex flex-col justify-between h-full">
    <div class="flex computedHeight overflow-hidden">
      <Navbar />
      <div class="flex flex-col flex-1">
        <Header />
        <Content>
          <RouterView />
        </Content>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import { Navbar } from "/@/components/navbar"
import { Header } from "./components/header"
import { Content } from "./components/content"
import { Footer } from "./components/footer"
</script>
<style lang="less" scoped>
.computedHeight {
  height: calc(100% - @footer-height);
}
</style>
