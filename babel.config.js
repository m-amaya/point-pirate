const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  presets: [
    ['@babel/env', { modules: false, targets: { node: 'current' } }],
    ['@babel/typescript', { isTSX: true, allExtensions: true }],
    ['@babel/react', { development: !isProduction }],
    '@emotion/css-prop',
  ],

  plugins: [
    'react-hot-loader/babel', 
    '@babel/transform-runtime', 
    ['@babel/proposal-class-properties', { loose: true }]
  ],
};
