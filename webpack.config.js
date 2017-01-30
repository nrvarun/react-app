 'use strict';
 
 let HtmlWebpackPlugin = require('html-webpack-plugin');
 
 var config = {
 	entry: './app/main.js',

 	output: {
 		path: './app/',
 		filename: 'index.js'
 	},

   watch: true,

 	devServer: {
 		inline: true,
 		port:  8000
 	},

  resolve: {
      modulesDirectories: ['app', 'node_modules']
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
                loaders: ['style-loader','css-loader','postcss-loader','sass-loader']
         }
      ]
   },
   plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: true
    })
  ]

 };

 module.exports = config;