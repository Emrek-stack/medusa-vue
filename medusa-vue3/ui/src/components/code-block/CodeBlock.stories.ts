import type { Meta, StoryObj } from '@storybook/vue3'
import CodeBlock from './CodeBlock.vue'
import CodeBlockHeader from './CodeBlockHeader.vue'
import CodeBlockBody from './CodeBlockBody.vue'

import { TooltipProvider } from 'radix-vue'

const meta: Meta<typeof CodeBlock> = {
  title: 'Components/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
  decorators: [
    () => ({
      components: { TooltipProvider },
      template: '<TooltipProvider><story/></TooltipProvider>',
    }),
  ],
}

export default meta
type Story = StoryObj<typeof CodeBlock>

const snippets = [
  {
    language: 'tsx',
    label: 'React',
    code: `import React from "react"

const App = () => {
  return <div>Hello World</div>
}`,
  },
  {
    language: 'vue',
    label: 'Vue',
    code: `<template>
  <div>Hello World</div>
</template>`,
  },
]

export const Default: Story = {
  render: (args) => ({
    components: { CodeBlock, CodeBlockHeader, CodeBlockBody },
    setup() {
      return { args, snippets }
    },
    template: `
      <CodeBlock :snippets="snippets">
        <CodeBlockHeader />
        <CodeBlockBody />
      </CodeBlock>
    `,
  }),
}

export const SingleSnippet: Story = {
  render: (args) => ({
    components: { CodeBlock, CodeBlockHeader, CodeBlockBody },
    setup() {
      const singleSnippet = [snippets[0]]
      return { args, snippets: singleSnippet }
    },
    template: `
      <CodeBlock :snippets="snippets">
        <CodeBlockHeader />
        <CodeBlockBody />
      </CodeBlock>
    `,
  }),
}

export const NoHeader: Story = {
  render: (args) => ({
    components: { CodeBlock, CodeBlockBody },
    setup() {
      const singleSnippet = [snippets[0]]
      return { args, snippets: singleSnippet }
    },
    template: `
      <CodeBlock :snippets="snippets">
        <CodeBlockBody />
      </CodeBlock>
    `,
  }),
}
