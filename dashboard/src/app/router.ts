import { createRouter, createWebHistory } from "vue-router"
import OrdersPage from "@/pages/OrdersPage.vue"
import LoginPage from "@/pages/LoginPage.vue"
import TenantsPage from "@/pages/TenantsPage.vue"
import TenantCreatePage from "@/pages/TenantCreatePage.vue"
import TenantEditPage from "@/pages/TenantEditPage.vue"
import CustomersPage from "@/pages/CustomersPage.vue"
import InventoryPage from "@/pages/InventoryPage.vue"
import PromotionsPage from "@/pages/PromotionsPage.vue"
import SettingsPage from "@/pages/SettingsPage.vue"
import ComponentsDemoPage from "@/pages/ComponentsDemoPage.vue"

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/dashboard" },
    { path: "/login", component: LoginPage },
    { path: "/dashboard", component: OrdersPage },
    { path: "/tenants", component: TenantsPage },
    { path: "/tenants/create", component: TenantCreatePage },
    { path: "/tenants/:id/edit", component: TenantEditPage },
    { path: "/tenants/:id", component: TenantEditPage },
    { path: "/users", component: CustomersPage },
    { path: "/users/create", component: CustomersPage },
    { path: "/roles", component: InventoryPage },
    { path: "/roles/create", component: InventoryPage },
    { path: "/permissions", component: PromotionsPage },
    { path: "/permissions/create", component: PromotionsPage },
    { path: "/ui-demo", component: ComponentsDemoPage },
    { path: "/components-demo", component: ComponentsDemoPage },
    { path: "/settings", redirect: "/settings/general" },
    { path: "/settings/:section", component: SettingsPage },

    { path: "/orders", redirect: "/dashboard" },
    { path: "/products", redirect: "/tenants" },
    { path: "/customers", redirect: "/users" },
    { path: "/inventory", redirect: "/roles" },
    { path: "/promotions", redirect: "/permissions" },
    { path: "/price-lists", redirect: "/ui-demo" },
  ],
})
