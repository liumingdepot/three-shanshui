<template>
    <div class="lefts">
        <div class="title">{{ data.PRO_NAME }}</div>
        <div class="overview">
            <div class="name">項目概况</div>
            <div class="box">
                <div class="itemBox">
                    <div class="item">
                        <img style="width: 42px;height: 42px;margin-right: 10px" src="@/assets/project/num.png" alt="">
                        <div style="line-height: 1.5">
                            <div>37</div>
                            <div style="font-size: 12px;color: #fff">项目数量</div>
                        </div>
                    </div>
                </div>
                <div class="itemBox">
                    <div class="item">
                        <img style="width: 42px;height: 42px;margin-right: 10px" src="@/assets/project/money.png"
                             alt="">
                        <div style="line-height: 1.5">
                            <div>{{ data.GROSS_ASSETS }} <span>万</span></div>
                            <div style="font-size: 12px;color: #fff">项目总金额</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="display: flex;justify-content: space-between;align-items: center">
                <div style="color: #fff">总体进度</div>
                <div style="font-size: 24px;">{{ data.PRO_PROGRESS }} <span style="font-size: 18px">%</span></div>
            </div>
            <div class="schedule">
                <div class="_schedule" :style="{width: data.PRO_PROGRESS/100*400}"></div>
            </div>
            <div style="display: flex;justify-content: space-between;align-items: center;">
                <div style="color: #fff">总覆盖面</div>
                <div style="font-size: 24px;">{{ 59.5 }} <span style="font-size: 18px">公顷</span></div>
            </div>
            <img src="@/assets/project/Area.png" alt="">
        </div>
        <div class="summary" style="position: relative">
            <div class="name">項目简介</div>
            <div class="summary_box">
                <div class="textq">{{ data.PROJECT_BRIEF }}</div>
                <img style="margin: 0 auto;display: block;margin-top: 30px" src="@/assets/project/w.png" alt="">
                <img style="position: absolute;left: 10px" src="@/assets/project/yinlang.png" v-if="!yinlang">
                <img style="position: absolute;left: 10px" src="@/assets/project/yilang.png" v-if="yinlang">
                <img style="margin: 0 auto;display: block;cursor: pointer;margin-top: 60px"
                     src="@/assets/project/play.png" @click="changeYinlang" v-if="!yinlang">
                <img style="margin: 0 auto;display: block;cursor: pointer;margin-top: 60px"
                     src="@/assets/project/stop.png" @click="changeYinlang" v-if="yinlang">
            </div>
            <div class="BELONG_TYPE">
                <div class="_item item1" v-if="data.BELONG_TYPE.includes('1')">
                    <div class="_texts">水土流失</div>
                </div>
                <div class="_item item2" v-if="data.BELONG_TYPE.includes('2')">
                    <div class="_texts">农田生态</div>
                </div>
                <div class="_item item3" v-if="data.BELONG_TYPE.includes('3')">
                    <div class="_texts">水源保护</div>
                </div>
                <div class="_item item4" v-if="data.BELONG_TYPE.includes('4')">
                    <div class="_texts">废弃矿山</div>
                </div>
                <div class="_item item5" v-if="data.BELONG_TYPE.includes('5')">
                    <div class="_texts">农村面源</div>
                </div>
            </div>
        </div>
        <div class="btns">
            <div class="btn" @click="$router.push('/panoramic')">
                <img style="width: 23px;height: 23px;" src="@/assets/project/btn.svg" alt="">
                <div class="text">效果对比</div>
            </div>
            <div class="btn">
                <img style="width: 23px;height: 23px;" src="@/assets/project/btn2.svg" alt="">
                <div class="text">视频展示</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    data(){
        return{
            yinlang:false
        }
    },
    methods:{
        changeYinlang(){
            this.yinlang = !this.yinlang
        }
    }
}
</script>

<style scoped>
.lefts {
    width: 400px;
    padding: 20px 40px;
    position: fixed;
    top: 80px;
    left: 0;
    z-index: 99999999999;
    background: rgba(0,0,0,0.6);
}

.title {
    font-family: MicrosoftYaHei-Bold;
    font-size: 24px;
    width: 400px;
    height: 30px;
    color: #ffffff;
    margin-bottom: 18px;
    background: url("../assets/project/title2.png");
    background-repeat: no-repeat;
    padding-left: 10px;
    background-size: 400px 30px;
}

.overview {
    width: 403px;
    margin-bottom: 18px;
}

.name {
    font-size: 18px;
    color: #fff;
    margin-bottom: 8px;
    line-height: 24px;
    background: url("../assets/project/title.png");
    background-repeat: no-repeat;
    padding-left: 10px;
    background-size: 150px 30px;
}

.box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 22px;
}

.itemBox {
    width: 190px;
    height: 71px;
    background-size: 190px 71px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item {
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #3adcd0;
}

.schedule {
    margin: 10px 0;
    width: 400px;
    height: 16px;
    border-radius: 8px;
    border: solid 1px rgba(121, 243, 247, 0.2);
}

._schedule {
    width: 390px;
    height: 6px;
    border-radius: 4px;
    margin: 5px;
    background-image: linear-gradient(90deg, #27f7e6 0%, #1581fa 100%);
}

.summary_box {
    padding: 18px 25px;
    width: 400px;
    height: 267px;
    box-sizing: border-box;
    background-image: url("../assets/project/left.png");
    margin-bottom: 18px;
}

.BELONG_TYPE {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
}

.BELONG_TYPE ._item {
    text-align: center;
    color: #fff;
    line-height: 30px;
    transform: skewX(-45deg);
}

._item ._texts {
    transform: skewX(45deg);
}

.item1 {
    background-color: rgba(255, 165, 36, 0.3);
    border: solid 1px hsla(35, 100%, 57%, 0.6);
}

.item2 {
    background-color: rgba(2, 255, 159, 0.3);
    border: solid 1px rgba(2, 255, 159, 0.3);
}

.item3 {
    background-color: rgba(79, 176, 255, 0.3);
    border: solid 1px rgba(79, 176, 255, 0.6);
}

.item4 {
    background-color: rgba(107, 81, 254, 0.3);
    border: solid 1px rgba(107, 81, 254, 0.6);
}

.item5 {
    background-color: rgba(255, 141, 122, 0.3);
    border: solid 1px rgba(255, 141, 122, 0.6);
}

.btn {
    width: 400px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #fff;
    background-image: url("../assets/project/btn.png");
    background-repeat: no-repeat;
    background-size: 400px 80px;
    margin-top: 30px;
}

.text {
    margin-left: 10px;
}

.btn:hover {
    cursor: pointer;
    background-image: url("../assets/project/btn2.png");
}

.textq {
    overflow: auto;
    line-height: 18px;
    height: 72px;
    color: #fff;
}
</style>