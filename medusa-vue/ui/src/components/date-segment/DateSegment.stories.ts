import type { Meta, StoryObj } from '@storybook/vue3'
import DateSegment from './DateSegment.vue'
import { DateFieldRoot } from 'radix-vue'
import { CalendarDate } from '@internationalized/date'

const meta: Meta<typeof DateSegment> = {
    title: 'Components/DateSegment',
    component: DateSegment,
    tags: ['autodocs'],
    argTypes: {
        part: { control: 'object' },
    },
    args: {
        part: { type: 'day', value: 15, text: '15', isPlaceholder: false, isEditable: true },
    },
}

export default meta
type Story = StoryObj<typeof DateSegment>

export const Default: Story = {
    render: (args) => ({
        components: { DateSegment, DateFieldRoot },
        setup() {
            const date = new CalendarDate(2024, 1, 15)
            return { args, date }
        },
        template: `
            <DateFieldRoot v-model="date" v-slot="{ segments }">
                <template v-for="item in segments" :key="item.part">
                    <DateSegment v-if="item.part === 'day'" :part="item" v-bind="args" />
                </template>
            </DateFieldRoot>
        `,
    }),
}
