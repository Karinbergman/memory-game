import React from "react";
import Card from "./card";
import SuccessMessage from "./successMessage"
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

  handleResetButtonClicked = () => {
    this.setState ({
      cards: this.setupGame()
    })
  }

// New function which will take one argument, a "card id" and logged it
  handledCardClicked = (cardId) => {
    const newCardsState = this.state.cards.map((card) => {
      if (card.id === cardId && !card.isFlipped) {
        card.isFlipped = true;
      }
      return card;
    })
    this.setState ({
      cards: newCardsState
    }, this.checkIfCardsMatched())
  }

checkIfCardsMatched = () => {
  const flippedCards = this.state.cards.filter((image) => {
    return image.isFlipped;
  })

  if (flippedCards.length === 2) {
    if (flippedCards[0].src === flippedCards[1].src) {
      flippedCards[0].isMatched = true;
      flippedCards[1].isMatched = true;
    }
    setTimeout(this.closeAllCards, 600);
  }
}

closeAllCards = () => {
  const newCardsArray = this.state.cards.map((image) => {
    image.isFlipped = false;
    return image;
  })
  this.setState ({
    cards: newCardsArray
  })
  this.notMatchedCards();
}

notMatchedCards = () => {
  const notMatchedCards = this.state.cards.filter((image) => {
    return !image.isMatched;
  })
  return notMatchedCards.length <= 0;
}

// Create a new instance of the Card component with the following props:
//  src: url of the photo
//  onCardClick: a callback function which card can invoke when it's clicked
//  key: a unique identifier for react to use when rendering from an array
//  id: a unique identifier we can use to refer to this card later
//  isFlipped: a boolean which will be toggled when the card is flipped
//  isMatched: a boolean which will be toggled when the card is matched
  renderCard = (card) => {
    return <Card
      src={card.src}
      key={card.id}
      id={card.id}
      onCardClick={this.handledCardClicked}
      isFlipped={card.isFlipped}
      isMatched={card.isMatched} />
  }

  render() {
    if (this.notMatchedCards()) {
      return (
        <div className="success-message">
          <SuccessMessage
            onResetClick={this.handleResetButtonClicked}
          />
        </div>
      )
    } else {
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
}

export default Game
