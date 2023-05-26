import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Form from '../layout/inputform';

const aboutfair = require('./../../assets/images/shape/aboutback.png');
const aback = require('./../../assets/images/shape/aback.png');


class aboutUs extends Component {
    render() {
        return (
            <>
                <Header />

                <section class="internalpage style-two" style={{ backgroundImage: "url(" + aboutfair + ")" }}>
                    <div class="auto-container ">
                        <div class="content-box">

                            <div class="col-lg-12 aboutpage">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/apage.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>

                            <div className='aboutcont '>
                                <div className='aboutbox '>
                                    <h3>OUR VISION</h3>
                                    <p> Spread Happiness <br></br> Through Good Health</p>

                                </div>

                                <div className='aboutbox '>
                                    <h3 >OUR MISSION</h3>
                                    <p> Be Your Healthcare <br></br> Companion For Life</p>

                                </div>

                            </div>


                        </div>

                    </div>
                </section>


                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row">


                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox1">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            <span className='headeingcolorblue'>  Bridge Health</span>  is an integrated Medical & Digital Healthcare program designed to deliver Individualized Care Continuum proactively. This program is executed through well-curated and validated clinical protocols.
                                            The services are rendered with clinical outcomes being at the core of the program.
                                        </p>


                                    </div>


                                    <div class="contact-form">

                                        <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                            <div class="row clearfix">



                                                <div class="col-md-12 form-group" style={{ marginLeft: 14 + 'rem' }}>
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
                                        <img src={require('../../assets/images/shape/apage2.png')} alt="" className='width84' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-6" style={{ backgroundImage: "url(" + aback + ")" }}>
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/apage3.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox">
                                        <p className='font22'>
                                            With our in-house specialized clinical and support team along with our credentialed affiliate partners,
                                            we have put together a personalized physical and digital ecosystem for your continued wellbeing.
                                            The promise this program delivers is to make available a comprehensive and continuing Healthcare Companionship that is personalized for you and your family. While the program is predicated on prevention,
                                            it is also designed to provide Healthcare Help and Support as and when required.
                                        </p>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                <section class="contact-section heath-margin">

                    <div class="auto-container">
                        <div class="row">


                            <div class="col-lg-5">
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            We, at Bridge Health, believe that a proactive focus on personalized healthcare and swift curative actions to mitigate risks are of paramount importance to each one of us.
                                            Our journey is all about being your trusted <span className='headeingcolorblue'> “Healthcare Companion for Life”.</span>
                                        </p>


                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/apage2.png')} alt="" className='width84' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section >
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='header1'>
                                <span className='headeingcolorblue'> REACH </span>
                                <span className='headeingcolorblack'> OUT TO US </span>
                            </h2>
                            <p>Our health advisor is ready to answer your queries about what we do and how we <br></br> can help you take care of yourself and your loved ones better.</p>
                        </div>


                    </div>
                </section>

                <section className='aboutmar'>

                    <div className='col-lg-12 aboutmar1'>

                        <div class="col-lg-6">
                            <div class="image-wrapper">
                                <div class="image-one">
                                    <img src={require('../../assets/images/shape/apage4.png')} alt="" className='width84' />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <Form />

                        </div>

                    </div>
                </section>

                <Footer />
            </>
        )
    }
}

export default aboutUs;