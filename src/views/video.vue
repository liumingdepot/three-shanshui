<template>
    <video class="fullscreenvideo" id="bgvid" playsinline autoplay muted>
        <source :src='`${publicPath}bg/bg1.mp4`' type="video/mp4">
    </video>
</template>

<script>
export default {
    data(){
        return{
            publicPath: process.env.BASE_URL
        }
    },
    created() {
        setTimeout(()=>{
            this.$router.push('/home')
        },4000)
    }
}
</script>