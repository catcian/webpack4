import avatar from './1.jpg'

function CreateAvatarA () {
  var img = new Image()
  img.src = avatar
  img.classList.add('avatar')
  var root = document.getElementById('root')
  root.appendChild(img)
}

export default CreateAvatarA