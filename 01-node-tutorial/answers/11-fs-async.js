const { writeFile } = require('fs');

writeFile('./temporary/fileB.txt', 'First line of text\n', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('First line written');

    writeFile('./temporary/fileB.txt', 'Second line of text\n', { flag: 'a' }, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Second line written');

        writeFile('./temporary/fileB.txt', 'Third line of text\n', { flag: 'a' }, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Third line written');
        });
    });
});