import type { Meta, StoryObj } from '@storybook/vue3'
import Hint from './Hint.vue'
import { ExclamationCircleSolid } from '@minima-vue/icons'

const meta: Meta<typeof Hint> = {
    title: 'Components/Hint',
    component: Hint,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['info', 'error'],
        },
    },
    args: {
        variant: 'info',
    },
}

export default meta
type Story = StoryObj<typeof Hint>

export const Info: Story = {
    render: (args) => ({
        components: { Hint },
        setup() {
            return { args }
        },
        template: '<Hint v-bind="args">This is a hint message</Hint>',
    }),
}

export const Error: Story = {
    render: (args) => ({
        components: { Hint },
        setup() {
            return { args }
        },
        template: '<Hint v-bind="args">This is an error message</Hint>',
    }),
    args: {
        variant: 'error',
    },
}

export const WithIcon: Story = {
    render: (args) => ({
        components: { Hint, ExclamationCircleSolid },
        setup() {
            return { args }
        },
        template: `
      <Hint v-bind="args">
        <ExclamationCircleSolid />
        This is a hint with an icon
      </Hint>
    `,
    }),
}
