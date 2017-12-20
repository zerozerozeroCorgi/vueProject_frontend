import VueRouter from "vue-router";

import appGoodsHomeComponent from "../component/goods/GoodsHome.vue";
import appGoodsDetailomponent from "../component/goods/detail/GoodsDetail.vue";
import appGoodsMoreComponent from "../component/goods/more/GoodsMore.vue";

export default new VueRouter({
    routes: [
        // 重定向"/"
        {path: "/", redirect: "/goods"},
        {name: "g", path: "/goods", component: appGoodsHomeComponent},
        {name: "gd", path: "/goods/detail/:id", component: appGoodsDetailomponent},
        {name: "gm", path: "/goods/more", component: appGoodsMoreComponent},
        
    ]
});