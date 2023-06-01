import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal, Button } from "react-bootstrap";

class CaseStudy extends Component {
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
            
            <div class="grow bozhover"  onClick={this.openModal}>
                                        <img src={require('../../assets/images/shape/s1.png')} alt="" />
                                        <h2 className='expertise'>Chronic Care Programs</h2>

                                        <p>
                                            Find hope and healing through our specialized chronic care offerings
                                        </p>
                                    </div>
            <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <span><img class="width50" src={require('../../assets/images/shape/popup3.png')} alt="" />
                            <p className='width50p'>Diabetes Management</p>
                        </span>
                        <span>
                            <img class="width50" src={require('../../assets/images/shape/popup4.png')} alt="" />
                            <p className='width50p'>Hypertension Management</p>
                        </span>
                        <span>
                            <img class="width50" src={require('../../assets/images/shape/popup5.png')} alt="" />
                            <p className='width50p'>Weight Management</p>
                        </span>
                    </Modal.Header>

                </Modal></> 
        )
    }
}
export default CaseStudy;