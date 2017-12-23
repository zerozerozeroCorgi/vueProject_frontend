import Vue from "vue";
import Vuex from 'vuex';
import VueRouter from "vue-router";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Filters from "./filter";

// 启用插件
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(Filters);

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
    router,
    store: new Vuex.Store({
        state: {
            shopcartTotal: 0 
        },

        // 获取状态, 记住以属性的方式使用
        getters: {
            // 计算购物车商品总数
            shopcartTotal(state) {
                return state.shopcartTotal;
            }
        },

        // 修改状态, 记住要commit方法调用
        mutations: {
            // 添加数量
            upShopcartTotal(state, number) {
                state.shopcartTotal += number;
            }
        }
    })
});