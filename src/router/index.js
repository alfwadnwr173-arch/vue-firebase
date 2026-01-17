import { createRouter, createWebHistory } from "vue-router";
import login from "../views/login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import { auth } from "../firebase/config";

const routes = [
  { path: "/login", component: login },
  { path: "/register", component: Register },
  {
    path: "/",
    component: Home,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.currentUser) {
    next("/login");
  } else {
    next();
  }
});

export default router;