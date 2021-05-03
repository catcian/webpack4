
function getComponent () {
  return import(/* webpackChunkName: "loadsh"*/'lodash').then(({default: _}) => {
    var element = document.createElement('div')
    element.innerHTML = _.join(['a','c','b'])
    return element
  })
}


document.addEventListener('click', () => {
  getComponent().then((element) => {
    document.body.appendChild(element)
  })
})

