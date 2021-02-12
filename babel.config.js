module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: '12.13.0'} }],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                "@src": "./src"
            }
        }],
        'babel-plugin-transform-typescript-metadata',
        ['@babel/plugin-proposal-decorators', { 'legacy': true }],
        ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    ]
}
