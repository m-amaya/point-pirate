import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { Configuration, NamedModulesPlugin } from 'webpack';
import { PATHS } from '../project.config';

/**
 * Webpack Common Configuration
 */
const config: Configuration = {
  target: 'web',
  entry: {
    app: PATHS.entry,
  },
  output: {
    path: PATHS.output,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  resolve: {
    alias: {
      app: PATHS.aliases.app,
      assets: PATHS.aliases.assets,
      settings: PATHS.aliases.settings,
      store: PATHS.aliases.store,
      styles: PATHS.aliases.styles,
      utils: PATHS.aliases.utils,
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: {
          loader: 'svg-url-loader',
          options: {
            limit: 8192,
            stripdeclarations: true,
            iesafe: true,
            encoding: 'base64',
          },
        },
      },
    ],
  },
  plugins: [
    new NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      cache: true,
      filename: PATHS.index.output,
      template: PATHS.index.input,
      favicon: PATHS.favicon,
    }),
    new CopyWebpackPlugin([
      { context: PATHS.aliases.assets, from: '**/*', to: 'assets/' },
    ]),
    new CircularDependencyPlugin({ exclude: /node_modules/ }),
  ],
};

export default config;
