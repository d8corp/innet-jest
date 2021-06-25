import {TsJestTransformer} from 'ts-jest/dist/ts-jest-transformer'
import transform from 'innet-jsx'

export class InnetJestTransformer extends TsJestTransformer {
  process (fileContent, jsxFile, jestConfig) {
    const jsx = super.process(fileContent, jsxFile, jestConfig) as string
    return transform(jsx, {jsxFile})
  }
}

export function createTransformer () {
  return new InnetJestTransformer()
}
