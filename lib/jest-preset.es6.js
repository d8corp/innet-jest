var jestPreset = {
    transform: {
        '\\.(ts|jsx|tsx)$': 'innet-jest'
    },
    moduleNameMapper: {
        "^/$": "<rootDir>/src",
        "^/(.*)": "<rootDir>/src/$1",
        "^src(/?.*)": "<rootDir>/src$1"
    }
};

export { jestPreset as default };
