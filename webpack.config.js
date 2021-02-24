const path = require('path')

module.exports = {
  entry: ['@babel/polyfill', './src/index.ts'],
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'jsapp',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          /.\/src/
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.ts$/,
        include: [
          /.\/src/
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          'ts-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  }
}
