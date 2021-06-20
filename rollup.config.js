import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const input = {
  'index': 'src/index.ts',
  'jest-preset': 'src/jest-preset.ts'
}

export default [{
  input,
  external: ['tslib'],
  output: {
    dir: 'lib',
    entryFileNames: '[name]' + pkg.main.replace('index', ''),
    format: 'cjs'
  },
  plugins: [
    typescript(),
  ]
}, {
  input,
  output: {
    dir: 'lib',
    entryFileNames: '[name]' + pkg.module.replace('index', ''),
    format: 'es'
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          target: 'es6',
        }
      }
    }),
  ]
}]
