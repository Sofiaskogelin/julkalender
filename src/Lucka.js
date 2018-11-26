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
        console.log(this.state)
        this.setState({ 
            dagensLucka: false 
        }); 
    }
    
    render() {

        return (
            <div style={{ position: 'relative', top: this.props.y, left: this.props.x}}>
                <button className="lucka" onClick={this.showModal}> {this.props.number} </button>
                <LuckaModal dagensLucka={this.state.dagensLucka}
                            closeModal={this.closeModal}
                            media={this.props.media}/>

            </div>

        )
    }
}

/*
const Lucka = ({ media, text, x, y, number }) => {

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
        return(
            <div style={{ position: 'relative', top: y, left: x}}>
                <button onClick={handleClick}> {number} </button>
            </div>
        )
       
}
*/
export default Lucka
