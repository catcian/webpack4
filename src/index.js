// import './index.css'

// var button = document.createElement('button')
// button.innerHTML = '新增'

// button.onclick = function () {
//   var div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.appendChild(div)
// }

// document.body.appendChild(button)

import counter from './counter'
import number from './number'

counter()
number()

if (module.hot) {
  module.hot.accept('./number', () => {
    var dom = document.getElementById('number')
    document.body.removeChild(dom)
    number()
  })
}