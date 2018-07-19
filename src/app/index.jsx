import React from "react";
import ReactDOM from "react-dom";
//import If from 'components/If'
//import StoreItem from './StoreItem'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedColor: "#FFB150",
      correctSequence: ["#FFB150", "#FF5A5F", "#007A87", "#7B0051"],
      color: ["white", "white", "white", "white"],
      correctColor: ["white", "white", "white", "white"]
    };
  }

  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  checkColors = () => {
    let correctColor = [];
    for (var index = 0; index < this.state.correctSequence.length; index++) {
      if (this.state.correctSequence[index] == this.state.color[index]) {
        correctColor[index] = "black";
      } else {
        correctColor[index] = "white";
      }
    }
    console.log({ correctColor });
    let shuffledArr = this.shuffle(correctColor);
    console.log({ shuffledArr });
    this.setState({ correctColor: shuffledArr });
  };
  handleClick = choice => {
    this.setState({ selectedColor: choice });
  };

  fillColor = index => {
    let tempColor = this.state.color;
    tempColor[index] = this.state.selectedColor;
    this.setState({ color: tempColor });
  };
  render() {
    return (
      <div className="main">
        <h1>Master Mind</h1>
        <div className="parent">
          <section className="main-section">
            <svg height="38" width="38">
              <circle
                onClick={this.fillColor.bind(this, 0)}
                cx="19"
                cy="19"
                r="15"
                stroke="black"
                strokeWidth="1"
                fill={this.state.color[0]}
              />
            </svg>

            <svg height="38" width="38">
              <circle
                onClick={this.fillColor.bind(this, 1)}
                cx="19"
                cy="19"
                r="15"
                stroke="black"
                strokeWidth="1"
                fill={this.state.color[1]}
              />
            </svg>
            <svg height="38" width="38">
              <circle
                onClick={this.fillColor.bind(this, 2)}
                cx="19"
                cy="19"
                r="15"
                stroke="black"
                strokeWidth="1"
                fill={this.state.color[2]}
              />
            </svg>
            <svg height="38" width="38">
              <circle
                onClick={this.fillColor.bind(this, 3)}
                cx="19"
                cy="19"
                r="15"
                stroke="black"
                strokeWidth="1"
                fill={this.state.color[3]}
              />
            </svg>
            <span
              onClick={this.checkColors}
              className="material-icons expandIcon"
            >
              done
            </span>
            <div className="correct-colors">
              <div>
                <svg height="18" width="18">
                  <circle
                    cx="9"
                    cy="9"
                    r="7"
                    stroke="black"
                    strokeWidth="1"
                    fill={this.state.correctColor[0]}
                  />
                </svg>
                <svg height="18" width="18">
                  <circle
                    cx="9"
                    cy="9"
                    r="7"
                    stroke="black"
                    strokeWidth="1"
                    fill={this.state.correctColor[1]}
                  />
                </svg>{" "}
              </div>
              <div>
                <svg height="18" width="18">
                  <circle
                    cx="9"
                    cy="9"
                    r="7"
                    stroke="black"
                    strokeWidth="1"
                    fill={this.state.correctColor[2]}
                  />
                </svg>
                <svg height="18" width="18">
                  <circle
                    cx="9"
                    cy="9"
                    r="7"
                    stroke="black"
                    strokeWidth="1"
                    fill={this.state.correctColor[3]}
                  />
                </svg>{" "}
              </div>
            </div>
          </section>
          <aside className="select-color">
            <svg height="38" width="38">
              <circle
                id="main-color1"
                onClick={this.handleClick.bind(this, "#FFB150")}
                cx="19"
                cy="19"
                r="15"
                stroke="black"
                strokeWidth="1"
                fill="#FFB150"
              />
            </svg>
            <svg height="38" width="38">
              <circle
                id="main-color2"
                onClick={this.handleClick.bind(this, "#FF5A5F")}
                cx="19"
                cy="19"
                r="15"
                stroke="black"
                strokeWidth="1"
                fill="#FF5A5F"
              />
            </svg>
            <svg height="38" width="38">
              <circle
                id="main-color3"
                onClick={this.handleClick.bind(this, "#8CE071")}
                cx="19"
                cy="19"
                r="15"
                stroke="black"
                strokeWidth="1"
                fill="#8CE071"
              />
            </svg>
            <svg height="38" width="38">
              <circle
                id="main-color4"
                onClick={this.handleClick.bind(this, "#00D1C1")}
                cx="19"
                cy="19"
                r="15"
                stroke="black"
                strokeWidth="1"
                fill="#00D1C1"
              />
            </svg>
            <svg height="38" width="38">
              <circle
                id="main-color5"
                onClick={this.handleClick.bind(this, "#007A87")}
                cx="19"
                cy="19"
                r="15"
                stroke="black"
                strokeWidth="1"
                fill="#007A87"
              />
            </svg>
            <svg height="38" width="38">
              <circle
                id="main-color6"
                onClick={this.handleClick.bind(this, "#7B0051")}
                cx="19"
                cy="19"
                r="15"
                stroke="black"
                strokeWidth="1"
                fill="#7B0051"
              />
            </svg>
          </aside>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
