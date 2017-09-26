import React from "react"
import Card from "./card"
import Counter from "./counter"

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

    let i = duplicatedPhotos.length - 1;
      for (; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        const temp = duplicatedPhotos[i];
        duplicatedPhotos[i] = duplicatedPhotos[random];
        duplicatedPhotos[random] = temp;
      }

    return duplicatedPhotos.map((photo) => {
      return {
        src: photo,
        isFlipped: false
      }
    })
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
