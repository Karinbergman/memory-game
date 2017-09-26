import React from 'react';

// Adds the functionality from another component/class
class Counter extends React.Component {

  state = {
    count: 0
  }

  handleButtonClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleMinusButtonClick = () => {
    this.setState({ count: this.state.count - 1});
  }
    render() {
        return (
          <div>
            Count: {this.state.count}
            <button onClick={this.handleButtonClick}>Add!</button>
            <button onClick={this.handleMinusButtonClick}>Remove!</button>
          </div>
        )
    }

}

export default Counter;
