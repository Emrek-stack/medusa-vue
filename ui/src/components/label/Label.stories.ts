import type { Meta, StoryObj } from '@storybook/vue3'
import Label from './Label.vue'

const meta: Meta<typeof Label> = {
    title: 'Components/Label',
    component: Label,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xsmall', 'small', 'base', 'large'],
        },
        weight: {
            control: 'select',
            options: ['regular', 'plus'],
        },
    },
    args: {
        size: 'base',
        weight: 'regular',
    }
}

export default meta
type Story = StoryObj<typeof Label>

export const BaseRegular: Story = {
    render: (args) => ({
        components: { Label },
        setup() {
            return { args }
        },
        template: '<Label v-bind="args">I am a label</Label>',
    }),
    args: {
        size: 'base',
        weight: 'regular',
    },
}

export const BasePlus: Story = {
    render: (args) => ({
        components: { Label },
        setup() {
            return { args }
        },
        template: '<Label v-bind="args">I am a label</Label>',
    }),
    args: {
        size: 'base',
        weight: 'plus',
    },
}

export const LargeRegular: Story = {
    render: (args) => ({
        components: { Label },
        setup() {
            return { args }
        },
        template: '<Label v-bind="args">I am a label</Label>',
    }),
    args: {
        size: 'large',
        weight: 'regular',
    },
}

export const SmallRegular: Story = {
    render: (args) => ({
        components: { Label },
        setup() {
            return { args }
        },
        template: '<Label v-bind="args">I am a label</Label>',
    }),
    args: {
        size: 'small',
        weight: 'regular',
    },
}
