const fs = require('fs')
const path = require('path')
const dbPath = path.resolve('./cypress/utils/db.json')

const emptyDb = {
    email: "",
    password: ""
}

module.exports.setupDb = (data = emptyDb) => {
    fs.writeFileSync(dbPath, JSON.stringify(data))
    return data
}