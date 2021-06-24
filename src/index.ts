import {TsJestTransformer} from 'ts-jest/dist/ts-jest-transformer'
import transform from 'innet-jsx'

export class InnetJestTransformer extends TsJestTransformer {
  process (fileContent, filePath, jestConfig) {
    const js = super.process(fileContent, filePath, jestConfig)
    return transform(typeof js === 'string' ? js : js.code, filePath) || js
  }
}

export function createTransformer () {
  return new InnetJestTransformer()
}
