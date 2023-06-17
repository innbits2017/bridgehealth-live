import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import FooterFormValidation from '../element/footer-form-validation';
$(document).ready(function(){
    $('.toggle').click(function(){
      $('.sidebar-contact').toggleClass('active')
      $('.toggle').toggleClass('active')
    })
    })
 $(document).ready(function(){
    $('.toggle2').click(function(){
      $('.sidebar-contact').toggleClass('active')
      $('.toggle2').toggleClass('active')
    })
    })
   var wasSubmitted = false;
    function validateForm() {
if(!wasSubmitted) {
   wasSubmitted = true;
   return wasSubmitted;
 }
 return false;
   let x = document.forms["name"]["name"].value;
   if (x == "") {
       alert("Name must be filled out");
  return false;
  }
  let phone = document.forms["phone"]["phone"].value;
   if (phone == "") {
       alert("phone must be filled out");
  return false;
}
}

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
                                                        <li><a href={'/our-services'}>Our Services</a></li>
                                                        <li><a href={'/personal-membership-program'}>Personal Memberships</a></li>
                                                        <li><a href={'/corporate-membership-program'}>Corporate Memberships</a></li>
                                                        <li><a href={'/#'}>Health Risk Assessment</a></li>
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
            <div class="talkTo"> <img src={require('../../assets/images/Group53.png')} alt=""/></div>
         </div>
         <div class="scroll">
            <div class="form-body">
               <div class="row">
                  <div class="form-holder">
                     <div class="form-content">
                        <div class="form-items">
                           <form action="forms/contact.php" method="POST" class="requires-validation" onsubmit="return validateForm()">
                              <div class="col-md-12 mb-2">
                                 <input class="form-control inputWidth" type="text" name="name" id="validationTooltip01" placeholder="Name" required></input>
						
                              </div>
                              <div class="col-md-12 mb-2">
                                 <input class="form-control inputWidth" type="number" name="phone" id="validationServer05" placeholder="Email" required></input>
                              </div>
                              <div class="col-md-12 mb-2">
                                 <input class="form-control inputWidth" type="number" name="phone" id="validationServer05" placeholder="Phone No" required></input>
                              </div>
                              <div class="col-md-12 mb-2">
                                 <textarea name="message" placeholder="Message here.." class="inputWidth"></textarea>
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