<template>
    <div>
        <div class="frame">
            <header class="top-nav">
                <div class="logo-name">
                    <img src="../../static/img/logo.png" alt="" class="logo btn" @click="index">
                    <p class="web-name">西南名族大学222123</p>
                </div>
                <ul class="nav-list" id="nav" >
                    <router-link to="/home" tag="li" active-class="current-page">首页查看</router-link>
                    <router-link to="/register" tag="li" active-class="current-page">预约挂号</router-link>
                    <router-link to="/archives" tag="li" active-class="current-page">健康档案</router-link>
                    <router-link to="/query" tag="li" active-class="current-page">查123</router-link>
                </ul>
                <div class="seprate-line"></div>
            </header>
        </div>
        <div id="content">
            <router-view></router-view>
        </div>
        <footer>
            Copyright &copy; 2000-2017 39.net All Rights Reserved. 西安第四医院 粤ICP备10060494 粤公网安备 44010602000144号 版权所有
        </footer>
    </div>
</template>
<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    // 引用路由配置文件
    import routes from '../../config/routes.js'
    //使用路由
    Vue.use(VueRouter);
    // Vue.use(VueResource);
    // 使用配置文件规则
    const router = new VueRouter({
        routes
    })

    export default {
        data(){
            return{
                msg:"哈喽baby"
            }
        },
        components:{},
        methods:{   //methods方法
            index:function(){
                this.$router.push("home")
            }

        },
        watch:{
            '$route' (to,from){
                var str=router.currentRoute.path.split("/")[1];
                console.log(str)
            }
        }
    }
</script>