module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'max-len': ['error', { code: 130, tabWidth: 4, ignoreStrings: true }],
        'require-jsdoc': 0,
        'no-use-before-define': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/state-in-constructor': 'off',
        'react/jsx-no-comment-textnodes': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'react/jsx-props-no-spreading': 0,
        'jsx-a11y/label-has-associated-control': ['error', {
            required: {
                some: ['nesting', 'id'],
            },
        }],
        'jsx-a11y/label-has-for': ['error', {
            required: {
                some: ['nesting', 'id'],
            },
        }],
        'consistent-return': 'off',
        'no-param-reassign': 0,
    },
};
