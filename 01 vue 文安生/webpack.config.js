module.exports = {
    // resolve配置webpack如何查找文件
    resolve: {
        // 扩展名
        // extensions: ['.js', '.scss', '.es', '.css', '.less'],
        extensions: ['.js', '.es'],
        // 配置别名
        alias: {
            // 注意此时的 '/'为E盘
            vue: '/node_modules/vue/dist/vue.js'
        }
    },
    //入口文件 
    entry: {
        "01": "./modules/01.js",
        "02": "./modules/02.js",
        "03": "./modules/03.js",
        "04": "./modules/04.js",
        "05": "./modules/05.js",
        "06": "./modules/06.js",
        "07": "./modules/07.js",
        "08": "./modules/08.js",
        "09": "./modules/09.js",
        "10": "./modules/10.js",
    },
    //出口配置 
    output: {
        filename: "[name].js"
    },
    //加载
    module: {
        rules: [
            //es6
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // 排除文件夹
                exclude: '/node_modules',
                // 包含指定的文件夹
                include: '/modules',
                options: {
                    presets: ['env']
                }

            },
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader'
                use: ['style-loader', 'css-loader']
            },
            // scss
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // less
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    mode: 'development',
}