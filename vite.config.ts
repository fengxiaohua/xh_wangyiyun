/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-02 17:50:34
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-24 13:24:29
 * @FilePath: /vite-vue3-ts/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import WindiCss from "vite-plugin-windicss"
import { getThemeVariables } from "ant-design-vue/dist/theme"
import { resolve } from "path"

import AutoImport from "unplugin-auto-import/vite"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"

// 支持mock
import { viteMockServe } from "vite-plugin-mock"

const modifyVars = getThemeVariables({ dark: false })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCss(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "auto-import.d.ts",
      resolvers: [AntDesignVueResolver()],
    }),
    viteMockServe({
      mockPath: "./mock/",
      supportTs: false, // 监听TS文件，这里要注意下js文件的话填false
      localEnabled: true, // 开发环境
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, //注意，这一句是在less对象中，写在外边不起作用
        modifyVars: {
          //在这里进行主题的修改，参考官方配置属性，此处以后使用配置文件形式返回对象
          ...modifyVars,
          hack: `${modifyVars.hack} @import (reference) "${resolve(
            "src/design/color.less"
          )}";`,
          "header-height": "50px",
          "footer-height": "60px",
        },
      },
    },
  },
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: pathResolve("src") + "/",
      },
    ],
  },
})

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir)
}
