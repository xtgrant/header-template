var path = require('path');
var src_dir = path.resolve(__dirname, "src");
var dist_dir = path.resolve(__dirname, "dist");

module.exports = {
  entry: [src_dir + '/app/index.js', src_dir + '/styles.scss'],
  output: {
    filename: 'bundle.js',
    path: dist_dir + '/app',
    publicPath: '/app/'
  },
  resolve:{
    modules: ['node_modules','src'],
    extensions:[ '.js']
  },
  module:{
    loaders:[
      {
        test: /\.js?$/,
        include: src_dir,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
            presets:['react','es2015']
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
