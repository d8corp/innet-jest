import { TsJestTransformer } from 'ts-jest'
import transform from 'innet-jsx'

export { default as jestPreset } from './jest-preset'

export const INNETJS_TS_TRANSFORM_REG = /\.(ts|jsx|tsx)$/
export const INNETJS_SKIP_TRANSFORM_REG = /\.(js|mjs)$/

export class InnetJestTransformer extends TsJestTransformer {
  process (fileContent, file, jestConfig) {
    if (INNETJS_SKIP_TRANSFORM_REG.test(file)) {
      return
    }

    if (INNETJS_TS_TRANSFORM_REG.test(file)) {
      const jsx: any = super.process(fileContent, file, jestConfig)
      return transform(jsx, { jsxFile: file })
    }

    return {
      code: `module.exports = ${JSON.stringify(fileContent)};`,
    };
  }
}

export function createTransformer () {
  return new InnetJestTransformer()
}

export default {
  InnetJestTransformer,
  createTransformer,
}
