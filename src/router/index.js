import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("../views/Resume.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/Projects.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: '/:catchAll(.*)',
      name: "404",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
