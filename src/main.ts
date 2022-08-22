import { createApp } from "vue";
// import View Design
import "view-ui-plus/dist/styles/viewuiplus.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);
// use View Design Components

app.mount("#app");
