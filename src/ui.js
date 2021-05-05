
export function ui () {
  $('body').css('background', 'green')
  const div = $('div').html(_join(['_join','cat'], '='))
  $('body').append(div)
}