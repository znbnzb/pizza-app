import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'

Vue.use(VueRouter)

axios.defaults.baseURL = 'https://api.bmob.cn/1/classes';  //配置全局的默认路径
axios.defaults.headers.post["Content-type"] = "application"
axios.defaults.headers.post["X-Bmob-Application-Id"] = "9aa35c79101ae393a3cae8480f491f40"
axios.defaults.headers.post["X-Bmob-REST-API-Key"] = "7c3962ad543cdc756e5a3d1ba40be2c3"


axios.defaults.headers.get["X-Bmob-Application-Id"] = "9aa35c79101ae393a3cae8480f491f40"
axios.defaults.headers.get["X-Bmob-REST-API-Key"] = "7c3962ad543cdc756e5a3d1ba40be2c3"

axios.defaults.headers.delete["X-Bmob-Application-Id"] = "9aa35c79101ae393a3cae8480f491f40"
axios.defaults.headers.delete["X-Bmob-REST-API-Key"] = "7c3962ad543cdc756e5a3d1ba40be2c3"

Vue.prototype.$http = axios;

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
