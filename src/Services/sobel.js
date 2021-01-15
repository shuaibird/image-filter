const xKernal = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]]
const yKernal = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]]

/**
 * Sobel image filter
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
      const left = i - 1
      const right = i + 1
      const up = j - 1
      const bottom = j + 1

      let xr = 0
      let yr = 0
      let xg = 0
      let yg = 0
      let xb = 0
      let yb = 0

      for (let k = left; k <= right; k++) {
        for (let l = up; l <= bottom; l++) {
          const offset = l * width * 4 + k * 4

          const xVariant = xKernal[k - left][l - up]
          const yVariant = yKernal[k - left][l - up]

          xr += (input[offset] || 0) * xVariant
          yr += (input[offset] || 0) * yVariant
          xg += (input[offset + 1] || 0) * xVariant
          yg += (input[offset + 1] || 0) * yVariant
          xb += (input[offset + 2] || 0) * xVariant
          yb += (input[offset + 2] || 0) * yVariant
        }
      }
      const offset = j * width * 4 + i * 4
      output[offset] = Math.round(Math.sqrt(Math.pow(xr, 2) + Math.pow(yr, 2)))
      output[offset + 1] = Math.round(Math.sqrt(Math.pow(xg, 2) + Math.pow(yg, 2)))
      output[offset + 2] = Math.round(Math.sqrt(Math.pow(xb, 2) + Math.pow(yb, 2)))
    }
  }
  return output
}
