import { TsJestTransformer } from 'ts-jest';
import transform from 'innet-jsx';

class InnetJestTransformer extends TsJestTransformer {
    process(fileContent, jsxFile, jestConfig) {
        const jsx = super.process(fileContent, jsxFile, jestConfig);
        return transform(jsx, { jsxFile });
    }
}
function createTransformer() {
    return new InnetJestTransformer();
}
var index = {
    InnetJestTransformer,
    createTransformer,
};

export { InnetJestTransformer, createTransformer, index as default };
