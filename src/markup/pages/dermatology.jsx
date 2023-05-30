import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'


const aboutfair = require('./../../assets/images/shape/der.png');

class dermatology extends Component {
    render() {
        return (
            <>
                <Header />

                <section class="internalpage style-two" style={{ backgroundImage: "url(" + aboutfair + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">

                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblack'> LOOKS DO</span><br></br>
                                    <span className='headeingcolorblue'>  MATTER</span>
                                </h2>

                                <h4 className='textleft marginTop40 '>
                                    Talk to our experts and find out <br></br>how you can look great!
                                </h4>

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
                                        <img src={require('../../assets/images/shape/ps1.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            A good physical appearance is a reflection of youth and confidence. Unfortunately, as we age, our physical appearance deteriorates. This could be in the form of pimples, hair loss, stretch marks, unintended weight gain around the abdominal area, and scarring. Therefore,
                                            it’s important to take care of the physical features of our body so that we always remain confident about how we look.
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
                            <img src={require('../../assets/images/shape/doct.png')} alt="" className='labwidth' />
                        </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="contact-form-area">

                            <div class="sec-title cont-box">
                                {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                <p className='font22'>
                                    Our expert dermatologists at Bridge Health know how to give your physical appearance a boost. They will give you expert advice on skin and haircare routines, diet plans, product recommendations, and treatments so that you always look your best!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>

                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                               
                                    <img src={require('../../assets/images/gallery/fair1.png')} alt="" class="avtar" />

                                <p className='treat'>Non-surgical fat removal</p>
                            </div>

                            <div class="col-sm-4">
                                    <img src={require('../../assets/images/gallery/fair2.png')} alt="" class="avtar" />

                                <p className='treat'>Laser Hair Removal</p>
                            </div>

                            <div class="col-sm-4">
                                    <img src={require('../../assets/images/gallery/fair3.png')} alt="" class="avtar" />

                                <p className='treat'>Dandruff control and gray<br></br> hair treatment</p>
                            </div>
                        </div>

                    </div>
                </section>


                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row">
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
                                            Hair transplant
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Skincare routine assistance
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Pigmentation treatment
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Face resurfacing
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Stretch mark removal
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Assistance in developing diet plans to <br></br> maintain healthy skin
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Consultations with expert dermatologists
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-5">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/fair4.png')} alt="" className='width84' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='header1'>
                                <span className='headeingcolorblue'> Radiant Skin? </span>
                                <span className='headeingcolorblack'> We know where to begin! </span>
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

export default dermatology;