<template>
    <div>
        <!-- 导航栏 -->
        <app-brumdsnav></app-brumdsnav>

        <!-- 商品详情 -->
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <!--页面左边-->
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <!--商品图片-->
                            <div class="pic-box">
                                <app-left-img :imglist="goodsDetail.imglist"></app-left-img>
                            </div>
                            <!--/商品图片-->

                            <!--商品信息-->
                            <app-left-info :goodsinfo="goodsDetail.goodsinfo"></app-left-info>
                            <!--/商品信息-->
                        </div>

                        <div id="goodsTabs" class="goods-tab bg-wrap">

                            <!--选项卡-->
                            <el-tabs type="border-card">
                                <!-- 商品介绍 -->
                                <el-tab-pane label="商品介绍">
                                    <div class="tab-content entry" v-html="goodsDetail.goodsinfo.content" style="display:block;">
                                    </div>
                                </el-tab-pane>

                                <!-- 评论 -->
                                <el-tab-pane label="商品评论">
                                    <div class="tab-content" style="display: block;">
                                        <!--网友评论, 获取商品模块下指定id的评论列表,与发布评论-->
                                        <app-comment tablename="goods" :artID="id"></app-comment>
                                        <!--/网友评论-->
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                            <!--/选项卡-->
                        </div>
                    </div>
                    <!--/页面左边-->

                    <!--页面右边-->
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <app-right :hotgoodslist="goodsDetail.hotgoodslist"></app-right>
                        </div>
                    </div>
                    <!--/页面右边-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BrumdsNavComponent from "./frame/BrumdsNav.vue";
    import LeftInfoComponent from "./frame/LeftInfo.vue";
    import LeftImgComponent from "./frame/LeftImg.vue";
    import RightComponent from "./frame/Right.vue";
    import CommentComponent from "../../common/Comment.vue";

    export default {
        data() {
            return {
                id: this.$route.params.id,
                goodsDetail: {
                    goodsinfo: {},
                    imglist: [],
                    hotgoodslist: []
                }
            }
        },
        components: {
            appBrumdsnav: BrumdsNavComponent,
            appLeftImg: LeftImgComponent,
            appLeftInfo: LeftInfoComponent,
            appRight: RightComponent,
            appComment: CommentComponent
        },
        methods: {
            getGoodsDetail() {
                this.$http.get(this.$api.goodsDetail + this.id)
                        .then(res => {
                            this.goodsDetail = res.data.message;
                        });
            }
        },
        created() {
            this.getGoodsDetail();
        },
        watch: {
            $route() {
                this.id = this.$route.params.id;  // 修改为最新的id
                this.getGoodsDetail();            // 重新请求数据更新页面内容
            }
        }
    }
</script>

<style scoped>

</style>