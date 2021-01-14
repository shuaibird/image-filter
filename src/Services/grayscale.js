export default (input) => {
  const output = []
  for (let i = 0; i < input.length; i += 4) {
    const r = input[i]
    const g = input[i + 1]
    const b = input[i + 2]
    const a = input[i + 3]
    const avg = (r + g + b) / 3
    
    for (let j = 0; j < 3; j++) {
      output.push(avg)
    }
    output.push(a)
  }
  return Uint8ClampedArray.from(output)
}