declare const _default: {
    transform: {
        '\\.(ts|jsx|tsx)$': string;
        ".*": string;
    };
    moduleNameMapper: {
        "^/$": string;
        "^/(.*)": string;
        "^src(/?.*)": string;
    };
};
export default _default;
