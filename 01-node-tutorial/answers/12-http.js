const http = require('http');
const querystring = require('querystring');

let currentColor = "";

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === "/") {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const formData = querystring.parse(body);
            currentColor = formData.color ? formData.color.toLowerCase() : "";

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
    }
    if (req.method === 'GET' && req.url === "/") {
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
    if (req.url !== "/" && req.method === 'GET') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
        <html>
        <head><title>404 Not Found</title></head>
        <body style="text-align: center; color: red;">
            <h1>Oops! 404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/">Go back to the home page</a>
        </body>
        </html>
        `);
    }
});

server.listen(3000);
