import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import { Modal, Button } from "react-bootstrap";
import ContactForm from '../element/contact-form';

const aboutfair = require('./../../assets/images/shape/dera.png');

class dermatology extends Component {
    state = {
        isOpen: false,
        submitted: false
    };
    state1 = {
        isOpen1: false
    };
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

componentDidMount() {
document.title = 'Dermatology | Bridge Health';
}

render() {
return (
    <><>
        <Header />
        <section class="internalpage dermatologyresponsive style-two darmanorepeat"
            style={{ backgroundImage: "url(" + aboutfair + ")" }}>
            <div class="auto-container">
                <div class="content-box"  onClick={this.openModal}>
                    <img src={require('../../assets/images/shape/dermato.png')} alt="" className='hidemobile' />
                </div>

            </div>
            <img src={require('../../assets/images/shape/dera.png')} alt="" className='d-lg-none' />

        </section>

        <section class="contact-section">

            <div class="auto-container">
                <div class="row">

                    <div class="col-lg-6">
                        <div class="sec-title squrebox">
                            <p className='font22'>
                                A good physical appearance is a reflection of youth and confidence. Unfortunately, as we
                                age, our physical appearance deteriorates. This could be in the form of pimples, hair loss,
                                stretch marks, unintended weight gain around the abdominal area, and scarring. Therefore,
                                it’s important to take care of the physical features of our body so that we always remain
                                confident about how we look.
                            </p>
                        </div>
                        <div class="btn-box text-center btn5">
                            <ContactForm buttonText="BOOK NOW" popupPosition="right" />

                        </div>
                    </div>

                    <div class="col-lg-6">
                        <img src={require('../../assets/images/shape/darma.png')} alt=""
                            className='widthimg imgFloatRight' />
                    </div>

                </div>
            </div>
        </section>

        <section>
            <img src={require('../../assets/images/shape/dermatology.png')} alt="" className='labwidth' />
            <div class="col-lg-12">
                <div class="sec-title cont-box martobutton">
                    {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                    <p className='font22'>
                        Our expert dermatologists at Bridge Health know how to give your physical appearance a boost. They
                        will give you expert advice on skin and haircare routines, diet plans, and treatments so that you
                        always look your best!
                    </p>
                </div>
            </div>
        </section>

        <section>

            <div class="container marginTop80">
                <div class="row">
                    <div class="col-sm-4">
                        <img src={require('../../assets/images/gallery/dermatology1.png')} alt="" class="avtar" />
                        <p className='treat'>Non-surgical fat removal</p>
                    </div>

                    <div class="col-sm-4">
                        <img src={require('../../assets/images/gallery/dermatology2.png')} alt="" class="avtar" />
                        <p className='treat'>Laser Hair Removal</p>
                    </div>

                    <div class="col-sm-4">
                        <img src={require('../../assets/images/gallery/dermatology3.png')} alt="" class="avtar" />
                        <p className='treat'>Dandruff control and gray<br></br> hair treatment</p>
                    </div>
                </div>

            </div>
        </section>

        <section class="contact-section dermaback">

            <div class="auto-container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <h2 className='header1'>
                            <span className='headeingcolorblack'> The</span>
                            <span className='headeingcolorblue'> Bridge Health</span>
                            <span className='headeingcolorblack'> Advantage </span>
                        </h2>
                        <ul className='listicon'>
                            <li>
                                Hair transplant
                            </li>
                            <li>
                                Skincare routine assistance
                            </li>
                            <li>
                                Pigmentation treatment
                            </li>
                            <li>
                                Face resurfacing
                            </li>
                            <li>
                                Stretch mark removal
                            </li>
                            <li>
                                Assistance in developing diet plans to maintain healthy skin
                            </li>
                            <li>
                                Consultations with expert dermatologists
                            </li>

                        </ul>
                    </div>

                    <div class="col-lg-6">
                        <img src={require('../../assets/images/shape/fair4.png')} alt="" className='widthimg ' />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="auto-container">
                <div class="sec-title text-center">
                    <h2 className='header1'>
                        <span className='headeingcolorblue'> Radiant Skin? </span>
                        <span className='headeingcolorblack'> We know where to begin! </span>
                    </h2>
                </div>
                <div class="btn-box text-center btn5">
                    <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                </div>
            </div>
        </section>
        <Modal show={this.state.isOpen} onHide={this.closeModal} className='popupform'>
            <Modal.Header closeButton>
                <div class="form-body">
                    <div class="row">
                        <div class="form-holder">
                            <div class="form-content">
                                <div class="form-items">
                                    <form class="requires-validation" method="post">
                                        <div class="col-md-12 mb-2">
                                            <input class="form-control widthinput"
                                                type="text"
                                              
                                                name="username"
                                                id="name"
                                                placeholder="Name*"
                                            ></input>
                                        </div>
                                        <div class="col-md-12 mb-2">
                                            <input class="form-control widthinput"
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                            ></input>
                                        </div>
                                        <div class="col-md-12 mb-2">
                                            <input class="form-control widthinput"
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                placeholder="Phone*"
                                            ></input>
                                        </div>
                                        <div class="col-md-12 mb-2">
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Message here.."
                                                class="widthinput textareaheight"
                                            ></textarea>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck3" required></input>
                                            <label class="form-check-label">I agree that Bridge Health may contact me at the email address or phone number above.
                                            </label>
                                        </div>
                                        <div class="form-button mt-3 text-center">
                                            <input type="submit" name="submit" value="Submit" className='submitbutton'></input>
                                        </div>

                                    </form>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Header>

        </Modal></><Footer /></>

)
}
}

export default dermatology;