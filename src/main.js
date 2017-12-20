import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(VueRouter);
Vue.use(ElementUI);

// 导入根组件
import AppComponent from "./component/App.vue";
import router from "./router/router.js";
import apiConfig from "./js/api_config";
import axios from "./js/axios_config";

Vue.prototype.$http = axios;
Vue.prototype.$api = apiConfig;

import "./css/style.css";

new Vue({
    el: "#app",
    render: c => c(AppComponent),
    router
});