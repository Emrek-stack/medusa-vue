import { createRouter, createWebHistory } from "vue-router"
import HomePage from "@docs/pages/HomePage.vue"
import InstallationPage from "@docs/pages/InstallationPage.vue"
import ColorsPage from "@docs/pages/ColorsPage.vue"
import IconsPage from "@docs/pages/IconsPage.vue"
import HookPage from "@docs/pages/HookPage.vue"
import UtilityPage from "@docs/pages/UtilityPage.vue"
import ComponentPage from "@docs/pages/ComponentPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/installation/:slug",
      name: "installation",
      component: InstallationPage,
    },
    {
      path: "/colors/overview",
      name: "colors",
      component: ColorsPage,
    },
    {
      path: "/icons/overview",
      name: "icons",
      component: IconsPage,
    },
    {
      path: "/hooks/:slug",
      name: "hook",
      component: HookPage,
    },
    {
      path: "/utils/:slug",
      name: "utility",
      component: UtilityPage,
    },
    {
      path: "/components/:slug",
      name: "component",
      component: ComponentPage,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
