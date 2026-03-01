import type { Meta, StoryObj } from '@storybook/vue3'
import FocusModal from './FocusModal.vue'
import FocusModalTrigger from './FocusModalTrigger.vue'
import FocusModalContent from './FocusModalContent.vue'
import FocusModalHeader from './FocusModalHeader.vue'
import FocusModalBody from './FocusModalBody.vue'
// import FocusModalFooter from './FocusModalFooter.vue' // Not in reference story, but in index
import { Button } from '../button'

const meta: Meta<typeof FocusModal> = {
    title: 'Components/FocusModal',
    component: FocusModal,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}

export default meta
type Story = StoryObj<typeof FocusModal>

export const Default: Story = {
    render: (args) => ({
        components: {
            FocusModal,
            FocusModalTrigger,
            FocusModalContent,
            FocusModalHeader,
            FocusModalBody,
            Button
        },
        setup() {
            return { args }
        },
        template: `
      <FocusModal v-bind="args">
        <FocusModalTrigger as-child>
          <Button>Edit Variant</Button>
        </FocusModalTrigger>
        <FocusModalContent>
          <FocusModalHeader>
            <Button>Save</Button>
          </FocusModalHeader>
          <FocusModalBody class="p-4">
            <p class="text-ui-fg-subtle">FocusModal content goes here.</p>
          </FocusModalBody>
        </FocusModalContent>
      </FocusModal>
    `,
    }),
}
