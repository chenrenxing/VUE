/**
 * Created by DELL on 2017/8/1.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.config.debug = true;//开启错误提示
//引入主页界面
import App from "./App.vue"
//引入路由配置
import routes from './src/config/routes.js'
//Vue引入路由配置
Vue.use(VueRouter);
Vue.use(VueResource);
//使用配置文件规则
const router = new VueRouter({
    routes
});
new Vue({
    el: '#app',
    router:router,
    render: h => h(App)
});
