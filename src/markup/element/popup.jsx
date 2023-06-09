import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal, Button } from "react-bootstrap";

class ContactPopup extends Component {
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
                <div class="btn-box">                <button class="theme-btn btn-style-one"  onClick={this.openModal}><span class="btn-title">GET STARTED</span></button>
</div>

                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header>
                    <div class="contact-form-area">

{/* <!-- Contact Form--> */}
<div class="contact-form">
    <form method="post" action="#" id="contact-form">
        <div class="row clearfix">
            <div class="col-md-12 form-group">
                <input
                    type="text"
                    name="username"
                    id="name"
                    placeholder="Name*"
                    required
                />
            </div>

            <div class="col-md-12 form-group">
                <input type="email"
                    name="email"
                    id="email"
                    placeholder="Email*"
                    required
                />
            </div>
            <div class="col-md-12 form-group">
                <input type="phone"
                    name="phone"
                    id="phone"
                    placeholder="Phone*"
                    required
                />
            </div>

            <div class="col-md-12 form-group">
                <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                ></textarea>
            </div>
            <div class="form-check">
                <input class="form-check-input"
                    type="checkbox" id="checkbox1" name="option1" value="good" />
                <label class="form-check-label heading colorwhite">
                    I agree that Bridge Health may contact me at the email address or phone number above.
                </label>
            </div>
            <div class="col-md-12 form-group">
                <button
                    class="theme-btn btncolr btn-style-one marginleft21"
                    type="submit"
                    name="submit-form"
                ><span class="btn-title">SUBMIT</span></button>
            </div>
        </div>
    </form>
</div>
</div>
                    </Modal.Header>

                </Modal></>
        )
    }
}
export default ContactPopup;