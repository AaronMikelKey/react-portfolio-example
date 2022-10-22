const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: './src/index.js',
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.s?[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
				],
			},
			{
				test: /\.(pdf|png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "Aaron Key's Portfolio",
			template: './src/index.html',
		}),
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	devServer: {
		hot: true,
	},
}
