<template>
    <div class="section">
        <div class="wrapper">
            <div class="wrap-box">
                <!--类别菜单-->
                <div class="left-220" style="margin:0;">
                    <div class="banner-nav">
                        <ul>
                            <!--此处声明下面可重复循环-->

                            <li v-for="item in catelist" :key="item.id">
                                <h3>
                                    <i class="iconfont icon-arrow-right"></i>
                                    <span>{{item.title}}</span>
                                    <p>
                                        <span v-for="subItem in item.subcates" :key="subItem.id">{{subItem.title}}&nbsp;&nbsp;</span>
                                    </p>
                                </h3>
                                <div class="item-box">
                                    <!--如有三级分类，此处可循环-->
                                    <dl>
                                        <dt>
                                            <router-link :to="{name: 'gd', params: {id: item.id}}">{{item.title}}</router-link>
                                        </dt>
                                        <dd>
                                            <app-menu :menu="item.subcates"></app-menu>
                                        </dd>
                                    </dl>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <!--/类别菜单-->

                <!--幻灯片-->
                <div class="left-705">
                    <div class="banner-img">
                        <el-carousel indicator-position="outside">
                            <el-carousel-item v-for="item in sliderlist" :key="item.id">
                                <img :src="item.img_url" alt="">
                            </el-carousel-item>
                        </el-carousel>

                    </div>
                </div>
                <!--/幻灯片-->

                <!--推荐商品-->
                <div class="left-220">
                    <ul class="side-img-list">

                        <li v-for="(item,i) in toplist" :key="item.id">
                            <div class="img-box">
                                <label>{{i + 1}}</label>
                                <img :src="item.img_url">
                            </div>
                            <div class="txt-box">
                                <router-link :to="{name: 'gd', params: {id: item.id}}">{{ item.title }}</router-link>
                                <span>{{item.add_time}}</span>
                            </div>
                        </li>


                    </ul>
                </div>
                <!--/推荐商品-->
            </div>
        </div>
    </div>
</template>

<script>
    import MenuComponent from "./Menu.vue";
    export default {
        data() {
            return {
                catelist: [],
                sliderlist: [],
                toplist: []
            }
        },
        components: {
            appMenu: MenuComponent
        },
        methods: {
            getTopData() {
                this.$http.get(this.$api.goodsTop)
                        .then(res => {
                            if (res.data.status == 0) {
                                this.catelist = res.data.message.catelist;
                                this.sliderlist = res.data.message.sliderlist;
                                this.toplist = res.data.message.toplist;
                            }
                        });
            }
        },
        created() {
            this.getTopData();
        }
    }
</script>

<style scoped lang="less">
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .el-carousel {
        height: 100%;
    }
    .banner-img img {
        height: 100%;
    }
</style>