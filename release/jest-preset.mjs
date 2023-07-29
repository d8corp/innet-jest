var jestPreset = {
    transform: {
        '.*': 'innet-jest',
    },
    moduleNameMapper: {
        "^/$": "<rootDir>/src",
        "^/(.*)": "<rootDir>/src/$1",
        "^src(/?.*)": "<rootDir>/src$1"
    }
};

export { jestPreset as default };
