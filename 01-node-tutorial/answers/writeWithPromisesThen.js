const { writeFile, readFile } = require("fs").promises;

writeFile('./temp.txt', 'THIS IS Amazing!\n', { flag: "a" })
    .then(() => {
        return writeFile('./temp.txt', 'This is my second AWESOME line.\n', { flag: "a" })
    })
    .then(() => {
        return writeFile('./temp.txt', 'This is my third AWESOME line.\n', { flag: "a" })
    })
    .then(() => {
        return readFile('./temp.txt', 'utf-8');
    })
    .then((data) => {
        console.log('file content ', data)
    })
    .catch((error) => {
        console.log("An error occurred: ", error)
    })  