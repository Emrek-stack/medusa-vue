import type { Meta, StoryObj } from '@storybook/vue3'
import Toast from './Toast.vue'
import { ToastProvider, ToastViewport } from 'radix-vue'


const meta: Meta<typeof Toast> = {
    title: 'Components/Toast',
    component: Toast,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['info', 'warning', 'error', 'success', 'loading'],
        },
        title: { control: 'text' },
        description: { control: 'text' },
    },
    args: {
        title: 'Label',
        variant: 'info',
        open: true, // Force open for story
    },
    decorators: [
        (story) => ({
            components: { ToastProvider, ToastViewport, story },
            template: `
        <ToastProvider>
          <story />
          <ToastViewport class="fixed z-[2147483647] m-0 flex w-full max-w-[100vw] gap-2 p-6 outline-none flex-col items-end bottom-0 right-0" />
        </ToastProvider>
      `,
        }),
    ],
}

export default meta
type Story = StoryObj<typeof Toast>

export const Information: Story = {
    render: (args) => ({
        components: { Toast },
        setup() {
            return { args }
        },
        template: '<Toast v-bind="args" id="1" />',
    }),
    args: {
        description: 'The quick brown fox jumps over a lazy dog.',
    },
}

export const Warning: Story = {
    render: (args) => ({
        components: { Toast },
        setup() {
            return { args }
        },
        template: '<Toast v-bind="args" id="2" />',
    }),
    args: {
        description: 'The quick brown fox jumps over a lazy dog.',
        variant: 'warning',
    },
}

export const Error: Story = {
    render: (args) => ({
        components: { Toast },
        setup() {
            return { args }
        },
        template: '<Toast v-bind="args" id="3" />',
    }),
    args: {
        description: 'The quick brown fox jumps over a lazy dog.',
        variant: 'error',
    },
}

export const Success: Story = {
    render: (args) => ({
        components: { Toast },
        setup() {
            return { args }
        },
        template: '<Toast v-bind="args" id="4" />',
    }),
    args: {
        description: 'The quick brown fox jumps over a lazy dog.',
        variant: 'success',
    },
}

export const Loading: Story = {
    render: (args) => ({
        components: { Toast },
        setup() {
            return { args }
        },
        template: '<Toast v-bind="args" id="5" />',
    }),
    args: {
        description: 'The quick brown fox jumps over a lazy dog.',
        variant: 'loading',
    },
}

export const WithAction: Story = {
    render: (args) => ({
        components: { Toast },
        setup() {
            return { args }
        },
        template: '<Toast v-bind="args" id="6" />',
    }),
    args: {
        title: 'Scheduled meeting',
        description: 'The meeting has been added to your calendar.',
        variant: 'success',
        action: {
            label: 'Undo',
            onClick: () => console.log('Undo clicked'),
            altText: 'Undo adding meeting to calendar',
        },
    },
}
