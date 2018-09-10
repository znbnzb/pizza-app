import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'

Vue.use(VueRouter)

axios.defaults.baseURL = 'https://wd0974067573qpyafs.wilddogio.com/';  //配置全局的默认路径

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
