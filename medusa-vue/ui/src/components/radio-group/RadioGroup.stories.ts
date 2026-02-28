import type { Meta, StoryObj } from '@storybook/vue3'
import RadioGroup from './RadioGroup.vue'
import RadioGroupItem from './RadioGroupItem.vue'
import { Label } from '../label'

const meta: Meta<typeof RadioGroup> = {
    title: 'Components/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
        },
    },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
    render: (args) => ({
        components: { RadioGroup, RadioGroupItem, Label },
        setup() {
            return { args }
        },
        template: `
      <RadioGroup v-bind="args">
        <div class="flex items-center gap-x-3">
            <RadioGroupItem value="1" id="radio_1" />
            <Label for="radio_1">Radio 1</Label>
        </div>
        <div class="flex items-center gap-x-3">
            <RadioGroupItem value="2" id="radio_2" />
            <Label for="radio_2">Radio 2</Label>
        </div>
        <div class="flex items-center gap-x-3">
            <RadioGroupItem value="3" id="radio_3" />
            <Label for="radio_3">Radio 3</Label>
        </div>
      </RadioGroup>
    `,
    }),
}

export const Disabled: Story = {
    render: (args) => ({
        components: { RadioGroup, RadioGroupItem, Label },
        setup() {
            return { args }
        },
        template: `
      <RadioGroup v-bind="args">
        <div class="flex items-center gap-x-3">
            <RadioGroupItem value="1" id="radio_1_d" />
            <Label for="radio_1_d">Radio 1</Label>
        </div>
        <div class="flex items-center gap-x-3">
            <RadioGroupItem value="2" id="radio_2_d" disabled />
            <Label for="radio_2_d">Radio 2 (Disabled)</Label>
        </div>
      </RadioGroup>
    `,
    }),
}
