import React, { Component } from 'react';
import LuckaModal from './LuckaModal'


class Lucka extends Component {

  state = { 
    dagensLucka: undefined,
    flipped: this.props.number < new Date().getDate()
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
    console.log(this.props.number, new Date().getDate())
    console.log(this.state.flipped)
    let luckaClasses = 'lucka'
    if (this.state.flipped) {
      luckaClasses = luckaClasses.concat(' flipped')
    }

    return (
      <div>
        <button 
          style={{ position: 'absolute', top: this.props.y, left: this.props.x}}
          className={luckaClasses}
          onClick={this.showModal}>
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
