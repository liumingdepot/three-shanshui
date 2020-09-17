<template>
    <div class="project">
        <v-header type="2"/>
        <v-left :data="data"/>
        <v-right @changepPanoramic="changepPanoramic"/>
        <v-panoramic v-if="panoramic" @changepPanoramic="changepPanoramic"/>
    </div>
</template>

<script>
import vHeader from "@/components/header";
import vLeft from "@/components/left";
import vRight from "@/components/right";
import vPanoramic from "@/components/panoramic";
// import {getXmInfoByProId} from '@/api'

export default {
    data() {
        return {
            panoramic:false
        }
    },
    components: {
        vHeader,
        vLeft,
        vPanoramic,
        vRight
    },
    created() {
        this.getXmInfoByProId()
    },
    methods: {
        async getXmInfoByProId() {
            // const {data} = await getXmInfoByProId(this.$route.query.proid)
            // this.data = data
            this.data = {
                "PRO_NAME": "沮河上游生态保护修复项目（一期）",
                "AREA_NAME": "耀州区",
                "PRO_STATUS": "项目完成",
                "STAANDEND": "2017-2019",
                "PRO_PROGRESS": 92,
                "GROSS_ASSETS": 21000,
                "CONSTRUCTION_UNIT": "耀州区 水务局",
                "BELONG_TYPE": "1234",
                "PROJECT_BRIEF": "实施单位：耀州区水务局\n主要建设内容：本项目依初步设计划分为5个子项目：（1）照金沟片区水土流失综合治理项目工程；（2）照金老矿废弃矿山综合整治工程；（3）西川及主河道片区生态保护修复工程；（4）秀房沟生态保护修复工程；（5）农村面源综合整治工程\n各子项目相关情况如下:\n1.照金沟片区水土流失综合治理项目工程基本情况:本工程项目区位于秀房沟及其支流和照金河伙食店段，治理河道长度30km。涉及照金镇伙食店村、田峪村、北梁村、胡巷村以及庙湾镇柳林村，共计两镇5村;建设内容为：①水源地保护②河道综合整治③水土流失综合治理④废弃矿山综合整治⑤废弃移民搬迁区整治;进展情况:本工程由区水务局通过招标委托中国有色金属工业西安勘察设计研究院完成设计工作\n2.照金老矿废弃矿山综合整治工程基本情况:项目区位于照金老矿治理区、君安煤矿治理区以及矿区连接段:建设内容为：（1）君安煤矿治理区;（2）矿区连接段;（3）照金老矿治理区;进展情况:本工程由区水务局通过招标委托中国有色金属工业西安勘察设计研究院完成设计工作\n3.西川及主河道片区生态保护修复工程基本情况:项目区自庙湾镇玉门村起，终止于关庄镇支前河村（桃曲坡水库库尾），全长33km;本项目建设内容为：（1）玉门村段：主要工程措施为水土流失综合治理、农田生态系统提升、水资源保护与综合利用;（2）庙湾至交汇口段，主要工程措施为水土流失综合治理、农田生态系统提升、水资源保护与综合利用;（3）香山沟段，主要工程措施为水土流失综合治理、水资源保护与综合利用;（4）交汇口至柳林段，主要工程措施为水土流失综合治理、农田生态系统提升、水资源保护与综合利用;（5）柳林至库尾段，主要工程措施为水土流失综合治理、农田生态系统提升、水资源保护与综合利用;进展情况:本工程由区水务局通过招标委托中国有色金属工业西安勘察设计研究院完成设计工作;\n4.秀房沟生态保护修复工程基本情况:项目区位于耀州区照金镇秀房河的支流，上游至一线天以上沟谷分叉处，下游与溪山胜景交接，修复生态河道总长度7km;进展情况:本工程由区水务局通过招标委托中国有色金属工业西安勘察设计研究院完成设计工作;"
            }
        },
        changepPanoramic(type){
            this.panoramic = type
        }
    }
}
</script>

<style scoped>
.project {
    font-size: 15px;
    line-height: 1;
    color: #81fff8;
    width: 100vw;
    height: 100vh;
    background: url("../assets/bg.png");
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
}

.main {
    display: flex;
}

.left {
    width: 480px;
}

.right {
    position: fixed;
    right: 80px;
    top: 100px;
    overflow: hidden;
    width: 1360px;
    height: 916px;
    background-image: url("../assets/project/right.png");
    background-size: 1360px 916px;
    background-repeat: no-repeat;
}
</style>