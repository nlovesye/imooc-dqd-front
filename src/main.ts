import { createApp } from "vue";
// import vee-validate
import { Form, Field, ErrorMessage } from "vee-validate";
// import View Design
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Space,
  Button,
} from "view-ui-plus";
import "view-ui-plus/src/styles/index.less";
import "@/assets/scss/global.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router).use(store);

// regist view-ui-plus components
app.component("Dropdown", Dropdown);
app.component("DropdownMenu", DropdownMenu);
app.component("DropdownItem", DropdownItem);
app.component("Avatar", Avatar);
app.component("Space", Space);
app.component("Button", Button);

// regist vee-validate components
app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);

app.mount("#app");
