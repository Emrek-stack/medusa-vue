import type { Meta, StoryObj } from '@storybook/vue3'
import DropdownMenu from './DropdownMenu.vue'
import DropdownMenuTrigger from './DropdownMenuTrigger.vue'
import DropdownMenuContent from './DropdownMenuContent.vue'
import DropdownMenuItem from './DropdownMenuItem.vue'
import DropdownMenuSeparator from './DropdownMenuSeparator.vue'
import DropdownMenuLabel from './DropdownMenuLabel.vue'
import DropdownMenuCheckboxItem from './DropdownMenuCheckboxItem.vue'
import DropdownMenuRadioGroup from './DropdownMenuRadioGroup.vue'
import DropdownMenuRadioItem from './DropdownMenuRadioItem.vue'
import DropdownMenuHint from './DropdownMenuHint.vue'
// import DropdownMenuSubMenu from './DropdownMenuSubMenu.vue'
// import DropdownMenuSubTrigger from './DropdownMenuSubTrigger.vue'
// import DropdownMenuSubContent from './DropdownMenuSubContent.vue'
import { IconButton } from '../icon-button'
import { EllipsisHorizontal, PencilSquare, Plus, Trash } from '@minima-vue/icons'
import { ref } from 'vue'

const meta: Meta<typeof DropdownMenu> = {
    title: 'Components/DropdownMenu',
    component: DropdownMenu,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Simple: Story = {
    render: (args) => ({
        components: {
            DropdownMenu,
            DropdownMenuTrigger,
            DropdownMenuContent,
            DropdownMenuItem,
            DropdownMenuSeparator,
            IconButton,
            EllipsisHorizontal,
            PencilSquare,
            Plus,
            Trash
        },
        setup() {
            return { args }
        },
        template: `
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <IconButton>
            <EllipsisHorizontal />
          </IconButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem class="gap-x-2">
            <PencilSquare class="text-ui-fg-subtle" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem class="gap-x-2">
            <Plus class="text-ui-fg-subtle" />
            Add
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem class="gap-x-2">
            <Trash class="text-ui-fg-subtle" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `,
    }),
}

export const Sorting: Story = {
    render: (args) => ({
        components: {
            DropdownMenu,
            DropdownMenuTrigger,
            DropdownMenuContent,
            DropdownMenuRadioGroup,
            DropdownMenuRadioItem,
            DropdownMenuSeparator,
            DropdownMenuHint,
            IconButton,
            EllipsisHorizontal
        },
        setup() {
            const sort = ref('none')
            return { args, sort }
        },
        template: `
      <div class="flex flex-col gap-y-2">
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
            <IconButton variant="primary">
                <EllipsisHorizontal />
            </IconButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-[300px]">
            <DropdownMenuRadioGroup v-model="sort">
                <DropdownMenuRadioItem value="none">
                No Sorting
                </DropdownMenuRadioItem>
                <DropdownMenuSeparator />
                <DropdownMenuRadioItem value="alpha">
                Alphabetical
                <DropdownMenuHint>A-Z</DropdownMenuHint>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="alpha-reverse">
                Reverse Alphabetical
                <DropdownMenuHint>Z-A</DropdownMenuHint>
                </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
        <div>
            <pre>Sorting by: {{ sort }}</pre>
        </div>
      </div>
    `,
    }),
}

export const Checkboxes: Story = {
    render: (args) => ({
        components: {
            DropdownMenu,
            DropdownMenuTrigger,
            DropdownMenuContent,
            DropdownMenuCheckboxItem,
            DropdownMenuSeparator,
            DropdownMenuLabel,
            DropdownMenuHint,
            IconButton,
            EllipsisHorizontal
        },
        setup() {
            const currencies = ref(['EUR'])
            const regions = ref(['NA'])

            const toggleCurrency = (currency: any) => {
                if (currencies.value.includes(currency)) {
                    currencies.value = currencies.value.filter(c => c !== currency)
                } else {
                    currencies.value.push(currency)
                }
            }

            const toggleRegion = (region: any) => {
                if (regions.value.includes(region)) {
                    regions.value = regions.value.filter(r => r !== region)
                } else {
                    regions.value.push(region)
                }
            }

            return { args, currencies, regions, toggleCurrency, toggleRegion }
        },
        template: `
      <div class="flex flex-col gap-y-2">
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
            <IconButton>
                <EllipsisHorizontal />
            </IconButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-[300px]">
                <DropdownMenuLabel>Currencies</DropdownMenuLabel>
                <DropdownMenuCheckboxItem 
                    :checked="currencies.includes('EUR')"
                    @select.prevent="toggleCurrency('EUR')"
                >
                    EUR
                    <DropdownMenuHint>Euro</DropdownMenuHint>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem 
                    :checked="currencies.includes('USD')"
                    @select.prevent="toggleCurrency('USD')"
                >
                    USD
                    <DropdownMenuHint>US Dollar</DropdownMenuHint>
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Regions</DropdownMenuLabel>
                <DropdownMenuCheckboxItem 
                    :checked="regions.includes('NA')"
                    @select.prevent="toggleRegion('NA')"
                >
                    North America
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem 
                    :checked="regions.includes('EU')"
                    @select.prevent="toggleRegion('EU')"
                >
                    Europe
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <div>
            <pre>Currencies: {{ currencies.join(', ') }}</pre>
            <pre>Regions: {{ regions.join(', ') }}</pre>
        </div>
      </div>
    `,
    }),
}
