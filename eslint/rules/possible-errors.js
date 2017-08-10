/**
 * 这些规则主要针对可能的语法或逻辑错误
 */
module.exports = {
    rules: {
        /**
         * 不允许在循环体内部使用 await
         * http://eslint.cn/docs/rules/no-await-in-loop
         */
        'no-await-in-loop': 'error',

        /**
         * 禁止条件表达式中出现赋值操作符
         * http://eslint.cn/docs/rules/no-cond-assign
         */
        'no-cond-assign': ['error', 'always'],

        /**
         * 禁用 console
         * http://eslint.cn/docs/rules/no-console
         */
        'no-console': 'warn',

        /**
         * 禁止在条件中使用常量表达式
         * http://eslint.cn/docs/rules/no-constant-condition
         */
        'no-constant-condition': 'warn',

        /**
         * 禁止在正则表达式中使用控制字符
         * http://eslint.cn/docs/rules/no-control-regex
         */
        'no-control-regex': 'error',

        /**
         * 禁用 debugger
         * http://eslint.cn/docs/rules/no-debugger
         */
        'no-debugger': 'warn',

        /**
         * 禁止 function 定义中出现重名参数
         * http://eslint.cn/docs/rules/no-dupe-args
         */
        'no-dupe-args': 'error',

        /**
         * 禁止对象字面量中出现重复的 key
         * http://eslint.cn/docs/rules/no-dupe-keys
         */
        'no-dupe-keys': 'error',

        /**
         * 禁止出现重复的 case 标签
         * http://eslint.cn/docs/rules/no-duplicate-case
         */
        'no-duplicate-case': 'error',

        /**
         * 禁止出现空语句块
         * http://eslint.cn/docs/rules/no-empty
         */
        'no-empty': 'warn',

        /**
         * 禁止在正则表达式中使用空字符集
         * http://eslint.cn/docs/rules/no-empty-character-class
         */
        'no-empty-character-class': 'error',

        /**
         * 禁止对 catch 子句的参数重新赋值
         * http://eslint.cn/docs/rules/no-ex-assign
         */
        'no-ex-assign': 'error',

        /**
         * 禁止不必要的布尔转换
         * http://eslint.cn/docs/rules/no-extra-boolean-cast
         */
        'no-extra-boolean-cast': 'warn',

        /**
         * 禁止不必要的分号
         * http://eslint.cn/docs/rules/no-extra-semi
         */
        'no-extra-semi': 'error',

        /**
         * 禁止对 function 声明重新赋值
         * http://eslint.cn/docs/rules/no-func-assign
         */
        'no-func-assign': 'error',

        /**
         * 禁止在嵌套的块中出现 function 声明
         * http://eslint.cn/docs/rules/no-inner-declarations
         */
        'no-inner-declarations': ['error', 'functions'],

        /**
         * 禁止 RegExp 构造函数中存在无效的正则表达式字符串
         * http://eslint.cn/docs/rules/no-invalid-regexp
         */
        'no-invalid-regexp': 'error',

        /**
         * 禁止在字符串和注释之外不规则的空白
         * http://eslint.cn/docs/rules/no-irregular-whitespace
         */
        'no-irregular-whitespace': 'error',

        /**
         * 禁止把全局对象作为函数调用
         * http://eslint.cn/docs/rules/no-obj-calls
         */
        'no-obj-calls': 'error',

        /**
         * 禁止直接调用 Object.prototypes 的内置属性
         * http://eslint.cn/docs/rules/no-prototype-builtins
         */
        'no-prototype-builtins': 'error',

        /**
         * 禁止正则表达式字面量中出现多个空格
         * http://eslint.cn/docs/rules/no-regex-spaces
         */
        'no-regex-spaces': 'error',

        /**
         * 禁用稀疏数组
         * http://eslint.cn/docs/rules/no-sparse-arrays
         */
        'no-sparse-arrays': 'error',

        /**
         * 禁止普通字符串中出现占位符语法
         * http://eslint.cn/docs/rules/no-template-curly-in-string
         */
        'no-template-curly-in-string': 'error',

        /**
         * 禁止出现令人困惑的多行表达式
         * http://eslint.cn/docs/rules/no-unexpected-multiline
         */
        'no-unexpected-multiline': 'error',

        /**
         * 禁止在 return、throw、continue 和 break 语句之后出现不可访问代码
         * http://eslint.cn/docs/rules/no-unreachable
         */
        'no-unreachable': 'error',

        /**
         * 禁止在 finally 语句块中出现控制流语句
         * http://eslint.cn/docs/rules/no-unsafe-finally
         */
        'no-unsafe-finally': 'error',

        /**
         * 禁止在运算符左侧执行关系运算
         * http://eslint.cn/docs/rules/no-unsafe-negation
         */
        'no-unsafe-negation': 'error',

        /**
         * 禁止比较时使用NaN，只能用isNaN()
         * http://eslint.cn/docs/rules/use-isnan
         */
        'use-isnan': 'error',

        /**
         * 强制 typeof 表达式与有效的字符串进行比较
         * http://eslint.cn/docs/rules/valid-typeof
         */
        'valid-typeof': ['error', { requireStringLiterals: true }],
    }
};
