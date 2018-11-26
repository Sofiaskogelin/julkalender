import React, { Component } from 'react';
import Modal from 'react-modal'

const LuckaModal = (props) => {
    return (
        <Modal
            isOpen={!!props.dagensLucka}
            onRequestClose={props.closeModal}
            contentLabel="Dagens Lucka"
        >

        <h1> Dagens lucka</h1>
        <iframe width="100%" height="100%" src={props.media} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <button onClick={props.closeModal}> Stäng lucka</button>
        </Modal>
    )

} 

export default LuckaModal