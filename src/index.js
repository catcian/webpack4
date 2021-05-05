console.log('hello Progressive Web Application')


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('service-worker registed')
    })
    .catch(error => {
      console.log('service-worker registe error')
    })
  })
}