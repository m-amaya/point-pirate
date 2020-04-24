import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { Configuration, EnvironmentPlugin } from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common.config';

/**
 * Webpack Prod-Specific Configuration
 */
const config: Configuration = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new EnvironmentPlugin({
      /** Explicitly setting the node environment for clarity. */
      NODE_ENV: 'production',
    }),
  ],
  output: {
    publicPath: '/chatter',
  },
});

export default config;
