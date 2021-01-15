<script>
  import {
    grayscale,
    sepia,
    reflection,
    blur,
    sobel,
  } from '@Services'

  let selected = '0'
  let canvas
  let width
  let height
  let imageData

  function handleFileChange({ target: { files: [file] } }) {
    if (!file) {
      return
    }
    selected = '0'
    const url = URL.createObjectURL(file)
    const image = new Image()
    image.onload = ({ target }) => {
      const { width: w, height: h } = target

      canvas.width = w
      canvas.height = h

      width = w
      height = h

      const context = canvas.getContext('2d')
      context.drawImage(target, 0, 0)
      const { data } = context.getImageData(0, 0, w, h)
      imageData = data
      URL.revokeObjectURL(url)
    }
    image.src=url
  }

  function putImageData(data) {
    const context = canvas.getContext('2d')
    const dataObj = context.createImageData(width, height)
    dataObj.data.set(data)
    context.putImageData(dataObj, 0, 0)
  }

  function handleSelectChange({ target: { value } }) {
    value= +value
    selected = value
    switch (value) {
      case 1:
        putImageData(grayscale(imageData))
        break
      case 2:
        putImageData(sepia(imageData))
        break
      case 3:
        putImageData(reflection(imageData, width))
        break
      case 4:
        putImageData(blur(imageData, width))
        break
      case 5:
        putImageData(sobel(grayscale(imageData), width))
        break
      case 0:
      default:
        putImageData(imageData)
    }
  }
</script>

<style>
  h1 {
    margin-bottom: 32px;
    text-align: center;
  }
  .controller {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .file-uploader,
  .filter-selector {
    flex: 1;
    text-align: center;
  }
  .canvas {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<h1>Image Processing Demo</h1>
<div class="controller">
  <div class="file-uploader">
    <div class=file-input>
      <label class="file">
        <input
          type="file"
          id="file"
          aria-label="File"
          accept="image/*"
          on:change={handleFileChange}
        >
        <span class="file-custom"></span>
      </label>
    </div>
  </div>
  <div class="filter-selector">
    <div class="select">
      <!-- svelte-ignore a11y-no-onchange -->
      <select
        aria-label="Select image filter"
        on:change={handleSelectChange}
        value={selected}
        disabled={!imageData}
      >
        <option value="0">Choose a filter</option>
        <option value="1">Grayscale</option>
        <option value="2">Sepia</option>
        <option value="3">Reflection</option>
        <option value="4">Blur</option>
        <option value="5">Sobel</option>
      </select>
    </div>
  </div>
</div>

<div class="canvas">
  <canvas bind:this={canvas} />
</div>
