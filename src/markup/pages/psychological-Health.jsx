import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/shape/psychological-health.png');

class psychological_Health extends Component {


    render() {
        return (
            <>
                <Header />

                <section class="internalpage style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">

                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblack'> Good Health starts  </span><br></br>
                                    <span className='headeingcolorblack'> with a </span>
                                    <span className='headeingcolorblue'> Healthy Mind </span>

                                </h2>
                                <h3 className='textleft marginTop40 colorwhite'>
                                    Talk to our clinical psychologists today
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
                                        <img src={require('../../assets/images/shape/ps1.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span>

                                        </h2> */}
                                        <p className='font22'>
                                            Unlike physical health issues,<span className='headeingcolorblue'> psychological issues are not as visible. </span>They are generally ignored and are not given as much importance due to societal stigmas. However, if these are ignored for too long, they can affect your intellectual capabilities and overall behaviour.
                                        </p>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">BOOK NOW</span></button>

                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section class="team-section">

                    <section class="">
                        <div class="auto-container">
                            <div class="row align-items-center">



                                <div class="col-lg-6">
                                    <div class="content-box">

                                        <ul className='listicon'>
                                            <li className='listicon'>
                                                <img className='listicon3' src={require('../../assets/images/shape/ps2.png')} alt="" />
                                                At <span className='headeingcolorblue'>Bridge Health, </span>our psychologists are trained to understand your mental state.
                                            </li>
                                            <li className='listicon'>
                                                <img className='listicon3' src={require('../../assets/images/shape/ps2.png')} alt="" />
                                                They help you manage your stress or any mental health difficulties that you are facing.
                                            </li>
                                            <li className='listicon'>
                                                <img className='listicon3' src={require('../../assets/images/shape/ps2.png')} alt="" />
                                                In doing so, you will be able to improve your mental well-being which has a positive effect on your overall physical health.
                                            </li>

                                        </ul>

                                        <div class="btn-box">
                                            <a class="theme-btn btn-style-one martop90" href="#">
                                                <span class="btn-title">BOOK NOW</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one image-two">
                                            <img src={require('../../assets/images/shape/ps3.png')} alt="" className='width84' />
                                            {/* <img src={require('../../assets/images/shape/video2.gif')} alt="" /> */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/ps4.png')} alt="" className='width84' />
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <div class="auto-container">
                                        <h2 className='header1'>
                                            <span className='headeingcolorblack'> The</span>
                                            <span className='headeingcolorblue'>  Bridge Health</span>
                                            <span className='headeingcolorblack'> Advantage </span>
                                        </h2>

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
export default psychological_Health;