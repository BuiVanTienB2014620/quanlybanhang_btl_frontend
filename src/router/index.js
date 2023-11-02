import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
  

    component: () => import("../layouts/trangchu.vue"),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("../pages/views/home.vue"),
      },

      {
        path: "login",
        name: "login",
        component: () => import("../pages/views/login.vue"),
      },

      {
        path: "register",
        name: "register",
        component: () => import("../pages/views/register.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("../layouts/admin.vue"),
    children: [
      {
        path: "users",
        name: "admin-users",
        component: () => import("../pages/admin/user/user.vue"),
      },

      {
        path: "roles",
        name: "admin-roles",
        component: () => import("../pages/admin/roles/role.vue"),
      },

      {
        path: "settings",
        name: "admin-settings",
        component: () => import("../pages/admin/settings/setting.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
