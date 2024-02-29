
import nextJest from "next/jest"

const createJestConfig = nextJest({

  dir: "./",
});


const config = {
  // bail: true,
  // clearMocks: true,
  // preset: "ts-jest",
  coverageProvider: "v8",
  testEnvironment: "jsdom",//jsdom
  //testMatch: ["<rootDir>/tests/**/*.test.ts"],// testMatch: ["**/tests/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],

  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
// const config = {
//   coverageProvider: "v8",
//   testEnvironment: "jsdom",
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],

//   // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
// };


export default createJestConfig(config);

// coverageProvider: "v8",
//   testEnvironment: "jest-environment-jsdom",
//     setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
//       testMatch: ["<rootDir>/tests/**/*.test.ts", "<rootDir>/tests/**/*.spec.ts"],
