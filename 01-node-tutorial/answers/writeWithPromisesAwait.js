const { writeFile, readFile } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

console.log("Start");

const writer = async function () {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf-8');
        const second = await readFilePromise('./content/second.txt', 'utf-8');
        await writeFilePromise('./temp.txt', `Here is the result: ${first}`)
        await writeFilePromise('./temp.txt', `Here is the result: ${second}`)
        await writeFilePromise('./temp.txt', `THIS IS AWESOME: ${first} ${second}`)
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

const reader = async function () {
    try {
        const readFile = await readFilePromise('./temp.txt', 'utf-8');
        console.log(readFile);
    } catch (error) {
        console.log(error);
    }
}

const readWrite = async function () {
    await writer()
    await reader()
}

readWrite()

console.log("End");


