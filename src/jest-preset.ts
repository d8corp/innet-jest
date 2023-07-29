export default {
  transform: {
    '.*': 'innet-jest',
  },
  moduleNameMapper: {
    "^/$": "<rootDir>/src",
    "^/(.*)": "<rootDir>/src/$1",
    "^src(/?.*)": "<rootDir>/src$1"
  }
}
