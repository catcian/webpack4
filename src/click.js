export default function handleClick () {
  const element = document.createElement('div')
  element.innerHTML = '异步加载'
  document.body.appendChild(element)
}