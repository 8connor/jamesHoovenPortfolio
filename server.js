const https = require('https');

const fs = require('fs');
const { parse } = require('url');
const next = require('next');
const express = require("express");

const dev = process.env.NODE_ENV !== "production";

console.log(dev)

const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

var options = {
    key: fs.readFileSync('./www_jameshooven_com.key'),
    cert: fs.readFileSync('./www_jameshooven_com.crt'),
    ca: [
         fs.readFileSync('./AAACertificateServices.crt'),
         fs.readFileSync('./SectigoRSADomainValidationSecureServerCA.crt'),
         fs.readFileSync('./USERTrustRSAAAACA.crt')
        ]
};


app.prepare().then(() => {
    const server = express();

    server.get('*', (req, res) => {
        return res.redirect("https://" + req.headers.host + req.url);
    });

    server.listen(80, (err) => {

        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })

    https.createServer(options, (req, res) => {
        const parsedUrl = parse(req.url, true);

        handle(req, res, parsedUrl);

    }).listen(3001, (err) => {
        if (err) throw err;
        console.log('> Ready on https://localhost:3001');
    });
})
.catch((ex) => {
        console.error(ex.stack)
        process.exit(1)

 });
