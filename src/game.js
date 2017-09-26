import React from "react"
import Card from "./card"

const Game = () => (
  <div className="game">
    <h1>Let{`'`}s <span>play</span> Memory <span>Beach</span> game<span>!</span></h1>
    <div className="card-wrapper">
      <Card src="/images/surfboard1.jpg" />
      <Card src="/images/surfboard2.jpg" />
      <Card src="/images/surfboard3.jpg" />
      <Card src="/images/surfboard4.jpg" />
    </div>
  </div>
)

export default Game
