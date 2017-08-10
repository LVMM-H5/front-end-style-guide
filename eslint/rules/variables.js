/**
 * 这些规则与变量声明有关
 */
module.exports = {
    rules: {
        /**
         * 禁止删除变量
         * http://eslint.cn/docs/rules/no-delete-var
         */
        'no-delete-var': 'error',

        /**
         * 不允许标签与变量同名
         * http://eslint.cn/docs/rules/no-label-var
         */
        'no-label-var': 'error',

        /**
         * 禁止将标识符定义为受限的名字
         * http://eslint.cn/docs/rules/no-shadow-restricted-names
         */
        'no-shadow-restricted-names': 'error',

        /**
         * 禁用未声明的变量，除非它们在 /*global * / 注释中被提到
         * http://eslint.cn/docs/rules/no-undef
         */
        'no-undef': 'error',

        /**
         * 禁止将变量初始化为 undefined
         * http://eslint.cn/docs/rules/no-undef-init
         */
        'no-undef-init': 'error',

        /**
         * 禁止未使用的变量
         * http://eslint.cn/docs/rules/no-unused-vars
         */
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

        /**
         * 禁止在变量定义之前使用它们
         * http://eslint.cn/docs/rules/no-use-before-define
         */
        'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    }
};
