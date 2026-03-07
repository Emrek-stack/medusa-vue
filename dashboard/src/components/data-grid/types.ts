export type DataGridCellValue = string | number | boolean | null

export interface DataGridChange {
  rowId: string
  key: string
  value: DataGridCellValue
}
