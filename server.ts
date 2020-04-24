import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import wepbackHotMiddleware from 'webpack-hot-middleware';

import webpackDevConfig from './build/webpack.dev.config';
import { SERVER } from './project.config';

const app = express();
const isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
  const compiler = webpack(webpackDevConfig);
  app.use(webpackDevMiddleware(compiler));
  app.use(wepbackHotMiddleware(compiler));
}

app.listen(SERVER.port, () =>
  console.log(`Magic happens on port ${SERVER.port}!!`),
);
