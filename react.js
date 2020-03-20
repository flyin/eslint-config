'use strict';

module.exports = {
    extends: './base',

    env: {
        node: false,
        browser: true,
        jest: true,
    },

    plugins: [
        'react',
        'react-hooks'
    ],

    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/destructuring-assignment': [1, 'always', {'ignoreClassFields': true}],
        'react/jsx-curly-spacing': [1, 'never'],
        'react/jsx-uses-react': 0,
        'react/jsx-uses-vars': 1,
        'react/prefer-stateless-function': 2,
        'react/jsx-no-bind': 2,
        'react/self-closing-comp': 2,
        'react/jsx-handler-names': 1,
    },

    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
