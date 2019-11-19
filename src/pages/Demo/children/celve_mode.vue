
<!-- 策略模式（Strategy Pattern） -->
<!--  策略模式应该是我们接触比较多的几个设计模式中的一个了，先看一下定义：
      定义了一组算法（业务规则）；封装了每个算法；这族的算法可互换代替（interchangeable）
      封装的策略算法一般是独立的，策略模式根据输入来调整采用哪个算法。关键是策略的实现和使用分离。

      主要有下面几个概念：
      Context ：封装上下文，根据需要调用需要的策略，屏蔽外界对策略的直接调用，只对外提供一个接口，根据需要调用对应的策略；
      Strategy ：策略，含有具体的算法，其方法的外观相同，因此可以互相代替；
      StrategyMap ：所有策略的合集，供封装上下文调用；
 -->

<template>
    <div class="wrap-celve_mode">
        <van-nav-bar left-arrow @click-left="appBack()" title="策略模式"/>

        <!-- 动态渲染当前状态组件 -->
        <component :is="statusCom" @onChangeStatus="changeStatus($event,'test')"/>

    </div>
</template>

<script>

    //优化前
   import CompA from '../component/CompA'
   import CompB from '../component/CompB'
   import CompC from '../component/CompC'
   import CompD from '../component/CompD'


    const AUTH_STATUS_NEED = 0
    const AUTH_STAUTS_PEND = 1
    const AUTH_STATUS_PASS = 2
    const AUTH_STATUS_REFUSE = 3

    export default {
        name: "celve_mode",
        components: {
            CompA, CompB, CompC, CompD
        },
        data(){
            return{
                status: AUTH_STATUS_PASS // 通过请求api赋值
            }
        },
        computed: {
            // 具体状态角色
            // 优化前
            // statusCom() {
            //     const statusMap = {
            //         [AUTH_STATUS_NEED]: CompA,
            //         [AUTH_STAUTS_PEND]: CompB,
            //         [AUTH_STATUS_PASS]: CompC,
            //         [AUTH_STATUS_REFUSE]: CompD
            //     }
            //     // 应用策略
            //     return statusMap[this.status]
            // }

            // 优化后
            // 策略模式一个很明显的特点就是我们封装好了一系列算法策略，context负责组织和按需调用这些算法。
            statusCom() {
                const statusMap = {
                    [AUTH_STATUS_NEED]: () => ({
                        // copy自vue文档
                        component: import('../component/CompA'),
                        // loading: LoadingComponent,
                        // error: ErrorComponent,
                        delay: 200,
                        timeout: 3000
                    }),
                    [AUTH_STAUTS_PEND]: () => ({
                        // copy自vue文档
                        component: import('../component/CompB'),
                        // loading: LoadingComponent,
                        // error: ErrorComponent,
                        delay: 200,
                        timeout: 3000
                    }),
                    [AUTH_STATUS_PASS]: () => ({
                        // copy自vue文档
                        component: import('../component/CompC'),
                        // loading: LoadingComponent,
                        // error: ErrorComponent,
                        delay: 200,
                        timeout: 3000
                    }),
                    [AUTH_STATUS_REFUSE]: () => ({
                        // copy自vue文档
                        component: import('../component/CompD'),
                        // loading: LoadingComponent,
                        // error: ErrorComponent,
                        delay: 200,
                        timeout: 3000
                    }),
                }
                // 应用策略
                return statusMap[this.status];
            }
        },
        created() { },
        methods:{
            changeStatus(e, b){
                console.log(e);
                console.log(b);
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrap-celve_mode{
        width: 100%;
    }
</style>


<!--
场景是这样的，某个电商网站希望举办一个活动，通过打折促销来销售库存物品，有的商品满 100 减 30，有的商品满 200 减 80，有的商品直接8折出售（想起被双十一支配的恐惧），这样的逻辑交给我们，我们要怎样去实现呢。


function priceCalculate(discountType, price) {
    if (discountType === 'minus100_30') {           // 满100减30
        return price - Math.floor(price / 100) * 30
    }
    else if (discountType === 'minus200_80') {  // 满200减80
        return price - Math.floor(price / 200) * 80
    }
    else if (discountType === 'percent80') {    // 8折
        return price * 0.8
    }
}
priceCalculate('minus100_30', 270)    // 输出: 210
priceCalculate('percent80', 250)      // 输出: 200

缺点：
1、priceCalculate 函数随着折扣类型的增多， if-else 判断语句会变得越来越臃肿；
2、如果增加了新的折扣类型或者折扣类型的算法有所改变，那么需要更改 priceCalculate 函数的实现，这是违反开放-封闭原则的；
3、可复用性差，如果在其他的地方也有类似这样的算法，但规则不一样，上述代码不能复用；

优化：
将计算折扣的算法部分提取出来保存为一个对象，折扣的类型作为 key，这样索引的时候通过对象的键值索引调用具体的算法：
const DiscountMap = {
    minus100_30: function(price) {
        return price - Math.floor(price / 100) * 30
    },
    minus200_80: function(price) {
        return price - Math.floor(price / 200) * 80
    },
    percent80: function(price) {
        return price * 0.8
    }
}

/* 计算总售价*/
function priceCalculate(discountType, price) {
    return DiscountMap[discountType] &amp;&amp; DiscountMap[discountType](price)
}
priceCalculate('minus100_30', 270)
priceCalculate('percent80', 250)


想添加新的算法也变得十分简单：
DiscountMap.minus150_40 = function(price) {
    return price - Math.floor(price / 150) * 40
}

const StrategyMap = {}
function context(type, ...rest) {
    return StrategyMap[type] &amp;&amp; StrategyMap[type](...rest)
}
StrategyMap.minus100_30 = function(price) {
      return price - Math.floor(price / 100) * 30
}
context('minus100_30', 270)

-->