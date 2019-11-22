<template>
    <div class="wrap-pubsub_mode">
        <van-nav-bar left-arrow @click-left="appBack()" title="发布订阅模式"/>

        <div class="btn-group">
            <van-button type="default" @click="publishMsg()">发布消息</van-button>

            <van-button type="primary" @click="publishMsg_NoSubscriber()">发布消息(无订阅者)</van-button>

            <!--<van-button type="info" @click="unsubscribeMsg()">取消订阅</van-button>-->
        </div>

        <br><br>
        <p>订阅者A显示：{{subscribeA}}</p>
        <p>订阅者B显示：{{subscribeB}}</p>
        <p>订阅者C显示：{{subscribeC}}</p>

    </div>
</template>

<script>
    
    // import PubSubCenter from "../../../../public/PubSub"
    
    export default {
        name: "pubsub_mode",
        data(){
            return{
                subscribeA: '',
                subscribeB: '',
                subscribeC: ''
            }
        },
        created() {
            // 订阅了一个主题为AA的消息
            var that = this;
            // 订阅者A
            window.PubSubCenterInstance.subscribeMsg("AA", function (repsA) {
                that.subscribeA = repsA.valueA;
            })
            // 订阅者B
            window.PubSubCenterInstance.subscribeMsg("AA", function (resp) {
                that.subscribeB = resp.valueB;
            })

            // 订阅者C
            window.PubSubCenterInstance.subscribeMsg("FromIndex", function (resp) {
                that.subscribeC = resp.valueA + that.random(1, 100);
            })

        },
        methods: {
            // 发布一个主题为AA消息
            publishMsg() {
                var changedValue = this.random(1, 100);

                // 发出通知 ，通知所有的观察者对象
                var msgData = {
                    valueA: +changedValue + 10,
                    valueB: +changedValue - 10
                }

                // 发布了一个主题为AA的消息
                window.PubSubCenterInstance.publishMsg("AA", msgData);
            },

            // 发布一个没有订阅者的消息 
            publishMsg_NoSubscriber(){
                window.PubSubCenterInstance.publishMsg("CCC", {valueA: 1});
            },

            /**
             * 产生随机整数，包含下限值，但不包括上限值
             * @param {Number} lower 下限
             * @param {Number} upper 上限
             * @return {Number} 返回在下限到上限之间的一个随机整数
             */
            random(lower, upper) {
                return Math.floor(Math.random() * (upper - lower)) + lower;
            }
        }
    }
</script>

<style scoped>
    .wrap-pubsub_mode{
        font-size: 0.5rem;
    }

    .btn-group{
        display: flex;
        justify-content: space-around;
    }
</style>