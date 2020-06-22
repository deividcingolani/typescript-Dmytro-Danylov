module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    value: [
      "build",
      "ci",
      "chore",
      "docs",
      "feat",
      "fix",
      "perf",
      "refactor",
      "revert",
      "style",
      "test",
    ],
  },
};
