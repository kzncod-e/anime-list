import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import "./index.css";
import router from "./router";
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia); // Use the router
app.mount("#app");
