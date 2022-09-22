import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

import routes from "./routes";

const { VITE_NODE_ENV } = import.meta.env;

export default createRouter({
  history:
    VITE_NODE_ENV !== "ghPages" ? createWebHistory() : createWebHashHistory(),
  routes,
});
