import { __extends } from 'tslib';
import { TsJestTransformer } from 'ts-jest';
import transform from 'innet-jsx';
export { default as jestPreset } from './jest-preset.mjs';

var InnetJestTransformer = /** @class */ (function (_super) {
    __extends(InnetJestTransformer, _super);
    function InnetJestTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InnetJestTransformer.prototype.process = function (fileContent, jsxFile, jestConfig) {
        var jsx = _super.prototype.process.call(this, fileContent, jsxFile, jestConfig);
        return transform(jsx, { jsxFile: jsxFile });
    };
    return InnetJestTransformer;
}(TsJestTransformer));
function createTransformer() {
    return new InnetJestTransformer();
}
var index = {
    InnetJestTransformer: InnetJestTransformer,
    createTransformer: createTransformer,
};

export { InnetJestTransformer, createTransformer, index as default };
