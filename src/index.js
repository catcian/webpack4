import '@babel/polyfill'

const arr = [
  new Promise(resolve => {}),
  new Promise(resolve => {})
]

arr.map(promise => {
  console.log(promise)
})