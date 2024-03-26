import { createRouter, createWebHistory} from 'vue-router';
import RegistMember from '@/components/00_member/registMember.vue';
import LoginMember from '@/components/00_member/loginMember.vue';

const router = ({
    history: createWebHistory(),

    routes: [
        {
            path: '/member/regist',
            component: RegistMember
        },
        {
            path: '/member/login',
            component: LoginMember
        }
    ]
});

export default router;