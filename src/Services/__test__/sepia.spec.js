import { sepia } from '..'

describe('sepia', () => {
  const input = Uint8ClampedArray.from('13248974')
  const output = sepia(input)

  it('should not change the input', () => {
    expect(input).toEqual(Uint8ClampedArray.from('13248974'))
  })

  it('should average the rgb value per pixel in the output', () => {
    expect(output).toEqual(Uint8ClampedArray.from([3, 3, 2, 4, 11, 10, 8, 4]))
  })
})