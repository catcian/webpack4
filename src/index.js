// 普通
// document.addEventListener('click', () => {
//   const element = document.createElement('div')
//   element.innerHTML = '普通写法'
//   document.body.appendChild(element)
// })

document.addEventListener('click', () => {
  import('./click').then(({default: func}) => {
    func()
  })
})

