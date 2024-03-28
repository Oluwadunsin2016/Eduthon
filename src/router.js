import { createRouter, createWebHistory } from "vue-router";
import Branches from "./Pages/Branches.vue";
import Form from "./Pages/Form.vue";
import Dashboard from "./Pages/Dashboard.vue";
import Login from "./Pages/Login.vue";
import ErrorPage from "./Pages/ErrorPage.vue";


// NOTE: Every route must have a name because the route with no name is used to identify the error 404 page

const routes = [
  {
    path: "/:catchAll(.*)",
    component: ErrorPage,
    meta: { public: false }, // marked the route as private
  },
  {
    path: "/dashboard",
    name:'dashboard',
    component: Dashboard,
    meta: { public: false }, // marked the route as private
  },
  {
    path: "/branches",
    name:'branches',
    component: Branches,
    meta: { public: false }, // marked the route as private
  },
  {
    path: "/enroll_student",
    name:'enroll',
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

  // if (!to.meta.public) {
  //   if (!isAuthenticated) {
  //     next({ name: "login" });
  //   } else {
  //     next();
  //   }
  // } else {
  //   if (!isAuthenticated) {
  //     next();
  //   } else {
  //     next({ name: from.name });
  //   }
  // }

  if (isAuthenticated && !to.meta.public) {
      next();
  } else if(!isAuthenticated && to.meta.public) {
      next();
  }
   else if (isAuthenticated && to.meta.public) {
      router.go(-1);
    }else{
      next({ name: "login" });
    }
});


export default router;
