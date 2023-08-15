import * as path from 'path';
export default {
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
        libraryTarget: 'umd',
    },
    externals: [
        'lodash',
    ]
}