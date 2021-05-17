// import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Child from './child'

class Home extends React.Component {
  render () {
    return (
      <div>
        <div>This is Home</div>
        <Child></Child>
      </div>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'))
