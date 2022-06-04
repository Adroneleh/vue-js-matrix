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
                >{{ fileName }}</v-chip>

                <span
                    v-else-if="index === 2"
                    class="text-overline text-grey-darken-3 mx-2"
                >+{{ files.length - 2 }} File(s)</span>
            </template>
        </template>
    </v-file-input>
</template>

<script>
import * as XLSX from "xlsx"

export default {
    data: () => ({
        files: [],
    }),
    methods: {
        importFile(event) {
            this.file = event.target.files ? event.target.files[0] : null;

            if (this.file) {

                const reader = new FileReader();

                reader.onload = (e) => {

                    const bstr = e.target.result;
                    const wb = XLSX.read(bstr, { type: 'binary' });

                    const wsname = wb.SheetNames[0];
                    const ws = wb.Sheets[wsname];

                    let data = XLSX.utils.sheet_to_json(ws, { header: 1 }).filter(e => e.length !== 0)

                    const tableHeader = data[0]
                    const hasIdProperty = tableHeader.find(e => e.toLowerCase() === 'id') ? true : false

                    if (!hasIdProperty) tableHeader.push('id')

                    this.$store.commit('updateTableHeader', Object.assign({}, tableHeader))

                    data.splice(0, 1)


                    data = data.map((row, index) => {
                        let result = {}

                        tableHeader.forEach((element, index) => {
                            result[element.toString()] = row[index]
                        });
                        if (!hasIdProperty) {
                            result['id'] = index
                        }
                        return result
                    })

                    this.$store.commit('uploadDataFromFile', data)
                    console.log(tableHeader)
                    console.log(data)
                }

                reader.readAsBinaryString(this.file);
            }
        }
    }
}
</script>
