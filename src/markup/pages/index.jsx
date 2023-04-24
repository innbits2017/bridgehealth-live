import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Testimonial1 from '../element/testimonial1';
import HomeSlider1 from './../element/home-slider1';
import { Button } from 'react-bootstrap';
import Testimonial2 from '../element/testimonial2';
const teambg1 = require('./../../assets/images/background/image-3.jpg');
const newsbg1 = require('./../../assets/images/background/image-4.jpg');
const wellcomebg1 = require('./../../assets/images/resource/image-1.jpg');

// var getSidebar = document.querySelector('nav');
// var getToggle = document.getElementsByClassName('toggle');
// for (var i = 0; i <= getToggle.length; i++) {
//     getToggle[i].addEventListener('click', function () {
//         getSidebar.classList.toggle('active');
//     });
// }

class Index extends Component {

    render() {
        return (
            <>



                <Header />
                <HomeSlider1 />
                {/* <!-- About --> */}

                <section class="team-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='fontwidth'>Confused about your health checks?<br></br>
                                <span className='headeingcolorblack'> Scan our </span>
                                <span className='headeingcolorblue'>BH Smart Guide!</span>
                            </h2>
                        </div>

                    </div>
                    {/* About Section Two */}
                    <section class="container-fluid">
                        <div class="container-fluid">
                            <div class="row align-items-center">

                                <div class="col-lg-6">
                                    <div class="content-box">
                                        <div class="sec-title">
                                            <div class="text">
                                            Developed by our in-house clinical expert's BH Smart Guide is a smarter way to understand what are the right diagnostic tests for you based on your current health status, family history and lifestyle choices.
                                            </div>
                                        </div>
                                        <div class="image-one">
                                            <img className='imgstyle' src={require('../../assets/images/shape/Section1.png')} alt="" />
                                            <img className='imgstyle1' src={require('../../assets/images/shape/Group3.png')} alt="" />
                                        </div>
                                        <div class="qr-text">
                                            {/* <img className='imgstyle1' src={require('../../assets/images/shape/Group3.png')} alt="" /> */}
                                            {/* <button class="scan-qr">Scan QR Code
                                                <a style={{ color: '#fff' }} href="#" title="Whatsapp"><i class="fab fa-whatsapp"></i></a>
                                            </button> */}
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one">
                                            <img src={require('../../assets/images/shape/Sequence-01.gif')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/* <!-- About --> */}

                <section class="team-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2> <span className=' headeingcolorblue'> Annual Preventive </span>
                                <span className='headeingcolorblack'>Health Plans</span></h2>
                            <h5 className='heading'>Membership-based integrated programs covering various aspects
                            </h5>
                        </div>

                    </div>
                    {/* About Section Two */}
                    <section class="">
                        <div class="auto-container">
                            <div class="row align-items-center">

                                <div class="col-lg-6">
                                    <div class="content-box">
                                        <div class="sec-title">
                                            <div class="text"> <span className='headeingcolorblue'>#BridgeTheGap</span> with our Annual Health Plans that are membership-based integrated programs covering everything from clinical assessments to consultations, lab tests to nutrition sessions, lifestyle management to emotional wellness and much more.
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-6 clmbackground">
                                    <div className='box'>
                                        <span>
                                            <img src={require('../../assets/images/shape/thumb.png')} alt="" />
                                        </span>
                                        <span className='textpara'>Personal  Membership Program</span>
                                    </div>
                                    <div className='box marginTop40'>
                                        <span className='textpara'>Corporate  Membership Program</span>
                                        <span>
                                            <img src={require('../../assets/images/shape/thumb1.png')} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section class="team-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='header1'>
                                <span className='headeingcolorblack'> PREDICT.</span> 
                                <span className='headeingcolorblue'>PREVENT.</span> 
                                 <span className='headeingcolorblack'>  DELAY.</span>
                            </h2>
                        </div>

                    </div>
                    {/* About Section Two */}
                    <section class="">
                        <div class="auto-container">
                            <div class="row align-items-center">


                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one image-two">
                                            <img  src={require('../../assets/images/shape/delay.png')} alt="" /> 
                                            {/* <img src={require('../../assets/images/shape/video2.gif')} alt="" /> */}
                                        </div>
                              
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="content-box">
                                        <div class="sec-title">
                                            <div class="text" style={{marginRight: 40 + 'px'}}>Predict the onset of
                                                <span className='headeingcolorblack'> hidden illnesses</span> and health conditions, prevent them by undergoing tests and check-ups, and delay the onset of chronic illness.
                                            </div>
                                        </div>
                                        <ul className='listicon'>
                                            <li>
                                            <img className='listicon1' src={require('../../assets/images/shape/favicon-logo1.png')} alt="" /> 
                                             Get a detailed assessment report
                                            </li>
                                            <li>
                                            <img className='listicon1' src={require('../../assets/images/shape/favicon-logo1.png')} alt="" />
                                                Health score built on 7 parameters
                                            </li>
                                            <li>
                                            <img className='listicon1' src={require('../../assets/images/shape/favicon-logo1.png')} alt="" />
                                                Pre and Post score comparisons
                                            </li>
                                        </ul>
                                        <div class="btn-box">
                                            <a class="theme-btn btn-style-one" href="/demo/fianandox/">
                                                <span class="btn-title">KNOW MORE</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section class="team-section expertiseback">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2> <span className='headeingcolorblack'>  Explore </span> <span className='headeingcolorblue'>Our Expertise</span></h2>
                            <h5 className='heading3'>From mental health and wellness to nutrition management, our services help <span className='headeingcolorblue'> #BridgeTheGap</span> between you and healthy living
                            </h5>
                        </div>

                    </div>
                    {/* About Section Two */}
                    <section class="">
                        <div class="auto-container">
                            <div class="row">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div className=''>
                                        <div class="grow bozhover">
                                            <img src={require('../../assets/images/shape/doctor.png')} alt="" />
                                            <h2 className='expertise'>Annual Preventive Health Plans</h2>

                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <img src={require('../../assets/images/shape/s1.png')} alt="" />
                                        <h2 className='expertise'>Chronic Care Programs</h2>

                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                                    </div>
                                </div>

                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <img src={require('../../assets/images/shape/s2.png')} alt="" />
                                        <h2 className='expertise'>Comprehensive Health Checks</h2>
                                        <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s3.png')} alt="" />
                                            <h2 className='expertise'>Doctor Consults</h2>
                                            <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s4.png')} alt="" />
                                            <h2 className='expertise'>Psychologist Consults</h2>
                                            <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s5.png')} alt="" />
                                            <h2 className='expertise'>Dental Consults</h2>
                                            <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s7.png')} alt="" />
                                            <h2 className='expertise'>Dermatology</h2>
                                            <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s8.png')} alt="" />
                                            <h2 className='expertise'>Ophthalmology</h2>
                                            <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s9.png')} alt="" />
                                            <h2 className='expertise'>Physiotherapy</h2>
                                            <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s10.png')} alt="" />
                                            <h2 className='expertise'>Elderly Care</h2>
                                            <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s11.png')} alt="" />
                                            <h2 className='expertise'>Lab Tests</h2>
                                            <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s12.png')} alt="" />
                                            <h2 className='expertise'>Diet and Nutrition</h2>
                                            <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s13.png')} alt="" />
                                            <h2 className='expertise'>Yoga Assessment and Coaching</h2>
                                            <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s14.png')} alt="" />
                                            <h2 className='expertise'>Fitness Assessment and Coaching</h2>
                                            <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s15.png')} alt="" />
                                            <h2 className='expertise'>Pharmacy</h2>
                                            <span>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s16.png')} alt="" />
                                            <h2 className='expertise'>Nursing At Home</h2>
                                            <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>


                {/* <!-- Testimonial Section --> */}
                <Testimonial2 />
                <Testimonial1 />

                {/* <!-- News Section --> */}
                <section class="auto-container3">
                    <div class="auto-container">

                        <div class="row">
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/shape/blog.png')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Blog heading</div>

                                        <h3><Link to={'/blog-details'}>What Does Your GI Score Indicate?</Link></h3>
                                        <div class="text">As a child, you were likely cautioned to limit your intake of sweets. Remember the warning not to go</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/shape/blog1.png')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Blog heading</div>

                                        <h3><Link to={'/blog-details'}>Myths And Facts About GI Foods</Link></h3>
                                        <div class="text">Carbohydrates have been villainized in recent years as the culprit for weight gain and even chronic diseases</div>
                                    </div>
                                </div>
                                <button class="theme-btn btn-style-one btnblog" type="submit" name="submit-form" style={{marginLeft: 16 + '%'}}>
                                    <span class="btn-title btnblog">READ ALL BLOGS</span></button>

                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/shape/blog3.png')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Blog heading</div>

                                        <h3><Link to={'/blog-details'}>Everything you need to know about Glycemic Index</Link></h3>
                                        <div class="text">Even with the world becoming more health-conscious, diseases seem to be on the rise. While you frantically</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <div class="button-txt">
                            <Button class="btn"></Button>
                        </div> */}

                    </div>
                </section>
                
                {/* <!-- Contact Section --> */}
                <section class="contact-section">
                    <section class="">
                        <div class="auto-container">
                            <div class="sec-title text-center">
                                <h2> <span className='headeingcolorblue'>REACH </span> <span className='headeingcolorblack'>OUT TO US</span><br></br>
                                    <p>Our health advisor is ready to answer your queries about what we do and how <br></br>we can help you take care of yourself and your loved ones better.</p>
                                </h2>
                            </div>

                        </div></section>
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img class="reachout" src={require('../../assets/images/shape/contact.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    {/* <!-- Contact Form--> */}
                                    <div class="contact-form">
                                        <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                            <div class="row clearfix">
                                                <div class="col-md-12 form-group">
                                                    <input type="text" name="username" id="name" placeholder="Name*" required="" />
                                                </div>

                                                <div class="col-md-6 form-group">
                                                    <input type="email" name="email" id="email" placeholder="Email*" required="" />
                                                </div>
                                                <div class="col-md-6 form-group">
                                                    <input type="email" name="email" id="email" placeholder="Phone." required="" />
                                                </div>

                                                <div class="col-md-12 form-group">
                                                    <textarea name="message" id="message" placeholder="Message"></textarea>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        type="checkbox" id="checkbox1" name="option1" value="good" />
                                                    <label class="form-check-label heading">
                                                        I agree that Bridge Health may contact me at the email address or phone number above.
                                                    </label>
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
                </section>

                <Footer />
            </>
        )
    }
}
export default Index;