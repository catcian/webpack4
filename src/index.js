
// function getComponent () {
//   return import(/* webpackChunkName: "loadsh"*/'lodash').then(({default: _}) => {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['a','c','b'])
//     return element
//   })
// }

// getComponent().then((element) => {
//   document.body.appendChild(elements)
// })


// import _ from 'lodash'
import { info } from './test'
console.log(JSON.stringify(info))