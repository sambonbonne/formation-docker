'use strict';

const http = require('http');

const app = http
  .createServer((req, res) => {
    res.writeHeader(200, { 'Content-Type': 'text/plain' });
    res.write('Here I am!\n');
    res.end();
  })
  .listen(80);

process.on('exit', () => app.close());
