<template>
    <div>
        <empty v-if="isEmpty" />
        <list v-else :data="data" />
    </div>
</template>

<script>
    import Empty from './Empty'
    import List from './List'
    export default {
        name: "ProxyList",
        components:{
            Empty,
            List
        },
        props: {
            data: Array
        },
        computed: {
            isEmpty() {
                return this.data.length < 1
            }
        },
        created() {
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>