import React from "react" // We need React to use React
import "./card.css" // Just normal css, react injects it into the <head> component

// Define a "Card" component.
// That component is inheriting functions from React.Component
class Card extends React.Component {

// The function we call from onClick. We give it a name 'handelClick'
// and it takes no argument. Because it's in this class, it has access to 'this'.
// So it can use this.props.src
  handleClick = () => {
    console.log('I am clicked ' + this.props.src);
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
      <div className="card" onClick={this.handleClick}>
        <img src={this.props.src} alt="" />
      </div>
    )
  }

}

// To be able to use 'import Card from "./card"', we need to export it'
export default Card
