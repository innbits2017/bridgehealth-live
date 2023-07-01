import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';

const aboutbg = require('./../../assets/images/shape/Lab-tests.png');
class lab_tests extends Component {
    componentDidMount() {
        document.title = 'Lab Tests | Bridge Health';
    }


    render() {
        return (
            <>
                <Header />
                <section class="internalpage internalpageresponsive style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">

                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblack'> Diagnostics done the  </span><br></br>
                                    <span className='headeingcolorblue'> right way</span>

                                </h2>
                                <h3 className='textleft marginTop40'>
                                    Personalized Lab Testing Solutions                                </h3>
                            </div>
                            {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                            <div class="btn-box btn5">

                                <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                            </div>


                        </div>

                    </div>
                </section>

                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/lab1.png')} alt="" className='width100 marginTop40reverse' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title squrebox">
                                        <p className='font22'>
                                            The first step to treating any condition is <span className='headeingcolorblue'>identification</span>. Lab tests are essential in this regard as they help to accurately examine a patient’s health profile and detect abnormalities or warning signs of many adverse health conditions,  <span className='headeingcolorblue'>paving the way for right treatment. </span>
                                        </p>

                                    </div>
                                    <div class="btn-box text-center btn5">
                                        {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                        <ContactForm buttonText="BOOK NOW" popupPosition="left" />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section class="">


                    <section>
                        <div class="image-wrapper">
                            <div class="image-one">
                                <img src={require('../../assets/images/shape/labtext.png')} alt="" className='width100' />
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="contact-form-area">

                                <div class="sec-title cont-box martobutton">
                                    {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                    <p className='font22'>
                                        At Bridge Health, we have a  <span className='headeingcolorblue'>state-of-the-art diagnostic facility.</span> We offer a <span className='headeingcolorblue'>comprehensive range </span>of clinical laboratory tests and profiles for the prediction, early detection, diagnostic screening, confirmation and/or monitoring of diseases and health conditions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>
                {/* <section>
                    <div class="image-wrapper">
                        <div class="image-one">
                            <img src={require('../../assets/images/shape/lab2.png')} alt="" className='labwidth' />
                        </div>
                    </div>
                </section> */}
                <section class="team-section">
                    <div class="auto-container">
                        <h2 className='labtitle'>
                            <span className='headeingcolorblack'> What We </span>
                            <span className='headeingcolorblue'>  Offer</span>
                        </h2>
                    </div>
                    {/* About Section Two */}
                    <section class="">
                        <div class="auto-container">
                            <div class="row align-items-center">
                                 <div class="col-lg-7">
                                    <div class="content-box">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <ul className='listicon'>
                                                    <li>
                                                        CBC
                                                    </li>
                                                    <li>
                                                        Blood Group And Type
                                                    </li>
                                                    <li>
                                                        Lipid Profile
                                                    </li>
                                                    <li>
                                                        Diabetic Profile
                                                    </li>
                                                    <li>
                                                        Liver Function Test-LFT
                                                    </li>
                                                    <li>
                                                        Renal Profile
                                                    </li>
                                                    <li>
                                                        Serum Electrolytes
                                                    </li>
                                                    <li>
                                                        Urine Routine
                                                    </li>

                                                </ul>
                                            </div>
                                            <div class="col-lg-6">
                                                <ul className='listicon'>
                                                    <li>
                                                        Creatine ration
                                                    </li>
                                                    <li>
                                                        Vitamin Profile
                                                    </li>
                                                    <li>
                                                        Thyroid Profile
                                                    </li>
                                                    <li>
                                                        Bone Density
                                                    </li>
                                                    <li>
                                                        Oncology Panel
                                                    </li>
                                                    <li>
                                                        Stool Tests
                                                    </li>
                                                    <li>
                                                        Cultures
                                                    </li>
                                                    <li>
                                                        Radiology
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-lg-5">
                                            <img src={require('../../assets/images/shape/lab3.png')} alt="" className='width100' />
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
                                            Adolescent Health Check
                                        </li>
                                        <li>
                                            Adult Health Check
                                        </li>
                                        <li>
                                            Executive Male/Female
                                        </li>
                                        <li>
                                            Master Health Check
                                        </li>
                                        <li>
                                            Comprehensive Health Check
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                    <ul className='listicon'>
                                        <li>
                                            Preemployment Health Check
                                        </li>
                                        <li>
                                            Intl. Travel Health Check
                                        </li>
                                        <li>
                                            Golfers Health Check
                                        </li>
                                        <li>
                                            Elderly Health Check
                                        </li>
                                        <li>
                                            IT & ITes Health Check
                                        </li>
                                    </ul>
                            </div>
                            <div class="col-lg-4">
                                <ul className='listicon'>
                                        <li>
                                            Cardiac Health Check
                                        </li>
                                        <li>
                                            Oncology Health Check
                                        </li>
                                        <li>
                                            Diabetic Male/Female
                                        </li>
                                        <li>
                                            Hypertension Health Check
                                        </li>
                                        <li>
                                            Disease Specific Panels
                                        </li>
                                    </ul>
                                </div>
                        </div>

                        <div class="btn-box text-center btn5">
                            <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                        </div>
                    </div>
                </section>


                <section class="">

                    <div class="auto-container">
                    <div class="row align-items-center">
                            <div class="col-lg-6">
                                        <img src={require('../../assets/images/shape/lab5.png')} alt="" className='' />
                            </div>

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <div class="auto-container">
                                        <div class="">
                                            <h2 className='header1'>
                                                <span className='headeingcolorblack'> The</span>
                                                <span className='headeingcolorblue'>  Bridge Health</span>
                                                <span className='headeingcolorblack'> Advantage </span>
                                            </h2>
                                        </div>

                                    </div>
                                    <ul className='listicon'>
                                        <li>
                                            Specially designed labs suitable for individuals of all age groups
                                        </li>
                                        <li>
                                            Customized panel of tests developed under the guidance of expert consulting doctors
                                        </li>
                                        <li>
                                            Highly qualified lab employees with extensive experience
                                        </li>
                                        <li>
                                            Extremely strict quality control through regular maintenance and calibration of machines
                                        </li>
                                        <li>
                                            Frequent training of technicians and adoption of fully automated machines
                                        </li>
                                        <li>
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
                            {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                            <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                        </div>
                    </div>
                </section>



                <Footer />
            </>
        )
    }
}
export default lab_tests;