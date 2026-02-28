import type { Meta, StoryObj } from '@storybook/vue3'
import Calendar from './Calendar.vue'
import { ref } from 'vue'

const meta: Meta<typeof Calendar> = {
    title: 'Components/Calendar',
    component: Calendar,
    tags: ['autodocs'],
    argTypes: {
        minValue: { control: 'date' },
        maxValue: { control: 'date' },
        disabled: { control: 'boolean' },
        readonly: { control: 'boolean' },
        fixedWeeks: { control: 'boolean' },
        weekStartsOn: { control: 'number', min: 0, max: 6 },
    },
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
    render: (args) => ({
        components: { Calendar },
        setup() {
            return { args }
        },
        template: '<Calendar v-bind="args" />',
    }),
}

export const Controlled: Story = {
    render: (args) => ({
        components: { Calendar },
        setup() {
            const date = ref<Date | null>(new Date())
            return { args, date }
        },
        template: `
      <div>
        <Calendar v-bind="args" v-model="date" />
        <div class="flex items-center justify-between mt-4">
          <pre class="font-mono txt-compact-small">{{ date ? date.toDateString() : 'null' }}</pre>
          <button class="txt-compact-small-plus text-ui-fg-interactive hover:text-ui-fg-interactive-hover" @click="date = null">Reset</button>
        </div>
      </div>
    `,
    }),
}

export const MinValue: Story = {
    render: (args) => ({
        components: { Calendar },
        setup() {
            const minDate = new Date()
            return { args, minDate }
        },
        template: '<Calendar v-bind="args" :min-value="minDate" />',
    }),
}

export const MaxValue: Story = {
    render: (args) => ({
        components: { Calendar },
        setup() {
            const maxDate = new Date()
            return { args, maxDate }
        },
        template: '<Calendar v-bind="args" :max-value="maxDate" />',
    }),
}
