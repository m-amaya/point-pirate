import { EnvironmentPlugin, HotModuleReplacementPlugin } from 'webpack';
import { Configuration } from 'webpack-dev-server';
import merge from 'webpack-merge';
import common from './webpack.common.config';
import { PATHS, SERVER } from '../project.config';

/**
 * Webpack Dev-Specific Configuration
 */
const config: Configuration = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: PATHS.output,
    historyApiFallback: true,
    hot: true,
    overlay: true,
    staticOptions: { redirect: false },
    port: SERVER.port,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new EnvironmentPlugin({
      /** Explicitly setting the node environment for clarity. */
      NODE_ENV: 'development',
    }),
  ],
  output: {
    publicPath: '/',
  },
});

export default config;
