import React from "react"
import "./card.css"

class Card extends React.Component {

  handleClick = () => {
    console.log('I am clicked ' + this.props.src);
  }

  render() {
    return (
      <div className="card" onClick={this.handleClick}>
        <img src={this.props.src} alt="" />
      </div>
    )
  }

}

export default Card
