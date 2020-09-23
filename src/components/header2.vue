<template>
    <header class="top">
        <div class="name">{{name}}</div>
        <div class="right">
            <div class="box">
                <img src="@/assets/project/sun.png" style="margin-right: 10px">
                <div style="font-size: 16px;text-align: left">
                    <div style="margin-bottom: 6px">晴</div>
                    <div>东北风3级</div>
                </div>
                <img src="@/assets/project/wd.png" style="margin: 0 10px">
                <div style="font-size: 16px;text-align: left">30℃</div>
            </div>
            <div class="box">
                <div style="margin-right: 10px">{{ time }}</div>
                <div style="font-size: 16px;">
                    <div style="margin-bottom: 8px">{{ date }}</div>
                    <div>星期{{ week }}</div>
                </div>
            </div>
            <div class="btn" @click="goBack">
                <img style="margin-right: 10px;" src="@/assets/project/back.png" alt="">返回
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props:['name'],
    data() {
        return {
            date: '',
            time: '',
            week: ''
        }
    },
    created() {
        this.initDate()
        setTimeout(() => {
            this.initDate()
        }, 1000)
    },
    methods: {
        initDate() {
            const week = {'1': '一', '2': '二', '3': '三', '4': '四', '5': '五', '6': '六', '7': '日'}
            const date = new Date()
            this.time = date.getHours() + ':' + date.getMinutes()
            this.date = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
            this.week = week[date.getDay()]
        },
        goBack() {
            this.$router.go(-1)
        }
    },
};
</script>

<style scoped>
.top {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 110px;
    background-image: url("../assets/project/top.png");
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box {
    display: flex;
    align-items: center;
    font-size: 40px;
    justify-content: center;
}

.box:after {
    display: block;
    content: '';
    margin-left: 40px;
    width: 2px;
    height: 40px;
    background-color: #badfff;
    opacity: 0.3;
}

.right {
    color: #fff;
    width: 660px;
    height: 110px;
    display: grid;
    align-items: center;
    grid-template-columns: 258px 258px auto;
    text-align: center;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.60;
}

.btn:hover {
    opacity: 1;
}
.name{
    height: 34px;
    font-family: 'b';
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 2px;
    color: #ffffff;
    padding-left: 50px;
    background: linear-gradient(to bottom, #fff, rgba(173,210,255));
    -webkit-background-clip: text;
    color: transparent;
}
</style>