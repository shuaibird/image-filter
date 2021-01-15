import { blur } from '..'

describe('blur', () => {
  const input = Uint8ClampedArray.from('111122223333333322221111222233331111')
  const output = blur(input, 3)

  it('should not change the input', () => {
    expect(input).toEqual(Uint8ClampedArray.from('111122223333333322221111222233331111'))
  })

  it('should apply the blur algorhithm to the input', () => {
    expect(output).toEqual(Uint8ClampedArray.from('222122222223222322222221333222232221'))
  })
})