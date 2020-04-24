import { resolve } from 'path';

/**
 * Directory Paths
 */
const ROOT = resolve(__dirname);
const SOURCE = resolve(ROOT, 'src');
const OUTPUT = resolve(ROOT, 'dist');

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
