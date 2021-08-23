// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  generateButton = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateButton}
          >
            Generate
          </button>
          <h1 className="number">{count}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
