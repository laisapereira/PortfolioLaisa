module.exports = {
    root: true,
    extends: ['infojr-ts/next'],
    ignorePatterns: ['node_modules', 'dist', '**/*.js'],
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    rules: {
        '@next/next/no-head-element': 'off',
        'jsx-a11y/label-has-associated-control': [
            'error',
            { assert: 'either' },
        ],
    },
}
