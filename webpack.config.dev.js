import path from 'path';

export default {
  watch: true,
  devtool: 'inline-source-map',
  mode: 'development',
  entry: [
    path.resolve(__dirname, 'client/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'client'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
}
