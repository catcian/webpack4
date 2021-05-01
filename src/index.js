import avatar from './1.jpg'
import './index.scss'
console.log(avatar)

var img = new Image()
img.src = avatar
img.classList.add('avatar')
var root = document.getElementById('root')
root.appendChild(img)
