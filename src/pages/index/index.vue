<template>
    <div class="wrap-index">
        <van-nav-bar title="礼舍FEND系统"/>
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                :immediate-check="false"
        >
            <div class="lishe_van_cell" v-for="(vo,index) in dataList" :key="index">
                <van-cell :title="vo.activity_name" is-link @click="toDetails(vo.activity_id)"/>
            </div>
        </van-list>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                loading: true,
                finished: false,
                pages: 1,
                pageSize: 10,
                dataList: "",//列表
                oldPath: ""
            }
        },
        activated() {
            if (!objectEquals(this.oldPath, this.$route.query)) {
                //条件不同，重新加载
                debug("条件不同，重新加载");
                Object.assign(this.$data, this.$options.data());
                this.oldPath = this.$route.query;
                this.getList();
            }
            if (this.recordsObj) {
                this.getList()
            }
        },
        methods: {
            getList(){
                var self = this;
                self.$toast.loading({
                    duration: 0,       // 持续展示 toast
                    forbidClick: true, // 禁用背景点击
                    loadingType: 'spinner',
                    message: '数据加载中'
                });
                lisheJSON(process.env.VUE_APP_BASE_URL + "friend.friend.getactivitylist?callback=?", {
                    pages : self.pages,
                    pageSize : self.pageSize
                }, function (res) {
                    self.loading = false;
                    self.$toast.clear();
                    if (res.errcode == 0) {
                        if (self.pages == 1){
                            self.dataList = res.data;
                        } else {
                            self.dataList =  self.dataList.concat(res.data);
                        }

                        self.finished = (res.data.length < res.pageSize) ? true : false;

                        if (res.data.length == 0) {
                            self.finished = true;
                        }
                    }else {
                        self.$toast(res.msg);
                        self.pageNo -= 1 || 1;
                    }
                } , errBack => {
                    debug(errBack);
                    self.$toast.clear();
                    self.loading = false;
                    self.pageNo -= 1 || 1;
                })
            },

            onLoad(){
                debug("上拉加载==");
                this.pages += 1;
                this.getList();
            },

            toDetails(id){
                this.loadPage({path:'/indexDetail',query:{t:new Date().getTime(),activityId:id}})
            }
        }
    }
</script>

<style scoped lang="less">
.wrap-index{
    width: 100%;
    background-color: #fff;

    .icon {
        width: 1.7em;
        height: 1.7em;
        margin-right: 0.8em;
        fill: currentColor;
        overflow: hidden;
    }
    .van-cell {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 1rem;
        background-color: #fff;
        font-size: 0.32rem;
        color: #333;
    }
}
</style>