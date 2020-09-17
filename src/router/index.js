import Vue from 'vue'
import Router from 'vue-router'
import video from '@/views/video.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: "/video",
        },
        {
            path: '/video',
            name: 'video',
            component:  video
        },
        {
            path: '/home',
            name: 'home',
            component:  () => import('@/views/home')
        },
        {
            path: '/project',
            name: 'project',
            component: () => import('@/views/project')
        }
    ]
})

export default router