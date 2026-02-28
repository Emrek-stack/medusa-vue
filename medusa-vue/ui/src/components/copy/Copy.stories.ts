import type { Meta, StoryObj } from '@storybook/vue3'
import Copy from './Copy.vue'

const meta: Meta<typeof Copy> = {
    title: 'Components/Copy',
    component: Copy,
    tags: ['autodocs'],
    argTypes: {
        content: { control: 'text' },
    },
    args: {
        content: 'Text to copy',
    },
}

export default meta
type Story = StoryObj<typeof Copy>

export const Default: Story = {
    render: (args) => ({
        components: { Copy },
        setup() {
            return { args }
        },
        template: '<Copy v-bind="args" />',
    }),
}

export const CustomContent: Story = {
    render: (args) => ({
        components: { Copy },
        setup() {
            return { args }
        },
        template: '<Copy v-bind="args" class="h-8 w-8 text-ui-fg-muted" />',
    }),
}
