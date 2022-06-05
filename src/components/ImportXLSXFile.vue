<template>
  <v-file-input
    v-model="files"
    @change="importFile"
    color="deep-purple accent-4"
    counter
    label="File input"
    multiple
    placeholder="Select your files"
    prepend-icon="mdi-paperclip"
    outlined
    :show-size="1000"
  >
    <template v-slot:selection="{ fileNames }">
      <template v-for="(fileName, index) in fileNames" :key="fileName">
        <v-chip
          v-if="index < 2"
          color="deep-purple-accent-4"
          label
          size="small"
          class="mr-2"
          >{{ fileName }}</v-chip
        >

        <span
          v-else-if="index === 2"
          class="text-overline text-grey-darken-3 mx-2"
          >+{{ files.length - 2 }} File(s)</span
        >
      </template>
    </template>
  </v-file-input>
</template>

<script lang="ts">
import * as XLSX from 'xlsx'
import { defineComponent } from 'vue'
import { TableTypes } from '@/types/table.types'

export default defineComponent({
  data: () => ({
    files: [],
  }),
  methods: {
    importFile(event: Event) {
      const { target } = event
      if (target) {
        const { files: file } = target as HTMLInputElement
        if (file) {
          const reader = new FileReader()

          reader.onload = (event: Event) => {
            const { result } = event.target as FileReader
            const wb = XLSX.read(result, { type: 'binary' })

            const wsname = wb.SheetNames[0]
            const ws = wb.Sheets[wsname]

            const xlsxData = XLSX.utils
              .sheet_to_json(ws, { header: 1 })
              .filter((value: any) => value.length !== 0)

            if (xlsxData) {
              const tableHeader = xlsxData[0]

              this.$store.commit(
                'updateTableHeader',
                Object.assign({}, tableHeader)
              )

              xlsxData.shift()

              const tableContent: TableTypes[] = xlsxData.map((row: any) => {
                let result = {}

                if (tableHeader) {
                  // @ts-ignore
                  tableHeader.forEach((key: string, index: number) => {
                    // @ts-ignore
                    result[key] = row[index]
                  })
                }

                return result
              })

              this.$store.commit('uploadDataFromFile', tableContent)
            }
          }

          reader.readAsBinaryString(file[0])
        }
      }
    },
  },
})
</script>
