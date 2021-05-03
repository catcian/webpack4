
function getComponent () {
  return import('lodash').then(({default: _}) => {
    var element = document.createElement('div')
    element.innerHTML = _.join(['a','c','b'])
    return element
  })
}

getComponent().then((element) => {
  document.body.appendChild(elements)
})


// import _ from 'lodash'

// console.log(_.join(['aaa','bbb']))