module.exports = {
    root: true,
    extends: ['infojr-ts'],
    ignorePatterns: ['node_modules', 'dist', '**/*.cjs', 'vite.config.ts'],
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    rules: {
        'jsx-a11y/label-has-associated-control': [
            'error',
            { assert: 'either' },
        ],
    },
}
