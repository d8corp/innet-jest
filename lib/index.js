'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var tsJestTransformer = require('ts-jest/dist/ts-jest-transformer');
var transform = require('innet-jsx');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var transform__default = /*#__PURE__*/_interopDefaultLegacy(transform);

var InnetJestTransformer = /** @class */ (function (_super) {
    tslib.__extends(InnetJestTransformer, _super);
    function InnetJestTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InnetJestTransformer.prototype.process = function (fileContent, jsxFile, jestConfig) {
        var jsx = _super.prototype.process.call(this, fileContent, jsxFile, jestConfig);
        return transform__default['default'](jsx, { jsxFile: jsxFile });
    };
    return InnetJestTransformer;
}(tsJestTransformer.TsJestTransformer));
function createTransformer() {
    return new InnetJestTransformer();
}

exports.InnetJestTransformer = InnetJestTransformer;
exports.createTransformer = createTransformer;
