import acorn from 'acorn';
import { TsJestTransformer } from 'ts-jest/dist/ts-jest-transformer';

const JSXParser = acorn.Parser.extend(require('acorn-jsx')());
const transform = require('rollup-plugin-innet-jsx')().transform.bind({
    parse(code) {
        return JSXParser.parse(code, { ecmaVersion: 'latest' });
    }
});
class InnetJestTransformer extends TsJestTransformer {
    process(fileContent, filePath, jestConfig) {
        return transform(super.process(fileContent, filePath, jestConfig), filePath);
    }
}
function createTransformer() {
    return new InnetJestTransformer();
}

export { InnetJestTransformer, JSXParser, createTransformer };
