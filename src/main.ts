import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import '@/style/index.scss'

// 注册使用 svg icon
// https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md
import 'virtual:svg-icons-register'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as Icons from '@element-plus/icons-vue'

// element-plus 内置暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'

import { registerGlobComp } from '@/components'

import errorHandler from '@/utils/errorHandler'

// 导入 下载的 iconfont
// import './assets/iconfont/iconfont.js'
// import './assets/iconfont/iconfont.css'

const app = createApp(App)

app.config.errorHandler = errorHandler

registerGlobComp(app)

// 注册element Icons组件
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons])
})

app.use(router).use(store).use(ElementPlus).mount('#app')
