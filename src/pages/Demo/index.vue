<template>
    <div class="wrap-demo-index">
        <van-nav-bar title="自定义组件"/>

        <van-button type="default" @click="togo(0)">外观模式</van-button>

        <van-button type="default" @click="togo(1)">工厂模式</van-button>

        <van-button type="default" @click="togo(2)">策略模式</van-button>

        <van-button type="default" @click="togo(3)">状态模式</van-button>

        <van-button type="default" @click="togo(4)">观察者模式</van-button>

        <van-button type="default" @click="togo(5)">发布订阅模式</van-button>

        <van-button type="default" @click="publishMsg()">3s后发布一个消息，现在进入发布订阅模式页面</van-button>

        <van-button type="default" @click="togo(6)">图片弱网占位</van-button>

    </div>
</template>

<script>

    // import PubSubCenter from "../../../public/PubSub"

    export default {
        name: "index",
        data(){
            return{

            }
        },
        computed: {

        },
        created() {
        },
        methods:{
            togo(index){
                if (index == 0){
                    this.loadPage("facade_mode")
                }

                if (index == 1){
                    this.loadPage("factory_mode")
                }

                if (index == 2){
                    this.loadPage("celve_mode")
                }

                if (index == 3){
                    this.loadPage("status_mode")
                }

                if (index == 4){
                    this.loadPage("oberseve_mode")
                }

                if (index == 5){
                    this.loadPage("pubsub_mode")
                }
<<<<<<< HEAD
            },


            publishMsg(){
                setTimeout(() => {
                    // 发出通知 ，通知所有的观察者对象
                    var msgData = {
                        valueA: "Index发布过来的消息，主题为FromIndex"
                    }

                    // 发布了一个主题为AA的消息
                    PubSubCenterInstance.publishMsg("FromIndex", msgData);
                }, 3000);

                this.togo(5);
=======

                if (index == 6){
                    this.loadPage("img_placeholder")
                }
>>>>>>> 67c1d2ba9d36fbc19d06e83d00f73422a0e00142
            }
        }
    }
</script>

<style scoped lang="scss">
.wrap-demo-index{
    width: 100%;
}
</style>