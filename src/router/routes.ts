import { RouteRecordRaw } from "vue-router";

const Login = () =>
  import(/* webpackChunkName: 'login' */ "../components/Login.vue");
const Reg = () => import(/* webpackChunkName: 'reg' */ "../components/Reg.vue");
const Forget = () =>
  import(/* webpackChunkName: 'forget' */ "../components/Forget.vue");

const routes: Readonly<RouteRecordRaw>[] = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/reg",
    name: "reg",
    component: Reg,
  },
  {
    path: "/forget",
    name: "forget",
    component: Forget,
  },
];

export default routes;
