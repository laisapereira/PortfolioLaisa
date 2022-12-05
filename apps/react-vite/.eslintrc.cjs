module.exports = {
    root: true,
    extends: ['infojr'],
    ignorePatterns: ['node_modules', 'dist', '**/*.cjs', 'vite.config.ts'],
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
}
