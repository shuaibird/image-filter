/**
 * Grayscale image filter
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
    
    const avg = (r + g + b) / 3
    
    for (let j = 0; j < 3; j++) {
      output[i + j] = avg
    }
  }
  return output
}
