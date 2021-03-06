import React from "react"; // We need React to use React
import "./card.css"; // Just normal css, react injects it into the <head> component

// Define a "Card" component.
// That component is inheriting functions from React.Component
class Card extends React.Component {

// The function we call from onClick. We give it a name 'handelClick'
// and it takes no argument. Because it's in this class, it has access to 'this'.
// So it can use this.props.src
//
// This will call the 'onCardClick' function which was passed into the Card
// as a prop from the Game component
  handleClick = () => {
    this.props.onCardClick(this.props.id);
  }

// Function to return a different class name when the props 'isFlipped'
// is true or false. It needs to return the correct class!
  setClassName = () => {
    if (this.props.isMatched) {
      return "card matched"
    } else if (this.props.isFlipped) {
      return "card flipped"
    } else {
      return "card not-flipped"
    }
  }

// render() is a required function for our component
// React will invoke this function when it mounts the component
  render() {
    // The render needs to return JSX.
    // JSX is bascially HTML, but you can use components as well,
    // for example, when we render this card, we do so in the
    // Game component by using <Card />
    // Props become and object so, className="foo", becomes { className : "foo"}
    // on this.props, and onClick becomes { onClic: () => {} }
    return (
      <div className={this.setClassName()} onClick={this.handleClick}>
        <img src={this.props.src} alt="" />
      </div>
    )
  }

}

// To be able to use 'import Card from "./card"', we need to export it'
export default Card
