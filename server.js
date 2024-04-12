const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

/**
* SSL_KEY_FILE and SSL_CRT_FILE are ...
*/
const privateKeyPath = './each-star.com.key';
const certificatePath = './each-star.com_bundle.pem';

const port = 3000;

const httpsOptions = {
 key:fs.readFileSync(privateKeyPath),
 cert: fs.readFileSync(certificatePath),
};

app.prepare().then(() => {
 createServer(httpsOptions, (req, res) => {
   const parsedUrl = parse(req.url, true);
   handle(req, res, parsedUrl);
 }).listen(port, (err) => {
   if (err) throw err;
   console.log(`> Server started on https://localhost:${port}`);
 });
});