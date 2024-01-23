console.log('index.js')

const textElm = document.getElementById('add-text')
console.log(textElm)

textElm.addEventListener('change', () => {
  const text = textElm.value
  console.log(text)
})


textElm.addEventListener('input', (e) => {
  console.log(e.target.value)
})
