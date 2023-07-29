export default {
  transform: {
    '\\.(ts|jsx|tsx)$': 'innet-jest',
    ".*": "jest-raw-loader",
  },
  moduleNameMapper: {
    "^/$": "<rootDir>/src",
    "^/(.*)": "<rootDir>/src/$1",
    "^src(/?.*)": "<rootDir>/src$1"
  }
}
