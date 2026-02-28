import type { Meta, StoryObj } from '@storybook/vue3'
import TimeInput from './TimeInput.vue'
import { ref } from 'vue'

const meta: Meta<typeof TimeInput> = {
    title: 'Components/TimeInput',
    component: TimeInput,
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
        readonly: { control: 'boolean' },
        hourCycle: { control: 'select', options: [12, 24] },
    },
}

export default meta
type Story = StoryObj<typeof TimeInput>

export const Default: Story = {
    render: (args) => ({
        components: { TimeInput },
        setup() {
            return { args }
        },
        template: '<TimeInput v-bind="args" />',
    }),
}

export const Controlled: Story = {
    render: (args) => ({
        components: { TimeInput },
        setup() {
            const time = ref(null)
            return { args, time }
        },
        template: `
      <div class="flex flex-col gap-4">
        <TimeInput v-bind="args" v-model="time" />
        <pre class="font-mono text-sm">{{ time }}</pre>
      </div>
    `,
    }),
}
