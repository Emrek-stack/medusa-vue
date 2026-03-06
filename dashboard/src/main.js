import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "@minima-vue/ui/style.css";
import "./styles.css";
createApp(App).use(router).mount("#app");
