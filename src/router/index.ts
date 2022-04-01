import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("@/views/Main.vue"),
    },
    {
      path: "/add-note",
      name: "add-note",
      component: () => import("@/views/AddNote.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit-note",
      component: () => import("@/views/EditNote.vue"),
      props: true,
    },
  ],
});

export default router;
