import React from "react";
import ReactDOM from "react-dom";
//import If from 'components/If'
//import StoreItem from './StoreItem'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedColor: "#FFB150",

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

  showGame = () => {
    document.getElementById("demo").innerHTML = "";
    let shuffledSeq = this.shuffle([
      "#FFB150",
      "#FF5A5F",
      "#8CE071",
      "#00D1C1",
      "#007A87",
      "#7B0051"
    ]).slice(0, 4);
    console.log({ shuffledSeq });
    this.setState({
      correctSequence: shuffledSeq
    });
    document.getElementById("game-section").style.visibility = "visible";
  };
  checkColors = () => {
    let correctColor = [];
    let count = 0;

    for (var index = 0; index < this.state.correctSequence.length; index++) {
      if (this.state.correctSequence.indexOf(this.state.color[index]) !== -1) {
        if (this.state.correctSequence[index] == this.state.color[index]) {
          correctColor[index] = "black";
          count = count + 1;
        } else {
          correctColor[index] = "red";
        }
      } else {
        correctColor[index] = "white";
      }
    }
    let shuffledArr = this.shuffle(correctColor);
    this.setState({ correctColor: shuffledArr });
    if (count !== this.state.correctSequence.length) {
      let txt =
        "Congratulations, you have cleared the first round, Press Play for next round!";
      document.getElementById("demo").innerHTML = txt;
      document.getElementById("game-section").style.visibility = "hidden";
      this.setState({
        selectedColor: "#FFB150",
        color: ["white", "white", "white", "white"],
        correctColor: ["white", "white", "white", "white"]
      });
    }
    // if (count == this.state.correctSequence.length) {
    //   var txt;
    //   var r = confirm(
    //     "Congratulations, you have cleared the first round, Press ok to play again!"
    //   );
    //   if (r == true) {
    //     this.showGame();
    //     this.setState({
    //       selectedColor: "#FFB150",
    //       color: ["white", "white", "white", "white"],
    //       correctColor: ["white", "white", "white", "white"]
    //     });
    //   } else {
    //     this.setState({
    //       selectedColor: "#FFB150",
    //       color: ["white", "white", "white", "white"],
    //       correctColor: ["white", "white", "white", "white"]
    //     });
    //     document.getElementById("game-section").style.visibility = "hidden";
    //   }
    // }
  };
  handleClick = choice => {
    this.setState({ selectedColor: choice });
  };

  fillColor = index => {
    let tempColor = this.state.color;
    tempColor[index] = this.state.selectedColor;
    this.setState({ color: tempColor });
  };
  toggleRules = e => {
    if (e.target.textContent == "Show rules") {
      document.getElementById("info").style.display = "inherit";
      e.target.textContent = "Hide rules";
    } else {
      document.getElementById("info").style.display = "none";
      e.target.textContent = "Show rules";
    }
  };

  render() {
    return (
      <div className="main">
        <h1>
          <span className="M">M</span>
          <span className="A">A</span>
          <span className="S">S</span>
          <span className="T">T</span>
          <span className="E">E</span>
          <span className="R">R</span>
          <span className="MIND">MIND</span>
        </h1>
        <h1>Master Mind</h1>
        <p id="demo" />
        <div className="rules">
          <div className="rules-toggle" onClick={this.toggleRules}>
            Show rules
          </div>
          <p className="info" id="info">
            Try to guess the pattern, in both order and color, within ten turns.
            After submitting a row, a small black peg is placed for each code
            peg from the guess which is correct in both color and position. A
            red peg indicates the existence of a correct color code peg placed
            in the wrong position. More info on{" "}
            <a
              href="https://en.wikipedia.org/wiki/Mastermind_(board_game)"
              target="_blank"
            >
              Wikipedia
            </a>
          </p>

          <button className="play" onClick={this.showGame}>
            Play
          </button>
        </div>
        <div className="game-section" id="game-section">
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
            <button onClick={this.checkColors}>Check</button>
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
            </svg>#FFB150
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
            </svg>#FF5A5F
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
            </svg>#8CE071
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
            </svg>#00D1C1
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
            </svg>#007A87
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
            </svg>#7B0051
          </aside>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
