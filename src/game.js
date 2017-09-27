import React from "react";
import Card from "./card";
//import Counter from "./counter"
import shuffle from 'shuffle-array';

const photos = [
  '/images/surfboard1.jpg',
  '/images/surfboard2.jpg',
  '/images/surfboard3.jpg',
  '/images/surfboard4.jpg'
];

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: this.setupGame()
    }
  }

  setupGame = () => {
    const duplicatedPhotos = photos.concat(photos);
    const shuffledPhotos = shuffle(duplicatedPhotos);

    return shuffledPhotos.map((photo, index) => {
      return {
        id: index,
        src: photo,
        isFlipped: false,
        isMatched: false
      }
    })
  }

  renderCard = (card) => {
    return <Card src={card.src} key={card.id} />
  }

  render() {
    return (
      <div className="game">
        <h1>Let{`'`}s play Memory Surfboard game!</h1>
        <div className="card-wrapper">
          {this.state.cards.map(this.renderCard)}
        </div>
      </div>
    )
  }
}

export default Game
