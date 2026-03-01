import type { Meta, StoryObj } from "@storybook/vue3"
import { Button } from "@/components"
import Prompt from "./Prompt.vue"
import PromptAction from "./PromptAction.vue"
import PromptCancel from "./PromptCancel.vue"
import PromptContent from "./PromptContent.vue"
import PromptDescription from "./PromptDescription.vue"
import PromptFooter from "./PromptFooter.vue"
import PromptHeader from "./PromptHeader.vue"
import PromptTitle from "./PromptTitle.vue"
import PromptTrigger from "./PromptTrigger.vue"

const renderPrompt = (args: any) => ({
  components: {
    Button,
    Prompt,
    PromptAction,
    PromptCancel,
    PromptContent,
    PromptDescription,
    PromptFooter,
    PromptHeader,
    PromptTitle,
    PromptTrigger,
  },
  setup() {
    return { args }
  },
  template: `
    <Prompt v-bind="args">
      <PromptTrigger as-child>
        <Button>{{ args.variant === "confirmation" ? "Open Confirmation" : "Open" }}</Button>
      </PromptTrigger>
      <PromptContent>
        <PromptHeader>
          <PromptTitle>
            {{ args.variant === "confirmation" ? "Confirm Action" : "Delete something" }}
          </PromptTitle>
          <PromptDescription>
            {{
              args.variant === "confirmation"
                ? "Are you sure you want to proceed? This action can be undone."
                : "Are you sure? This cannot be undone."
            }}
          </PromptDescription>
        </PromptHeader>
        <PromptFooter>
          <PromptCancel>Cancel</PromptCancel>
          <PromptAction>
            {{ args.variant === "confirmation" ? "Confirm" : "Delete" }}
          </PromptAction>
        </PromptFooter>
      </PromptContent>
    </Prompt>
  `,
})

const meta: Meta<any> = {
  title: "Components/Prompt",
  component: Prompt,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["danger", "confirmation"],
    },
  },
  args: {
    variant: "danger",
  },
}

export default meta

type Story = StoryObj<any>

export const Default: Story = {
  render: renderPrompt,
}

export const Confirmation: Story = {
  render: renderPrompt,
  args: {
    variant: "confirmation",
  },
}
