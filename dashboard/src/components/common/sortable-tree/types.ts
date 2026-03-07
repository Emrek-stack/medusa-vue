export interface TreeItem extends Record<string, unknown> {
  id: string
}

export interface FlattenedItem extends TreeItem {
  parentId: string | null
  depth: number
  index: number
}
