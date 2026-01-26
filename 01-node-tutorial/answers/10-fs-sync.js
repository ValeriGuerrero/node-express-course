const { readFileSync, writeFileSync } = require("fs")

const first = readFileSync("./content/first.txt", "utf-8")
const second = readFileSync("./content/second.txt", "utf-8")

console.log(first, second)

writeFileSync(
    './temporary/fileA.txt',
    `Here is the result: ${first}`

)
writeFileSync(
    './temporary/fileA.txt',
    `Here is the result: ${second}`
)

writeFileSync(
    './temporary/fileA.txt',
    `Here is the result ${first}, ${second}`,
    { flag: 'a' } //creates a new value
)

