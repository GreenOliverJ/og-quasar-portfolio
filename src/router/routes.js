const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/notes",
        component: () => import("pages/NotesLayout.vue"),
      },
      {
        path: "/new",
        component: () => import("pages/New.vue"),
      },
      {
        path: "/note/:id",
        component: () => import("pages/NoteSee.vue"),
      },
      {
        path: "/experience",
        component: () => import("pages/Experience.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
