import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import FooterFormValidation from '../element/footer-form-validation';
$(document).ready(function () {
    $('.toggle').click(function () {
        $('.sidebar-contact').toggleClass('active')
        $('.toggle').toggleClass('active')
    })
})
$(document).ready(function () {
    $('.toggle2').click(function () {
        $('.sidebar-contact').toggleClass('active')
        $('.toggle2').toggleClass('active')
    })
})
var wasSubmitted = false;
function validateForm() {
    if (!wasSubmitted) {
        wasSubmitted = true;
        return wasSubmitted;
    }
    return false;
}

class Footer extends Component {

    state = {
        isOpen: false
    };
    state1 = {
        isOpen1: false
    };
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            phone: '',
            errors: {
                username: '',
                email: '',
                phone: ''
            },
            submitted: false
        };
    }

    closePopup = () => {
        this.setState({ submitted: false });
    };

    handleChange = (event) => {
        // console.log("I am handle change", event.target)
        const { name, value } = event.target;
        const errors = { ...this.state.errors };

        // Clear the error for the changed field
        errors[name] = '';

        this.setState({
            [name]: value,
            errors
        });
    };

    handleSubmit = async (event) => {
        // console.log("i am handle Submit", event)
        event.preventDefault();

        const { username, email, phone } = this.state;
        const errors = {};

        // Validate username
        if (username.trim() === '') {
            errors.username = 'Username is required';
        }

        // Validate email
        // if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        //     errors.email = 'Invalid email format';
        // }

        // Validate phone
        if (!phone.match(/^\d{10}$/)) {
            errors.phone = 'Phone number must be 10 digits';
        }

        // Update the state with the errors
        this.setState({ errors });

        // If there are no errors, submit the form
        if (Object.keys(errors).length === 0) {
            // Perform the form submission logic here
            // e.g., call an API endpoint, update the database, etc.

            // Reset the form
            this.setState({
                username: '',
                email: '',
                phone: '',
                message: '',
                errors: {
                    username: '',
                    email: '',
                    phone: '',
                    message: ''
                }
            });

            // Show the "Thank you" message
            this.setState({ submitted: true });

            // Call the sendEmail function
            await this.sendEmail();
        }
    };

    sendEmail = async (e) => {
        // e.preventDefault();

        const { email, username, phone, message } = this.state;

        const res = await fetch('https://mail.bridgehealth.in/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, username, phone, message
            }),
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log('error');
        } else {
            this.setState({ show: true, email: '', username: '', phone: '' });
            console.log('Email sent');
        }
    };



    render() {

        const { username, email, phone, submitted, errors, isOpen, message } = this.state;

        return (
            <>
                <footer class="main-footer">
                    <div class="ontainer-fluid">

                        <div class="widgets-section">
                            <div class="row clearfix">


                                <div class="col-lg-2">
                                    <div class="footer-widget logo-widget">

                                        <div class="widget-content">

                                            <div class="footer-logo">
                                                <Link to="index.html">
                                                    <img class="" src={require('../../assets/images/logo.png')} alt="" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-lg-6">
                                    <div class="footer-widget links-widget">
                                        <div class="widget-content">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <ul>
                                                        <li><a href={'/'}>Home</a></li>
                                                        <li><a href={'/our-services'}>Our Services</a></li>
                                                        <li><a href={'/personal-membership-program'}>Personal Memberships</a></li>
                                                        <li><a href={'/corporate-membership-program'}>Corporate Memberships</a></li>
                                                        <li><a href={'/health-risk-assessment'}>Health Risk Assessment</a></li>
                                                        {/* <li><Link to={'/#'}>Experience Center</Link></li> */}

                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul>
                                                        <li><a href={'/about-us'}>About us</a></li>
                                                        <li><a href={'/leadership'}>Board of Directors</a></li>
                                                        <li><a href={'/team'}>Clinical Team</a></li>
                                                        <li><a href={'/media-and-pr'}>Media</a></li>
                                                        <li><a href={'/blog'}>Blogs</a></li>

                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul>


                                                        <li><a href={'/career'}>Careers</a></li>
                                                        <li><a href={'/contact-us'}>Contact</a></li>
                                                        <li><a href={'/terms-of-use'}>Terms & Conditions</a></li>
                                                        <li><a href={'/faq-page'}>FAQ</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-lg-4">
                                    <div class="footer-widget instagram-widget">
                                        <div class="contact-form-area">

                                            {/* <!-- Contact Form--> */}
                                            <FooterFormValidation />
                                            <ul class="social-links clearfix">
                                                <span className='socialp'>Follow Us On</span>
                                                <li>
                                                    <a href="https://www.facebook.com/bridgehealthgroup" target="_blank" rel="noopener noreferrer"><span class="fab fa-facebook-f"></span></a>
                                                </li>
                                                <li><a href="https://www.linkedin.com/company/bhmds/" target="_blank" rel="noopener noreferrer"><span class="fab fa-linkedin"></span></a></li>
                                                <li><a href="https://www.youtube.com/@bridgehealthmedicaldigital8758" target="_blank" rel="noopener noreferrer"><span class="fab fa-youtube"></span></a></li>
                                                <li>
                                                    <a href="https://www.instagram.com/bridgehealthgroup/" target="_blank" rel="noopener noreferrer"><span class="fab fa-instagram"></span></a>
                                                </li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="auto-container copy">
                        <div class="footer-bottom">
                            <div class="copyright">Copyright © 2023 Bridge Health, All Rights Reserved</div>
                        </div>
                    </div>
                </footer>

                <div class="sidebar-contact" id="sidebarCont">
                    <div class="toggle">
                        <div class="talkTo"> <img src={require('../../assets/images/Group53.png')} alt="" /></div>
                    </div>
                    <div class="scroll">
                        <div class="form-body">
                            <div class="row">
                                <div class="form-holder">
                                    <div class="form-content">
                                        <div class="form-items">
                                            <form action="forms/contact.php" method="post" class="requires-validation" onSubmit={this.handleSubmit}>
                                                <div class="col-md-12 mb-2">
                                                    <input class="form-control inputWidth"
                                                        type="text"
                                                        value={username}
                                                        onChange={this.handleChange}
                                                        name="username"
                                                        id="name"
                                                        placeholder="Name*"
                                                    //   required
                                                    ></input>
                                                    {errors.username && <div className="error">{errors.username}</div>}
                                                </div>
                                                <div class="col-md-12 mb-2">
                                                    <input class="form-control inputWidth"
                                                        type="email"
                                                        value={email}
                                                        onChange={this.handleChange}
                                                        name="email"
                                                        id="email"
                                                        placeholder="Email"
                                                    // required
                                                    ></input>
                                                    {/* {errors.email && <div className="error">{errors.email}</div>} */}
                                                </div>
                                                <div class="col-md-12 mb-2">
                                                    <input class="form-control inputWidth"
                                                         type="text"
                                                         value={phone}
                                                         onChange={this.handleChange}
                                                         name="phone"
                                                         id="phone"
                                                         placeholder="Phone*"
                                                    // required
                                                    ></input>
                                                    {errors.phone && <div className="error">{errors.phone}</div>}
                                                </div>
                                                <div class="col-md-12 mb-2">
                                                    <textarea 
                                                    name="message"
                                                    value={message}
                                                     placeholder="Message here.." 
                                                     class="inputWidth"
                                                     ></textarea>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck3" required></input>
                                                    <label class="form-check-label">I agree that Bridge Health may contact me at the email address or phone number above.
                                                    </label>
                                                </div>
                                                <div class="form-button mt-3 text-center">
                                                    <input type="submit" name="submit" value="Submit"></input>
                                                </div>
                                            </form>
                                            {submitted && (
                                                <div className="thankyou-popup" onClick={this.closePopup}>
                                                    <h2>Thank You!</h2>
                                                    <p>Your details has been successfully submitted. Thanks!</p>
                                                    <button type='button' >OK</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;