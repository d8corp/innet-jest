import { __extends } from 'tslib';
import { TsJestTransformer } from 'ts-jest';
import transform from 'innet-jsx';
export { default as jestPreset } from './jest-preset.mjs';

var INNETJS_TS_TRANSFORM_REG = /\.(ts|jsx|tsx)$/;
var INNETJS_SKIP_TRANSFORM_REG = /\.(js|mjs)$/;
var InnetJestTransformer = /** @class */ (function (_super) {
    __extends(InnetJestTransformer, _super);
    function InnetJestTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InnetJestTransformer.prototype.process = function (fileContent, file, jestConfig) {
        if (INNETJS_SKIP_TRANSFORM_REG.test(file)) {
            return;
        }
        if (INNETJS_TS_TRANSFORM_REG.test(file)) {
            var jsx = _super.prototype.process.call(this, fileContent, file, jestConfig);
            return transform(jsx, { jsxFile: file });
        }
        return {
            code: "module.exports = ".concat(JSON.stringify(fileContent), ";"),
        };
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

export { INNETJS_SKIP_TRANSFORM_REG, INNETJS_TS_TRANSFORM_REG, InnetJestTransformer, createTransformer, index as default };
