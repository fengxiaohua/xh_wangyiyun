/*
 * @Author: fengxiaohua 472843286@qq.com
 * @Date: 2022-11-18 11:05:52
 * @LastEditors: fengxiaohua 472843286@qq.com
 * @LastEditTime: 2022-11-18 11:06:14
 * @FilePath: /vite-vue3-ts/src/utils/env.ts
 * @Description: env环境定义
 */
/**
 * @description: Development mode
 */
export const devMode = "development"

/**
 * @description: Production mode
 */
export const prodMode = "production"

/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnv(): string {
  return import.meta.env.MODE
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD
}
