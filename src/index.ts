import { TsJestTransformer } from 'ts-jest'
import transform from 'innet-jsx'

export class InnetJestTransformer extends TsJestTransformer {
  process (fileContent, jsxFile, jestConfig) {
    const jsx: any = super.process(fileContent, jsxFile, jestConfig)
    return transform(jsx, {jsxFile})
  }
}

export function createTransformer () {
  return new InnetJestTransformer()
}

export default {
  InnetJestTransformer,
  createTransformer,
}
