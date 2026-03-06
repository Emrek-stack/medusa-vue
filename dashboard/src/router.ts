import { createRouter, createWebHistory } from "vue-router"
import AppShell from "@/layout/AppShell.vue"
import OrdersPage from "@/pages/OrdersPage.vue"
import ProductsPage from "@/pages/ProductsPage.vue"
import CustomersPage from "@/pages/CustomersPage.vue"
import InventoryPage from "@/pages/InventoryPage.vue"
import PromotionsPage from "@/pages/PromotionsPage.vue"
import PriceListsPage from "@/pages/PriceListsPage.vue"
import SettingsPage from "@/pages/SettingsPage.vue"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: AppShell,
      children: [
        { path: "", redirect: "/orders" },
        { path: "orders", component: OrdersPage },
        { path: "products", component: ProductsPage },
        { path: "customers", component: CustomersPage },
        { path: "inventory", component: InventoryPage },
        { path: "promotions", component: PromotionsPage },
        { path: "price-lists", component: PriceListsPage },
        { path: "settings/:section", component: SettingsPage },
      ],
    },
  ],
})
