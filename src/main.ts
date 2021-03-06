import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { key, store } from './store';
import './style/style.scss';

const app = createApp(App);
app.use(store, key);
app.use(router);
app.mount('#app');
