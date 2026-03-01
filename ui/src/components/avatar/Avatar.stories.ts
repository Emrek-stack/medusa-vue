import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from './Avatar.vue'

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        src: {
            control: 'text',
        },
        fallback: {
            control: 'text',
        },
        variant: {
            control: 'select',
            options: ['rounded', 'squared'],
        },
        size: {
            control: 'select',
            options: ['2xsmall', 'xsmall', 'small', 'base', 'large', 'xlarge'],
        },
    },
    args: {
        fallback: 'J',
        size: 'base',
        variant: 'rounded',
    }
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args }
        },
        template: '<Avatar v-bind="args" />',
    }),
    args: {
        src: 'https://avatars.githubusercontent.com/u/10656202?v=4',
    },
}

export const WithFallback: Story = {
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args }
        },
        template: '<Avatar v-bind="args" />',
    }),
    args: {
        fallback: 'J',
    },
}

export const Squared: Story = {
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args }
        },
        template: '<Avatar v-bind="args" />',
    }),
    args: {
        variant: 'squared',
        fallback: 'S',
    },
}

export const TwoXSmall: Story = {
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args }
        },
        template: '<Avatar v-bind="args" />',
    }),
    args: {
        size: '2xsmall',
    },
}

export const XSmall: Story = {
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args }
        },
        template: '<Avatar v-bind="args" />',
    }),
    args: {
        size: 'xsmall',
    },
}

export const Small: Story = {
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args }
        },
        template: '<Avatar v-bind="args" />',
    }),
    args: {
        size: 'small',
    },
}

export const Base: Story = {
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args }
        },
        template: '<Avatar v-bind="args" />',
    }),
    args: {
        size: 'base',
    },
}

export const Large: Story = {
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args }
        },
        template: '<Avatar v-bind="args" />',
    }),
    args: {
        size: 'large',
    },
}

export const XLarge: Story = {
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args }
        },
        template: '<Avatar v-bind="args" />',
    }),
    args: {
        size: 'xlarge',
    },
}
