'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var acorn = require('acorn');
var tsJestTransformer = require('ts-jest/dist/ts-jest-transformer');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var acorn__default = /*#__PURE__*/_interopDefaultLegacy(acorn);

var JSXParser = acorn__default['default'].Parser.extend(require('acorn-jsx')());
var transform = require('rollup-plugin-innet-jsx')().transform.bind({
    parse: function (code) {
        return JSXParser.parse(code, { ecmaVersion: 'latest' });
    }
});
var InnetJestTransformer = /** @class */ (function (_super) {
    tslib.__extends(InnetJestTransformer, _super);
    function InnetJestTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InnetJestTransformer.prototype.process = function (fileContent, filePath, jestConfig) {
        return transform(_super.prototype.process.call(this, fileContent, filePath, jestConfig), filePath);
    };
    return InnetJestTransformer;
}(tsJestTransformer.TsJestTransformer));
function createTransformer() {
    return new InnetJestTransformer();
}

exports.InnetJestTransformer = InnetJestTransformer;
exports.JSXParser = JSXParser;
exports.createTransformer = createTransformer;
