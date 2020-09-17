<template>
    <header class="stencil">
        <div class="top">
            <img src="@/assets/title.png"/>
            <div class="gis" @click="goToGis" v-if="type == 1">进入GIS</div>
            <div class="back" @click="goBack" v-if="type == 2">
                <img style="width: 15px;height: 15px;margin-right: 10px" src="@/assets/project/backcon.png" alt="">
                <div>返回</div>
            </div>
        </div>
        <img class="right_img" src="@/assets/right.png" alt="">
    </header>
</template>

<script>
export default {
    props:['type'],
    methods: {
        goToGis() {

        },
        goBack(){
            this.$router.go(-1)
        }
    },
};
</script>

<style scoped>
.stencil {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}

.top {
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.title {
    color: #ffffff;
    font-size: 24px;
    font-family: "a";
    background-image: -webkit-linear-gradient(
            bottom,
            #17b6ba,
            #79f3f7,
            #cff5ff,
            #b0fffc
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.gis {
    cursor: pointer;
}
.back{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 160px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-image: url("../assets/project/back.png");
    background-size: 160px 40px;
}
.back:hover{
    background-image: url("../assets/project/back2.png");
}

.right_img {
    position: fixed;
    right: 10px;
    top: 10vh;
    width: 35px;
    height: 85vh;
}
</style>