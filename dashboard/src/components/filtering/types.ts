export type FilterOption = {
  label: string
  value: string
}

export type SelectFilterDefinition = {
  id: string
  label: string
  type: "select"
  options: FilterOption[]
  multiple?: boolean
  searchable?: boolean
}

export type StringFilterDefinition = {
  id: string
  label: string
  type: "string"
}

export type NumberFilterDefinition = {
  id: string
  label: string
  type: "number"
}

export type DateFilterDefinition = {
  id: string
  label: string
  type: "date"
}

export type FilterDefinition =
  | SelectFilterDefinition
  | StringFilterDefinition
  | NumberFilterDefinition
  | DateFilterDefinition
