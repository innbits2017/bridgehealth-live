import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import GoogleMaps from "simple-react-google-maps";

const aboutbg = require('./../../assets/images/background/contactback.png');




class Contact extends Component {


    render() {
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
                                    <div class="info-column col-lg-6">
                                        <div class="">
                                            <h3>Email Address</h3>
                                            <ul>
                                                <li><Link to={'/mailto:info@webmail.com'}>info@webmail.com</Link></li>
                                                <li><Link to={'/mailto:info@webmail.com'}>jobs@exampleco.com</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="info-column col-lg-6">
                                    <div class="contact-form-area">
                            
                            {/* <!-- Contact Form--> */}
                            <div class="contact-form">
                                <form method="post" action="#" id="contact-form">
                                    <div class="row clearfix">                                    
                                        <div class="col-md-6 form-group">
                                            <label for="name" className='contactlebel'>Name</label>
                                            <input type="text" name="username" id="name" placeholder="Full name" required="" className='inputcontact'/>
                                            <i class="fas fa-user"></i>
                                        </div>
                                        
                                        <div class="col-md-6 form-group">
                                            <label for="email" className='contactlebel'>Company Name</label>
                                            <input type="email" name="email" id="email" placeholder="" required=""  className='inputcontact'/>
                                            <i class="fas fa-envelope"></i>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <label for="name" className='contactlebel'>Email</label>
                                            <input type="text" name="username" id="name" placeholder="xyz@gmail.com" required="" className='inputcontact'/>
                                            <i class="fas fa-user"></i>
                                        </div>
                                        
                                        <div class="col-md-6 form-group">
                                            <label for="email" className='contactlebel'>Phone no.</label>
                                            <input type="email" name="email" id="email" placeholder="" required=""  className='inputcontact'/>
                                            <i class="fas fa-envelope"></i>
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <label for="message" className='contactlebel'>Message</label>
                                            <textarea name="message" id="message" placeholder="I  would like to talk about............."  className='inputcontact'></textarea>
                                            <i class="fas fa-edit"></i>
                                        </div>
                
                                        <div class="col-md-12 form-group">
                                            <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Get In Touch</span></button>
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