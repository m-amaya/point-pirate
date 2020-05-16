import connectHistory from 'connect-history-api-fallback';
import express from 'express';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';

import webpackDevConfig from './build/webpack.dev.config';

export const app = express();
const isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
  const compiler = webpack(webpackDevConfig);
  app.use(connectHistory());
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
}
