module.exports = {
    root: true,
    plugins: [
        'vue'
    ],
    extends: ["plugin:vue/essential", "eslint:recommended"],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },

    // add your custom rules here
    // https://eslint.vuejs.org/
    rules: {
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        indent: [2, 4, {
            SwitchCase: 1
        }],
        'max-len': [2, 150, 4, {'ignoreStrings': true, 'ignoreTemplateLiterals': true}],
        'quotes': [2, 'single'],
        'eqeqeq': [2, 'always', {"null": "ignore"}],
        // 一个函数最大50行
        // 'max-lines-per-function': [2, {'max': 50, 'skipBlankLines': true, 'skipComments': true, IIFEs: true}],
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon': true
        }],
        'spaced-comment': 2,
        'comma-spacing': [2, {
            'before': false,
            'after': true
        }],
        'keyword-spacing': [2, {
            'before': true,
            'after': true
        }],
        // 用空格来隔开运算符
        'space-infix-ops': 2,
        // 箭头函数前后空格
        'arrow-spacing': 2,
        // 函数签名部分要有空格function() {}
        'space-before-blocks': 2,
        // TODO:在以后的版本中，尽量去开启以下规则
        // 允许未定义的变量
        'no-unused-vars': 0,
        'no-undef': 0,
    }
};
