import type { Meta, StoryObj } from '@storybook/vue3'
import Tooltip from './Tooltip.vue'
import { TooltipProvider } from 'radix-vue'
import { InformationCircleSolid } from '@minima-vue/icons'

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    argTypes: {
        side: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right'],
        },
        content: { control: 'text' },
    },
    args: {
        content: 'The quick brown fox jumps over the lazy dog.',
        side: 'top',
    },
    decorators: [
        (story) => ({
            components: { TooltipProvider, story },
            template: `
        <TooltipProvider>
          <div class="h-[200px] w-full flex items-center justify-center">
             <story />
          </div>
        </TooltipProvider>
      `,
        }),
    ],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
    render: (args) => ({
        components: { Tooltip, InformationCircleSolid },
        setup() {
            return { args }
        },
        template: `
      <Tooltip v-bind="args">
        <InformationCircleSolid />
      </Tooltip>
    `,
    }),
}
