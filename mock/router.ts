/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-22 14:06:58
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-24 10:04:13
 * @FilePath: /vite-vue3-ts/mock/router.ts
 * @Description: mock路由
 */
import { MockMethod } from "vite-plugin-mock"
import { resultSuccess } from "./_util"
const routes = [
  // 默认路由跳转
  {
    path: "/wangyiyun_xh",
    redirect: "/wangyiyun_xh/base",
    children: [
      {
        path: "base",
        name: "",
        redirect: "wangyiyun_xh/base/findMusic",
        parent: "wangyiyun_xh",
        children: [
          {
            path: "findMusic",
            name: "发现音乐",
            component: "/base/findMusic/index.vue",
            meta: {
              icon: "wangyiyunyinyuemusic1193417easyiconnet",
              parent: "base",
            },
          },
          {
            path: "podcast",
            name: "播客",
            component: "/base/podcast/index.vue",
            meta: {
              icon: "shengbo",
              parent: "base",
            },
          },
          {
            path: "privateFM",
            name: "私人FM",
            component: "/base/privateFM/index.vue",
            meta: {
              icon: "FM_weixuanze",
              parent: "base",
            },
          },
          {
            path: "video",
            name: "视频",
            component: "/base/video/index.vue",
            meta: {
              icon: "caozuo-bofang",
              parent: "base",
            },
          },
          {
            path: "attention",
            name: "关注",
            component: "/base/attention/index.vue",
            meta: {
              icon: "People",
              parent: "base",
            },
          },
        ],
      },
      {
        path: "myMusic",
        name: "我的音乐",
        redirect: "wangyiyun_xh/myMusic/loveMusic",
        parent: "wangyiyun_xh",
        children: [
          {
            path: "loveMusic",
            name: "我喜欢的音乐",
            component: "/myMusic/loveMusic/index.vue",
            meta: {
              icon: "love",
              parent: "myMusic",
            },
          },
          {
            path: "iTunes",
            name: "iTunes音乐",
            component: "/myMusic/iTunes/index.vue",
            meta: {
              icon: "yinlemusic215",
              parent: "myMusic",
            },
          },
          {
            path: "download",
            name: "下载管理",
            component: "/myMusic/download/index.vue",
            meta: {
              icon: "download",
              parent: "myMusic",
            },
          },
          {
            path: "recentlyPlayed",
            name: "最近播放",
            component: "/myMusic/recentlyPlayed/index.vue",
            meta: {
              icon: "lishishuju",
              parent: "myMusic",
            },
          },
        ],
      },
      {
        path: "createMusic",
        name: "创建的歌单",
        redirect: "wangyiyun_xh/createMusic/",
        meta: {
          icon: "jiahao_o",
        },
        parent: "wangyiyun_xh",
      },
    ],
  },
]

export default [
  {
    url: "/api/route/getRoutes",
    method: "get",
    response: () => {
      return resultSuccess(routes)
    },
  },
] as MockMethod[]
