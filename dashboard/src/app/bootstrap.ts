import { createApp } from "vue"
import { createHead } from "@vueuse/head"

import App from "@/App.vue"
import { router } from "@/app/router"
import { pinia } from "@/stores"

export const bootstrapApp = () => {
  const app = createApp(App)

  app.use(pinia)
  app.use(createHead())
  app.use(router)

  app.mount("#app")
}
