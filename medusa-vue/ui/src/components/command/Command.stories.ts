import type { Meta, StoryObj } from '@storybook/vue3'
import { Command } from './index'

const meta: Meta<typeof Command> = {
    title: 'Components/Command',
    component: Command,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
    render: () => ({
        components: { Command },
        template: `
            <Command>
                 <code>npm install @medusajs/medusa</code>
            </Command>
        `,
    }),
}
