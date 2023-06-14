import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import GoogleMaps from "simple-react-google-maps";

const aboutbg = require('./../../assets/images/background/contactback.png');




class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            phone: '',
            company: '',
            errors: {
                username: '',
                email: '',
                phone: '',
                company: ''
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

    handleSubmit = (event) => {
        // console.log("i am handle Submit", event)
        event.preventDefault();

        const { username,company, email, phone } = this.state;
        const errors = {};

        // Validate username
        if (username.trim() === '') {
            errors.username = 'Username is required';
        }

        // Validate Company
        if (company.trim() === '') {
            errors.company = 'Company name is required';
        }

        // Validate email
        if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            errors.email = 'Invalid email format';
        }

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

            // Show the "Thank you" message
            this.setState({ submitted: true });

            // Reset the form
            this.setState({
                username: '',
                email: '',
                phone: '',
                company: '',
                errors: {
                    username: '',
                    company: '',
                    email: '',
                    phone: ''
                }
            });
        }
    };



    render() {

        const { username, company, email, phone, message, isSubmitDisabled, errors } = this.state;
        return (
            <>
                <Header />

                {/* <!-- Page Banner Section --> */}
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                </section>

                {/* <!-- Contact Section Two --> */}
                <section class="contact-section-two">

                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='contactheadeing'>CONTACT INFORMATION</h2>
                        </div>
                        <div class="row icon-box">
                            <div class="info-column col-lg-4 boxcolor">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.018675485648!2d77.58522187454818!3d12.906520587402882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1571e6b9bbaf%3A0xc485c6444a9e56b4!2sBridge%20Health%20Medical%20%26%20Digital%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1686708683071!5m2!1sen!2sin" allowfullscreen="" className='mapwidth' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <div class="">
                                    <ul>
                                        <li><img src={require('../../assets/images/icons/call.png')} alt="" /><Link to={'tell:+91 8047093866'}>+91 8047093866</Link></li>
                                        <li><img src={require('../../assets/images/icons/mail.png')} alt="" /><Link to={'mailto:info@bridgehealthgroup.com'}>nfo@bridgehealthgroup.com</Link></li>
                                        <li><img src={require('../../assets/images/icons/map.png')} alt="" /><span>No.166-167, 21st Main Road,<br></br> <span className='textcnt'>100 Feet Ring Road, 2nd Phase,</span><br></br> <span className='textcnt'>JP Nagar, Bangalore - 560078</span> </span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="info-column col-lg-8">
                                <div class="contact-form-area boxpadding">

                                    {/* <!-- Contact Form--> */}
                                    <div class="contact-form">
                                        <form method="post" onSubmit={this.handleSubmit} id="contact-form">
                                            <div class="row clearfix">
                                                <div class="col-md-6 form-group">
                                                    <label for="name" className='contactlebel'>Name</label>
                                                    <input className='inputcontact'
                                                        type="text"
                                                        value={username}
                                                        onChange={this.handleChange}
                                                        id="name"
                                                        name="username"
                                                        placeholder="Full name*"
                                                        // required
                                                    />
                                                    <i class="fas fa-user"></i>
                                                    {errors.username && <div className="error">{errors.username}</div>}
                                                </div>

                                                <div class="col-md-6 form-group">
                                                    <label for="email" className='contactlebel'>Company Name</label>
                                                    <input className='inputcontact'
                                                        type="text"
                                                        value={company}
                                                        onChange={this.handleChange}
                                                        name="company"
                                                        id="company"
                                                        placeholder="Company Name*"
                                                        // required
                                                    />
                                                    <i class="fas fa-envelope"></i>
                                                    {errors.company && <div className="error">{errors.company}</div>}
                                                </div>
                                                <div class="col-md-6 form-group">
                                                    <label for="name" className='contactlebel'>Email</label>
                                                    <input className='inputcontact'
                                                        type="text"
                                                        value={email}
                                                        onChange={this.handleChange}
                                                        name="email"
                                                        id="email"
                                                        placeholder="xyz@gmail.com*"
                                                        // required
                                                    />
                                                    <i class="fas fa-user"></i>
                                                    {errors.email && <div className="error">{errors.email}</div>}
                                                </div>

                                                <div class="col-md-6 form-group">
                                                    <label for="email" className='contactlebel'>Phone no.</label>
                                                    <input className='inputcontact'
                                                        type="text"
                                                        value={phone}
                                                        onChange={this.handleChange}
                                                        name="phone"
                                                        id="phone"
                                                        placeholder="Phone no.*"
                                                        // required=""
                                                    />
                                                    <i class="fas fa-envelope"></i>
                                                    {errors.phone && <div className="error">{errors.phone}</div>}
                                                </div>
                                                <div class="col-md-12 form-group">
                                                    <label for="message" className='contactlebel'>Message</label>
                                                    <textarea className='inputcontact'
                                                        name="message"
                                                        value={message}
                                                        onChange={this.handleChange}
                                                        id="message"
                                                        placeholder="I  would like to talk about............."
                                                    ></textarea>
                                                    <i class="fas fa-edit"></i>
                                                </div>

                                                <div class="col-md-12 form-group">
                                                    <button
                                                        type="submit"
                                                        name="submit-form"
                                                        disabled={isSubmitDisabled}
                                                        class="commonBtnforAll flotrightimg"
                                                    >Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>






                <Footer />
            </>
        )
    }
}
export default Contact;