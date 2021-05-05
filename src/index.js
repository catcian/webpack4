import _ from 'lodash'
import $ from 'jquery'
import { ui } from './ui'

ui()
const dom = $('<div>')
dom.html(_.join(['a','b','c'], ' * '))
$('body').append(dom)