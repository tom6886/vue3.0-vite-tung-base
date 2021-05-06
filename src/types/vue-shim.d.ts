/*
 * @Author: 汤波
 * @Date: 2020-10-14 09:18:00
 * @Description: 
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-14 15:54:53
 * @FilePath: \vue3.0-tung-base\src\types\vue-shim.d.ts
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module "*.svg";