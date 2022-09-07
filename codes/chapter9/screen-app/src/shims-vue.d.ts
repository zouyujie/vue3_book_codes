/* eslint-disable */
//declare声明宣告， 声明一个ambient module(即:没有内部实现的 module声明) 
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// -----------自定义--------------
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.yaml'
declare module '*.json'

import { ElMessage } from 'element-plus'
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $message: ElMessage
    }
  }

  declare module 'vue-router' {
    interface RouteMeta {
      roles?: string[]
    }
}
declare module '*.json' {
  const value: any;
  export default value;
}
declare module '*.js' ;