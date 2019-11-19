
<!-- 状态模式 -->
<!--  每次只加载需要的组件 -->

<template>
    <div class="wrap-status_mode">
        <van-nav-bar left-arrow @click-left="appBack()" title="状态模式"/>

        <!-- 动态渲染当前状态组件 -->
        <component :is="statusCom" @onChangeStatus="changeStatus($event,'test')"/>

    </div>
</template>

<script>
    import CompA from '../component/CompA'
    import CompB from '../component/CompB'
    import CompC from '../component/CompC'
    import CompD from '../component/CompD'

    export default {
        name: "status_mode",
        data(){
            return{
                status: 2,
            }
        },
        computed: {
            // 具体状态角色
            statusCom() {
                const statusMap = {
                    1: CompA,
                    2: CompB,
                    3: CompC,
                    4: CompD
                }
                return statusMap[this.status]
            }
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
    .wrap-status_mode{
        width: 100%;
    }
</style>