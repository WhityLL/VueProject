<template>
    <div class="wrap-demo-index">
        <van-nav-bar title="自定义组件"/>

        <van-button type="default" @click="togo(0)">外观模式</van-button>

        <van-button type="default" @click="togo(1)">工厂模式</van-button>

        <van-button type="default" @click="togo(2)">策略模式</van-button>

        <van-button type="default" @click="togo(3)">状态模式</van-button>

        <van-button type="default" @click="togo(4)">观察者模式</van-button>

        <van-button type="default" @click="togo(5)">发布订阅模式</van-button>

        <van-button type="default" @click="togo(6)">图片弱网占位</van-button>


    </div>
</template>

<script>

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

                if (index == 6){
                    this.loadPage("img_placeholder")
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.wrap-demo-index{
    width: 100%;
}
</style>