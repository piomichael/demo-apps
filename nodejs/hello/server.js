'use strict';

const express = require('express');

var IP = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, IP);
console.log(`Running on http://${IP}:${PORT}`);
