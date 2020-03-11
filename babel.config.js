module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    'plugins': [
        [
            '@babel/plugin-transform-runtime',//设定局部变量，防止多模块不兼容的问题
            { 'corejs': 2 }//设定版本
        ],
        '@babel/plugin-proposal-class-properties'//解决箭头函数在class中无效的问题
    ]
}