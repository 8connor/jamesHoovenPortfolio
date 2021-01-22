const https = require('https');
const http = require("http");
const fs = require('fs');
const { parse } = require('url');
const next = require('next');
const express = require("express");

const dev = process.env.NODE_ENV !== "production";

console.log(dev)

const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

// var options = {
//     key: fs.readFileSync('./www_jameshooven_com.key'),
//     cert: fs.readFileSync('./www_jameshooven_com.crt'),
//     ca: [
//          fs.readFileSync('./AAACertificateServices.crt'),
//          fs.readFileSync('./SectigoRSADomainValidationSecureServerCA.crt'),
//          fs.readFileSync('./USERTrustRSAAAACA.crt')
//         ]
// };

app.prepare().then(() => {
    const server = express();

    server.get('*', (req, res) => {
        return res.redirect(dev ? "http://localhost:3001" : "https://" + req.headers.host + req.url);
    });

    server.listen(dev ? 3000 : 80, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })

    http.createServer((req, res) => {
        const parsedUrl = parse(req.url, true);

        handle(req, res, parsedUrl);

    }).listen(dev ? 3001 : 443, (err) => {
        if (err) throw err;
        console.log('> Ready on https://localhost:3001');
    });
})
.catch((ex) => {
        console.error(ex.stack)
        process.exit(1)

 });
