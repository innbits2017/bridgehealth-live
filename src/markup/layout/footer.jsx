import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
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
                                                <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                                    <div class="row clearfix">

                                                        <div class="col-md-12 form-group">
                                                            <label for="email" style={{ marginLeft: 20 + '%' }}>Get in touch with us</label>
                                                            <input type="text" name="name" id="name" placeholder="Name*" required="" className='inputfooter' />
                                                        </div>
                                                        <div class="col-md-12 form-group">
                                                            <input type="email" name="email" id="email" placeholder="Email ID" required="" className='inputfooter' />
                                                        </div>
                                                        <div class="col-md-12 form-group">
                                                            <button class="theme-btn btn-style-one footer-btn" type="submit" name="submit-form"><span class="btn-title">SUBMIT</span></button>
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