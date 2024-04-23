import { writeFileSync } from 'fs'
import { resolve } from 'path'
const dbPath = resolve('./cypress/utils/db.json')

const emptyDb = {
    email: "",
    password: ""
}

export function setupDb(data = emptyDb) {
    writeFileSync(dbPath, JSON.stringify(data))
    return data
}