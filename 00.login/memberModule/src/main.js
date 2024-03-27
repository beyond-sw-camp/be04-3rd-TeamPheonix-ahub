import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios'
import "bootstrap-icons/font/bootstrap-icons.css"

const app = createApp(App);
app.use(router);
// axios 전역 설정 방법 1: provide - inject 사용
app.provide('$axios', axios);
app.mount('#app');

// axios 전역 설정 방법 2
// app.config.globalProperties.$axios = axios;