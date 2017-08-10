/**
 * 这些规则涉及ES6(ES2015)
 */
module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            generators: false,
            objectLiteralDuplicateProperties: false
        }
    },

    rules: {
        /**
         * 要求箭头函数体使用大括号
         * http://eslint.cn/docs/rules/arrow-body-style
         */
        'arrow-body-style': ['warn', 'as-needed', {
            requireReturnForObjectLiteral: false,
        }],

        /**
         * 要求箭头函数的参数使用圆括号
         * http://eslint.cn/docs/rules/arrow-parens
         */
        'arrow-parens': ['error', 'as-needed', {
            requireForBlockBody: false,
        }],

        /**
         * 强制箭头函数的箭头前后使用一致的空格
         * http://eslint.cn/docs/rules/arrow-spacing
         */
        'arrow-spacing': ['warn', { before: true, after: true }],

        /**
         * 要求在构造函数中有 super() 的调用
         * http://eslint.cn/docs/rules/constructor-super
         */
        'constructor-super': 'error',

        /**
         * 禁止修改类声明的变量
         * http://eslint.cn/docs/rules/no-class-assign
         */
        'no-class-assign': 'error',

        /**
         * 在可能会与对比运算符混淆的地方禁止箭头功能
         * http://eslint.cn/docs/rules/no-confusing-arrow
         */
        'no-confusing-arrow': ['warn', {
            allowParens: true,
        }],

        /**
         * 禁止修改 const 声明的变量
         * http://eslint.cn/docs/rules/no-const-assign
         */
        'no-const-assign': 'error',

        /**
         * 禁止类成员中出现重复的名称
         * http://eslint.cn/docs/rules/no-dupe-class-members
         */
        'no-dupe-class-members': 'error',

        /**
         * 禁止重复模块导入
         * http://eslint.cn/docs/rules/no-duplicate-imports
         */
        'no-duplicate-imports': 'warn',

        /**
         * 禁止在 Symbol 对象用 new 操作符
         * http://eslint.cn/docs/rules/no-new-symbol
         */
        'no-new-symbol': 'error',

        /**
         * 禁止在构造函数中，在调用 super() 之前使用 this 或 super
         * http://eslint.cn/docs/rules/no-this-before-super
         */
        'no-this-before-super': 'error',

        /**
         * 禁止对象文字中不必要的计算属性键
         * http://eslint.cn/docs/rules/no-useless-computed-key
         */
        'no-useless-computed-key': 'error',

        /**
         * 禁用不必要的构造函数
         * http://eslint.cn/docs/rules/no-useless-constructor
         */
        'no-useless-constructor': 'error',

        /**
         * 禁止不必要的重命名
         * http://eslint.cn/docs/rules/no-useless-rename
         */
        'no-useless-rename': ['error', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        }],

        /**
         * 要求使用 let 或 const 而不是 var
         * http://eslint.cn/docs/rules/no-var
         */
        'no-var': 'error',

        /**
         * 要求对象字面量中方法和属性使用简写语法
         * http://eslint.cn/docs/rules/object-shorthand
         */
        'object-shorthand': ['error', 'always', {
            ignoreConstructors: false,
            avoidQuotes: true,
        }],

        /**
         * 要求使用箭头函数作为回调
         * http://eslint.cn/docs/rules/prefer-arrow-callback
         */
        'prefer-arrow-callback': ['error', {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],

        /**
         * 要求使用 const 声明那些声明后不再被修改的变量
         * http://eslint.cn/docs/rules/prefer-const
         */
        'prefer-const': ['error', {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
        }],

        /**
         * 禁止parseInt()支持二进制，八进制和十六进制文字
         * http://eslint.cn/docs/rules/prefer-numeric-literals
         */
        'prefer-numeric-literals': 'error',

        /**
         * 要求使用 rest 参数
         * http://eslint.cn/docs/rules/prefer-rest-params
         */
        'prefer-rest-params': 'error',

        /**
         * 要求使用扩展运算符
         * http://eslint.cn/docs/rules/prefer-spread
         */
        'prefer-spread': 'error',

        /**
         * 要求使用模板字面量而非字符串连接
         * http://eslint.cn/docs/rules/prefer-template
         */
        'prefer-template': 'error',

        /**
         * 要求 generator 函数内有 yield
         * http://eslint.cn/docs/rules/require-yield
         */
        'require-yield': 'error',

        /**
         * 强制 rest 和扩展运算符前后间距
         * http://eslint.cn/docs/rules/rest-spread-spacing
         */
        'rest-spread-spacing': ['error', 'never'],

        /**
         * 需要 Symbol 说明
         * http://eslint.cn/docs/rules/symbol-description
         */
        'symbol-description': 'error',

        /**
         * 要求或禁止模板字符串中的嵌入表达式周围空格的使用
         * http://eslint.cn/docs/rules/template-curly-spacing
         */
        'template-curly-spacing': 'error'
    }
};
