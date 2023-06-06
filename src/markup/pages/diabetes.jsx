import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'

class diabetes extends Component {
    render() {
        return (
            <>
                <Header />
                <section class="team-section padding">
                    {/* About Section Two */}
                    <section class="container-fluid">
                        <div class="row align-items-center auto-container">
                            <div class="col-lg-6">
                                <div class="content-box marginTop40header">

                                    <div class="sec-title text-center textleft">
                                        <h2 className='textleft'>
                                            <span className='headeingcolorblack'>
                                                Diabetes?
                                            </span>
                                            <br></br>
                                            <span className='headeingcolorblue'> More like Diabeates </span>
                                        </h2>
                                        <h3 className='textleft marginTop40'>
                                            Manage, control, and beat  <br></br> diabetes with our experts
                                        </h3>
                                    </div>
                                    <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper imgright">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/dia1.png')} alt="" className='imgwidth' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section class="contact-section heath-margin">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/dia2.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <div class="sec-title phybox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            Diabetes is a chronic condition that affects millions of people worldwide. If left untreated or improperly managed, it can lead to a range of complications,
                                            including nerve damage, blindness, kidney disease, and heart disease. Therefore, proper diabetes care is essential for maintaining good health and preventing these complications.
                                        </p>
                                    </div>
                                    <div class="col-md-12 form-group">
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">BOOK NOW</span></button>
                                    </div>
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
                                            Effective diabetes management involves a lot of steps such as monitoring blood sugar levels, taking medication as prescribed, following a healthy diet, engaging in regular exercise, and getting regular check-ups with a healthcare professional.
                                            At Bridge Health, we take an active role in helping you manage diabetes to help you significantly improve your quality of life and reduce your risk of long-term complications.
                                        </p>
                                        <div class="col-md-12 form-group">
                                            <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">BOOK NOW</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/dia3.png')} alt="" className='width84' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="contact-section">
                    <div class="auto-container">
                        <h2 className='header1'>
                            <span className='headeingcolorblack'> The</span>
                            <span className='headeingcolorblue'>  Bridge Health</span>
                            <span className='headeingcolorblack'> Advantage </span>
                        </h2>
                    </div>
                    <div class="auto-container heath-margin">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <ul className='listicon'>
                                        <li>
                                            Blood sugar monitoring and management
                                        </li>
                                        <br></br>
                                        <li>
                                            Exercise recommendations and guidance
                                        </li>
                                        <br></br>
                                        <li>
                                            Support for managing the emotional and psychological aspects of living with diabetes
                                        </li>
                                        <br></br>
                                        <li>
                                            Referral to diabetes support groups or resources for additional support
                                        </li>
                                        <br></br>
                                        <li>
                                            Referral to diabetes support groups or resources for additional support
                                        </li>
                                        <br></br>
                                        <li>
                                            Regular check-ups and screenings for complications of diabetes, such as eye and kidney damage
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <ul className='listicon'>
                                        <li>
                                            Nutritional counselling and meal planning
                                        </li>
                                        <br></br>
                                        <li>
                                            Diabetes education and self-management training
                                        </li>
                                        <br></br>
                                        <li>
                                            Wound care and management for diabetic ulcers or foot wounds
                                        </li>
                                        <br></br>
                                        <li>
                                            Referral to specialists, such as endocrinologists, podiatrists, or dietitians
                                        </li>
                                        <br></br>
                                        <li>
                                            Medication management, such as insulin injections or oral medications
                                        </li>
                                        <br></br>
                                        <li>
                                            Treatment and management of related conditions, such as high blood pressure or high cholesterol
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
                                <span className='headeingcolorblack'> Don't sugarcoat it. </span>
                                <span className='headeingcolorblue'> Manage diabetes!  </span>

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
export default diabetes;