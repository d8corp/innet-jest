'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var tsJest = require('ts-jest');
var transform = require('innet-jsx');
var jestPreset = require('./jest-preset.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var transform__default = /*#__PURE__*/_interopDefaultLegacy(transform);

var INNETJS_TS_TRANSFORM_REG = /\.(ts|jsx|tsx)$/;
var INNETJS_SKIP_TRANSFORM_REG = /\.(js|mjs)$/;
var InnetJestTransformer = /** @class */ (function (_super) {
    tslib.__extends(InnetJestTransformer, _super);
    function InnetJestTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InnetJestTransformer.prototype.process = function (fileContent, file, jestConfig) {
        if (INNETJS_SKIP_TRANSFORM_REG.test(file)) {
            return;
        }
        if (INNETJS_TS_TRANSFORM_REG.test(file)) {
            var jsx = _super.prototype.process.call(this, fileContent, file, jestConfig);
            return transform__default["default"](jsx, { jsxFile: file });
        }
        return {
            code: "module.exports = ".concat(JSON.stringify(fileContent), ";"),
        };
    };
    return InnetJestTransformer;
}(tsJest.TsJestTransformer));
function createTransformer() {
    return new InnetJestTransformer();
}
var index = {
    InnetJestTransformer: InnetJestTransformer,
    createTransformer: createTransformer,
};

exports.jestPreset = jestPreset;
exports.INNETJS_SKIP_TRANSFORM_REG = INNETJS_SKIP_TRANSFORM_REG;
exports.INNETJS_TS_TRANSFORM_REG = INNETJS_TS_TRANSFORM_REG;
exports.InnetJestTransformer = InnetJestTransformer;
exports.createTransformer = createTransformer;
exports["default"] = index;
