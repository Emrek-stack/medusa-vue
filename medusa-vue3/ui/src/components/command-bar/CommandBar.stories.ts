import type { Meta, StoryObj } from '@storybook/vue3'
import CommandBar from './CommandBar.vue'
import CommandBarBar from './CommandBarBar.vue'
import CommandBarValue from './CommandBarValue.vue'
import CommandBarSeperator from './CommandBarSeperator.vue'
import CommandBarCommand from './CommandBarCommand.vue'
import { Button } from '../button'
import { ref } from 'vue'

const meta: Meta<typeof CommandBar> = {
    title: 'Components/CommandBar',
    component: CommandBar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
}

export default meta
type Story = StoryObj<typeof CommandBar>

export const Default: Story = {
    render: (args) => ({
        components: {
            CommandBar,
            CommandBarBar,
            CommandBarValue,
            CommandBarSeperator,
            CommandBarCommand,
            Button
        },
        setup() {
            const active = ref(false)
            const toggle = () => active.value = !active.value
            return { args, active, toggle }
        },
        template: `
      <div class="flex h-screen w-screen items-center justify-center">
        <Button @click="toggle">
          {{ active ? "Hide" : "Show" }}
        </Button>
        <CommandBar :open="active">
          <CommandBarBar>
            <CommandBarValue>1 selected</CommandBarValue>
            <CommandBarSeperator />
            <CommandBarCommand
              label="Edit"
              shortcut="e"
              @action="() => console.log('Edit')"
            />
            <CommandBarSeperator />
            <CommandBarCommand
              label="Delete"
              shortcut="d"
              @action="() => console.log('Delete')"
            />
          </CommandBarBar>
        </CommandBar>
      </div>
    `,
    }),
}
