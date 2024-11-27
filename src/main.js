import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/style.css';
import App from './App.vue';
import axios from 'axios';
import router from './router/index';
import Pagination from "./components/Pagination/Pagination.vue"

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$axios = axios;

app.use(pinia);
app.use(router)
.component('Pagination', Pagination)
app.mount('#app');
