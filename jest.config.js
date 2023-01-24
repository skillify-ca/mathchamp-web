module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "<rootDir>/src/redux/longestStreak/longestStreakSlice.test.ts",
  ],
};
