import { TableTypes } from './table.types'

export type StoreTypes = {
  searchQuery: string
  tableHeader: TableTypes | null
  table: TableTypes[] | null
}
