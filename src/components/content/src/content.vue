<!--
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-14 14:48:53
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-14 16:42:56
 * @FilePath: /vite-vue3-ts/src/views/home/component/content/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content h-full">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="less" scoped>
.content {
  background-color: @content-color;
}
</style>
