import { sobel } from '..'

describe('sobel', () => {
  const input = Uint8ClampedArray.from('111122223333333322221111222233331111')
  const output = sobel(input, 3)

  it('should not change the input', () => {
    expect(input).toEqual(Uint8ClampedArray.from('111122223333333322221111222233331111'))
  })

  it('should apply the sobel algorhithm to the input', () => {
    expect(output).toEqual(Uint8ClampedArray.from([11, 11, 11, 1, 8, 8, 8, 2, 6, 6, 6, 3, 4, 4, 4, 3, 3, 3, 3, 2, 6, 6, 6, 1, 10, 10, 10, 2, 9, 9, 9, 3, 8, 8, 8, 1]))
  })
})