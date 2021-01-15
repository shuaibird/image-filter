import { reflection } from '..'

describe('reflect', () => {
  const input = Uint8ClampedArray.from('111122223333222211114444')
  const output = reflection(input, 3)

  it('should not change the input', () => {
    expect(input).toEqual(Uint8ClampedArray.from('111122223333222211114444'))
  })

  it('should revert a line (width % 2 != 0) in the output', () => {
    expect(output).toEqual(Uint8ClampedArray.from('333322221111444411112222'))
  })

  it('should revert a line (width % 2 == 0) in the output', () => {
    expect(reflection(Uint8ClampedArray.from('11112222'), 2)).toEqual(Uint8ClampedArray.from('22221111'))
  })
})