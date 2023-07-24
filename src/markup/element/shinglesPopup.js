import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import 'react-modal-video/css/modal-video.min.css';

class ShinglesPopup extends Component {
state = {
isOpen: false
};
state1 = {
isOpen1: false
};
openModal = () => this.setState({ isOpen: true });
closeModal = () => this.setState({ isOpen: false });

render() {
return (
<>

    <div class="image-wrapper">
        <div class="image-one" onClick={this.openModal}>
            <img src={require('../../assets/images/shape/videobackground.png')} alt="" className='imgwidth' />
        </div>
        <div className='container margin100 mobilehide'>
        <img src={require('../../assets/images/shape/herpes.png')} alt="" className='imgwidth' />

        </div>
        <div className='container desktophide mobilemargin'>
        <img src={require('../../assets/images/shape/mobileShingles.png')} alt="" className='imgwidth' />

        </div>

    </div>

    <Modal show={this.state.isOpen} onHide={this.closeModal} className='widthdialog modalDialog'>
        <Modal.Header closeButton>
            <iframe className='widthVideo' src="https://www.youtube.com/embed/Faz-OTvBuEk"
                title="Empowering transformation in employee wellness - Bridge Health" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </Modal.Header>

    </Modal>

</>
)
}
}
export default ShinglesPopup;