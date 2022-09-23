import { RouteRecordName, RouteRecordRaw } from "vue-router";

const Home = () => import(/* webpackChunkName: 'home' */ "@/views/Home.vue");
const Login = () =>
  import(/* webpackChunkName: 'login' */ "../components/Login.vue");
const Reg = () => import(/* webpackChunkName: 'reg' */ "../components/Reg.vue");
const Forget = () =>
  import(/* webpackChunkName: 'forget' */ "../components/Forget.vue");

const routes: Readonly<RouteRecordRaw>[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (
        from.name &&
        (["home", "reg"] as RouteRecordName[]).includes(from.name)
      ) {
        next();
      } else {
        next({ name: "home" });
      }
    },
  },
  {
    path: "/reg",
    name: "reg",
    component: Reg,
    beforeEnter: (to, from, next) => {
      if (
        from.name &&
        (["login", "home"] as RouteRecordName[]).includes(from.name)
      ) {
        next();
      } else {
        next({ name: "login" });
      }
    },
  },
  {
    path: "/forget",
    name: "forget",
    component: Forget,
  },
];

export default routes;
