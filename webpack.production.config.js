var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    './scss/style.sass',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.min.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // loader: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties']
        }
      },
      // {
      //   test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css"
      // },
      // {
      //   test: /\.useable\.css$/, loader: "style/useable!css"
      // },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=[path][name].[ext]" },
      {
        test: /\.sass$/, loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ]
};
