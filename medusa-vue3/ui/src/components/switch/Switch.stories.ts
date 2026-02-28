import type { Meta, StoryObj } from '@storybook/vue3'
import Switch from './Switch.vue'

const meta: Meta<typeof Switch> = {
    title: 'Components/Switch',
    component: Switch,
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        size: {
            control: 'select',
            options: ['small', 'base'],
        },
    },
    args: {
        size: 'base',
    }
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
    render: (args) => ({
        components: { Switch },
        setup() {
            return { args }
        },
        template: '<Switch v-bind="args" />',
    }),
}

export const Small: Story = {
    render: (args) => ({
        components: { Switch },
        setup() {
            return { args }
        },
        template: '<Switch v-bind="args" />',
    }),
    args: {
        size: 'small',
    },
}

export const Checked: Story = {
    render: (args) => ({
        components: { Switch },
        setup() {
            return { args }
        },
        template: '<Switch v-bind="args" />',
    }),
    args: {
        checked: true,
    },
}

export const Disabled: Story = {
    render: (args) => ({
        components: { Switch },
        setup() {
            return { args }
        },
        template: '<Switch v-bind="args" />',
    }),
    args: {
        disabled: true,
    },
}

export const CheckedDisabled: Story = {
    render: (args) => ({
        components: { Switch },
        setup() {
            return { args }
        },
        template: '<Switch v-bind="args" />',
    }),
    args: {
        checked: true,
        disabled: true,
    },
}
