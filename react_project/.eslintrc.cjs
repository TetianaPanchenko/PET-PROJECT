module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: 'return', next: '*' },
            { blankLine: 'always', prev: '*', next: 'export' },
            { blankLine: 'always', prev: 'export', next: '*' },
            { blankLine: 'always', prev: '*', next: 'if' },
            { blankLine: 'always', prev: 'if', next: '*' },
        ],
    },
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.tsx'],
            rules: {
                'prettier/prettier': ['error', { endOfLine: 'auto' }],
            },
        },
    ],
}
