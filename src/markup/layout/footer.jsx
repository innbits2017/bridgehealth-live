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
        };
        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {

        const { name, value } = event.target;
        this.setState({ ...this.state, [name]: value });
        console.log(event)
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


        const { username, email } = this.state;
        const isSubmitDisabled = username === '' || email === ''

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
                                                        <li><Link to={'/#'}>Our Services</Link></li>
                                                        <li><Link to={'/#'}>Memberships</Link></li>
                                                        <li><Link to={'/#'}>Health Risk Assessment</Link></li>
                                                        <li><Link to={'/#'}>Experience Center</Link></li>

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


                                                        <li><Link to={'/#'}>Careers</Link></li>
                                                        <li><a href={'/contact-us'}>Contact</a></li>
                                                        <li><Link to={'/#'}>Terms & Conditions</Link></li>
                                                        <li><Link to={'/#'}>FAQ</Link></li>
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
                                                                className='inputfooter' />
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
                                                                className='inputfooter' />
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
                            <div class="copyright">Copyright © 2022 Bridge Health, All Rights Reserved</div>
                        </div>
                    </div>
                </footer>


            </>
        );
    }
}

export default Footer;