module.exports = {
  root: true,
  extends: ["infojr/next"],
  ignorePatterns: ["node_modules", "dist", "**/*.js"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
