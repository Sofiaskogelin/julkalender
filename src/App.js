import React, { Component } from 'react';
import dragscroll from 'dragscroll';
import './App.css';
import Lucka from './Lucka.js';
import Info from './info.js';
import windows from './info.json'
import makeSnow from './particles'
import 'whatwg-fetch'

// makeSnow()

class App extends Component {
  state = {
    windows
  }

  constructor() {
    super()
    setInterval(() => {
      fetch('https://raw.githubusercontent.com/jskogelin/julkalender/master/src/info.json')
        .then(response => {
          return response.json()
        })
        .then(windows => {
          this.setState({
            windows
          })
        })
    }, 2000)
  }

  render() {
    return (
      <div className="App">
        <div>
        {this.state.windows.map((luckaInfo, index) => {
          return <Lucka
            key={index}
            x={luckaInfo.x}
            y={luckaInfo.y}
            text={luckaInfo.text}
            number={index + 1}
            flippedBg={luckaInfo.flippedBg}
            media={luckaInfo.media} />
        })}
        </div>
      </div>
    );
  }
}

export default App;
