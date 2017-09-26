import React from "react"
import Card from "./card"
import Counter from "./counter"

class Game extends React.Component {

  state = {
    cards: [
      {
        src: '/images/surfboard1.jpg'
      },
      {
        src: '/images/surfboard2.jpg'
      },
      {
        src: '/images/surfboard3.jpg'
      },
      {
        src: '/images/surfboard4.jpg'
      }
    ]
  }

  render() {
    return (
      <div className="game">
        <h1>Let{`'`}s <span>play</span> Memory <span>Beach</span> game<span>!</span></h1>
        <div className="card-wrapper">
          <Card src={this.state.cards[0].src} />
          <Card src={this.state.cards[1].src} />
          <Card src={this.state.cards[2].src} />
          <Card src={this.state.cards[3].src} />
        </div>
      </div>
    )
  }
}

export default Game
