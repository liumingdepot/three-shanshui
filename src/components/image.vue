<template>
    <div class="box">
        <div class="header">
            <div style="font-size: 30px;">影像对比</div>
            <nav class="nav">
                <div class="item" :class="tabIndex == 1?'active':''" @click="changeTabIndex(1)">施工前</div>
                <div class="item" :class="tabIndex == 2?'active':''" @click="changeTabIndex(2)">施工后</div>
            </nav>
            <div class="back" @click="changepPanoramic"></div>
        </div>
        <div class="arrow">
            <div class="left" @click="changeImgIndex(1)"></div>
            <div class="right" @click="changeImgIndex(2)"></div>
        </div>
        <div class="span">
            <span>{{imgIndex+1 + ' '}}</span>
            <span style="font-size: 40px">/</span>
            <span style="color: rgba(255,255,255,.4);">{{ ' ' + imgs.length }}</span>
        </div>
        <img class="img" :src="src" alt="">
        <img class="img" src="@/assets/project/image/bg.png" alt="">
    </div>
</template>

<script>
import {getProjectAndOutcomeInfo} from '@/api'

export default {
    props: ['name'],
    data() {
        return {
            tabIndex: 1,
            imageArrs: [],
            imgs:[],
            imgIndex: 0,
            src:''
        }
    },
    created() {
        this.initImageArr()
    },
    methods: {
        initImageArr() {
            const preUrl = 'http://113.140.66.230:9777/commonservice-system/project/project/getImg?t=' + new Date().getTime() + '&path=E:'
            getProjectAndOutcomeInfo(this.$route.query.proid).then(res => {
                const arr1 = res.datalist1.map(val => preUrl + val.materialPath);
                const arr2 = res.datalist2.map(val => preUrl + val.materialPath);
                this.imageArrs = {arr1, arr2}
                this.imgs = arr1
                this.src = arr1[0]
            })
        },
        changeTabIndex(index) {
            this.tabIndex = index
            this.imgs = this.imageArrs['arr' + index]
            this.imgIndex = 0
            this.src = this.imgs[0]
        },
        changepPanoramic() {
            this.$emit('changepPanoramic', {
                type: 0
            })
        },
        changeImgIndex(index) {
            if (index == 2) {
                this.imgIndex = this.imgIndex >= this.imgs.length - 1 ? 0 : this.imgIndex + 1
            } else {
                this.imgIndex = this.imgIndex <= 0 ? this.imgs.length - 1 : this.imgIndex - 1
            }
            this.src = this.imgs[this.imgIndex]
        }
    }
}
</script>

<style scoped>
.box {
    position: fixed;
    right: 100px;
    top: 130px;
    width: 1400px;
    height: 900px;
    z-index: 999;
    color: #fff;
    border: solid 2px #3c78ff;
    background: rgba(1, 0, 0, 0.5);
}

.header {
    padding: 38px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav {
    padding-right: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.item {
    width: 6em;
    line-height: 36px;
    text-align: center;
    background-image: url("../assets/project/image/tab.png");
    background-size: 6em 36px;
    background-repeat: no-repeat;
    cursor: pointer;
}

.item:hover {
    background-image: url("../assets/project/image/taba.png");
}

.active {
    background-image: url("../assets/project/image/taba.png");
}

.back {
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-image: url("../assets/project/image/back.png");
}

.back:hover {
    background-image: url("../assets/project/image/backa.png");
}

.arrow {
    padding: 0 20px;
    display: flex;
    align-items: center;
    margin-top: 300px;
    justify-content: space-between;
}

.left {
    width: 70px;
    height: 44px;
    background-repeat: no-repeat;
    background-image: url("../assets/project/image/lef.png");
}

.right {
    width: 70px;
    height: 44px;
    background-image: url("../assets/project/image/right.png");
    background-repeat: no-repeat;
}

.left:hover {
    background-image: url("../assets/project/image/left.png");
}

.right:hover {
    background-image: url("../assets/project/image/righ.png");
}

.span {
    width: 180px;
    margin-left: -90px;
    line-height: 58px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    font-size: 48px;
    text-align: center;
    border-radius: 4px;
    background: rgba(23,80,209,0.4);
}
.img{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -11;
    width: 100%;
    height: 100%;
}
</style>