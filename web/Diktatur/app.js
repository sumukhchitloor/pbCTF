const http = require('http');
const url = require('url');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Get the Accept-Language header from the request
    const acceptLanguage = req.headers['accept-language'];

    // Get the query parameters
    const queryParams = parsedUrl.query;

    if (acceptLanguage && acceptLanguage.startsWith('de')) {
        if (queryParams.secret === 'hail_hitler') {
            fs.readFile('Das_1st_d1e_Fl4gge.html', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            });
        } else {
            fs.readFile('almost_there.html', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            });
        }
    } else {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
