 'use strict';
 
 let HtmlWebpackPlugin = require('html-webpack-plugin');
 let path = require('path');
 
 var config = {
 	entry: './app/main.jsx',

 	output: {
 		path: './app/',
 		filename: 'index.js'
 	},

   watch: true,

 	devServer: {
 		inline: true,
 		port:  8000,
    historyApiFallback: true
 	},

  resolve: {
      modulesDirectories: ['app', 'node_modules'],
      alias: {
              react: path.resolve(__dirname, './node_modules/react'),
              React: path.resolve(__dirname, './node_modules/react')
            },
      fallback: path.resolve(__dirname, './node_modules')
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
         },
         {      test: /\.(png|jpg)$/, 
                loader: require.resolve("file-loader") + "?name=../[path][name].[ext]"
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