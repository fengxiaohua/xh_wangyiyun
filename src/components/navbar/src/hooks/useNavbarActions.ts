/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-17 16:55:34
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-18 11:35:33
 * @FilePath: /vite-vue3-ts/src/components/navbar/src/hooks/useNavbarActions.ts
 * @Description: useNavbarActions() hooks 自定义头部组件icon
 */
import {
  useNavbarActionsRetuenType,
  NavbarActionsProps,
  NavbarActionsInstance,
} from "../types/actions"
import { isProdMode } from "/@/utils/env"

export function useNavbarActions(
  props?: NavbarActionsProps
): useNavbarActionsRetuenType {
  if (!getCurrentInstance()) {
    throw new Error(
      "useNavbarActions() can only be used inside setup() or functional components"
    )
  }

  const navbarActions = ref<Nullable<NavbarActionsInstance>>(null)
  const loaded = ref(false)

  function register(instance: NavbarActionsInstance) {
    if (unref(loaded) && isProdMode()) return

    navbarActions.value = instance
    props && instance.setNavbarActionsProps(props)
    loaded.value = true
  }

  const methods: NavbarActionsInstance = {
    setNavbarActionsProps: (navbarActionsProps: NavbarActionsProps) => {
      unref(navbarActions)?.setNavbarActionsProps(navbarActionsProps)
    },
  }

  return [register, methods]
}
