console.log('index.js')

const textElm = document.getElementById('add-text')
console.log(textElm)

/*
textElm.addEventListener('change', (e) => {
  const text = e.target.value
  console.log(text)
})


textElm.addEventListener('input', (e) => {
  console.log(e.target.value)
})
*/

const addButton = document.getElementById('add-button')
addButton.addEventListener('click', () => {
  const text = textElm.value

  textElm.value = ''
  console.log(text)
})




