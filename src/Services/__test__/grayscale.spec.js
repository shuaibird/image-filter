import { grayscale } from '..'

describe('grayscale', () => {
  const input = Uint8ClampedArray.from('13248974')
  const output = grayscale(input)

  it('should not change the input', () => {
    expect(input).toEqual(Uint8ClampedArray.from('13248974'))
  })

  it('should average the rgb value per pixel in the output', () => {
    expect(output).toEqual(Uint8ClampedArray.from('22248884'))
  })
})