const { writeFile, readFile } = require("fs").promises;

const writer = async () => {

    try {

        await writeFile('./temp.txt', 'THIS IS AWESOME\n', { flag: "a" });

        await writeFile('./temp.txt', 'Hello this is the second text file.\n', { flag: "a" });

        await writeFile('./temp.txt', 'Hello this is the third text file..\n', { flag: "a" });

    } catch (error) {
        console.log(error)
    }
}

const reader = async () => {
    try {
        const contentPromises = await readFile('./temp.txt', 'utf-8')
        console.log('File content: ', contentPromises)

    } catch (error) {
        console.log(error)
    }
}

const readWrite = async () => {
    await writer();
    await reader();
}

readWrite();