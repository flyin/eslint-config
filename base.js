module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jest', 'import', 'prettier'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:jest/recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    rules: {
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0,

        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'none',
                },
                singleline: {
                    delimiter: 'semi',
                },
            },
        ],
    },
    settings: {},
}
