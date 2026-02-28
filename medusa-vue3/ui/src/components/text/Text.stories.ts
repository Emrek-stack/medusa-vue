import type { Meta, StoryObj } from '@storybook/vue3'
import Text from './Text.vue'

const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xsmall', 'small', 'base', 'large', 'xlarge'],
        },
        weight: {
            control: 'select',
            options: ['regular', 'plus'],
        },
        family: {
            control: 'select',
            options: ['sans', 'mono'],
        },
        leading: {
            control: 'select',
            options: ['normal', 'compact'],
        },
    },
    args: {
        size: 'base',
        weight: 'regular',
        family: 'sans',
        leading: 'normal',
    }
}

export default meta
type Story = StoryObj<typeof Text>

export const BaseRegularSans: Story = {
    render: (args) => ({
        components: { Text },
        setup() {
            return { args }
        },
        template: '<Text v-bind="args">I am a paragraph</Text>',
    }),
}

export const BasePlusSans: Story = {
    render: (args) => ({
        components: { Text },
        setup() {
            return { args }
        },
        template: '<Text v-bind="args">I am a paragraph</Text>',
    }),
    args: {
        weight: 'plus',
    },
}

export const LargeRegularSans: Story = {
    render: (args) => ({
        components: { Text },
        setup() {
            return { args }
        },
        template: '<Text v-bind="args">I am a paragraph</Text>',
    }),
    args: {
        size: 'large',
    },
}

export const LargePlusSans: Story = {
    render: (args) => ({
        components: { Text },
        setup() {
            return { args }
        },
        template: '<Text v-bind="args">I am a paragraph</Text>',
    }),
    args: {
        size: 'large',
        weight: 'plus',
    },
}

export const XLargeRegularSans: Story = {
    render: (args) => ({
        components: { Text },
        setup() {
            return { args }
        },
        template: '<Text v-bind="args">I am a paragraph</Text>',
    }),
    args: {
        size: 'xlarge',
    },
}

export const BaseRegularMono: Story = {
    render: (args) => ({
        components: { Text },
        setup() {
            return { args }
        },
        template: '<Text v-bind="args">I am a paragraph</Text>',
    }),
    args: {
        family: 'mono',
    },
}
