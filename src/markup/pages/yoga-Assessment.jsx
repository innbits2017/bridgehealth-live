import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/shape/YogaAssessmentandCoaching.png');

class yoga_Assessment extends Component {

    componentDidMount() {
        document.title = 'Yoga Assessment | Bridge Health';
    }


    render() {
        return (
            <>
                <Header />

                <section class="internalpage style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">
                      
                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblack'> Unite your mind,  </span>
                                    <span className='headeingcolorblue'>  body & soul</span>

                                </h2>
                                <h3 className='textleft marginTop40'>
                                Connect with our yoga therapists
                                </h3>
                            </div>
                            <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>


                        </div>

                    </div>
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
                                        <p className='font22'>
                                        Practiced for thousands of years, yoga has several benefits on your overall health. Through a series of breathing exercises and poses, yoga improves blood flow and helps you focus your mind. This helps you obtain inner peace and happiness which leads to better health.
                                        </p>
                                        <p className='font22'>
                                        The yoga therapists at Bridge Health are trained in yogic counseling, lifestyle and nutrition. They will assist you in developing a yoga regimen which helps you focus on improving the functionality of your mind, body, and breath. 
                                        </p>

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
                  
                    {/* About Section Two */}
                    <section class="">
                        <div class="auto-container">
                            <div class="row align-items-center">



                                <div class="col-lg-6">
                                    <div class="content-box">
                                     
                                           <h2 >
                                <span className='headeingcolorblack'> What We </span>
                                <span className='headeingcolorblue'>  Offer</span>
                            </h2>
                                        <ul className='listicon'>
                                            <li>
                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for general Wellbeing
                                            </li>
                                            <li>
                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Mental Illness
                                            </li>
                                            <li>
                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Pregnancy
                                            </li>
                                            <li>
                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Therapeutic Yoga
                                            </li>
                                            <li>
                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Cardiovascular Disorders
                                            </li>
                                            <li>
                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Respiratory Disorders
                                            </li>
                                            <li>
                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Gastrointestinal Disorders
                                            </li>
                                            <li>
                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Joints and Muscles
                                            </li>
                                            <li>
                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Urogenital Disorders
                                            </li>
                                            <li>
                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Yoga for Mental Disorders
                                            </li>
                                        </ul>
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
                                            <img src={require('../../assets/images/shape/y2.png')} alt="" className='width84'/>
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
                                        <div class="">
                                            <h2 className='header1'>
                                                <span className='headeingcolorblack'> The</span>
                                                <span className='headeingcolorblue'>  Bridge Health</span>
                                                <span className='headeingcolorblack'> Advantage </span>
                                            </h2>
                                        </div>

                                    </div>
                                    <ul className='listicon'>
                                    <li className='listicon'>
                                            Experienced yoga therapists
                                        </li>
                                        <li className='listicon'>
                                            Customized plans and routines
                                        </li>
                                        <li className='listicon'>
                                            Regular progress updates
                                        </li>
                                        <li className='listicon'>
                                            General wellbeing and mental fitness programs
                                        </li>
                                        <li className='listicon'>
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
export default yoga_Assessment;