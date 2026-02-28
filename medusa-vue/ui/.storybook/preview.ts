import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import { TooltipProvider } from "radix-vue";
import "../src/style.css"; // Import global styles

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (story) => ({
            components: { story, TooltipProvider },
            template: '<TooltipProvider :delayDuration="0"><story /></TooltipProvider>'
        })
    ]
};

export default preview;
