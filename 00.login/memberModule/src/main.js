import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import requiredText from './assets/requiredText'

const app = createApp(App);
app.use(router);
app.use(requiredText);
app.mount('#app');