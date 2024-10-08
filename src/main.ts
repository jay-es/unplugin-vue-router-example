import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import { DataLoaderPlugin } from 'unplugin-vue-router/data-loaders'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

createApp(App)
  .use(DataLoaderPlugin, { router }) // router より前に書く
  .use(router)
  .mount('#app')
