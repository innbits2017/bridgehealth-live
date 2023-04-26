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

class pharmacy extends Component {


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
                                                <span className='headeingcolorblack'> All your  </span>
                                                <span className='headeingcolorblue'> Medicinal <br></br>Needs </span>
                                                <span className='headeingcolorblack'> In One Place</span>
                                            </h2>
                                            <h3 className='textleft marginTop40'>
                                                Order your medicines through <br></br>Bridge Health Pharmacy
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
                                        <img src={require('../../assets/images/shape/ph1.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span>

                                        </h2> */}
                                        <p>
                                            It’s important to always keep an adequate supply of the medicines you need. This is especially important if you suffer from any chronic conditions. The availability of a fully- stocked pharmacy near your residence is considered to be very important in case you need medicines urgently.
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

                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row pharmacy">


                            <div class="col-lg-6" style={{ marginTop: 3 + 'rem' }}>
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        {/* <h2> <span className='headeingcolorblack1'>A Healthy Diet to the Rescue! </span>

                                        </h2> */}

                                        <p>
                                            Get everything you need at the Bridge Health pharmacy. Our pharmacy is well-stocked with authentic prescription medicines and over-the-counter medicines at affordable prices. Bridge Health operates its pharmacy business through both wholesale and retail pharmacy formats.
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
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/ph2.png')} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* <section class="team-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='header2'>
                                <span className='headeingcolorblack'> What We </span>
                                <span className='headeingcolorblue'>  Offer</span>
                            </h2>
                        </div>

                    </div>
                    
                    <section class="">
                        <div class="auto-container">
                            <div class="row align-items-center">



                                <div class="col-lg-6">
                                    <div class="content-box">
                                       
                                        <ul className='listicon'>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Physiotherapy for Musculo-Skeletal & Ortho Conditions
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Physiotherapy for Women Health which inludes Pelvic Floor Weakness, Pre and Post Natal Cases
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Physiotherapy for Elderly Care/Geriatrics
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Physiotherapy for Neurological Conditions
                                            </li>
                                            <li>
                                                <img className='listicon3' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Physiotherapy for Post-Operative Rehab
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
                                            <img src={require('../../assets/images/shape/p2.png')} alt="" />
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section> */}

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
                                        <img src={require('../../assets/images/shape/ph3.png')} alt="" />
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
                                            Easy Booking through our onsite personnel
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Free home delivery of medicines*
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Easy order bookings through email, WhatsApp & direct call
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Emergency & institutional medical supplies available
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            All branded & generic medicines available
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Free mobile-based personal health records access
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Pharmacy opening and running support inside corporate and resident welfare associations
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
                                <span className='headeingcolorblack'>Get your medicine     </span>
                                <span className='headeingcolorblue'> anytime, anywhere! </span>


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
export default pharmacy;