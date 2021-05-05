import $ from 'jquery'

const div = $('div').html('div lalala')
$('body').append(div)
console.log(this === window)