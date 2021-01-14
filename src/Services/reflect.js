/**
 * Reflect image filter
 *
 * @param   {Uint8ClampedArray}  input
 * @param   {number}  width
 *
 * @return  {Uint8ClampedArray}
 */
export default (input, width) => {
  const height = input.length / 4 / width
  const output = new Uint8ClampedArray(input)
  
  // iterate the pixels horizontally
  for (let i = 0; i < Math.floor(width / 2); i++) {
    const reflected = width - 1 - i
    // iterate the pixels vertically
    for (let j = 0; j < height; j++) {
      const offset = j * width * 4
      // iterate r,g,b,a
      for (let k = 0; k < 4; k++) {
        const left = offset + i * 4 + k
        const right = offset + reflected * 4 + k
        output[left] = input[right]
        output[right] = input[left]
      }
    }
  }
  return output
}
