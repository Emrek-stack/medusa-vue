import type { Meta, StoryObj } from '@storybook/vue3'
import Checkbox from './Checkbox.vue'

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: 'boolean', // can be 'indeterminate' too but simple boolean for basic control
        },
        disabled: {
            control: 'boolean',
        },
    },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
    render: (args) => ({
        components: { Checkbox },
        setup() {
            return { args }
        },
        template: '<Checkbox v-bind="args" />',
    }),
}

export const Checked: Story = {
    render: (args) => ({
        components: { Checkbox },
        setup() {
            return { args }
        },
        template: '<Checkbox v-bind="args" />',
    }),
    args: {
        checked: true,
    },
}

export const Indeterminate: Story = {
    render: (args) => ({
        components: { Checkbox },
        setup() {
            return { args }
        },
        template: '<Checkbox v-bind="args" />',
    }),
    args: {
        checked: 'indeterminate',
    },
}

export const Disabled: Story = {
    render: (args) => ({
        components: { Checkbox },
        setup() {
            return { args }
        },
        template: '<Checkbox v-bind="args" />',
    }),
    args: {
        disabled: true,
    },
}

export const DisabledChecked: Story = {
    render: (args) => ({
        components: { Checkbox },
        setup() {
            return { args }
        },
        template: '<Checkbox v-bind="args" />',
    }),
    args: {
        disabled: true,
        checked: true,
    },
}

export const DisabledIndeterminate: Story = {
    render: (args) => ({
        components: { Checkbox },
        setup() {
            return { args }
        },
        template: '<Checkbox v-bind="args" />',
    }),
    args: {
        disabled: true,
        checked: 'indeterminate',
    },
}
