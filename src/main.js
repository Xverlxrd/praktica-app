import { createApp } from "vue";
import App from "./App.vue";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router'
import { createI18n } from 'vue-i18n';
import messages from './locales';

export const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    messages,
});

const app = createApp(App);
app.use(router).use(Antd).use(i18n);
app.mount("#app");
