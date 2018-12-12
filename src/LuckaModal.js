import React, { Component } from 'react';
import Modal from 'react-modal'

const h1Style = {
  'fontFamily': 'Pacifico',
  'fontWeight': 'normal',
  'lineHeight': '15px',
  'position': 'absolute',
  'top': '-50px',
  'left': '50%',
  'transform': 'translateX(-50%)'
}

const LuckaModal = (props) => {
  const customStyle = {
    content: {
      top: '100px',
      left: '50%',
      'maxWidth': '800px',
      'maxHeight': '450px',
      'overflow': 'visible',
      transform: 'translateX(-50%)',
      border: 'none',
      padding: 0,
      background: 'transparent'
    }
  }

  let media
  let src
  if (props.img) {
    media = (
      <img
        src={props.media}
        alt={props.text}/>
    )
  } else {
    src = props.media + '?autoplay=1' + (props.portrait ? '&w=540&h=960' : '')
    media = (
      <iframe
        width="100%"
        height="100%"
        style={{ 'maxHeight': '450px' }}
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    )
  }
    return (

        <Modal
          isOpen={!!props.dagensLucka}
          onRequestClose={props.closeModal}
          style={customStyle}
          contentLabel="Test">

          <h1 style={h1Style}>Lucka {props.num}</h1>
          {media}
          <p>{props.text}</p>
        </Modal>
    )

} 

export default LuckaModal
