/**
 * 这些规则主要是关于代码风格的，主观因素较强
 */
module.exports = {
    rules: {
        /**
         * 强制数组方括号中使用一致的空格
         * http://eslint.cn/docs/rules/array-bracket-spacing
         */
        'array-bracket-spacing': ['warn', 'never'],

        /**
         * 强制在单行代码块中使用一致的空格
         * http://eslint.cn/docs/rules/block-spacing
         */
        'block-spacing': ['warn', 'always'],

        /**
         * 强制在代码块中使用一致的大括号风格
         * http://eslint.cn/docs/rules/brace-style
         */
        'brace-style': ['warn', '1tbs', { allowSingleLine: true }],

        /**
         * 强制使用驼峰命名法
         * http://eslint.cn/docs/rules/camelcase
         */
        camelcase: ['warn', { properties: 'never' }],

        /**
         * 强制末尾逗号（暂时不启用）
         * http://eslint.cn/docs/rules/comma-dangle
         */
        'comma-dangle': ['off', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],

        /**
         * 强制在逗号前后使用一致的空格
         * http://eslint.cn/docs/rules/comma-spacing
         */
        'comma-spacing': ['warn', { before: false, after: true }],

        /**
         * 强制使用一致的逗号风格
         * http://eslint.cn/docs/rules/comma-style
         */
        'comma-style': ['warn', 'last'],

        /**
         * 强制在计算的属性的方括号中使用一致的空格
         * http://eslint.cn/docs/rules/computed-property-spacing
         */
        'computed-property-spacing': ['warn', 'never'],

        /**
         * 强制文件末尾留一个空行
         * http://eslint.cn/docs/rules/eol-last
         */
        'eol-last': ['warn', 'always'],

        /**
         * 强制函数标识符与其调用之间有一致的间距
         */
        'func-call-spacing': ['warn', 'never'],

        /**
         * 强制标识符的最小和最大长度
         * http://eslint.cn/docs/rules/id-length
         */
        'id-length': ['warn', { properties: 'never', exceptions: ['i', 'e'] }],

        /**
         * 强制使用一致的缩进
         * http://eslint.cn/docs/rules/indent
         */
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            // MemberExpression: null,
            // CallExpression: {
            // parameters: null,
            // },
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            }
        }],

        /**
         * 强制在对象字面量的属性中键和值之间使用一致的间距
         * http://eslint.cn/docs/rules/key-spacing
         */
        'key-spacing': ['warn', { beforeColon: false, afterColon: true }],

        /**
         * 强制在关键字前后使用一致的空格
         * http://eslint.cn/docs/rules/keyword-spacing
         */
        'keyword-spacing': ['warn', {
            before: true,
            after: true,
            overrides: {
                return: { after: true },
                throw: { after: true },
                case: { after: true }
            }
        }],

        /**
         * 强制规定注释的位置
         * http://eslint.cn/docs/rules/line-comment-position
         */
        'line-comment-position': ['warn', {
            position: 'above',
            ignorePattern: '',
            applyDefaultIgnorePatterns: true,
        }],

        /**
         * 要求在注释周围有空行
         * http://eslint.cn/docs/rules/lines-around-comment
         */
        'lines-around-comment': ['warn', {
            beforeBlockComment: true,
            beforeLineComment: true,
            allowBlockStart: true,
            allowObjectStart: true,
            allowArrayStart: true
        }],

        /**
         * 强制一行的最大长度
         * http://eslint.cn/docs/rules/max-len
         */
        'max-len': ['warn', 150, 4, {
            ignoreUrls: true,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],

        /**
         * 要求构造函数首字母大写
         * http://eslint.cn/docs/rules/new-cap
         */
        'new-cap': ['warn', {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false
        }],

        /**
         * 要求调用无参构造函数时有圆括号
         * http://eslint.cn/docs/rules/new-parens
         */
        'new-parens': 'error',

        /**
         * 要求方法链中每个调用都有一个换行符
         * http://eslint.cn/docs/rules/newline-per-chained-call
         */
        'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }],

        /**
         * 禁用 Array 构造函数
         * http://eslint.cn/docs/rules/no-array-constructor
         */
        'no-array-constructor': 'error',

        /**
         * 禁用按位运算符
         * http://eslint.cn/docs/rules/no-bitwise
         */
        'no-bitwise': 'error',

        /**
         * 禁止在代码后使用内联注释
         * http://eslint.cn/docs/rules/no-inline-comments
         */
        'no-inline-comments': 'warn',

        /**
         * 禁止混合使用不同的操作符
         * http://eslint.cn/docs/rules/no-mixed-operators
         */
        'no-mixed-operators': ['warn', {
            groups: [
                ['+', '-', '*', '/', '%', '**'],
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof']
            ],
            allowSamePrecedence: true
        }],

        /**
         * 禁止空格和 tab 的混合缩进
         * http://eslint.cn/docs/rules/no-mixed-spaces-and-tabs
         */
        'no-mixed-spaces-and-tabs': 'error',

        /**
         * 禁止使用链式赋值表达式
         * http://eslint.cn/docs/rules/no-multi-assign
         */
        'no-multi-assign': ['error'],

        /**
         * 禁止出现多行空行
         * http://eslint.cn/docs/rules/no-multiple-empty-lines
         */
        'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1 }],

        /**
         * 禁用 Object 的构造函数
         * http://eslint.cn/docs/rules/no-new-object
         */
        'no-new-object': 'error',

        /**
         * 禁用特定的语法
         * http://eslint.cn/docs/rules/no-restricted-syntax
         */
        'no-restricted-syntax': [
            'error',
            {
                selector: 'LabeledStatement',
                message: '不允许使用 label 语法！',
            },
            {
                selector: 'WithStatement',
                message: '不允许使用 with 语句！',
            },
        ],

        /**
         * 不允许使用 tab，关闭，使用自定义规则 no-tab-use 代替
         * http://eslint.cn/docs/rules/no-tabs
         */
        'no-tabs': 'off',

        /**
         * 禁用行尾空格
         * http://eslint.cn/docs/rules/no-trailing-spaces
         */
        'no-trailing-spaces': 'warn',

        /**
         * 在简单判断中，禁止使用三元表达式
         * http://eslint.cn/docs/rules/no-unneeded-ternary
         */
        'no-unneeded-ternary': ['warn', { defaultAssignment: true }],

        /**
         * 禁止属性前有空白
         * http://eslint.cn/docs/rules/no-whitespace-before-property
         */
        'no-whitespace-before-property': 'error',

        /**
         * 强制在大括号中使用一致的空格
         * http://eslint.cn/docs/rules/object-curly-spacing
         */
        'object-curly-spacing': ['warn', 'always'],

        /**
         * 强制将对象的属性放在不同的行上
         * http://eslint.cn/docs/rules/object-property-newline
         */
        'object-property-newline': ['warn', {
            allowMultiplePropertiesPerLine: true,
        }],

        /**
         * 要求在可能的情况下使用简化的赋值操作符
         * http://eslint.cn/docs/rules/operator-assignment
         */
        'operator-assignment': ['warn', 'always'],

        /**
         * 要求或禁止块内填充
         * http://eslint.cn/docs/rules/padded-blocks
         */
        'padded-blocks': ['warn', 'never'],

        /**
         * 要求对象字面量属性名称用引号括起来
         * http://eslint.cn/docs/rules/quote-props
         */
        'quote-props': ['warn', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

        /**
         * 强制使用一致的反勾号、双引号或单引号
         * http://eslint.cn/docs/rules/quotes
         */
        quotes: ['warn', 'single', { avoidEscape: true }],

        /**
         * 强制语句结尾要有分号
         * http://eslint.cn/docs/rules/semi
         */
        semi: ['error', 'always'],

        /**
         * 强制分号之前和之后使用一致的空格
         * http://eslint.cn/docs/rules/semi-spacing
         */
        'semi-spacing': ['warn', { before: false, after: true }],

        /**
         * 强制在块之前使用一致的空格
         * http://eslint.cn/docs/rules/space-before-blocks
         */
        'space-before-blocks': 'warn',

        /**
         * 强制在 function 的左括号之前使用一致的空格
         * http://eslint.cn/docs/rules/space-before-function-paren
         */
        'space-before-function-paren': ['warn', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],

        /**
         * 强制在圆括号内使用一致的空格
         * 强制在圆括号内使用一致的空格
         */
        'space-in-parens': ['warn', 'never'],

        /**
         * 要求操作符周围有空格
         * http://eslint.cn/docs/rules/space-infix-ops
         */
        'space-infix-ops': 'warn',

        /**
         * 强制在一元操作符前后使用一致的空格
         * http://eslint.cn/docs/rules/space-unary-ops
         */
        'space-unary-ops': ['warn', {
            words: true,
            nonwords: false,
            overrides: {
            },
        }],

        /**
         * 强制在注释中使用一致的空格
         * http://eslint.cn/docs/rules/spaced-comment
         */
        'spaced-comment': ['warn', 'always', {
            line: {
                exceptions: ['-', '+'],
                markers: ['=', '!'],
            },
            block: {
                exceptions: ['-', '+'],
                markers: ['=', '!'], // space here to support sprockets directives
                balanced: false,
            }
        }],

        /**
         * 强制或禁止Unicode字节顺序标记（BOM）
         * http://eslint.cn/docs/rules/unicode-bom
         */
        'unicode-bom': ['error', 'never']
    }
};
