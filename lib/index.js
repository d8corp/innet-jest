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
    InnetJestTransformer.prototype.process = function (fileContent, filePath, jestConfig) {
        var js = _super.prototype.process.call(this, fileContent, filePath, jestConfig);
        return transform__default['default'](typeof js === 'string' ? js : js.code, filePath) || js;
    };
    return InnetJestTransformer;
}(tsJestTransformer.TsJestTransformer));
function createTransformer() {
    return new InnetJestTransformer();
}

exports.InnetJestTransformer = InnetJestTransformer;
exports.createTransformer = createTransformer;
