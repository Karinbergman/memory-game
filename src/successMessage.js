import React from "react";

class SuccessMessage extends React.Component {

  handleResetButtonClick = () => {
    this.props.onResetClick();
  }

  render() {
    return (
      <div className="success-wrapper">
      <div className="blink_me">
        <h1>YOU MADE IT!</h1>
        <p>Nice work with the surfboards!</p>
        <p>It took you {this.props.count} clicks to finish it!</p>
      </div>
        <div className="reset-button">
          <button onClick={this.handleResetButtonClick}>Play again!</button>
        </div>
      </div>
    )
  }

}

export default SuccessMessage;
