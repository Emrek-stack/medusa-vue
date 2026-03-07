import type { FlattenedItem, TreeItem } from "./types"

export const flattenTree = <T extends TreeItem>(items: T[], childrenProp = "children", parentId: string | null = null, depth = 0): FlattenedItem[] => {
  return items.reduce<FlattenedItem[]>((acc, item, index) => {
    const children = (item[childrenProp] as T[] | undefined) || []
    return [
      ...acc,
      {
        ...item,
        parentId,
        depth,
        index,
      },
      ...flattenTree(children, childrenProp, item.id, depth + 1),
    ]
  }, [])
}

export const buildTree = <T extends TreeItem>(items: FlattenedItem[], childrenProp = "children"): T[] => {
  const root: TreeItem = { id: "root", [childrenProp]: [] }
  const nodes = new Map<string, TreeItem>([[root.id, root]])

  items.forEach((item) => {
    const node: TreeItem = { ...item, [childrenProp]: [] }
    nodes.set(item.id, node)
    const parent = nodes.get(item.parentId || "root")
    if (parent) {
      ;((parent[childrenProp] as TreeItem[]) || (parent[childrenProp] = [])).push(node)
    }
  })

  return (root[childrenProp] as T[]) || []
}
