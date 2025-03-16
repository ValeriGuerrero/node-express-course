const http = require('http');
const querystring = require('querystring');

let currentColor = "";

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const formData = querystring.parse(body);
            currentColor = formData.color.toLowerCase();

            if (currentColor === "red") {
                currentColor = "red";
            }
            if (currentColor === "blue") {
                currentColor = "blue";
            }
            if (currentColor === "green") {
                currentColor = "green";
            }
            if (currentColor === "yellow") {
                currentColor = "yellow";
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <html>
                <head><title>Color Changer</title></head>
                <body style="background-color: ${currentColor}; text-align: center;">
                    <h1>Choose a Color</h1>
                    <form method="POST">
                        <label for="color">Select a color:</label>
                        <select name="color">
                            <option value="red" ${currentColor === "red" ? "selected" : ""}>Red</option>
                            <option value="blue" ${currentColor === "blue" ? "selected" : ""}>Blue</option>
                            <option value="green" ${currentColor === "green" ? "selected" : ""}>Green</option>
                            <option value="yellow" ${currentColor === "yellow" ? "selected" : ""}>Yellow</option>
                        </select>
                        <button type="submit">Change Color</button>
                    </form>
                </body>
                </html>
            `);
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
        <html>
        <head><title>Color Changer</title></head>
        <body style="text-align: center;">
            <h1>Current Color: ${currentColor ? currentColor : "None"}</h1>
            <form method="POST">
                <label for="color">Select a color:</label>
                <select name="color">
                    <option value="" disabled ${currentColor === "" ? "selected" : ""}>--  --</option>
                    <option value="red" ${currentColor === "red" ? "selected" : ""}>Red</option>
                    <option value="blue" ${currentColor === "blue" ? "selected" : ""}>Blue</option>
                    <option value="green" ${currentColor === "green" ? "selected" : ""}>Green</option>
                    <option value="yellow" ${currentColor === "yellow" ? "selected" : ""}>Yellow</option>
                </select>
                <button type="submit">Change Color</button>
            </form>
        </body>
        </html>
        `);
    }
});

server.listen(3000);
