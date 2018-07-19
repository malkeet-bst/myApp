import React from "react";
import ReactDOM from "react-dom";
//import If from 'components/If'
//import StoreItem from './StoreItem'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedColor: "",
      color1: "white",
      color2: "white",
      color3: "white",
      color4: "white"
    };
  }

  handleClick = choice => {
    debugger;
    this.setState({ selectedColor: choice });
  };

  fillColor = color => {
    debugger;
    this.setState({ [color]: this.state.selectedColor });
  };
  render() {
    return (
      <body>
        <h1>Master Mind</h1>
        <section className="main-section">
          <svg height="44" width="44">
            <circle
              onClick={this.fillColor.bind(this, "color1")}
              cx="22"
              cy="22"
              r="18"
              stroke="black"
              strokeWidth="1"
              fill={this.state.color1}
            />
          </svg>

          <svg height="44" width="44">
            <circle
              onClick={this.fillColor.bind(this, "color2")}
              cx="22"
              cy="22"
              r="18"
              stroke="black"
              strokeWidth="1"
              fill={this.state.color2}
            />
          </svg>
          <svg height="44" width="44">
            <circle
              onClick={this.fillColor.bind(this, "color3")}
              cx="22"
              cy="22"
              r="18"
              stroke="black"
              strokeWidth="1"
              fill={this.state.color3}
            />
          </svg>
          <svg height="44" width="44">
            <circle
              onClick={this.fillColor.bind(this, "color4")}
              cx="22"
              cy="22"
              r="18"
              stroke="black"
              strokeWidth="1"
              fill={this.state.color4}
            />
          </svg>
          <div className="correct-colors">
            <div>
              <svg height="22" width="22">
                <circle
                  cx="11"
                  cy="11"
                  r="10"
                  stroke="black"
                  strokeWidth="1"
                  fill="white"
                />
              </svg>
              <svg height="22" width="22">
                <circle
                  cx="11"
                  cy="11"
                  r="10"
                  stroke="black"
                  strokeWidth="1"
                  fill="white"
                />
              </svg>{" "}
            </div>
            <div>
              <svg height="22" width="22">
                <circle
                  cx="11"
                  cy="11"
                  r="10"
                  stroke="black"
                  strokeWidth="1"
                  fill="white"
                />
              </svg>
              <svg height="22" width="22">
                <circle
                  cx="11"
                  cy="11"
                  r="10"
                  stroke="black"
                  strokeWidth="1"
                  fill="white"
                />
              </svg>{" "}
            </div>
          </div>
        </section>
        <aside className="select-color">
          <svg height="44" width="44">
            <circle
              id="main-color1"
              onClick={this.handleClick.bind(this, "#FFB180")}
              cx="22"
              cy="22"
              r="18"
              stroke="black"
              strokeWidth="1"
              fill="#FFB180"
            />
          </svg>
          <svg height="44" width="44">
            <circle
              id="main-color2"
              onClick={this.handleClick.bind(this, "#FF5A5F")}
              cx="22"
              cy="22"
              r="18"
              stroke="black"
              strokeWidth="1"
              fill="#FF5A5F"
            />
          </svg>
          <svg height="44" width="44">
            <circle
              id="main-color3"
              onClick={this.handleClick.bind(this, "#8CE071, main-color3")}
              cx="22"
              cy="22"
              r="18"
              stroke="black"
              strokeWidth="1"
              fill="#8CE071"
            />
          </svg>
          <svg height="44" width="44">
            <circle
              id="main-color4"
              onClick={this.handleClick.bind(this, "#00D1C1")}
              cx="22"
              cy="22"
              r="18"
              stroke="black"
              strokeWidth="1"
              fill="#00D1C1"
            />
          </svg>
          <svg height="44" width="44">
            <circle
              id="main-color5"
              onClick={this.handleClick.bind(this, "#007A87")}
              cx="22"
              cy="22"
              r="18"
              stroke="black"
              strokeWidth="1"
              fill="#007A87"
            />
          </svg>
          <svg height="44" width="44">
            <circle
              id="main-color6"
              onClick={this.handleClick.bind(this, "#7B0051")}
              cx="22"
              cy="22"
              r="18"
              stroke="black"
              strokeWidth="1"
              fill="#7B0051"
            />
          </svg>
        </aside>
      </body>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
