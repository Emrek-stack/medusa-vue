import { createRouter, createWebHistory } from "vue-router"
import OrdersPage from "@/pages/OrdersPage.vue"
import ProductsPage from "@/pages/ProductsPage.vue"
import CustomersPage from "@/pages/CustomersPage.vue"
import InventoryPage from "@/pages/InventoryPage.vue"
import PromotionsPage from "@/pages/PromotionsPage.vue"
import PriceListsPage from "@/pages/PriceListsPage.vue"
import SettingsPage from "@/pages/SettingsPage.vue"

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/dashboard" },
    { path: "/dashboard", component: OrdersPage },
    { path: "/tenants", component: ProductsPage },
    { path: "/tenants/create", component: ProductsPage },
    { path: "/users", component: CustomersPage },
    { path: "/users/create", component: CustomersPage },
    { path: "/roles", component: InventoryPage },
    { path: "/roles/create", component: InventoryPage },
    { path: "/permissions", component: PromotionsPage },
    { path: "/permissions/create", component: PromotionsPage },
    { path: "/ui-demo", component: PriceListsPage },
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
