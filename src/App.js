// import React from 'react';
import React, { Component } from 'react';
import Counter from './counter/Counter';
//                React.Component
class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { counterValue: 0 }
  //   // this is storage. Old way to constructor
  // }

  // state = { counterValue: 0 }

  // inc = () => {
  //   this.setState({ counterValue: this.state.counterValue + 1 })
  // }

  // dec = () => {
  //   this.setState({ counterValue: this.state.counterValue - 1 })
  // }

  render() {
    return(
      <div>
        {/* <p>
          { this.state.counterValue }
        </p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button> */}
        <Counter counterName='red'/>
        <Counter counterName='blue'/>
        <Counter counterName='green'/>
        <Counter counterName='black'/>
        
      </div>
    )
  }
}
// ReactCreateComponent(h1)ReactCreateComponent(p)
// ReactCreateComponent(div)
export default App;
