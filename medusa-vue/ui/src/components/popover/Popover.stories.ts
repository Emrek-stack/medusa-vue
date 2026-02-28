import type { Meta, StoryObj } from '@storybook/vue3'
import { Popover, PopoverTrigger, PopoverContent } from './index'

const meta: Meta<typeof Popover> = {
    title: 'Components/Popover',
    component: Popover,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
    render: () => ({
        components: { Popover, PopoverTrigger, PopoverContent },
        template: `
            <Popover>
                <PopoverTrigger asChild>
                    <button class="px-4 py-2 bg-ui-bg-base border rounded shadow-sm">Open Popover</button>
                </PopoverTrigger>
                <PopoverContent class="w-80">
                    <div class="flex flex-col gap-y-2 p-4">
                        <h4 class="font-medium">Dimensions</h4>
                        <p class="text-sm text-ui-fg-subtle">Set the dimensions for the layer.</p>
                    </div>
                </PopoverContent>
            </Popover>
        `,
    }),
}
