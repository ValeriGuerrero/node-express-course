const { readFileSync, writeFileSync } = require('fs');

console.log('Start writing to file...');

// First write operation (creates or overwrites file)
writeFileSync('./temporary/fileA.txt', 'Line 1: This is the first line.\n');

console.log('First line written');
~
    writeFileSync('./temporary/fileA.txt', 'Line 2: This is the second line.\n', { flag: 'a' });

console.log('Second line written');

writeFileSync('./temporary/fileA.txt', 'Line 3: This is the third line.\n', { flag: 'a' });

console.log('Third line written');

const fileContents = readFileSync('./temporary/fileA.txt', 'utf8');

console.log('File Contents:');
console.log(fileContents);

console.log('Done with this task');
console.log('Starting the next one...');