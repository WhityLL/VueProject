<template>
    <div class="wrap-D" @click="aaa">
        wrap-D {{status}}参数
    </div>
</template>

<script>
    export default {
        name: "CompD",
        props: {
            status: ''
        },
        methods:{
            aaa(){
                this.$emit("onChangeStatus", "D");
            }
        }
    }
</script>

<style scoped>
    .wrap-D{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.5rem;
        background-color: lawngreen;
        text-align: center;
    }
</style>