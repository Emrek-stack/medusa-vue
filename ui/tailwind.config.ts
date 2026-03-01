import type { Config } from "tailwindcss"
import preset from "@minima-vue/ui-preset"

const config: Config = {
    presets: [preset as Config],
    content: [
        "./src/**/*.{ts,tsx,vue}",
        "../ui-preset/src/**/*.{ts,tsx,vue}" // Ensure preset content is also watched if necessary
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

export default config
