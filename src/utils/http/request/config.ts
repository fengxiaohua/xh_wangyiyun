/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-22 15:08:43
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-25 11:38:04
 * @FilePath: /vite-vue3-ts/src/utils/http/request/config.ts
 * @Description:
 */

// 根据process.env.NODE_ENV区分
// 开发环境: development
// 生成环境: production
// 测试环境: test

const PROJECT_NAME = "xh_wangyiyun"
let BASE_URL = `https://www.fastmock.site/mock/eeba86a8af715531dfc7e4be3d6aee25/${PROJECT_NAME}`
const TIME_OUT = 10000

// if (process.env.NODE_ENV === "development") {
//   BASE_URL = "http://127.0.0.1:5173/"
// } else if (process.env.NODE_ENV === "production") {
//   BASE_URL = ""
// } else {
//   BASE_URL = ""
// }

export { BASE_URL, TIME_OUT }
