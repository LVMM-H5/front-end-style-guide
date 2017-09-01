/**
 * 这些规则是能够帮助你避免一些问题的最好方法
 */
module.exports = {
    rules: {
        /**
         * 强制数组方法的回调函数中有 return 语句
         * http://eslint.cn/docs/rules/array-callback-return
         */
        'array-callback-return': 'error',

        /**
         * 强制把变量的使用限制在其定义的作用域范围内
         * http://eslint.cn/docs/rules/block-scoped-var
         */
        'block-scoped-var': 'error',

        /**
         * 要求 return 语句要么始终有值要么始终没值
         * http://eslint.cn/docs/rules/consistent-return
         */
        'consistent-return': 'error',

        /**
         * 强制所有控制语句使用一致的括号风格
         * http://eslint.cn/docs/rules/curly
         */
        curly: ['warn', 'multi-line'],

        /**
         * 要求 switch 语句中有 default 分支
         * http://eslint.cn/docs/rules/default-case
         */
        'default-case': ['error', { commentPattern: '^no default$' }],

        /**
         * 强制尽可能地使用点号
         * http://eslint.cn/docs/rules/dot-notation
         */
        'dot-notation': ['error', { allowKeywords: true }],

        /**
         * 强制在点号之前和之后一致的换行
         * http://eslint.cn/docs/rules/dot-location
         */
        'dot-location': ['error', 'property'],

        /**
         * 要求使用 === 和 !==
         * http://eslint.cn/docs/rules/eqeqeq
         */
        eqeqeq: ['error', 'always', { null: 'ignore' }],

        /**
         * 要求 for-in 循环中有一个 if 语句
         * http://eslint.cn/docs/rules/guard-for-in
         */
        'guard-for-in': 'error',

        /**
         * 禁用 alert、confirm 和 prompt
         * http://eslint.cn/docs/rules/no-alert
         */
        'no-alert': 'warn',

        /**
         * 禁用 arguments.caller 或 arguments.callee
         * http://eslint.cn/docs/rules/no-caller
         */
        'no-caller': 'error',

        /**
         * 不允许在 case 子句中使用词法声明
         * http://eslint.cn/docs/rules/no-case-declarations
         */
        'no-case-declarations': 'error',

        /**
         * 禁止 if 语句中 return 语句之后有 else 块
         * http://eslint.cn/docs/rules/no-else-return
         */
        'no-else-return': 'error',

        /**
         * 禁止出现空函数
         * http://eslint.cn/docs/rules/no-empty-function
         */
        'no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods',
            ]
        }],

        /**
         * 禁止使用空解构模式
         * http://eslint.cn/docs/rules/no-empty-pattern
         */
        'no-empty-pattern': 'error',

        /**
         * 禁用 eval()
         * http://eslint.cn/docs/rules/no-eval
         */
        'no-eval': 'error',

        /**
         * 禁止扩展原生类型
         * http://eslint.cn/docs/rules/no-extend-native
         */
        'no-extend-native': 'error',

        /**
         * 禁止不必要的 .bind() 调用
         * http://eslint.cn/docs/rules/no-extra-bind
         */
        'no-extra-bind': 'error',

        /**
         * 禁用不必要的标签
         * http://eslint.cn/docs/rules/no-extra-label
         */
        'no-extra-label': 'error',

        /**
         * 禁止 case 语句落空
         * http://eslint.cn/docs/rules/no-fallthrough
         */
        'no-fallthrough': 'error',

        /**
         * 禁止数字字面量中使用前导和末尾小数点
         * http://eslint.cn/docs/rules/no-floating-decimal
         */
        'no-floating-decimal': 'warn',

        /**
         * 禁止对本地对象或只读全局变量重定义
         * http://eslint.cn/docs/rules/no-global-assign
         */
        'no-global-assign': ['error', { exceptions: [] }],

        /**
         * 禁止使用类似 eval() 的方法
         * http://eslint.cn/docs/rules/no-implied-eval
         */
        'no-implied-eval': 'error',

        /**
         * 禁用 __iterator__ 属性
         * http://eslint.cn/docs/rules/no-iterator
         */
        'no-iterator': 'error',

        /**
         * 禁用标签语句
         * http://eslint.cn/docs/rules/no-labels
         */
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

        /**
         * 禁用不必要的嵌套块
         * http://eslint.cn/docs/rules/no-lone-blocks
         */
        'no-lone-blocks': 'error',

        /**
         * 禁止在循环中出现 function 声明和表达式
         * http://eslint.cn/docs/rules/no-loop-func
         */
        'no-loop-func': 'error',

        /**
         * 禁用魔术数字
         * http://eslint.cn/docs/rules/no-magic-numbers
         */
        'no-magic-numbers': ['warn', {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: false,
            detectObjects: false,
        }],

        /**
         * 禁止使用多个空格
         * http://eslint.cn/docs/rules/no-multi-spaces
         */
        'no-multi-spaces': 'warn',

        /**
         * 禁止使用多行字符串
         * http://eslint.cn/docs/rules/no-multi-str
         */
        'no-multi-str': 'error',

        /**
         * 禁止在使用 new 构造一个实例后不赋值
         * http://eslint.cn/docs/rules/no-new
         */
        'no-new': 'error',

        /**
         * 禁止对 Function 对象使用 new 操作符
         * http://eslint.cn/docs/rules/no-new-func
         */
        'no-new-func': 'error',

        /**
         * 禁止对 String，Number 和 Boolean 使用 new 操作符
         * http://eslint.cn/docs/rules/no-new-wrappers
         */
        'no-new-wrappers': 'error',

        /**
         * 禁用八进制字面量
         * http://eslint.cn/docs/rules/no-octal
         */
        'no-octal': 'error',

        /**
         * 禁止在字符串中使用八进制转义序列
         * http://eslint.cn/docs/rules/no-octal-escape
         */
        'no-octal-escape': 'error',

        /**
         * 禁止对 function 的参数进行重新赋值
         * http://eslint.cn/docs/rules/no-param-reassign
         */
        'no-param-reassign': ['warn', {
            props: false
        }],

        /**
         * 禁用 __proto__ 属性
         * http://eslint.cn/docs/rules/no-proto
         */
        'no-proto': 'error',

        /**
         * 禁止多次声明同一变量
         * http://eslint.cn/docs/rules/no-redeclare
         */
        'no-redeclare': 'error',

        /**
         * 禁止在一些特定的对象上的特定属性
         * http://eslint.cn/docs/rules/no-restricted-properties
         */
        'no-restricted-properties': ['error', {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee 已被废弃！',
        }, {
                property: '__defineGetter__',
                message: '请使用 Object.defineProperty 代替。',
            }, {
                property: '__defineSetter__',
                message: '请使用 Object.defineProperty 代替。',
            }],

        /**
         * 禁止在 return 语句中使用赋值语句
         * http://eslint.cn/docs/rules/no-return-assign
         */
        'no-return-assign': 'error',

        /**
         * 禁止非必要的 return await
         * http://eslint.cn/docs/rules/no-return-await
         */
        'no-return-await': 'error',

        /**
         * 禁止使用 javascript:void(0)
         * http://eslint.cn/docs/rules/no-script-url
         */
        'no-script-url': 'error',

        /**
         * 禁止自我赋值
         * http://eslint.cn/docs/rules/no-self-assign
         */
        'no-self-assign': 'error',

        /**
         * 禁止自身比较
         * http://eslint.cn/docs/rules/no-self-compare
         */
        'no-self-compare': 'error',

        /**
         * 禁用逗号操作符
         * http://eslint.cn/docs/rules/no-sequences
         */
        'no-sequences': 'error',

        /**
         * 禁止抛出异常字面量
         * http://eslint.cn/docs/rules/no-throw-literal
         */
        'no-throw-literal': 'error',

        /**
         * 禁止不变的循环条件
         * http://eslint.cn/docs/rules/no-unmodified-loop-condition
         */
        'no-unmodified-loop-condition': 'warn',

        /**
         * 禁止无用的表达式
         * http://eslint.cn/docs/rules/no-unused-expressions
         */
        'no-unused-expressions': ['error', {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: false,
        }],

        /**
         * 禁用出现未使用过的标签
         * http://eslint.cn/docs/rules/no-unused-labels
         */
        'no-unused-labels': 'error',

        /**
         * 禁止不必要的字符串字面量或模板字面量的连接
         * http://eslint.cn/docs/rules/no-useless-concat
         */
        'no-useless-concat': 'warn',

        /**
         * 禁用不必要的转义字符
         * http://eslint.cn/docs/rules/no-useless-escape
         */
        'no-useless-escape': 'warn',

        /**
         * 禁用 void 操作符
         * http://eslint.cn/docs/rules/no-void
         */
        'no-void': 'error',

        /**
         * 禁止有警告注释
         * http://eslint.cn/docs/rules/no-warning-comments
         */
        'no-warning-comments': ['warn', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

        /**
         * 禁用 with 语句
         * http://eslint.cn/docs/rules/no-with
         */
        'no-with': 'error',

        /**
         * 要求所有的 var 声明出现在它们所在的作用域顶部
         * http://eslint.cn/docs/rules/vars-on-top
         */
        'vars-on-top': 'error',

        /**
         * 要求立即执行函数表达式使用小括号括起来
         * http://eslint.cn/docs/rules/wrap-iife
         */
        'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }]
    }
};
