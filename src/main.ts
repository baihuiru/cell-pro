/*
 * @Author: huirubai
 * @Date: 2025-08-22 13:11:51
 * @Last Modified: huirubai
 * @Last Modified time: Do not edit
 */
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import cellPro from './cell-pro';
cellPro.init();

const app = createApp(App);
app.mount('#app');


