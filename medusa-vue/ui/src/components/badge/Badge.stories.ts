import type { Meta, StoryObj } from '@storybook/vue3'
import Badge from './Badge.vue'

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: ['grey', 'green', 'red', 'blue', 'orange', 'purple'],
        },
        size: {
            control: 'select',
            options: ['2xsmall', 'xsmall', 'small', 'base', 'large'],
        },
        rounded: {
            control: 'select',
            options: ['base', 'full'],
        },
    },
    args: {
        color: 'grey',
        size: 'base',
        rounded: 'base',
    }
}

export default meta
type Story = StoryObj<typeof Badge>

export const Grey: Story = {
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
    args: {
        color: 'grey',
    },
}

export const Green: Story = {
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
    args: {
        color: 'green',
    },
}

export const Red: Story = {
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
    args: {
        color: 'red',
    },
}

export const Blue: Story = {
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
    args: {
        color: 'blue',
    },
}

export const Orange: Story = {
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
    args: {
        color: 'orange',
    },
}

export const Purple: Story = {
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
    args: {
        color: 'purple',
    },
}

export const Default: Story = {
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
    args: {
        rounded: 'base',
    },
}

export const Rounded: Story = {
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
    args: {
        rounded: 'full',
    },
}

export const XXSmall: Story = {
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
    args: {
        size: '2xsmall',
    },
}

export const XSmall: Story = {
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
    args: {
        size: 'xsmall',
    },
}

export const Small: Story = {
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
    args: {
        size: 'small',
    },
}

export const Base: Story = {
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
    args: {
        size: 'base',
    },
}

export const Large: Story = {
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Badge</Badge>',
    }),
    args: {
        size: 'large',
    },
}
