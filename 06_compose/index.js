'use strict';

const app = require('express')();
const redis = require('redis');
const client = redis.createClient();

app
  .get('/get/:key', (req, res) => {
    const { key } = req.path;

    client.get(key, (err, value) => {
      if (err)
        res.status(500).send(err);
      else if (!value)
        res.status(404).send();
      else
        res.status(200).send(reply);
    });
  })
  .get('/set/:key/:value', (req, res) => {
    const { key, value } = req.path;

    client.set(key, value, redis.print)
    res.status(202).send();
  })
  .get('*', (req, res) => {
    res.status(404).send();
  });

client.on('error', err => {
  process.stderr.write(err + '\n');
  process.exit(1);
})

process.on('exit', () => app.close());
app.listen(80, () => process.stdout.write('Server started\n'));
