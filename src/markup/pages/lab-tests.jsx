import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/shape/Lab-tests.png');
class lab_tests extends Component {


    render() {
        return (
            <>
                <Header />
                <section class="internalpage style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">

                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblack'> Diagnostics done the  </span><br></br>
                                    <span className='headeingcolorblue'> right way</span>

                                </h2>
                                <h3 className='textleft marginTop40'>
                                    Get your lab tests done through us
                                </h3>
                            </div>
                            <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>


                        </div>

                    </div>
                </section>

                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/lab1.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox">
                                        <p className='font22'>
                                            The first step to treating any health condition is <span className='headeingcolorblue'>identification</span>. Lab tests are essential in this regard as they help to accurately examine a patient’s health profile and detect abnormalities or warning signs of many adverse health conditions,  <span className='headeingcolorblue'>paving the way for treatment </span>to begin swiftly.
                                        </p>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">BOOK NOW</span></button>

                                    </div>



                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section>
                    <div class="image-wrapper">
                        <div class="image-one">
                            <img src={require('../../assets/images/shape/lab2.png')} alt="" className='labwidth' />
                        </div>
                    </div>
                </section>
                <section class="team-section">
                    <div class="auto-container">
                        <h2 className='header2'>
                            <span className='headeingcolorblack'> What We </span>
                            <span className='headeingcolorblue'>  Offer</span>
                        </h2>
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
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <ul className='listicon'>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        CBC
                                                    </li>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Blood Group And Type
                                                    </li>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Lipid Profile
                                                    </li>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Diabetic Profile
                                                    </li>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Liver Function Test-LFT
                                                    </li>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Renal Profile
                                                    </li>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Serum Electrolytes
                                                    </li>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Urine Routine
                                                    </li>

                                                </ul>
                                            </div>
                                            <div class="col-lg-6">
                                                <ul className='listicon'>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Creatine ration
                                                    </li>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Vitamin Profile
                                                    </li>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Thyroid Profile
                                                    </li>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Bone Density
                                                    </li>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Oncology Panel
                                                    </li>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Stool Tests
                                                    </li>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Cultures
                                                    </li>
                                                    <li>
                                                        <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                        Radiology
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="btn-box martop90">
                                            <a class="theme-btn btn-style-one" href="#">
                                                <span class="btn-title">BOOK NOW</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one image-two">
                                            <img src={require('../../assets/images/shape/lab3.png')} alt="" />
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
                        <div class="sec-title text-center">
                            <h2 className='header1'>
                                <span className='headeingcolorblack'> Packages Offered By </span>
                                <span className='headeingcolorblue'>   Bridge Health Lab</span>

                            </h2>
                        </div>

                    </div>
                    <div class="auto-container">
                        <div class="row">

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
                        <button class="theme-btn1 btn-style-one1" type="submit" name="submit-form">
                            <span class="btn-title1">Book Now</span></button>
                    </div>
                </section>


                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/lab5.png')} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <div class="auto-container">
                                        <div class="">
                                            <h2 className='header1'>
                                                <span className='headeingcolorblack'> The</span>
                                                <span className='headeingcolorblue'>  Bridge Health</span><br></br>
                                                <span className='headeingcolorblack'> Advantage </span>
                                            </h2>
                                        </div>

                                    </div>
                                    <ul className='listicon'>
                                        <li className='listicon'>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Specially designed labs suitable for individuals of all age groups
                                        </li>
                                        <li className='listicon'>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Customized panel of tests developed under the guidance of expert consulting doctors
                                        </li>
                                        <li className='listicon'>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Highly qualified lab employees with extensive experience
                                        </li>
                                        <li className='listicon'>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Extremely strict quality control through regular maintenance and calibration of machines
                                        </li>
                                        <li className='listicon'>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Frequent training of technicians and adoption of fully automated machines
                                        </li>
                                        <li className='listicon'>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            The lab is as per NABL standard
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
                                <span className='headeingcolorblack'>Start your   </span>
                                <span className='headeingcolorblue'> journey </span>
                                <span className='headeingcolorblack'> towards a happier life!</span>

                            </h2>
                        </div>
                        <div class="btn-box text-center btn5">
                            <a class="theme-btn btn-style-one" href="#">
                                <span class="btn-title">BOOK NOW</span>
                            </a>
                        </div>
                    </div>
                </section>



                <Footer />
            </>
        )
    }
}
export default lab_tests;