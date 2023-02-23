// Write your code here
import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  onMango = () => {
    this.setState(oldState => ({
      key1: oldState.key1 + 1,
    }))
  }

  onBanana = () => {
    this.setState(oldState => ({
      key2: oldState.key2 + 1,
    }))
  }

  render() {
    const {key1, key2} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="value">{key1}</span> mangoes{' '}
            <span className="value">{key2}</span> bananas
          </h1>
          <div className="card">
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <div>
                <button type="button" className="btn" onClick={this.onMango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div>
                <button type="button" className="btn" onClick={this.onBanana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
