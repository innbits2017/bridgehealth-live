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

class yoga_Assessment extends Component {


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
                                                <span className='headeingcolorblack'> Unite your </span> <span className='headeingcolorblue'>Mind, Body & Soul </span> </h2>
                                            <h3 className='textleft marginTop40'>Connect with our Yoga Therapists
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
                                        <img src={require('../../assets/images/shape/y1.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span>

                                        </h2> */}
                                        <p>
                                        Practiced for thousands of years, yoga has several benefits on your overall health. Through a series of breathing exercises and poses, yoga improves blood flow and helps you focus your mind. This helps you obtain inner peace and happiness which leads to better health.
                                        </p>
                                        <p>
                                        The yoga therapists at Bridge Health are trained in yogic counseling, lifestyle and nutrition. They will assist you in developing a yoga regimen which helps you focus on improving the functionality of your mind, body, and breath. 
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
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='header2'>
                                <span className='headeingcolorblack'> What We </span>
                                <span className='headeingcolorblue'>  Offer</span>
                            </h2>
                        </div>

                    </div>
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
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for general Wellbeing
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Mental Illness
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Pregnancy
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Therapeutic Yoga
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Cardiovascular Disorders
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Respiratory Disorders
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Gastrointestinal Disorders
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Joints and Muscles
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Urogenital Disorders
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Mental Disorders
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
                                            <img src={require('../../assets/images/shape/y2.png')} alt="" />
                                            {/* <img src={require('../../assets/images/shape/video2.gif')} alt="" /> */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>





                {/* <!-- Contact Section --> */}
                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/y4.png')} alt="" />
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
                                            Experienced yoga therapists
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Customized plans and routines
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Regular progress updates
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            General wellbeing and mental fitness programs
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Therapeutic yoga for effective disease management
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
                                <span className='headeingcolorblack'> Live a more spiritually  </span>
                                <span className='headeingcolorblack1'> enriching</span>
                                <span className='headeingcolorblack'> life!</span>
                                
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
export default yoga_Assessment;