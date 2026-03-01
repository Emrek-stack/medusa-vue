import type { Meta, StoryObj } from '@storybook/vue3'
import IconButton from './IconButton.vue'
import { Plus } from '@minima-vue/icons'

const meta: Meta<typeof IconButton> = {
    title: 'Components/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'transparent'],
        },
        size: {
            control: 'select',
            options: ['2xsmall', 'xsmall', 'small', 'base', 'large', 'xlarge'],
        },
        disabled: {
            control: 'boolean',
        },
        isLoading: {
            control: 'boolean',
        },
    },
    args: {
        variant: 'primary',
        size: 'base',
    }
}

export default meta
type Story = StoryObj<typeof IconButton>

export const BasePrimary: Story = {
    render: (args) => ({
        components: { IconButton, Plus },
        setup() {
            return { args }
        },
        template: '<IconButton v-bind="args"><Plus /></IconButton>',
    }),
}

export const BaseTransparent: Story = {
    render: (args) => ({
        components: { IconButton, Plus },
        setup() {
            return { args }
        },
        template: '<IconButton v-bind="args"><Plus /></IconButton>',
    }),
    args: {
        variant: 'transparent',
    },
}

export const LargePrimary: Story = {
    render: (args) => ({
        components: { IconButton, Plus },
        setup() {
            return { args }
        },
        template: '<IconButton v-bind="args"><Plus /></IconButton>',
    }),
    args: {
        size: 'large',
    },
}

export const LargeTransparent: Story = {
    render: (args) => ({
        components: { IconButton, Plus },
        setup() {
            return { args }
        },
        template: '<IconButton v-bind="args"><Plus /></IconButton>',
    }),
    args: {
        size: 'large',
        variant: 'transparent',
    },
}

export const XLargePrimary: Story = {
    render: (args) => ({
        components: { IconButton, Plus },
        setup() {
            return { args }
        },
        template: '<IconButton v-bind="args"><Plus /></IconButton>',
    }),
    args: {
        size: 'xlarge',
    },
}

export const XLargeTransparent: Story = {
    render: (args) => ({
        components: { IconButton, Plus },
        setup() {
            return { args }
        },
        template: '<IconButton v-bind="args"><Plus /></IconButton>',
    }),
    args: {
        size: 'xlarge',
        variant: 'transparent',
    },
}

export const Disabled: Story = {
    render: (args) => ({
        components: { IconButton, Plus },
        setup() {
            return { args }
        },
        template: '<IconButton v-bind="args"><Plus /></IconButton>',
    }),
    args: {
        disabled: true,
    },
}

export const IsLoading: Story = {
    render: (args) => ({
        components: { IconButton, Plus },
        setup() {
            return { args }
        },
        template: '<IconButton v-bind="args"><Plus /></IconButton>',
    }),
    args: {
        isLoading: true,
    },
}
