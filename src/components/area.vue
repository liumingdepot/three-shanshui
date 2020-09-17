<template>
    <div class="area">
        <div class="item" v-for="(item,index) in pqnameGroup" :key="index" @click="changeItem(item,index)">
            <img style="margin-right: 20px" src="@/assets/icon/b1.png" v-if="count == index">
            <img style="margin-right: 20px" src="@/assets/icon/b2.png" v-else>
            <div class="box">
                <div class="top">
                    <div class="title">
                        <div :style="{color:count == index?'#17b6ba':''}" style="margin-right: 20px">{{ item.PQNAME }}</div>
                        <div v-if="count == index" style="padding-top: 5px" class="slide-in-right">
                            <svg t="1598950667445" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="4350" width="20" height="20">
                                <path d="M256 512l512 409.6V102.4L256 512z" p-id="4351" fill="#17b6ba"></path>
                            </svg>
                            <svg t="1598950667445" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="4350" width="20" height="20">
                                <path d="M256 512l512 409.6V102.4L256 512z" p-id="4351" fill="#17b6ba"></path>
                            </svg>
                            <svg t="1598950667445" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="4350" width="20" height="20">
                                <path d="M256 512l512 409.6V102.4L256 512z" p-id="4351" fill="#17b6ba"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="num">{{ item.AVGPROGRESS }}%</div>
                </div>
                <div class="schedule">
                    <div class="none"></div>
                    <div class="activeS" :style="{width: item.progress}"></div>
                </div>
                <div class="bottom">
                    <div style="margin-right: 20px">项目数量 {{ item.XMSL }}</div>
                    <div style="margin-right: 20px">完成指标 {{ item.NUMWCZB }}</div>
                    <div style="margin-right: 20px">项目金额 {{ item.XMJE }}亿</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getCountProDataByPqnameGroup} from '@/api/index.js'

export default {
    data() {
        return {
            pqnameGroup: [],
            count: -1
        }
    },
    async created() {
        const pqnameGroup = await getCountProDataByPqnameGroup()
        this.pqnameGroup = pqnameGroup.data.map(val => {
            val.progress = val.AVGPROGRESS / 100 * 470 + 'px'
            return val
        })
    },
    methods: {
        changeItem(item, index) {
            if (index == this.count) {
                this.count = -1
                this.$emit('changeItem', -1)
            } else {
                this.count = index
                this.$emit('changeItem', index)
            }

        }
    }
}
</script>

<style scoped>
.area {
    width: 620px;
    overflow: auto;
    height: calc(100vh - 300px);
}

.item {
    padding: 0 50px;
    height: 106px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.title{
    display: flex;
    align-items: center;
}
.item:hover .title {
    color: #17b6ba;
}


.schedule {
    position: relative;
}

.activeS {
    position: absolute;
    height: 5px;
    background-image: linear-gradient(90deg, #27f7e6 0%, #1581fa 100%);
}

.box {
    width: 470px;
}

.none {
    position: absolute;
    width: 470px;
    height: 5px;
    background-image: linear-gradient(0deg, #39d0d3 0%, #41bff3 100%);
    opacity: 0.11;
}

.top {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    line-height: 54px;
}

.title {
    color: #fff;
}

.bottom {
    display: flex;
    color: #1cb4f1;
    margin-top: 20px;
}
</style>