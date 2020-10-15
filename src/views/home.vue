<template>
    <div class="home">
        <v-header type="1"/>
        <main class="main">
            <div class="left slide-in-left">
                <v-synopsis/>
                <v-nav @changeIndex="changeIndex"/>
                <div class="box">
                    <v-area v-if="navIndex == 0" @changeItem="changeItem" ref="svg"/>
                    <v-valley v-if="navIndex == 1" @changeImg="changeImg"/>
                    <v-project v-if="navIndex == 2"/>
                </div>
            </div>
            <div class="right">
                <three v-if="navIndex == 0" :index="index" @changeSvg="changeSvg" ref="tree" class="slide-in-right"/>
                <three2 v-else class="slide-in-right" ref="tree2"/>
            </div>
        </main>
        <video class="fullscreenvideo" id="bgvid" playsinline autoplay muted loop>
            <source :src="publicPath + 'bg/bg.mp4'" type="video/mp4">
        </video>
    </div>
</template>

<script>
import vHeader from '@/components/header'
import vSynopsis from '@/components/synopsis'
import vNav from "@/components/nav";
import vArea from "@/components/area";
import vValley from "@/components/valley";
import vProject from "@/components/project";
import three from '@/components/three'
import three2 from "@/components/three2";

export default {
    components: {
        vHeader,
        vSynopsis,
        vNav,
        vArea,
        vValley,
        vProject,
        three,
        three2
    },
    data() {
        return {
            navIndex: 0,
            index: -1,
            publicPath: process.env.BASE_URL
        }
    },
    methods: {
        changeIndex(index) {
            this.navIndex = index
        },
        changeItem(index) {
            this.index = index
        },
        changeImg(index){
            this.$refs.tree2.show = index
        },
        changeSvg(index) {
            this.$refs.svg.changeItem({}, index)
        }
    }
}
</script>

<style scoped>
.home {
    font-size: 15px;
    line-height: 1;
    color: #81fff8;
    width: 100vw;
    height: 100vh;
}

.main {
    display: flex;
}

.left {
    width: 600px;
    margin-top: 90px;
}
</style>
