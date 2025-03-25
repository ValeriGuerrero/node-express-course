const { createReadStream } = require('fs');

const stream = createReadStream('../content/big.txt', {
    encoding: 'utf8',
    highWaterMark: 200,
})

let count = 0;

stream.on('data', (chunk) => {
    count++;
    console.log(`Chunk ${count}:`, chunk);
});

stream.on('end', () => {
    console.log(`Total chunks received: ${count}`);
});

stream.on('error', (err) => console.log(err))
