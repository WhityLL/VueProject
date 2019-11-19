<template>
    <div class="wrap-C" @click="clickEvent">
        wrap-C {{status}}参数
    </div>
</template>

<script>
    export default {
        name: "CompC",
        props: {
            status: ''
        },
        methods:{
            clickEvent(){
                this.$emit("onChangeStatus", "C");
            }
        }
    }
</script>

<style scoped>
    .wrap-C{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.5rem;
        background-color: green;
        text-align: center;
    }
</style>