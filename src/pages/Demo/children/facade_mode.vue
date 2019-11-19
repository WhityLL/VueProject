
<!-- 外观模式 -->
<!--  外观模式：为子系统中的一组接口提供一个一致的界面，Facade模式定义了\
一个高层接口，这个接口使得这一子系统更加容易使用。引入外观角色之后，\
用户只需要直接与外观角色交互，用户与子系统之间的复杂关系由外观角色来实现，\
从而降低了系统的耦合度 -->

<!--

componentA、componentB、componentC定义了三个外观角色，每个component组件作为子系统。\
外观角色只关心使用那些子系统，子系统对status的逻辑在子系统内部处理，这样就降低了系统的耦合度

-->

<template>
    <div class="wrap-facade_mode">
        <van-nav-bar left-arrow @click-left="appBack()" title="外观模式"/>

        <componentA @onChangeStatus="changeStatus($event, 'A')"></componentA>
        <componentB @onChangeStatus="changeStatus($event, 'B')"></componentB>
        <componentC @onChangeStatus="changeStatus($event, 'C')"></componentC>

    </div>
</template>

<script>

    import componentA from '../component/CompA'
    import componentB from '../component/CompB'
    import componentC from '../component/CompC'

    export default {
        name: "facade_mode",
        components: { componentA, componentB, componentC},
        data(){
            return{
                status: 2,
            }
        },
        computed: {

        },
        created() {

        },
        methods:{
            changeStatus(e, b){
                console.log(e);
                console.log(b);
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrap-facade_mode{
        width: 100%;
    }
</style>