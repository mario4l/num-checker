import React from "react";
import "./Button.css";

class Button extends React.Component {
  state = {
    targetScore: Math.floor(Math.random() * 101) + 19,
    yourScore: Math.floor(Math.random() * 11) + 1,
    matchScore: 0
  };

  render() {
    return (
      <div>
        <div>Target Score: {this.state.targetScore}</div>
        <div
          className="rectangle"
          onClick={() =>
            this.setState({ matchScore: Math.floor(Math.random() * 11) + 1 })
          }
        >
          {this.state.matchScore === this.state.yourScore
            ? `Winner! ${this.state.matchScore}`
            : this.state.matchScore}
        </div>
        <div>Your score: {this.state.yourScore} </div>
      </div>
    );
  }
}

export default Button;
