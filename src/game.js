import React from "react";
import Card from "./card";
//import Counter from "./counter"
import shuffle from 'shuffle-array';
import uuidv4 from 'uuid/v4';

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

    return shuffledPhotos.map((photo) => {
      return {
        id: uuidv4(),
        src: photo,
        isFlipped: false,
        isMatched: false
      }
    })
  }

// New function which will take one argument, a "card id" and logged it
  handledCardClicked = (cardId) => {
    console.log(cardId);
    const newCardsState = this.state.cards.map((card) => {
      if (card.id === cardId) {
        card.isFlipped = !card.isFlipped;
      }
      return card;
    })
    this.setState ({
      cards: newCardsState
    })
  }

// Create a new instance of the Card component with the following props:
//  src: url of the photo
//  onCardClick: a callback function which card can invoke when it's clicked
//  key: a unique identifier for react to use when rendering from an array
//  id: a unique identifier we can use to refer to this card later
//  isFlipped: a boolean which will be toggled when the card is flipped
  renderCard = (card) => {
    return <Card
      src={card.src}
      key={card.id}
      id={card.id}
      onCardClick={this.handledCardClicked}
      isFlipped={card.isFlipped} />
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
