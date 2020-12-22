const { createServer } = require('https');
const fs = require('fs');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

var options = {
    key: fs.readFileSync('ssl.key'),
    cert: fs.readFileSync('ssl.crt'),
};

app.prepare().then(() => {
    createServer(options, (req, res) => {
        const parsedUrl = parse(req.url, true);

        handle(req, res, parsedUrl);
    }).listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});