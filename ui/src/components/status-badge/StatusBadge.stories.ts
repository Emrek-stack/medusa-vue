import type { Meta, StoryObj } from "@storybook/vue3"
import StatusBadge from "./StatusBadge.vue"

const renderStory = (args: any) => ({
  components: { StatusBadge },
  setup() {
    const { label, ...badgeProps } = args

    return {
      badgeProps,
      label,
    }
  },
  template: '<StatusBadge v-bind="badgeProps">{{ label }}</StatusBadge>',
})

const meta: Meta<any> = {
  title: "Components/StatusBadge",
  component: StatusBadge,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["grey", "green", "red", "blue", "orange", "purple"],
    },
    label: {
      control: "text",
    },
  },
  args: {
    color: "green",
    label: "Active",
  },
}

export default meta

type Story = StoryObj<any>

export const Default: Story = {
  render: renderStory,
}

export const Grey: Story = {
  render: renderStory,
  args: {
    color: "grey",
    label: "Draft",
  },
}

export const Green: Story = {
  render: renderStory,
  args: {
    color: "green",
    label: "Active",
  },
}

export const Red: Story = {
  render: renderStory,
  args: {
    color: "red",
    label: "Canceled",
  },
}

export const Blue: Story = {
  render: renderStory,
  args: {
    color: "blue",
    label: "Published",
  },
}

export const Orange: Story = {
  render: renderStory,
  args: {
    color: "orange",
    label: "Pending",
  },
}

export const Purple: Story = {
  render: renderStory,
  args: {
    color: "purple",
    label: "Scheduled",
  },
}
