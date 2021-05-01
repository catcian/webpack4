import avatar from './1.jpg'
import style from './index.scss'
import CreateAvatarA from './createAvatar'


CreateAvatarA()

var img = new Image()
img.src = avatar
img.classList.add(style.avatar)
var root = document.getElementById('root')
root.appendChild(img)
