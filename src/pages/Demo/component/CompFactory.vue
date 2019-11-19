
<!-- 造一个component factory，专门用来生成各种component： -->

<template>
    <component :is="getComponentName" :status="status" @onChangeStatus="changeStatus($event)"/>
</template>

<script>

    // 在工厂中注册所有的组件
    import CompA from './CompA'
    import CompB from './CompB'
    import CompC from './CompC'

    // 组件map
    const componentMap = {
        CompA, CompB, CompC
    };

    export default {
        name: "CompFactory",
        props: {
            compName: '',
            status: ''
        },
        computed: {
            getComponentName() {
                return componentMap[this.compName]
            }
        },
        created() {
        },
        methods: {
            changeStatus(event) {
                this.$emit("changeStatus", event)
            }
        }
    }
</script>

<style scoped>

</style>