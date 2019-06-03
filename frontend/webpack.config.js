const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
