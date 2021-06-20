import acorn from 'acorn'
import {TsJestTransformer} from 'ts-jest/dist/ts-jest-transformer'

export const JSXParser = acorn.Parser.extend(require('acorn-jsx')())
const transform = require('rollup-plugin-innet-jsx')().transform.bind({
  parse (code) {
    return JSXParser.parse(code, {ecmaVersion: 'latest'})
  }
})

export class InnetJestTransformer extends TsJestTransformer {
  process (fileContent, filePath, jestConfig) {
    const js = super.process(fileContent, filePath, jestConfig)
    return transform(js, filePath) || js
  }
}

export function createTransformer () {
  return new InnetJestTransformer()
}
