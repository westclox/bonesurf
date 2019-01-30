/**
 * configure the development server
*/

import express from 'express';
import path from 'path';
import opn from 'opn';

const port = 3000;
const app = express();

// test our server
app.get ('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    opn('http://localhost:' + port, {app: ['firefox']});
  }
});
