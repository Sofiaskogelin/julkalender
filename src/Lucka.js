import React, { Component } from 'react';
import LuckaModal from './LuckaModal'

const omitNum = [12, 19, 4]

class Lucka extends Component {

  state = { 
    dagensLucka: undefined,
    flipped: this.props.number < new Date().getDate()
  }

  showModal = () => {
    const today = new Date().getDate()
    if(this.props.number > today)
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
          <div>{omitNum.includes(this.props.number) ? '' : this.props.number}</div>
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
