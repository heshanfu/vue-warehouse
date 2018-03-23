var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

var base = require('./webpack.config.base');

module.exports = merge(base, {
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'vue-warehouse.common.js',
		libraryTarget: 'commonjs2'
	},
	target: 'node',
	plugins: [
		new UglifyJsPlugin({
			uglifyOptions: {
				warningsFilter: () => false,
				mangle: false
			}
		})
	]
});
