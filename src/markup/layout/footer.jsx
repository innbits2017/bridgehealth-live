import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <>
                <footer class="main-footer">
                    <div class="auto-container">

                        <div class="widgets-section">
                            <div class="row clearfix">


                                <div class="col-lg-4">
                                    <div class="footer-widget logo-widget">
                                        <div class="widget-content">
                                            <div class="footer-logo">
                                                <Link to="index.html"><img class="" src={require('../../assets/images/logo.png')} alt="" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-lg-4">
                                    <div class="footer-widget links-widget">
                                        <div class="widget-content">
                                            <div class="row">
                                              <div class="col-md-6">
                                                    <ul>
                                                        <li><Link to={'/#'}>Home</Link></li>
                                                        <li><Link to={'/#'}>Services</Link></li>
                                                        <li><Link to={'/#'}>Pricing</Link></li>
                                                        <li><Link to={'/#'}>About us</Link></li>
                                                        <li><Link to={'/#'}>Pricing</Link></li>
                                                        <li><Link to={'/#'}>Contact</Link></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-6">
                                                    <ul>
                                                  

                                                        <li><Link to={'/#'}>  Terms of Use</Link></li>
                                                        <li><Link to={'/#'}>Privacy Policy</Link></li>
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
                                <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                    <div class="row clearfix">                                    
                                      
                                        <div class="col-md-12 form-group">
                                            <label for="email">Get in touch with us</label>
                                            <input type="email" name="email" id="email" placeholder="Enter email here......" required=""/>
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Submit</span></button>
                                        </div>
                                    
                                    </div>
                                </form>
                            </div>
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