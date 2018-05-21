'use strict';

const http = require('http');

const app = http
  .createServer((req, res) => {
    const { url } = req;

    if (url.startsWith('/error'))
      manageResult(url, res, 500, 1);
    else if (url.startsWith('/success'))
      manageResult(url, res, 200, 0);
    else
      manageResult(url, res);
  })
  .listen(80);

process.on('exit', () => app.close());

function manageResult(url, res, statusCode = 200, exitStatus = null) {
  const stdMethod = exitStatus !== null ? 'stderr' : 'stdout';

  process[stdMethod].write(url + '\n');
  res.writeHeader(statusCode, { 'Content-Type': 'text/plain' });
  res.write(url + '\n');
  res.end();

  if (exitStatus !== null)
    process.exit(exitStatus);
}
