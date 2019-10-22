'use strict';

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'jest',
        'import',
        'prettier',
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
    ],
    env: {
        node: true,
        browser: false,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    rules: {
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
    },
    settings: {},
};
