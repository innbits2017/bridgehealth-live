import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
const aboutbg = require('./../../assets/images/shape/Pharmacy.png');

class pharmacy extends Component {


    render() {
        return (
            <>
                <Header />

                <section class="internalpage style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">

                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblack'>All your Medicinal </span><br></br>
                                    <span className='headeingcolorblue'> Needs In One Place </span>

                                </h2>
                                <h3 className='textleft marginTop40'>
                                Order your medicines through<br></br> Bridge Health Pharmacy
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
                                        <img src={require('../../assets/images/shape/ph1.png')} alt="" className='width84' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span>

                                        </h2> */}
                                        <p className='font22'>
                                            It’s important to always keep an adequate supply of the medicines you need. This is especially important if you suffer from any chronic conditions. The availability of a fully- stocked pharmacy near your residence is considered to be very important in case you need medicines urgently.
                                        </p>


                                    </div>


                                    <div class="contact-form">

                                        <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                            <div class="row clearfix">



                                                <div class="col-md-12 form-group">
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
                <section class="contact-section container-fulid pharmacy">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-6" style={{ marginTop: 3 + 'rem' }}>
                                <div class="contact-form-area">
                                    <div class="sec-title">
                                        <p className='font22'>
                                            Get everything you need at the Bridge Health pharmacy. Our pharmacy is well-stocked with authentic prescription medicines and over-the-counter medicines at affordable prices. Bridge Health operates its pharmacy business through both wholesale and retail pharmacy formats.
                                        </p>

                                    </div>
                                    <div class="contact-form">

                                        <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                            <div class="row clearfix">



                                                <div class="col-md-12 form-group">
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

                <section class="contact-section">
                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/ph3.png')} alt="" className='width64' />
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
export default pharmacy;