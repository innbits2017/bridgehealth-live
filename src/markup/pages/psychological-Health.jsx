import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Brand1 from '../element/brand1'
import VideoPopup1 from '../element/video-popup1';
import ServiceFilter1 from '../element/service-filter1'
import b2c_page from '../pages/b2c-page'

const aboutbg = require('./../../assets/images/shape/b2c2.png');

class psychological_Health extends Component {


    render() {
        return (
            <>
                <Header />

                <section class="team-section padding">
                    {/* About Section Two */}
                    <section class="container-fluid">
                        <div class="container-fluid">
                            <div class="row align-items-center">

                                <div class="col-lg-6">
                                    <div class="content-box">

                                        <div class="sec-title text-center textleft">
                                            <h2 className='textleft'>
                                                <span className='headeingcolorblack'> Good Health starts  </span><br></br>
                                                <span className='headeingcolorblack'> with a </span>
                                                <span className='headeingcolorblue'> Healthy Mind </span> 
                                                
                                            </h2>
                                            <h3 className='textleft marginTop40'>
                                                Talk to our clinical psychologists today
                                            </h3>
                                        </div>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>


                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one">
                                            <img src={require('../../assets/images/shape/image2.png')} alt="" className='imgwidth' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                {/* <b2c_page /> */}



                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/ps1.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span>

                                        </h2> */}
                                        <p>
                                        Unlike physical health issues,<span className='headeingcolorblue'> psychological issues are not as visible. </span>They are generally ignored and are not given as much importance due to societal stigmas. However, if these are ignored for too long, they can affect your intellectual capabilities and overall behaviour.

                                        </p>
                                        

                                    </div>


                                    <div class="contact-form">

                                        <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                            <div class="row clearfix">



                                                <div class="col-md-12 form-group" style={{ marginLeft: 5 + 'rem' }}>
                                                    <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">BOOK NOW</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <section>
                    <div class="image-wrapper">
                        <div class="image-one">
                            <img src={require('../../assets/images/shape/lab2.png')} alt="" />
                        </div>
                    </div>
                </section> */}

                {/* <section class="contact-section">

                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/nu4.png')} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4" style={{ marginTop: 10 + 'rem' }}>
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        <h2> <span className='headeingcolorblack1'>A Healthy Diet to the Rescue! </span>

                                        </h2>

                                        <p>
                                            At Bridge Health, our dieticians are specialists in Medical Nutrition Therapy (MNT), an evidence-based approach to treating chronic conditions through the use of a tailored diet.
                                        </p>

                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}

                <section class="team-section">
                    {/* <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='header2'>
                                <span className='headeingcolorblack'> What We </span>
                                <span className='headeingcolorblue'>  Offer</span>
                            </h2>
                        </div>

                    </div> */}
                    {/* About Section Two */}
                    <section class="">
                        <div class="auto-container">
                            <div class="row align-items-center">



                                <div class="col-lg-6">
                                    <div class="content-box">
                                        {/* <div class="sec-title">
                                            <div class="text" style={{marginRight: 40 + 'px'}}>Predict the onset of
                                                <span className='headeingcolorblack'> hidden illnesses</span> and health conditions, prevent them by undergoing tests and check-ups, and delay the onset of chronic illness.
                                            </div>
                                        </div> */}
                                        <ul className='listicon'>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/ps2.png')} alt="" />
                                                At <span className='headeingcolorblue'>Bridge Health, </span>our psychologists are trained to understand your mental state. 
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/ps2.png')} alt="" />
                                                They help you manage your stress or any mental health difficulties that you are facing.
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/ps2.png')} alt="" />
                                                In doing so, you will be able to improve your mental well-being which has a positive effect on your overall physical health.
                                            </li>
                                            
                                        </ul>

                                        <div class="btn-box">
                                            <a class="theme-btn btn-style-one" href="/demo/fianandox/">
                                                <span class="btn-title">BOOK NOW</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one image-two">
                                            <img src={require('../../assets/images/shape/ps3.png')} alt="" />
                                            {/* <img src={require('../../assets/images/shape/video2.gif')} alt="" /> */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/* <!-- Contact Section --> */}
                {/* <section class="contact-section">

                    <div class="auto-container">
                        <div class="row">

                            <div class="auto-container">
                                <div class="sec-title text-center">
                                    <h2 className='header1'>
                                        <span className='headeingcolorblack'> Packages Offered By </span>
                                        <span className='headeingcolorblue'>   Bridge Health Lab</span>

                                    </h2>
                                </div>

                            </div>

                            <div class="col-lg-4">
                                <div class="contact-form-area">

                                    <ul className='listicon'>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            Adolescent Health Check
                                        </li>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            Adult Health Check
                                        </li>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            Executive Male/Female
                                        </li>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            Master Health Check
                                        </li>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            Comprehensive Health Check
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="contact-form-area">

                                    <ul className='listicon'>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            Preemployment Health Check
                                        </li>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            Intl. Travel Health Check
                                        </li>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            Golfers Health Check
                                        </li>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            Elderly Health Check
                                        </li>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            IT & ITes Health Check
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="contact-form-area">

                                    <ul className='listicon'>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            Cardiac Health Check
                                        </li>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            Oncology Health Check
                                        </li>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            Diabetic Male/Female
                                        </li>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            Hypertension Health Check
                                        </li>
                                        <li>
                                            <img className='listicon5' src={require('../../assets/images/shape/lab4.png')} alt="" />
                                            Disease Specific Panels
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <button class="theme-btn2 btn-style-one1" type="submit" name="submit-form">
                            <span class="btn-title1">Book Now</span></button>
                    </div>
                </section> */}


                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/ps4.png')} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <div class="auto-container">
                                        <div class="sec-title text-center">
                                            <h2 className='header1'>
                                                <span className='headeingcolorblack'> The</span>
                                                <span className='headeingcolorblue'>  Bridge Health</span>
                                                <span className='headeingcolorblack'> Advantage </span>
                                            </h2>
                                        </div>

                                    </div>
                                    <ul className='listicon'>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Management of eating disorders
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Pre and post-pregnancy mental well-being
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            CBT (Cognitive Behavioural Therapy)
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Mindfulness/Meditation
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Women’s supportive therapy
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='header1'>
                                <span className='headeingcolorblack'>A  </span>
                                <span className='headeingcolorblue'> Healthy </span>
                                <span className='headeingcolorblack'> Mind leads to a  </span>
                                <span className='headeingcolorblue'> Happy </span>
                                <span className='headeingcolorblack'> Body!   </span>
                                

                            </h2>
                        </div>
                        <button class="theme-btn1 btn-style-one1" type="submit" name="submit-form">
                            <span class="btn-title1">Book Now</span></button>
                    </div>
                </section>



                <Footer />
            </>
        )
    }
}
export default psychological_Health;