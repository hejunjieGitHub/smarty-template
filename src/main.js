import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import smartyUi from '@hejunjietest/smarty-ui-vite';
import '@hejunjietest/smarty-ui-vite/dist/style.css';

createApp(App)
    .use(smartyUi)
    .mount('#app')
