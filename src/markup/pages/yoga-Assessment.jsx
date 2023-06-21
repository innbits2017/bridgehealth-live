import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';

const aboutbg = require('./../../assets/images/shape/YogaAssessmentandCoaching.png');

class yoga_Assessment extends Component {

    componentDidMount() {
        document.title = 'Yoga Assessment | Bridge Health';
    }


    render() {
        return (
            <>
                <Header />

                <section class="yogaPage internalpageresponsive style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">

                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblack'> Unite your  </span>  <span className='headeingcolorblue'>  Mind,
                                        Body & Soul</span>

                                </h2>
                                <h3 className='textleft marginTop40'>
                                    Connect with our yoga therapists
                                </h3>
                            </div>
                            {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                            <div class="btn-box btn5">

                                <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                            </div>

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

                                    <div class="sec-title squrebox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span>

                                        </h2> */}
                                        <p className='font22'>
                                            Practiced for thousands of years, yoga has several benefits on your overall health. Through a series of breathing exercises and poses, yoga improves blood flow and helps you focus your mind. This helps you obtain inner peace and happiness which leads to better health.
                                        </p>
                                        <p className='font22'>
                                            The yoga therapists at Bridge Health are trained in yogic counseling, lifestyle and nutrition. They will assist you in developing a yoga regimen which helps you focus on improving the functionality of your mind, body, and breath.
                                        </p>

                                    </div>
                                    <div class="btn-box text-center btn5 marBtnTop">
                                        {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                        <ContactForm buttonText="BOOK NOW" popupPosition="left" />

                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="team-section container-fulid whatbe">

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
                                                Yoga for general Wellbeing
                                            </li>
                                            <li>
                                                Yoga for Mental Illness
                                            </li>
                                            <li>
                                                Yoga for Pregnancy
                                            </li>
                                            <li>
                                                Therapeutic Yoga
                                            </li>
                                            <li>
                                                Yoga for Cardiovascular Disorders
                                            </li>
                                            <li>
                                                Yoga for Respiratory Disorders
                                            </li>
                                            <li>
                                                Yoga for Gastrointestinal Disorders
                                            </li>
                                            <li>
                                                Yoga for Joints and Muscles
                                            </li>
                                            <li>
                                                Yoga for Urogenital Disorders
                                            </li>
                                            <li>
                                                Yoga for Mental Disorders
                                            </li>
                                        </ul>
                                        {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                        <div class="btn-box btn5 marBtnTop text-center">
                                            <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                                        </div>

                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one image-two">
                                            <img src={require('../../assets/images/shape/Yoga.png')} alt="" className='width84' />
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
                    <div class="row align-items-center">
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
                                        <li>
                                            Experienced yoga therapists
                                        </li>
                                        <li>
                                            Customized plans and routines
                                        </li>
                                        <li>
                                            Regular progress updates
                                        </li>
                                        <li>
                                            General wellbeing and mental fitness programs
                                        </li>
                                        <li>
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
                                <span className='headeingcolorblue'> enriching</span>
                                <span className='headeingcolorblack'> life!</span>

                            </h2>
                        </div>
                        <div class="btn-box text-center btn5 marBtnTop">
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
export default yoga_Assessment;