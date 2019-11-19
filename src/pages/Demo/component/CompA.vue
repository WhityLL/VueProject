<template>
    <div class="wrap-A" @click="aaa">
        wrap-A {{status}}参数
    </div>
</template>

<script>
    export default {
        name: "CompA",
        props: {
            status: ''
        },
        methods:{
            aaa(){
                this.$emit("onChangeStatus", "A");
            }
        }
    }
</script>

<style scoped>
.wrap-A{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.5rem;
    background-color: orange;
    text-align: center;
}
</style>