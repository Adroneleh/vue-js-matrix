import { StoreTypes } from '@/types/store.types'
import { CellTypes, TableTypes } from '@/types/table.types'
import { createStore } from 'vuex'

export const Store = createStore({
  state(): StoreTypes {
    return {
      searchQuery: '',
      tableHeader: {},
      table: [],
    }
  },
  mutations: {
    updateQueryString(state: StoreTypes, payload: string) {
      state.searchQuery = payload
    },
    deleteRow(state: StoreTypes, payload: number) {
      const { table } = state
      if (table) {
        table.forEach((_, index) => {
          if (index === payload) {
            table.splice(index, 1)
          }
        })
      }
    },
    updateRow(state: StoreTypes, payload: any) {
      const { index, key, value } = payload

      if (key && value && state.table) {
            state.table[index][key] = value
      }
    },
    uploadDataFromFile(state: StoreTypes, payload: TableTypes[]) {
      state.table = payload
    },
    updateTableHeader(state: StoreTypes, payload: TableTypes) {
      state.tableHeader = payload
    },
    copyRow(state: StoreTypes, payload: number) {
      const { table } = state
      if (table) {
        table.push(table[payload])
      }
    },
    addEmptyRow(state: StoreTypes) {
      const { table } = state

      if (table && table.length > 0) {
        const emptyRow = { ...state.tableHeader }
        for (const key in emptyRow) {
          emptyRow[key] = ''
        }
        table.push(emptyRow)
      }
    },
  },
})
