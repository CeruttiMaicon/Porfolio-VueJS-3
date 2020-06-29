import { createApp } from "vue";

import App from "./App.vue";
import "./index.css";
import "./style.scss";

import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
//router.isReady().then(() => app.mount('#app'))
