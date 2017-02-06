'use strict';

let ETP = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let path  = require('path');

 var config = {
 	entry: './app/main.jsx',

 	output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, './dist')
  },

 	devServer: {
 		inline: true,
 		port:  8080
 	},

 	module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         { 
            test: /\.scss$/, 
            loader: ETP.extract("style-loader", "css!postcss!sass!")
         },
         {      test: /\.(png|jpg)$/, 
                loader: require.resolve("file-loader") + "?name=../[path][name].[ext]"
         }
      ]
   },
   plugins: [
     new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    new ETP('./css/style.css'),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: true,
      minify: {
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        decodeEntities: true,
        collapseWhitespace: false,
        useShortDoctype: true
      }
    })
  ]
}

 module.exports = config;