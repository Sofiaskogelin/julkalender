import React, { Component } from 'react';
import dragscroll from 'dragscroll';
import './App.css';
import Lucka from './Lucka.js';
import Info from './info.js';
import makeSnow from './particles'

// makeSnow()

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
        {Info.map((luckaInfo, index) => {
          return <Lucka
            key={index}
            x={luckaInfo.x}
            y={luckaInfo.y}
            text={luckaInfo.text}
            number={index + 1}
            media={luckaInfo.media} />
        })}
        </div>
      </div>
    );
  }
}

export default App;
