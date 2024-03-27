import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
// import router from '/Users/baekdonghyeon/Desktop/front project/ahub-project/src/router/router.js';



// createApp(App).mount('#app')

const app = createApp(App);

app.config.globalProperties.$axios = axios; 

// app.use(router);
app.use(axios);
app.mount('#app');
