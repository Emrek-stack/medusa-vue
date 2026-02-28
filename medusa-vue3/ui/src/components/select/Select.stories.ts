import type { Meta, StoryObj } from '@storybook/vue3'
import Select from './Select.vue'
import SelectTrigger from './SelectTrigger.vue'
import SelectValue from './SelectValue.vue'
import SelectContent from './SelectContent.vue'
import SelectGroup from './SelectGroup.vue'
import SelectLabel from './SelectLabel.vue'
import SelectItem from './SelectItem.vue'
// import { ref } from 'vue'

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
        size: { control: 'select', options: ['base', 'small'] },
    },
    args: {
        size: 'base',
    },
    parameters: {
        layout: 'centered',
    },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
    render: (args) => ({
        components: {
            Select,
            SelectTrigger,
            SelectValue,
            SelectContent,
            SelectGroup,
            SelectLabel,
            SelectItem
        },
        setup() {
            return { args }
        },
        template: `
      <div class="w-[250px]">
        <Select v-bind="args">
            <SelectTrigger>
                <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Clothes</SelectLabel>
                    <SelectItem value="shirt">Shirt</SelectItem>
                    <SelectItem value="pants">Pants</SelectItem>
                    <SelectItem value="jacket">Jacket</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Accessories</SelectLabel>
                    <SelectItem value="hat">Hat</SelectItem>
                    <SelectItem value="gloves">Gloves</SelectItem>
                    <SelectItem value="scarf">Scarf</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
      </div>
    `,
    }),
}

export const Small: Story = {
    render: (args) => ({
        components: {
            Select,
            SelectTrigger,
            SelectValue,
            SelectContent,
            SelectGroup,
            SelectLabel,
            SelectItem
        },
        setup() {
            return { args }
        },
        template: `
      <div class="w-[250px]">
        <Select v-bind="args" size="small">
            <SelectTrigger>
                <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="shirt">Shirt</SelectItem>
                <SelectItem value="pants">Pants</SelectItem>
            </SelectContent>
        </Select>
      </div>
    `,
    }),
}

export const Disabled: Story = {
    render: (args) => ({
        components: {
            Select,
            SelectTrigger,
            SelectValue,
            SelectContent,
            SelectItem
        },
        setup() {
            return { args }
        },
        template: `
      <div class="w-[250px]">
        <Select v-bind="args">
            <SelectTrigger disabled>
                <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="shirt">Shirt</SelectItem>
            </SelectContent>
        </Select>
      </div>
    `,
    }),
}
