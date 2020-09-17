<template>
    <div class="synopsis">
        <div class="item">
            <div class="title">项目数量</div>
            <div class="text">{{projectCountInfo.XMSL}}</div>
        </div>
        <div class="item">
            <div class="title">项目总金额</div>
            <div class="text">{{projectCountInfo.XMJE}} <span class="_text">万</span></div>
        </div>
        <div class="item">
            <div class="title">项目进度</div>
            <div class="text">{{projectCountInfo.AVGPROGRESS}} <span class="_text">%</span></div>
        </div>
        <div class="item">
            <div class="title">总覆盖面</div>
            <div class="text">{{projectCountInfo.FGMJ}} <span class="_text">公顷</span></div>
        </div>
    </div>
</template>

<script>
import {getProjectCountInfo} from '@/api/index'
export default {
    data(){
        return{
            projectCountInfo:{}
        }
    },
    async created() {
        const projectCountInfo = await getProjectCountInfo()
        this.projectCountInfo = projectCountInfo.data
    }
}
</script>

<style scoped>
.synopsis {
    width: 520px;
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    margin: 0 20px;
    text-align: center;
    font-family: Bahnschrift;
    background-color: rgba(3,10,9,0.41);
    border-top: 1px solid rgba(91,218,222,0.24);
    border-bottom: 1px solid rgba(91,218,222,0.24);
}

.item {

}

.title {
    font-size: 12px;
    color: #add4f5;
    margin-bottom: 20px;
}

.text {
    font-size: 34px;
    color: #79f3f7;
}
._text{
    font-size: 15px;
}
</style>