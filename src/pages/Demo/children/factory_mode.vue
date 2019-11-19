<template>
    <div class="wrap-factory_mode">
        <van-nav-bar left-arrow @click-left="appBack()" title="工厂模式"/>

        <FactoryComp v-for="item in inputComp" :key="item"
                     :compName="item"
                     :status="status"
                     @changeStatus="changeStatus($event)">

        </FactoryComp>

    </div>
</template>

<script>
    import FactoryComp from '../component/CompFactory'

    // 不同的模式 不同的组合
    const  modeMap = {
        modeA : ['CompA', 'CompB'],
        modeB : ['CompA', 'CompB', "CompC"],
        modeC : ['CompA', 'CompC'],
        modeD : ['CompB', 'CompC']
    }

    export default {
        name: "factory_mode",
        components: {FactoryComp},
        data() {
            return {
                type: 'modeD',
                status: "状态"
            }
        },
        computed: {
            inputComp () {
                return modeMap[this.type];
            }
        },

        methods: {
            changeStatus(t) {
                console.log(t);
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrap-factory_mode{
        width: 100%;
    }
</style>>