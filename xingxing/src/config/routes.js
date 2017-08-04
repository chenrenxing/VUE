/**
 * Created by DELL on 2017/8/1.
 */
//// 引入子路由
//import Frame from '../components/subroute.vue'
// 引入模板
import index from '../components/index/index.vue'
//引入导航页面
import Home from '../components/home/home.vue'
// 配置路由
export default [
    {
        path: "/", component: index, children: [
        //{path:"/",redirect:'/home'},//以前为Home 出现bug不能进入redirect重定向
        { path: "/", component: Home },
        { path: "/home", component: Home }
        ]
    }
]