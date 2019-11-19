<template>
    <div class="wrap-B" @click="aaa">
        wrap-B {{status}}参数
    </div>
</template>

<script>
    export default {
        name: "CompB",
        props: {
            status: ''
        },
        methods:{
            aaa(){
                this.$emit('onChangeStatus', 'ee')
            }
        }
    }
</script>

<style scoped>
    .wrap-B{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.5rem;
        background-color: blue;
        text-align: center;
    }
</style>