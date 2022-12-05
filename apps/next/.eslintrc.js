module.exports = {
  root: true,
  extends: ["infojr/next"],
  ignorePatterns: ["node_modules", "dist", "**/*.js"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
