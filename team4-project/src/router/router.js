import {createRouter, createWebHistory} from 'vue-router';


const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/board/fairs',
            component: () => import('../views/FairBoard.vue')
        },
        {
            path: '/',
            component: () => import('../views/MainPage.vue')
        },
        {
            path: '/post/content/6',
            component: () => import('../views/PostReplyView.vue')
        },
        {
            path: '/post/posts',
            component: () => import('../views/PostMainView.vue')
        }
    ]
})

export default router;