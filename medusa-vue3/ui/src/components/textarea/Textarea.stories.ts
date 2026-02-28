import type { Meta, StoryObj } from '@storybook/vue3'
import Textarea from './Textarea.vue'

const meta: Meta<typeof Textarea> = {
    title: 'Components/Textarea',
    component: Textarea,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
    render: (args) => ({
        components: { Textarea },
        setup() {
            return { args }
        },
        template: '<Textarea v-bind="args" />',
    }),
}
