import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            phone: '',
            message: '',
            isSubmitDisabled: true,
            errors: {}
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            this.validateForm();
        });
    };

    validateForm = () => {
        const { username, email, phone } = this.state;
        const errors = {};

        // Username validation
        if (username.trim() === "") {
            errors.username = "Please enter your name*";
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = "Please enter a valid email address*";
        }

        // Phone validation
        if (!/^\d{10}$/.test(phone)) {
            errors.phone = "Please enter a 10-digit phone number*";
        }

        this.setState({
            errors,
            isSubmitDisabled: Object.keys(errors).length > 0
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state);
    };

    saveData = async (e) => {

        console.log(e, "Data is saving");

        e.preventDefault();

        const { email, username, phone, message } = this.state;

        const res = await fetch('http://localhost:8000/submit', {
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
            this.setState({ show: true, email: '', username: '', phone: '', message: '' });
            console.log('Data saved');
        }

    }


    sendEmail = async (e) => {
        e.preventDefault();

        const { email, username } = this.state;

        const res = await fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, username
            }),
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log('error');
        } else {
            this.setState({ show: true, email: '', username: '' });
            console.log('Email sent');
        }
    };




    render() {


        const { isSubmitDisabled, errors } = this.state;

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
                                                        <li><Link to={'/#'}>Health Risk Assessment</Link></li>
                                                        {/* <li><Link to={'/#'}>Experience Center</Link></li> */}

                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul>
                                                        <li><a href={'/about-us'}>About us</a></li>
                                                        <li><a href={'/leadership'}>Board of Directors</a></li>
                                                        <li><a href={'/team'}>Clinical Team</a></li>
                                                        <li><Link to={'/#'}>Media</Link></li>
                                                        <li><a href={'/blog'}>Blogs</a></li>

                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul>


                                                        <li><a href={'/career'}>Careers</a></li>
                                                        <li><a href={'/contact-us'}>Contact</a></li>
                                                        <li><a href={'/#'}>Terms & Conditions</a></li>
                                                        <li><a href={'/#'}>FAQ</a></li>
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
                                            <div class="contact-form">
                                                <form method="post" onSubmit={e => { this.sendEmail(e); this.saveData(e) }} action="#" id="contact-form">
                                                    <div class="row clearfix">

                                                        <div class="col-md-12 form-group">
                                                            <label for="email" style={{ marginLeft: 20 + '%' }}>Get in touch with us</label>
                                                            <input
                                                                type="text"
                                                                name="username"
                                                                value={this.state.username}
                                                                onChange={e => this.handleChange(e)}
                                                                id="name"
                                                                placeholder="Name*"
                                                                required=""
                                                                className='inputfooter'
                                                            />
                                                            {errors.username && <div className="error">{errors.username}</div>}

                                                        </div>
                                                        <div class="col-md-12 form-group">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                value={this.state.email}
                                                                onChange={e => this.handleChange(e)}
                                                                id="email"
                                                                placeholder="Email ID"
                                                                required=""
                                                                className='inputfooter'
                                                            />
                                                            {errors.email && <div className="error">{errors.email}</div>}
                                                        </div>
                                                        <div class="col-md-12 form-group">
                                                            <button
                                                                disabled={isSubmitDisabled}
                                                                onSubmit={e => this.handleSubmit(e)}
                                                                class="theme-btn btn-style-one footer-btn"
                                                                type="submit"
                                                                name="submit-form"
                                                            ><span class="btn-title">SUBMIT</span></button>
                                                        </div>

                                                    </div>
                                                </form>
                                            </div>
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


            </>
        );
    }
}

export default Footer;