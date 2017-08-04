<template>
    <div class="frame">
    <div class="top-bg-img">
        <img src="../../static/img/header-bg.png" alt="" class="header-bg">
        <div class="fast-register">
            <p class="fast-register-title">立即预约</p>
            <p class="department">科室：
                <select class="select-frame">
                <option value="">请选择科室</option>
            </select>
            </p>
            <p class="department">医生：
                <select class="select-frame">
                <option value="">请选择医生</option>
            </select>
            </p>
            <p class="department">日期：
                <select class="select-frame">
                <option value="">2017-2-13</option>
            </select>
            </p>
            <button class="register-btn" @click="fastAppointment">立即预约</button>
        </div>
    </div>
    <div class="clear-flex">
        <ul class="register-process">
            <li class="left-line"></li>
            <li class="register-title">挂号流程</li>
            <li class="right-line"></li>
        </ul>
    </div>
    <div class="icon-guide">
        <div class="icon-guide-step">
            <img src="../../static/img/department.png" alt="" class="step-img">
            <p class="step-name">选择科室</p>
        </div>
        <img src="../../static/img/process.png" alt="" class="process-img">
        <div class="icon-guide-step">
            <img src="../../static/img/expert.png" alt="" class="step-img">
            <p class="step-name">选择专家</p>
        </div>
        <img src="../../static/img/process.png" alt="" class="process-img">
        <div class="icon-guide-step">
            <img src="../../static/img/select-time.png" alt="" class="step-img">
            <p class="step-name">选择就诊时间</p>
        </div>
        <img src="../../static/img/process.png" alt="" class="process-img">
        <div class="icon-guide-step">
            <img src="../../static/img/select-interval.png" alt="" class="step-img">
            <p class="step-name">选择就诊时间段</p>
        </div>
        <img src="../../static/img/process.png" alt="" class="process-img">
        <div class="icon-guide-step">
            <img src="../../static/img/confirm.png" alt="" class="step-img">
            <p class="step-name">确认预约</p>
        </div>
    </div>
    <div class="clear-box">
        <ul class="register-process">
            <li class="left-line"></li>
            <li class="register-title">就诊须知</li>
            <li class="right-line"></li>
        </ul>
    </div>
    <div class="info-box">
        <img src="../../static/img/info.png" alt="" class="info-img">
        <div class="info-text">
           就诊指南是新型的网站运作方式，可以网上进行预约挂号。就诊指南联合各省市医院支持市民网上预约选择医院、
           科室、专家，与医生联系确定预约时间。网站汇集全国300座城市医院信息，包含联系方式、医生出诊时间、公交
           路线、网友点评等。网站基本介绍就诊指南新型的网站运作方式，是一个可以网上预约挂号的平台。<br><br>
           医生出诊时间、公交路线、网友点评等。网站基本介绍就诊指南新型的网站运作方式，是一个可以网上预约挂号的平台。
        </div>
    </div>
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
        components:{},
        methods:{
            fastAppointment:function(){
                 
                this.$router.push("register/doctorDetail");
            }
        }
    }
</script>
