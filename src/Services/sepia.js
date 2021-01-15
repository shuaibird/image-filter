/**
 * Sepia image filter
 *
 * @param   {Uint8ClampedArray}  input
 *
 * @return  {Uint8ClampedArray}
 */
export default (input) => {
  const output = new Uint8ClampedArray(input)

  for (let i = 0; i < input.length; i += 4) {
    const r = input[i]
    const g = input[i + 1]
    const b = input[i + 2]

    output[i] = Math.round(.393 * r + .769 * g + .189 * b)
    output[i + 1] = Math.round(.349 * r + .686 * g + .168 * b)
    output[i + 2] = Math.round(.272 * r + .534 * g + .131 * b)
  }
  return output
}
