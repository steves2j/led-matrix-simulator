const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname +'/dist/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.json', '.ts', '.tsx', '.js', '.jsx','...']
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          //options: {
          //  compilerOptions: {
          //  noEmit: false, // this option will solve the issue
          // },
          //}
        },
        exclude: /node_modules/,
      },
      {
        test: /\.ts?$/,
        use: {
          loader: 'ts-loader',
          //options: {
          //  compilerOptions: {
          //  noEmit: false, // this option will solve the issue
          // },
          //}
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],


    resolve: {
      fallback: {
        fs: false
      }
    },
    mode: 'development'

};
