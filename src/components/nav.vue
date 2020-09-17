<template>
    <div class="nav">
        <div class="item" v-for="(item,index) in navBar" :key="index" @click="changeNav(item,index)"
             :class="index == navIndex?'active':''">
            {{ item }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navBar: ['七大片区', '主要流域', '五大工程'],
            navIndex: 0
        }
    },
    methods: {
        changeNav(item, index) {
            this.navIndex = index
            this.$emit('changeIndex',index)
        }
    }
}
</script>

<style scoped>
.nav {
    width: 540px;
    margin: 0 auto;
    display: flex;
    font-size: 22px;
    text-align: center;
    height: 78px;
    border-bottom: 1px solid rgba(91,218,222,0.24);
}

.item {
    width: 140px;
    margin-right: 60px;
    margin-top: 20px;
    line-height: 58px;
    cursor: pointer;
    border-bottom: 4px solid transparent;
}

.active {
    border-bottom: 4px solid #81fff8;
}

.item:nth-child(3) {
    margin-right: 0;
}
</style>