import avatar from './1.jpg'

console.log(avatar)

var img = new Image()
img.src = avatar
img.width = 100
img.height = 100
var root = document.getElementById('root')
root.appendChild(img)
