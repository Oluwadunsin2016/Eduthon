import { createRouter, createWebHistory } from "vue-router";
import Branches from "./Pages/Branches.vue";
import Form from "./Pages/Form.vue";
import Login from "./Pages/Login.vue";

const routes = [
  // {
  //   path: "/",
  //   component: Home,
  //   meta: { public: false }, // marked the route as private
  // },
  {
    path: "/",
    component: Branches,
    meta: { public: false }, // marked the route as private
  },
  {
    path: "/enroll",
    component: Form,
    meta: { public: false }, // marked the route as private
  },
  {
    path: "/preview",
    component: '',
    meta: { public: false }, // marked the route as private
  },
  {
    path: "/login",
    name: "login",
    component:Login,
  },
    // meta: { public: true }, // marked the route as public
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});


export default router;
