import Vue from "vue";

// 导入根组件
import AppComponent from "./component/App.vue";

import "./css/style.css";

new Vue({
    el: "#app",
    render: c => c(AppComponent)
});