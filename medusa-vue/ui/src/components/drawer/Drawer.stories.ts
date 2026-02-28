import type { Meta, StoryObj } from '@storybook/vue3'
import Drawer from './Drawer.vue'
import DrawerTrigger from './DrawerTrigger.vue'
import DrawerContent from './DrawerContent.vue'
import DrawerHeader from './DrawerHeader.vue'
import DrawerBody from './DrawerBody.vue'
import DrawerFooter from './DrawerFooter.vue'
import DrawerTitle from './DrawerTitle.vue'
import DrawerDescription from './DrawerDescription.vue'
import DrawerClose from './DrawerClose.vue'
import { Button } from '../button'

const meta: Meta<typeof Drawer> = {
    title: 'Components/Drawer',
    component: Drawer,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
    render: (args) => ({
        components: {
            Drawer,
            DrawerTrigger,
            DrawerContent,
            DrawerHeader,
            DrawerBody,
            DrawerFooter,
            DrawerTitle,
            DrawerDescription,
            DrawerClose,
            Button
        },
        setup() {
            return { args }
        },
        template: `
      <Drawer v-bind="args">
        <DrawerTrigger as-child>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit Variant</DrawerTitle>
            <DrawerDescription>Make changes to your variant here.</DrawerDescription>
          </DrawerHeader>
          <DrawerBody class="p-4">
            <p class="text-ui-fg-subtle">Drawer content goes here.</p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose as-child>
              <Button variant="secondary">Cancel</Button>
            </DrawerClose>
            <Button>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    `,
    }),
}
