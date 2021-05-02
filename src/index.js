import './index.css'

var button = document.createElement('button')
button.innerHTML = '新增'

button.onclick = function () {
  var div = document.createElement('div')
  div.innerHTML = 'item'
  document.body.appendChild(div)
}

document.body.appendChild(button)