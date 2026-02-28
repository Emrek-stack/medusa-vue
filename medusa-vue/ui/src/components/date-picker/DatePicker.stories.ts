import type { Meta, StoryObj } from '@storybook/vue3'
import DatePicker from './DatePicker.vue'
import { ref } from 'vue'
import { Label } from '../label'

const meta: Meta<typeof DatePicker> = {
    title: 'Components/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: {
        min: { control: 'date' },
        max: { control: 'date' },
        disabled: { control: 'boolean' },
        readonly: { control: 'boolean' },
        size: { control: 'select', options: ['base', 'small'] },
        granularity: { control: 'select', options: ['day', 'hour', 'minute', 'second'] },
    },
    args: {
        size: 'base',
        granularity: 'day',
    }
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
    render: (args) => ({
        components: { DatePicker },
        setup() {
            return { args }
        },
        template: '<div class="w-[230px]"><DatePicker v-bind="args" /></div>',
    }),
}

export const Controlled: Story = {
    render: (args) => ({
        components: { DatePicker, Label },
        setup() {
            const startDate = ref<Date | null>(new Date())
            const endDate = ref<Date | null>(new Date(new Date().setDate(new Date().getDate() + 7)))
            return { args, startDate, endDate }
        },
        template: `
      <div class="text-ui-fg-subtle grid max-w-[576px] gap-4 md:grid-cols-2">
        <fieldset class="flex flex-col gap-y-0.5">
          <Label id="starts_at_label" for="starts_at">Starts at</Label>
          <DatePicker
            id="starts_at"
            aria-labelledby="starts_at_label"
            v-bind="args"
            :max="endDate || undefined"
            v-model="startDate"
          />
        </fieldset>
        <fieldset class="flex flex-col gap-y-0.5">
          <Label id="ends_at_label" for="ends_at">Ends at</Label>
          <DatePicker
            id="ends_at"
            aria-labelledby="ends_at_label"
            :min="startDate || undefined"
            v-bind="args"
            v-model="endDate"
          />
        </fieldset>
      </div>
    `,
    }),
}

export const MinValue: Story = {
    render: (args) => ({
        components: { DatePicker },
        setup() {
            const minDate = new Date()
            return { args, minDate }
        },
        template: '<div class="w-[230px]"><DatePicker v-bind="args" :min="minDate" /></div>',
    }),
}

export const MaxValue: Story = {
    render: (args) => ({
        components: { DatePicker },
        setup() {
            const maxDate = new Date()
            return { args, maxDate }
        },
        template: '<div class="w-[230px]"><DatePicker v-bind="args" :max="maxDate" /></div>',
    }),
}

export const WithTime: Story = {
    render: (args) => ({
        components: { DatePicker },
        setup() {
            const val = ref(new Date())
            return { args, val }
        },
        template: '<div class="w-[230px]"><DatePicker v-bind="args" v-model="val" granularity="minute" /></div>',
    }),
}

export const Small: Story = {
    render: (args) => ({
        components: { DatePicker },
        setup() {
            return { args }
        },
        template: '<div class="w-[230px]"><DatePicker v-bind="args" size="small" /></div>',
    }),
}
