const { writeFile, readFile, read } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


writeFilePromise('./temp.txt', `Trying .then `)
    .then(() => {
        return writeFilePromise('./temp.txt', `first .then `, { flag: 'a' })
    }).then(() => {
        return writeFilePromise('./temp.txt', `second .then `, { flag: 'a' })
    }).then(() => {
        return readFilePromise('./temp.txt', 'utf-8',)
    }).then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
