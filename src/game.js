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

  renderCard = (card) => {
    return <Card src={card.src} />
  }

  render() {
    return (
      <div className="game">
        <h1>Let{`'`}s <span>play</span> Memory <span>Beach</span> game<span>!</span></h1>
        <div className="card-wrapper">
          {this.state.cards.map(this.renderCard)}
        </div>
      </div>
    )
  }
}

export default Game
