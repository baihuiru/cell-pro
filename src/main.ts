import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import yqgPermission from './yqg-permission';
// import yqgPermission from '../dist';
yqgPermission.init();

const app = createApp(App);
app.mount('#app');


