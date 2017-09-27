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

// New function which will take one argument, a "card src" and logged it
  handledCardClicked = (cardSrc) => {
    console.log(cardSrc);
  }

// Create a new instance of the Card component with the following props:
//  src: url of the photo
//  onCardClick: a callback function which card can invoke when it's clicked
  renderCard = (card) => {
    return <Card src={card.src} key={card.id} onCardClick={this.handledCardClicked} />
  }

  render() {
    return (
      <div className="game">
        <h1>Let{`'`}s <span>play</span> Memory!</h1>
        <h2>Try to find surfboards that matches</h2>
        <div className="card-wrapper">
          {this.state.cards.map(this.renderCard)}
        </div>
      </div>
    )
  }
}

export default Game
