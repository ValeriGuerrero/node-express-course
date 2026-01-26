const { writeFile, readFile } = require("fs");

console.log("at start");
writeFile("./temporary/output.txt", "This is line 1", "utf8", (err, result) => {
    console.log("at point 1");
    if (err) {
        console.log("This error happened: ", err);
        return
    }
    const output = result;
    readFile("./content/first.txt", "utf8", (err, result) => {
        if (err) {
            console.log("error for first text", err)
            return
        }
        const first = result;
        readFile("./content/second.txt", "utf8", (err, result) => {
            if (err) {
                console.log("second error", err)
                return
            }
            const second = result;
            writeFile("./content/resullt-async.txt",
                `Here is the result: ${first}, ${second}`,
                (err, result) => {
                    if (err) {
                        console.log("write error", err)
                        return
                    }
                    console.log(result);
                }
            )
        })
    })

});
console.log("at end");