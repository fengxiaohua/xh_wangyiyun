/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-02 17:50:34
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-22 14:04:20
 * @FilePath: /vite-vue3-ts/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import Antd from "ant-design-vue"

// 引入样式
import "ant-design-vue/dist/antd.less"
import "virtual:windi.css"
import "/@/design/index.less"

// iconfont 图标库
import "/@/assets/fonts/iconfont.css"
import { registerGlobComp } from "./components/registerGlobComp"

const app = createApp(App)

app.use(router)
app.use(Antd)

// 注册本地全局组件
registerGlobComp(app)

app.mount("#app")
