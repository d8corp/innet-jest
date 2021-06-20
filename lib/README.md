# innet-jest
[![NPM](https://img.shields.io/npm/v/innet-jest.svg)](https://github.com/d8corp/innet-jest/blob/master/CHANGELOG.md)
[![downloads](https://img.shields.io/npm/dm/innet-jest.svg)](https://www.npmjs.com/package/innet-jest)
[![license](https://img.shields.io/npm/l/innet-jest)](https://github.com/d8corp/innet-jest/blob/master/LICENSE)

This preset helps work with [Jest](https://www.npmjs.com/package/jest) and [innet](https://www.npmjs.com/package/innet).

The preset includes `TypeScript` and `JSX`.

[![stars](https://img.shields.io/github/stars/d8corp/innet-jest?style=social)](https://github.com/d8corp/innet-jest/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/innet-jest?style=social)](https://github.com/d8corp/innet-jest/watchers)

### Installation
Install the package through npm
```bash
npm i -D innet-jest
```
or yarn
```bash
yarn add -D innet-jest
```

and specify preset in your [Jest configuration](https://jestjs.io/docs/configuration):
```json
{
  "preset": "innet-jest"
}
```
### Usage
Write the test with `JSX` syntax:
```typescript jsx
// test.spec.tsx or jsx

describe('innet', () => {
  test('JSX works', () => {
    expect(<div />).toEqual({type: 'div'})
  })
})
```

### Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet-jest/issues).  
[![issues](https://img.shields.io/github/issues-raw/d8corp/innet-jest)](https://github.com/d8corp/innet-jest/issues)
