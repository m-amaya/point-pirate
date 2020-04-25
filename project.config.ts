import { resolve } from 'path';

/**
 * Directory Paths
 */
const ROOT = resolve(__dirname);
const SOURCE = resolve(ROOT, 'client');
const OUTPUT = resolve(ROOT, 'public');

export const PATHS = {
  entry: resolve(SOURCE, 'index.tsx'),
  output: OUTPUT,
  favicon: resolve(SOURCE, 'assets', 'favicon.ico'),
  index: {
    input: resolve(SOURCE, 'index.html'),
    output: resolve(OUTPUT, 'index.html'),
  },
  aliases: {
    app: resolve(SOURCE, 'app'),
    assets: resolve(SOURCE, 'assets'),
    settings: resolve(SOURCE, 'settings'),
    store: resolve(SOURCE, 'store'),
    styles: resolve(SOURCE, 'styles'),
    utils: resolve(SOURCE, 'utils'),
  },
};

/**
 * Server
 */
export const SERVER = {
  port: 8000,
};

/**
 * Database
 */
export const DB = {
  connUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/point-pirate',
};
