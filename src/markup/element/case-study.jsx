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
                <div class="expanded-text grow bozhover" onClick={this.openModal}>
                    <p class="text">

                        <img src={require('../../assets/images/shape/s1.png')} alt="" />
                        <div class="short-name expertise">Chronic Care <br></br>Programs</div>
                        <div class="longer-name">
                            Long-term illnesses and chronic diseases can be very scary to think about. Discover our chronic care programs for effective chronic illness management.
                        </div>
                    </p>
                </div>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <a href={'/diabetes'}>
                            <span><img class="width50" src={require('../../assets/images/shape/popup3.png')} alt="" />
                                <p className='width50p'>Diabetes Management</p>
                            </span>
                        </a>
                        <a href={'/hyper-tension'}>
                            <span>
                                <img class="width50" src={require('../../assets/images/shape/popup4.png')} alt="" />
                                <p className='width50p'>Hypertension Management</p>
                            </span>
                        </a>
                        <a href={'/manage-weight'}>
                            <span>
                                <img class="width50" src={require('../../assets/images/shape/popup5.png')} alt="" />
                                <p className='width50p'>Weight Management</p>
                            </span>
                        </a>
                    </Modal.Header>

                </Modal></>
        )
    }
}
export default CaseStudy;