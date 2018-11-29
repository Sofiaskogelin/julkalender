import React, { Component } from 'react';
import LuckaModal from './LuckaModal'


class Lucka extends Component {

  state = { 
    dagensLucka: undefined
  }

  showModal = () => {
    var date = new Date()
    var today= date;

    if(today === this.props.number || today < this.props.number)
      return 
    this.setState({ 
      dagensLucka: true 
    });
  }

  closeModal = () => {
    this.setState({ 
      dagensLucka: false 
    }); 
  }

  render() {

    return (
      <div>
        <button style={{ position: 'absolute', top: this.props.y, left: this.props.x}} className="lucka" onClick={this.showModal}>
          <div>{this.props.number}</div>
        </button>
        <LuckaModal 
          text={this.props.text}
          num={this.props.number}
          dagensLucka={this.state.dagensLucka}
          closeModal={this.closeModal}
          media={this.props.media}/>
      </div>
    )
  }
}

export default Lucka
