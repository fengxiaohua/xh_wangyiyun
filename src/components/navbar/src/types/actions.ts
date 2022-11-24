/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-17 16:56:32
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-18 14:42:12
 * @FilePath: /vite-vue3-ts/src/components/navbar/src/types/actions.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IconBaseProps } from "@ant-design/icons-vue/lib/components/Icon"
import { Component } from "vue"

export interface NavbarItem extends IconBaseProps {
  icon: Component
}

export type NavbarActionsProps = Array<NavbarItem>

export interface NavbarActionsInstance {
  // setProps(): void
  setNavbarActionsProps(navbarActionsProps: NavbarActionsProps): void
}

export type Register = (navbarInstance: NavbarActionsInstance) => void

export type useNavbarActionsRetuenType = [Register, NavbarActionsInstance]
