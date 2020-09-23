<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

</script>

<style>
@font-face {
    font-family: 'a';
    src: url('./assets/font/a.ttf');
}
@font-face {
    font-family: 'b';
    src: url('./assets/font/b.TTF');
}
.slide-in-right {
    animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.slide-in-left {
    animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.fullscreenvideo {
    position: fixed;
    top: 0;
    left: 0;
    width: 1920px;
    height: 1080px;
    z-index: -2;
    opacity: 0.4;
}
@keyframes slide-in-right {
    0% {
        transform: translateX(400px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes slide-in-left {
    0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}

#app {
    font-size: 15px;
    line-height: 1;
    color: #81fff8;
    width: 100vw;
    height: 100vh;
}
canvas, #canvas {
    outline: none;
}
</style>
