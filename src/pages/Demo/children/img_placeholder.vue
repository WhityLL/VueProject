<template>
    <div class="wrap-img_placeholder">
        <van-nav-bar left-arrow @click-left="appBack()" title="弱网 图片占位"/>


        <div class="container placeholder">
            <img class="img"
                 src="https://img14.360buyimg.com/tuangou/jfs/t1/79387/19/15681/373821/5dd39fd8E12a39f58/cd490c60c9c3fde3.png!q70.dpg">
        </div>

        <p>位置测试</p>
    </div>
</template>

<script>
    export default {
        name: "img_placeholder"
    }
</script>

<style scoped>
    .wrap-img_placeholder {
        font-size: 0.5rem;
    }

    .container {
        width: 50%;
        max-height:2rem;
        background-color:#ddd;
        overflow:hidden;
    }

    .placeholder:after {
        content: "";
        display: block;
        /*margin-top:100%;*/
        padding-top: 100%;
    }

    .container img {
        width: 100%;
        height: 2rem;
    }
</style>