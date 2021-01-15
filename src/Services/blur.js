/**
 * Blur image filter
 *
 * @param   {Uint8ClampedArray}  input
 * @param   {number}  width / in pixels
 *
 * @return  {Uint8ClampedArray}
 */
export default (input, width) => {
  const height = input.length / 4 / width
  const output = new Uint8ClampedArray(input)

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      const left = Math.max(i - 1, 0)
      const right = Math.min(i + 1, width - 1)
      const up = Math.max(j - 1, 0)
      const bottom = Math.min(j + 1, height - 1)

      let r = 0
      let g = 0
      let b = 0

      for (let k = left; k <= right; k++) {
        for (let l = up; l <= bottom; l++) {
          const offset = l * width * 4 + k * 4
          r += input[offset]
          g += input[offset + 1]
          b += input[offset + 2]
        }
      }
      const offset = j * width * 4 + i * 4
      const divider = (right - left + 1) * (bottom - up + 1)
      output[offset] = Math.round(r / divider)
      output[offset + 1] = Math.round(g / divider)
      output[offset + 2] = Math.round(b / divider)
    }
  }
  return output
}
