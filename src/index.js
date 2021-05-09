import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {count: 0}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))