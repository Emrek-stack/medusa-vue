import type { Meta, StoryObj } from '@storybook/vue3'
import Kbd from './Kbd.vue'

const meta: Meta<typeof Kbd> = {
    title: 'Components/Kbd',
    component: Kbd,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}

export default meta
type Story = StoryObj<typeof Kbd>

export const Default: Story = {
    render: (args) => ({
        components: { Kbd },
        setup() {
            return { args }
        },
        template: '<Kbd v-bind="args">⌘</Kbd>',
    }),
}
