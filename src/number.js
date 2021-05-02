function number () {
  var div = document.createElement('div')
  div.setAttribute('id', 'number')
  div.innerHTML = 1000// 3000/1000 界面不进行修改
  document.body.appendChild(div)
}

export default number