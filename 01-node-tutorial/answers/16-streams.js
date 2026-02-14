/**
const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++) {
    writeFileSync('./BIGFILE', `Hello world ${i}\n`, 'utf-8', { flag: 'a' })
}
**/
const { createReadStream } = require('fs')
//const { result } = require('lodash')

const stream = createReadStream('../content/big.txt', {
    highWaterMark: 200,
    encoding: 'utf-8'
})


let count = 0;

stream.on('data', (result) => {
    count++
    console.log('data', result)
})

stream.on('end', () => {
    console.log('end', count)
})
stream.on('error', (err) => {
    console.log('err', err)
})