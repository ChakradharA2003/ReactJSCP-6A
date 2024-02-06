// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  generateNumber = () => {
    const num = Math.random() * 100
    const randomNumber = Math.ceil(num)
    this.setState({
      number: randomNumber,
    })
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="number-card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="randomNumber">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
