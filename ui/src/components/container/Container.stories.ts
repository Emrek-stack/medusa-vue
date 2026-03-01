import type { Meta, StoryObj } from '@storybook/vue3'
import Container from './Container.vue'
import { Heading } from '../heading'
import { Text } from '../text'

const meta: Meta<typeof Container> = {
    title: 'Components/Container',
    component: Container,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
    render: (args) => ({
        components: { Container, Text },
        setup() {
            return { args }
        },
        template: `
      <Container v-bind="args">
        <Text>Hello World</Text>
      </Container>
    `,
    }),
}

export const InLayout: Story = {
    render: (args) => ({
        components: { Container, Heading },
        setup() {
            return { args }
        },
        template: `
      <div class="flex h-[400px] w-full bg-ui-bg-subtle">
        <div class="border-ui-border-base w-full max-w-[216px] border-r p-4 bg-ui-bg-base">
          <Heading level="h3">Menubar</Heading>
        </div>
        <div class="flex w-full flex-col gap-y-3 px-8 pb-8 pt-6">
          <Container>
            <Heading>Section 1</Heading>
          </Container>
          <Container>
            <Heading>Section 2</Heading>
          </Container>
          <Container>
            <Heading>Section 3</Heading>
          </Container>
        </div>
      </div>
    `,
    }),
    parameters: {
        layout: 'fullscreen',
    },
}
