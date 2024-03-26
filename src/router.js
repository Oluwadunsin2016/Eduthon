import { createRouter, createWebHistory } from "vue-router";
import Branches from "./Pages/Branches.vue";
import Form from "./Pages/Form.vue";
import Login from "./Pages/Login.vue";

const routes = [
  {
    path: "/branches",
    component: Branches,
    meta: { public: false }, // marked the route as private
  },
  {
    path: "/enroll",
    component: Form,
    meta: { public: false }, // marked the route as private
  },
  {
    path: "/",
    name: "login",
    component:Login,
    meta: { public: true }, // marked the route as public
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("eduthonToken");

  if (!to.meta.public) {
    if (!isAuthenticated) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    if (!isAuthenticated) {
      next();
    } else {
      next({ name: from.name });
    }
  }
});


export default router;
