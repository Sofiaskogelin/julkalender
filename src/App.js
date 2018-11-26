import React, { Component } from 'react';
import './App.css';
import Lucka from './Lucka.js';
import Info from './info.js';

class App extends Component {

  render() {
    console.log(Info)
    return (
      <div className="App">
        <div>
        {Info.map((luckaInfo, index) => {
          return <Lucka
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
