import React from "react";

const kitty = ["kitty1", "kitty2", "kitty3", "kitty4", "kitty5", "kitty6", "kitty7", "kitty8", "kitty9", "kitty10", "kitty11", "kitty12"];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function KittyButton(props) {
  const imgUrl = "images/" + props.name + ".jpg";
  return <button><img src={imgUrl} alt={props.name} onClick={props.onClick} /></button>
}

class Board extends React.Component {

  renderKittyButton(muppet) {
    const name = this.props.kitty[kitty];
    return <KittyButton name={name} onClick={() => this.props.onClick(name)} />
  }

  render() {
    return (
      <div>
        <div>
          {this.renderKittyButton(0)}
          {this.renderKittyButton(1)}
          {this.renderKittyButton(2)}
          {this.renderKittyButton(3)}
        </div>
        <div>
          {this.renderKittyButton(4)}
          {this.renderKittyButton(5)}
          {this.renderKittyButton(6)}
          {this.renderKittyButton(7)}
        </div>
        <div>
          {this.renderKittyButton(8)}
          {this.renderKittyButton(9)}
          {this.renderKittyButton(10)}
          {this.renderKittyButton(11)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffledKitty: shuffle(kitty),
      score: 0,
      topscore: 0,
      clickedKitty: [],
      message: "Clicky Game"
    }
  }

  handleClick(muppet) {
    let { score, topscore, clickedKitty } = this.state;
    if (clickedKitty.includes(kitty)) {
      score = 0;
      this.setState({
        score: 0,
        clickedKitty: [],
        message: "You guessed incorrectly! Start over."
      });
    } else {
      score++;
      topscore = score > topscore ? score : topscore;
      let message = "You guessed correctly!";
      clickedKitty = clickedKitty.concat([kitty]);
      if (score === 12) {
        score = 0;
        clickedKitty = [];
        message = "Awesome! You got them all!";
      }
      this.setState({ 
        shuffledKitty: shuffle(kitty),
        score: score,
        topscore: topscore,
        clickedKitty: clickedKitty,
        message: message
      });
    }
  }

  render() {
    const { message, score, topscore, shuffledKitty } = this.state;
    return (
      <div>
        <h2>Click an image to earn a point, but don't click any more than once.</h2>
        <h1>{message}</h1>
        <h1>Score: {score} &nbsp;&nbsp; Top Score: {topscore}</h1>
        <Board kitty={shuffledKitty} onClick={(kitty) => this.handleClick(kitty)} />
      </div>
    );
  }
}