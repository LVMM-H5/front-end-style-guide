module.exports = {
    extends: [
        // 可能性的错误
        './rules/possible-errors.js',

        // 最佳实践
        './rules/best-practices.js',

        // 变量
        './rules/variables.js',

        // 代码风格
        './rules/stylistic-issues.js',

        // ECMAScript 6
        './rules/es6.js'
    ],
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    }
};
