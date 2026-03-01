import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'
import { PlusMini } from "@minima-vue/icons"

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'transparent', 'danger'],
        },
        size: {
            control: 'select',
            options: ['small', 'base', 'large', 'xlarge'],
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
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Action</Button>',
    }),
}

export const Secondary: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Action</Button>',
    }),
    args: {
        variant: 'secondary',
    },
}

export const Transparent: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Action</Button>',
    }),
    args: {
        variant: 'transparent',
    },
}

export const Danger: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Action</Button>',
    }),
    args: {
        variant: 'danger',
    },
}

export const Disabled: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Action</Button>',
    }),
    args: {
        disabled: true,
    },
}

export const WithIcon: Story = {
    render: (args) => ({
        components: { Button, PlusMini },
        setup() {
            return { args }
        },
        template: `
      <Button v-bind="args">
        <PlusMini />
        Action
      </Button>
    `,
    }),
}

export const Loading: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Action</Button>',
    }),
    args: {
        isLoading: true,
    },
}

export const Large: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Action</Button>',
    }),
    args: {
        size: 'large',
    },
}

export const XLarge: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Action</Button>',
    }),
    args: {
        size: 'xlarge',
    },
}
