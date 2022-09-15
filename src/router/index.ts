import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";

export default createRouter({
  history: createWebHistory('/imooc-dqd-frontend/'),
  routes,
});
