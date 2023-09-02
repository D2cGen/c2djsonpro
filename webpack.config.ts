import * as path from 'path';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config: Configuration = {
    entry: [
        './src/index.ts'
    ],
    mode: 'production',
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@app": path.resolve(__dirname, 'src'),
        }
    },
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs',
        // libraryTarget: 'umd',
        filename: "index.js", //使用[name]打包出来的js文件会分别按照入口文件配置的属性来命名
        globalObject: 'this'
    },
    externals:[
        'lodash',
    ],
    plugins: [
        new CleanWebpackPlugin()
    ]
};

export default config;