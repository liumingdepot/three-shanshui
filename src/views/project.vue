<template>
    <div class="project">
        <v-header :name="headerName"/>
        <img style="position: fixed;right: 0;top: 110px;width: 100px;height: 900px;z-index: 99" src="@/assets/project/rightA.png" alt="">
        <v-left :data="data" :fldata="fldata" v-if="data" @changepPanoramic="changepPanoramic"/>
        <v-right @changepPanoramic="changepPanoramic"/>
        <v-panoramic v-if="panoramic == 1" :name="name" @changepPanoramic="changepPanoramic"/>
        <v-image v-if="panoramic == 2" :name="name" @changepPanoramic="changepPanoramic"/>
    </div>
</template>

<script>
import vLeft from "@/components/left";
import vRight from "@/components/right";
import vPanoramic from "@/components/panoramic";
import vHeader from '@/components/header2'
import vImage from '@/components/image'
import {getXmInfoByProId} from '@/api'

export default {
    data() {
        return {
            panoramic:0,
            name:'',
            data:null,
            fldata:null,
            headerName:''
        }
    },
    components: {
        vHeader,
        vLeft,
        vPanoramic,
        vRight,
        vImage
    },
    async created() {
        const {data,fldata} = await getXmInfoByProId(this.$route.query.proid)
        console.log(data);
        this.headerName =data.PRO_NAME
        this.data = data
        this.fldata = fldata
    },
    methods: {
        changepPanoramic({type,name}){
            this.panoramic = type
            this.name = name
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


</style>