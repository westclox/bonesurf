/**
 * configure the development server
 * Add webpack
*/

import express from 'express';
import path from 'path';
import opn from 'opn';

import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();

// integrate webpack with express
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

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
