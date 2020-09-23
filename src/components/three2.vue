<template>
    <div class="liuyu">
        <!--主要流域-->
        <div class="liuyubox">
            <img class="liuyu-img" src="@/assets/liuyu.png" alt="">
            <img class="liuyu-img2" src="@/assets/map/bg3.png" alt="">
            <img v-if="show.includes(2)" class="liuyu-img4" src="@/assets/map/bg4.png" alt="">
            <img v-if="show.includes(3)" class="liuyu-img5" src="@/assets/map/bg5.png" alt="">
        </div>
        <!--项目-->
        <div class="project" v-for="(item,i2) in projectList" :key="i2" :class="'project'+i2"
             @mouseover="changeProject(i2)" @mouseleave="changeProject(-1)" @click="changeItem(item,index)"
             :style="{'z-index':project == i2?'999':'9'}">
            <div v-if="i2 == 16">
                <div class="inside4"></div>
                <div class="inside5"></div>
                <div class="inside6"></div>
            </div>
            <div v-else>
                <div class="inside1"></div>
                <div class="inside2"></div>
                <div class="inside3"></div>
            </div>
            <div class="text" :style="{width:item.PRO_NAME.length+'em'}" v-if="project == i2">{{ item.PRO_NAME }}</div>
        </div>
    </div>
</template>

<script>
import {getProlistByareAndtype} from '@/api'

export default {
    props: ['index'],
    data() {
        return {
            project: -1,
            projectList: [],
            projectValue: {},
            show:[2,3]
        }
    },
    async created() {
        const {data} = await getProlistByareAndtype()
        this.projectList = data
    },
    methods: {
        changeProject(index) {
            this.project = index
        },
        changeItem(item) {
            this.$router.push({
                name: 'project', query: {proid: item.PRO_ID}
            })
        }
    }
}
</script>


<style scoped>
@keyframes ping {
    0% {
        transform: scale(1);
        opacity: 0.8;
    }
    100% {
        transform: scale(1.8);
        opacity: 0;
    }
}

.liuyu {
    position: fixed;
    top: 0;
    right: 0;
    width: 1293px;
    height: 1080px;
    z-index: 99;
    background-repeat: no-repeat;
    background-size: 1293px 1080px;
    background-position: right;
    background-image: url("../assets/map/bg1.png");
}

/*项目*/

.project {
    animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    position: relative;
    cursor: pointer;
    z-index: 9;
}

.text {
    padding: 5px 10px;
    position: absolute;
    left: 40px;
    top: 4px;
    color: #fff;
    background: #2796f9;
}

.inside1 {
    position: absolute;
    left: 12px;
    top: 12px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #38efff;
}

.inside2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 34px;
    z-index: -2;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.6);
}

.inside3 {
    animation: ping 0.8s ease-in-out infinite both;
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    z-index: -1;
    border-radius: 50%;
    background: #000102;
    border: 1px solid #38efff;
}

.inside4 {
    position: absolute;
    left: 12px;
    top: 12px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffe63d;
}

.inside5 {
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 34px;
    z-index: -2;
    border-radius: 50%;
    background: rgba(19, 17, 2, 0.6);
}

.inside6 {
    animation: ping 0.8s ease-in-out infinite both;
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    z-index: -1;
    border-radius: 50%;
    background: rgba(19, 17, 2, 0.6);
    border: 1px solid #ffe63d;
}


.project0 {
    position: absolute;
    top: 700px;
    left: 380px;
}

.project1 {
    position: absolute;
    top: 780px;
    left: 460px;
}

.project2 {
    position: absolute;
    top: 700px;
    left: 580px;
}

.project3 {
    position: absolute;
    top: 900px;
    left: 350px;
}

.project4 {
    position: absolute;
    top: 700px;
    left: 680px;
}

.project5 {
    position: absolute;
    top: 620px;
    left: 700px;
}

.project6 {
    position: absolute;
    top: 781px;
    left: 657px;
}

.project7 {
    position: absolute;
    top: 481px;
    left: 657px;
}

.project8 {
    position: absolute;
    top: 481px;
    left: 657px;
}

.project9 {
    position: absolute;
    top: 528px;
    left: 586px;
}

.project10 {
    position: absolute;
    top: 372px;
    left: 553px;
}

.project11 {
    position: absolute;
    top: 731px;
    left: 738px;
}

.project12 {
    position: absolute;
    top: 161px;
    left: 657px;
}

.project13 {
    position: absolute;
    top: 481px;
    left: 247px;
}

.project14 {
    position: absolute;
    top: 411px;
    left: 907px;
}

.project15 {
    position: absolute;
    top: 611px;
    left: 177px;
}

.project16 {
    position: absolute;
    top: 801px;
    left: 227px;
}

.project17 {
    position: absolute;
    top: 551px;
    left: 317px;
}

.popups {
    padding: 20px 0;
    position: absolute;
    top: 80px;
    left: 20px;
    z-index: 99999;
    width: 413px;
    pointer-events: none;
    cursor: default;
    position: absolute;
    background: rgba(20, 51, 63, 0.6);
    border: solid 1px rgba(121, 243, 247, 0.28);
}

.popups .titles {
    color: #fff;
    line-height: 2;
    padding-left: 12px;
    font-size: 20px;
}

.popups .texts {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    line-height: 1.5;
    position: relative;
}

.popups .texts:after {
    position: absolute;
    bottom: 0;
    content: '';
    width: 373px;
    height: 1px;
    background: #27f7e6;
}

.popups .texts:last-child:after {
    display: none;
}

.popups .imgs {
    width: 394px;
    height: 206px;
    display: block;
    margin: 20px auto;
}
@keyframes ping2 {
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
}
.liuyu-img{
    position: absolute;
    right: 185px;
    top: 91px;
    animation: ping2 2s ease-in-out infinite both;
}
.liuyu-img2{
    position: absolute;
    right: 255px;
    top: 211px;
}
.liuyu-img4{
    position: absolute;
    left: 348px;
    top: 391px;
}
.liuyu-img5{
    position: absolute;
    right: 237px;
    top: 212px;
}
</style>