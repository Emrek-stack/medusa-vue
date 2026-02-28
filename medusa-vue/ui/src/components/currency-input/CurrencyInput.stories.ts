import type { Meta, StoryObj } from '@storybook/vue3'
import CurrencyInput from './CurrencyInput.vue'
import { ref } from 'vue'

const meta: Meta<typeof CurrencyInput> = {
    title: 'Components/CurrencyInput',
    component: CurrencyInput,
    tags: ['autodocs'],
    argTypes: {
        code: { control: 'text' },
        symbol: { control: 'text' },
        disabled: { control: 'boolean' },
    },
    args: {
        code: 'USD',
        symbol: '$',
    },
}

export default meta
type Story = StoryObj<typeof CurrencyInput>

export const Default: Story = {
    render: (args) => ({
        components: { CurrencyInput },
        setup() {
            return { args }
        },
        template: '<CurrencyInput v-bind="args" />',
    }),
}

export const Controlled: Story = {
    render: (args) => ({
        components: { CurrencyInput },
        setup() {
            const amount = ref(1234.56)
            return { args, amount }
        },
        template: `
      <div class="flex flex-col gap-4">
        <CurrencyInput v-bind="args" v-model="amount" />
        <pre class="font-mono text-sm">Value: {{ amount }}</pre>
      </div>
    `,
    }),
}
