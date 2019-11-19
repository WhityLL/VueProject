<template>
    <div class="wrap-oberseve_mode">
        <van-nav-bar left-arrow @click-left="appBack()" title="观察者模式"/>


        <van-button type="primary" @click="changeValue()">改变一个值</van-button>
        <br>
        <br>
        <p>被观察的值：{{oberservedValue}}</p>
        <p>oberserA显示：{{oberserAChangedValue}}</p>
        <p>oberserB显示：{{oberserBChangedValue}}</p>
    </div>
</template>

<script>
    export default {
        name: "oberseve_mode",
        data(){
            return {
                oberservedValue: "改变前",
                subject: '',   //主题（发布者）
                oberserAChangedValue: '',
                oberserBChangedValue: ''
            }
        },
        created() {
            var that = this;
            // 实例化一个发布者
            this.subject = new window.ZLSubject();

            // 实例化两个订阅者
            var observerA = new window.ZLObserver();
            // observerA 自定义（重写）更新的方法
            observerA .update = function(params) {
                that.oberserAChangedValue = "A=" + params.valueA
            };

            var observerB = new window.ZLObserver();
            observerB .update = function(params) {
                that.oberserBChangedValue = "B=" + params.valueB
            };

            this.subject.addObserver(observerA);
            this.subject.addObserver(observerB);
        },
        methods: {
            changeValue(){
                var changedValue = this.random(1, 100);
                this.oberservedValue = "改变了" + changedValue

                // 发出通知 ，通知所有的观察者对象
                var data = {
                    valueA: +changedValue + 10,
                    valueB: +changedValue - 10
                }
                this.subject.notify(data);
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

<style scoped >
.wrap-oberseve_mode{
    font-size: 0.5rem;
}
</style>