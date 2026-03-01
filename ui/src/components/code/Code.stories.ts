import type { Meta, StoryObj } from '@storybook/vue3'
import Code from './Code.vue'

const meta: Meta<typeof Code> = {
    title: 'Components/Code',
    component: Code,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Code>

export const Default: Story = {
    render: (args) => ({
        components: { Code },
        setup() {
            return { args }
        },
        template: '<Code v-bind="args">yarn add -D @minima-vue/ui-preset</Code>',
    }),
}
