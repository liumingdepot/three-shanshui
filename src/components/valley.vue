<template>
    <div class="valley">
        <div class="item" @click="changeItem(obj,1)">
            <div class="top">
                <img style="margin-right: 20px" src="@/assets/icon/b1.png" v-if="count == 1">
                <img style="margin-right: 20px" src="@/assets/icon/b2.png" v-else>
                <div class="title">{{ obj.lyname }}</div>
                <div style="margin-left: 40px"><span>直辖水库数量  29 </span><span>总库容  4089 万立方</span></div>
            </div>
            <div class="echarts">
                <div class="echarts1"></div>
                <div class="echarts2"></div>
            </div>
        </div>
        <div class="item" @click="changeItem(obj1,2)">
            <div class="top">
                <img style="margin-right: 20px" src="@/assets/icon/b1.png" v-if="count == 2">
                <img style="margin-right: 20px" src="@/assets/icon/b2.png" v-else>
                <div class="title">{{ obj1.lyname }}</div>
            </div>
            <div class="box">
                <div class="header">
                    <div style="margin-right: 40px">项目数量 5</div>
                    <div>流域面积 {{ obj1.lymj }} 平方公里</div>
                </div>
                <div class="ul">
                    <div class="li" v-for="(item,index) in obj1.hlData" :key="index">
                        <img class="imgs" :src="imgs[item.hllevel]" alt="">
                        <div>{{ item.hlname }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item" @click="changeItem(obj2,3)">
            <div class="top">
                <img style="margin-right: 20px" src="@/assets/icon/b1.png" v-if="count == 3">
                <img style="margin-right: 20px" src="@/assets/icon/b2.png" v-else>
                <div class="title">{{ obj2.lyname }}</div>
            </div>
            <div class="box">
                <div class="header">
                    <div style="margin-right: 40px">项目数量 5</div>
                    <div>流域面积 {{ obj2.lymj }} 平方公里</div>
                </div>
                <div class="ul">
                    <div class="li" v-for="(item,index) in obj2.hlData" :key="index">
                        <img class="imgs" :src="imgs[item.hllevel]" alt="">
                        <div>{{ item.hlname }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getMajorShuixiAndRiverData} from '@/api';
import echarts from "echarts";
import a1 from '@/assets/icon2/a1.png'
import a2 from '@/assets/icon2/a2.png'
import a3 from '@/assets/icon2/a3.png'
import a4 from '@/assets/icon2/a4.png'
import a5 from '@/assets/icon2/a5.png'

const imgs = {1:a1, 2:a2, 3:a3, 4:a4, 5:a5}

export default {
    data() {
        return {
            obj: {
                lyname: '水库',
                hlData1: [
                    {name: '利兴库容', value: 514},
                    {name: '滞洪库容', value: 915},
                ],
                hlData2: [
                    {name: '大型', value: 1},
                    {name: '中型', value: 20},
                    {name: '小型', value: 8},
                ]
            },
            obj1: {},
            obj2: {},
            count: -1,
            imgs
        }
    },
    created() {
        this.getMajorShuixiAndRiverData()
    },
    mounted() {
        this.initEcharts1()
        this.initEcharts2()
    },
    methods: {
        async getMajorShuixiAndRiverData() {
            const {data} = await getMajorShuixiAndRiverData()
            this.obj1 = data[0]
            this.obj2 = data[1]
        },
        changeItem(obj, index) {
            if (index == this.count) {
                this.count = -1
                return
            }
            this.count = index
        },
        initEcharts1() {
            const colorList = ['#fef175', '#6b51fe']
            const option = {
                title: {
                    text: '类型占比',
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        fontSize: 14,
                        color: '#fff',
                        fontFamily: '微软雅黑',
                        fontWeight: 600,
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                series: [{
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: ['45%', '75%'],
                    clockwise: true,
                    avoidLabelOverlap: true,
                    hoverOffset: 10,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 8,
                            length2: 12,
                            lineStyle: {
                                width: 1
                            }
                        }
                    },
                    data: this.obj.hlData1,
                }]
            };
            const dom = document.querySelector('.echarts1')
            const myChart = echarts.init(dom);
            myChart.setOption(option);
        },
        initEcharts2() {
            const colorList = ['#ff518c', '#00b3ff', '#00d584']
            const option = {
                title: {
                    text: '规模占比',
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        fontSize: 14,
                        color: '#fff',
                        fontFamily: '微软雅黑',
                        fontWeight: 600,
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                series: [{
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: ['45%', '75%'],
                    clockwise: true,
                    avoidLabelOverlap: true,
                    hoverOffset: 10,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 5,
                            length2: 5,
                            lineStyle: {
                                width: 1
                            }
                        }
                    },
                    data: this.obj.hlData2,
                }]
            };
            const dom = document.querySelector('.echarts2')
            const myChart = echarts.init(dom);
            myChart.setOption(option);
        }
    }
}
</script>

<style scoped>
.valley {
    padding-left: 40px;
    color: #1cb4f1;
}

.item:hover .title {
    color: #17b6ba;
}

.top {
    display: flex;
    align-items: center;
    height: 52px;
}

.item {
    cursor: pointer;
}

.title {
    font-size: 20px;
    color: #fff;
}

.box {
    padding-left: 50px;
}

.header {
    display: flex;
    line-height: 30px;
}

.ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}

.ul .li {
    height: 48px;
    display: flex;
    align-items: center;
}

.imgs {
    width: 24px;
    height: 24px;
    margin-right: 20px;
}

.echarts {
    display: flex;
    height: calc(100vh - 760px);
}

.echarts1 {
    width: 50%;
    height: calc(100vh - 760px);
}

.echarts2 {
    width: 50%;
    height: calc(100vh - 760px);
}
</style>