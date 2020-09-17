<template>
    <div class="project">
        <div class="echarts"></div>
        <div class="fenge"></div>
        <div class="box">
            <div class="item" v-for="(item,index) in listData" :key="index">
                <img class="img" :src="item.url" alt="">
                <div>
                    <div class="title">{{ item.name }}</div>
                    <div>项目数量 {{ item.XMSL }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts';
import {getFiveClassZjAndSsxm} from '@/api'
import img0 from '@/assets/icon/a0.png'
import img1 from '@/assets/icon/a1.png'
import img2 from '@/assets/icon/a2.png'
import img3 from '@/assets/icon/a3.png'
import img4 from '@/assets/icon/a4.png'

const imgs = [img0, img1, img2, img3, img4]

export default {
    data() {
        return {
            listData: []
        }
    },
    mounted() {
        this.initData()
    },
    methods: {
        async initData() {
            const data = await getFiveClassZjAndSsxm()
            const listData = data.data.map((val, index) => {
                return {
                    name: val.FLNAME.substring(0, 4),
                    value: val.TZJE,
                    XMSL: val.XMSL,
                    url: imgs[index]
                }
            })
            this.listData = listData
            this.initEcharts(listData)
        },
        initEcharts(data) {
            const colorList = ['#FD866A', '#FDB36A', '#FDD56A', '#9E87FF', '#73ACFF', '#58D5FF', '#73DDFF', '#CDFF52']
            const option = {
                title: {
                    text: '资金占比',
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        fontSize: 18,
                        color: '#08f1f8',
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
                    radius: ['45%', '65%'],
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
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: '{a|{b}：{d}%}\n{hr|}',
                        fontSize: 12,
                        fontFamily: '微软雅黑',
                        rich: {
                            hr: {
                                borderRadius: 3,
                                width: 3,
                                height: 3,
                                padding: [3, 3, 0, -12]
                            },
                            a: {
                                padding: [-30, 15, -20, 15]
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
                    data: data,
                }]
            };
            const dom = document.querySelector('.echarts')
            const myChart = echarts.init(dom);
            myChart.setOption(option);
        }
    }
}
</script>

<style scoped>
.fenge {
    width: 450px;
    height: 1px;
    margin: 0 auto;
    margin-bottom: 10px;
    background-image: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.56),rgba(255,255,255,0));
}

.echarts {
    height: calc(100vh - 600px);
}

.box {
    display: grid;
    padding-left: 70px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 100px;
    align-items: center;
}

.img {
    width: 75px;
    height: 75px;
    margin-right: 30px;
}

.item {
    display: flex;
}

.title {
    font-size: 22px;
    line-height: 44px;
    color: #fff;
}
</style>