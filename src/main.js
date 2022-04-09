import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import ViewNotes from "@/views/ViewNotes.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "notes",
      component: ViewNotes,
    },
  ],
});

createApp(App).use(router).mount("#app");
