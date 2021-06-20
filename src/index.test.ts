import jestPreset from './jest-preset'

describe('innet-jest', () => {
  test('jest-preset', () => {
    expect(jestPreset).toEqual({
      transform: {
        '\\.(jsx|tsx)$': 'innet-jest'
      }
    })
  })
})
