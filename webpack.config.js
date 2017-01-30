 'use strict';
 
 let HtmlWebpackPlugin = require('html-webpack-plugin');
 
 var config = {
 	entry: './main.js',

 	output: {
 		path: './',
 		filename: 'index.js'
 	},

   watch: true,

 	devServer: {
 		inline: true,
 		port:  8000
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
                exclude: /node_modules/,
                loaders: ["style", "css", "postcss" , "sass","stylefmt"]
         }
      ]
   },
   plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    })
  ]

 };

 module.exports = config;