<template>
    <div class="lefts">
        <div class="title">项目简介</div>
        <div class="box">
            <div class="item">
                <div class="text"><img style="margin-right: 10px" src="@/assets/project/jianjie/项目所在地.png">项目所在地</div>
                <div style="margin-left: 30px">{{ data.AREA_NAME }}</div>
            </div>
            <div class="item">
                <div class="text"><img style="margin-right: 10px" src="@/assets/project/jianjie/实施年限.png">实施年限</div>
                <div style="margin-left: 30px">{{ data.STAANDEND }}</div>
            </div>
            <div class="item">
                <div class="text"><img style="margin-right: 10px" src="@/assets/project/jianjie/项目状态.png">项目状态</div>
                <div style="margin-left: 30px">{{ data.PRO_STATUS }}</div>
            </div>
            <div class="item">
                <div class="text"><img style="margin-right: 10px" src="@/assets/project/jianjie/总投资额.png">总投资额</div>
                <div style="margin-left: 30px">{{ data.GROSS_ASSETS }}</div>
            </div>
        </div>
        <div>
            <div class="text"><img style="margin-right: 10px" src="@/assets/project/jianjie/涵盖分类.png">涵盖分类</div>
            <div class="sorts" v-if="data.BELONG_TYPE">
                <div class="sort sort1" v-if="data.BELONG_TYPE.includes('1')">水土流失</div>
                <div class="sort sort2" v-if="data.BELONG_TYPE.includes('5')">农村面源</div>
                <div class="sort sort3" v-if="data.BELONG_TYPE.includes('2')">农田生态</div>
                <div class="sort sort4" v-if="data.BELONG_TYPE.includes('3')">水源保护</div>
                <div class="sort sort5" v-if="data.BELONG_TYPE.includes('4')">矿山修复</div>
            </div>
        </div>
        <div class="title">项目概述</div>
        <p v-text="data.PROJECT_BRIEF" class="p" :title="data.PROJECT_BRIEF"></p>
        <div class="summary_box">
            <img style="width: 100%" src="@/assets/project/w.png" alt="">
            <img style="width: 100%;height: 30px;margin-top: 30px" src="@/assets/project/yinlang.png" v-if="!yinlang">
            <img style="width: 100%;height: 30px;margin-top: 30px" src="@/assets/project/yilang.gif" v-if="yinlang">
            <div class="yinlang" @click="changeYinlang">
                <img style="padding-left: 3px;padding-top: 2px" src="@/assets/project/star.png" v-if="!yinlang">
                <img style="padding-top: 2px" src="@/assets/project/stop.png" v-if="yinlang">
            </div>
        </div>
        <div class="btns">
            <div class="btn" @click="changepPanoramic">
                <img style="width: 23px;height: 23px;margin-right: 10px" src="@/assets/project/btn.svg" alt="">
                <div class="text">效果对比</div>
            </div>
            <div class="btn">
                <img style="width: 23px;height: 23px;margin-right: 10px" src="@/assets/project/btn2.svg" alt="">
                <div class="text">视频展示</div>
            </div>
        </div>
        <div class="right-5 slide-in-right">
            <div class="items" style="margin-top: 40px">
                {{ fldata.SYHYL_COUNT ? fldata.SYHYL_COUNT.toFixed(3) : '--' }}
            </div>
            <div class="items">{{ fldata.GSL_COUNT ? fldata.GSL_COUNT.toFixed(3) : '--' }}</div>
            <div class="items">{{ fldata.JGL_COUNT ? fldata.JGL_COUNT.toFixed(3) : '--' }}</div>
            <div class="items">{{ fldata.LFGL_COUNT ? fldata.LFGL_COUNT.toFixed(3) : '--' }}</div>
            <div class="items">{{ fldata.FY_COUNT ? fldata.FY_COUNT.toFixed(3) : '--' }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'fldata'],
    data() {
        return {
            yinlang: false
        }
    },
    methods: {
        changeYinlang() {
            this.yinlang = !this.yinlang
            const utterThis = new SpeechSynthesisUtterance()
            utterThis.text = '欢迎进入' + this.data.PRO_NAME + '。'  + this.data.PROJECT_BRIEF;  //播放内容按
            if(this.yinlang){
                speechSynthesis.speak(utterThis)
            }else{
                speechSynthesis.cancel(utterThis)
            }
        },
        changepPanoramic(){
            this.$emit('changepPanoramic', {
                type:2
            })
        }
    }
}
</script>

<style scoped>
.lefts {
    width: 294px;
    padding-left: 60px;
    padding-right: 120px;
    padding-top: 110px;
    height: 1080px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    color: #fff;
    background-image: url("../assets/project/bg.png");
}

.title {
    font-size: 23px;
    font-family: TRENDS;
    width: 100%;
    line-height: 2;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.title:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #ffffff;
}

.box {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.item {
    height: 86px;
    font-size: 20px;
}

.text {
    font-size: 16px;
    line-height: 3;
    color: #8be1f3;
    display: flex;
    align-items: center;
}

.sorts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}

.sort {
    width: 140px;
    height: 36px;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 36px;
}

.sort1 {
    background-image: url("../assets/project/icon/水土保持.png");
}

.sort2 {
    background-image: url("../assets/project/icon/农村面貌.png");
}

.sort3 {
    background-image: url("../assets/project/icon/农田生态.png");
}

.sort4 {
    background-image: url("../assets/project/icon/水资源保护.png");
}

.btn {
    width: 300px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #fff;
    background-image: url("../assets/project/btn.png");
    background-repeat: no-repeat;
    background-size: 300px 60px;
    margin-top: 20px;
    cursor: pointer;
}

.btn:hover {
    background-image: url("../assets/project/btn2.png");
}

.sort5 {
    background-image: url("../assets/project/icon/矿山修复.png");
}

.p {
    line-height: 1.5;
    font-size: 14px;
    height: 84px;
    overflow: hidden;
}

.right-5 {
    position: fixed;
    right: 73px;
    top: 144px;
    z-index: 999;
    width: 130px;
    height: 449px;
    background-image: url("../assets/project/右侧项目结果数据.png");
    background-repeat: no-repeat;
}

.items {
    line-height: 90px;
    font-size: 30px;
    padding-left: 40px;
}

.yinlang {
    width: 62px;
    height: 62px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("../assets/project/yinlangbg2.png");
}

.yinlang:hover {
    background: url("../assets/project/yinlangbg.png");
}
</style>