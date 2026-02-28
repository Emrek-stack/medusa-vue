import type { Meta, StoryObj } from '@storybook/vue3'
import Input from './Input.vue'

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'base'],
        },
        disabled: {
            control: 'boolean',
        },
        type: {
            control: 'text',
        },
    },
    args: {
        placeholder: 'Placeholder',
        size: 'base',
    }
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
    render: (args) => ({
        components: { Input },
        setup() {
            return { args }
        },
        template: '<Input v-bind="args" />',
    }),
}

export const Disabled: Story = {
    render: (args) => ({
        components: { Input },
        setup() {
            return { args }
        },
        template: '<Input v-bind="args" />',
    }),
    args: {
        modelValue: 'Floyd Mayweather',
        disabled: true,
    },
}

export const Invalid: Story = {
    render: (args) => ({
        components: { Input },
        setup() {
            return { args }
        },
        template: '<Input v-bind="args" aria-invalid="true" />', // Assuming Input handles aria-invalid or passing it through
    }),
    args: {
        placeholder: 'Placeholder',
    },
}

export const Password: Story = {
    render: (args) => ({
        components: { Input },
        setup() {
            return { args }
        },
        template: '<Input v-bind="args" />',
    }),
    args: {
        type: 'password',
    },
}

export const Search: Story = {
    render: (args) => ({
        components: { Input },
        setup() {
            return { args }
        },
        template: '<Input v-bind="args" />',
    }),
    args: {
        type: 'search',
        placeholder: 'Search',
    },
}

export const Small: Story = {
    render: (args) => ({
        components: { Input },
        setup() {
            return { args }
        },
        template: '<Input v-bind="args" />',
    }),
    args: {
        size: 'small',
    },
}
