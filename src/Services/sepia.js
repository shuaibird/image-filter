/**
 * Sepia image filter
 *
 * @param   {Uint8ClampedArray}  input
 *
 * @return  {Uint8ClampedArray}
 */
export default (input) => {
  const output = []
  for (let i = 0; i < input.length; i += 4) {
    const r = input[i]
    const g = input[i + 1]
    const b = input[i + 2]
    const a = input[i + 3]

    const sr = Math.round(.393 * r + .769 * g + .189 * b)
    const sg = Math.round(.349 * r + .686 * g + .168 * b)
    const sb = Math.round(.272 * r + .534 * g + .131 * b)
    
    output.push(sr)
    output.push(sg)
    output.push(sb)
    output.push(a)
  }
  return Uint8ClampedArray.from(output)
}
