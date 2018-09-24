const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.get(
    '*',
    (_, response) => {
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({ msg: 'hello world' }));
    }
);
app.listen(
    3000,
    () => { console.log('start application server.') }
);

const http2https = express();
http2https.get(
    '*',
    (request, response) => {
        response.redirect(301, `https://${request.hostname}${request.url}`);
    }
);

http2https.listen(
    3001,
    () => { console.log('start redirect server.'); }
);
