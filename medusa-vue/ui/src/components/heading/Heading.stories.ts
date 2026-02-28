import type { Meta, StoryObj } from '@storybook/vue3'
import Heading from './Heading.vue'

const meta: Meta<typeof Heading> = {
    title: 'Components/Heading',
    component: Heading,
    tags: ['autodocs'],
    argTypes: {
        level: {
            control: 'select',
            options: ['h1', "h2", "h3"],
        },
    },
    args: {
        level: 'h1',
    }
}

export default meta
type Story = StoryObj<typeof Heading>

export const H1: Story = {
    render: (args) => ({
        components: { Heading },
        setup() {
            return { args }
        },
        template: '<Heading v-bind="args">I am a H1 heading</Heading>',
    }),
    args: {
        level: 'h1',
    },
}

export const H2: Story = {
    render: (args) => ({
        components: { Heading },
        setup() {
            return { args }
        },
        template: '<Heading v-bind="args">I am a H2 heading</Heading>',
    }),
    args: {
        level: 'h2',
    },
}

export const H3: Story = {
    render: (args) => ({
        components: { Heading },
        setup() {
            return { args }
        },
        template: '<Heading v-bind="args">I am a H3 heading</Heading>',
    }),
    args: {
        level: 'h3',
    },
}
