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

class diet_and_nutrition extends Component {


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
                                                <span className='headeingcolorblack'> EAT RIGHT.  </span> <br></br><span className='headeingcolorblue'>LIVE RIGHT. </span> </h2>
                                            <h3 className='textleft marginTop40'>Talk to our clinical nutritionists<br></br> and start eating healthy
                                            </h3>
                                        </div>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>


                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one">
                                            <img src={require('../../assets/images/shape/b2cmembership.png')} alt="" className='imgwidth' />
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
                                        <img src={require('../../assets/images/shape/nu3.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span>

                                        </h2>
                                        <p>
                                            It’s no secret that eating a balanced diet is the key to a longer and healthier life. Therefore, it’s important to understand that making wise changes in your diet could improve your health. Having paroper knowledge about which foods to consume and limit or avoid is the first step in eating healthy.
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

                <section class="contact-section">

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


                                    {/* <div class="contact-form">

                                        <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                            <div class="row clearfix">



                                                <div class="col-md-12 form-group" style={{ marginLeft: 15 + 'rem' }}>
                                                    <button class="theme-btn btn-style-one" type="submit" name="submit-form">
                                                        <span class="btn-title" >Say YES!</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="team-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='header1'>
                                <span className='headeingcolorblack'> What We </span>
                                <span className='headeingcolorblack1'>  Offer</span>
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
                                                <img className='listicon2' src={require('../../assets/images/shape/nu6.png')} alt="" />
                                                Reduce the risk of diseases like diabetes, heart disease, kidney disease, hypertension, PCOS, and thyroid through diet modification plans
                                            </li>
                                            <li>
                                                <img className='listicon2' src={require('../../assets/images/shape/nu7.png')} alt="" />
                                                Weight management for maintaining a healthy BMI
                                            </li>
                                            <li>
                                                <img className='listicon2' src={require('../../assets/images/shape/nu8.png')} alt="" />
                                                Reverse prediabetes status with activity & specific diet plan
                                            </li>
                                            <li>
                                                <img className='listicon2' src={require('../../assets/images/shape/nu9.png')} alt="" />
                                                Maintain a healthy lifestyle and reduce stress levels by including the right nutrients in meals
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
                                            <img src={require('../../assets/images/shape/nu5.png')} alt="" />
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
                                        <img src={require('../../assets/images/shape/nu10.png')} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <div class="auto-container">
                                        <div class="sec-title text-center">
                                            <h2 className='header1'>
                                                <span className='headeingcolorblack'> The</span>
                                                <span className='headeingcolorblack1'>  Bridge Health</span>
                                                <span className='headeingcolorblack'> Advantage </span>
                                            </h2>
                                        </div>

                                    </div>
                                    <ul className='listicon'>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Inclusion of the right mix of macro & micronutrients based on Bridge Health’s nutritional approach to lower the insulin needed by the body
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Inclusion of Biota nutrients (prebiotics and probiotics) to strengthen your gut microbiomes
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Inclusion of natural antioxidants, anti-inflammatory nutrients, and adaptogens to reduce oxidative stress and inflammation
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Inclusion of organic, unprocessed & toxin-free ingredients to ensure no harmful additives enter your system
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Inclusion of the right amount of all essential nutrients to ensure good health and satisfy the respective dietary reference intakes.
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
                                <span className='headeingcolorblack'> The Secret to a</span>
                                <span className='headeingcolorblack1'>  Healthier Life</span>
                                <span className='headeingcolorblack'> is a </span>
                                <span className='headeingcolorblack1'>  Healthier Diet!</span>
                            </h2>
                        </div>
                        <button class="theme-btn1 btn-style-one1" type="submit" name="submit-form">
                            <span class="btn-title1">Book Now</span></button>
                    </div>
                </section>
                {/* <section>
                    <div class="btn-box">
                        <a class="theme-btn btn-style-one" href="/demo/fianandox/">
                            <span class="btn-title">BOOK NOW</span>
                        </a>
                    </div>
                </section> */}


                <Footer />
            </>
        )
    }
}
export default diet_and_nutrition;