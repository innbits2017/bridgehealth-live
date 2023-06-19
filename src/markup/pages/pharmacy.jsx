import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';
const aboutbg = require('./../../assets/images/shape/Pharmacy.png');

class pharmacy extends Component {
    componentDidMount() {
        document.title = 'Pharmacy | Bridge Health';
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
                                    <span className='headeingcolorblack'>All your Pharmacy </span><br></br>
                                    <span className='headeingcolorblue'> Needs In One Place </span>

                                </h2>
                                <h3 className='textleft marginTop40'>
                                    Order your medicines through<br></br> Bridge Health Pharmacy
                                </h3>
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
                                        <img src={require('../../assets/images/shape/ph1.png')} alt="" className='' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title squrebox">

                                        <p className='font22'>
                                            It’s important to always keep an adequate supply of the medicines you need. This is especially important if you suffer from any chronic conditions. The availability of a fully- stocked pharmacy near your residence is considered to be very important in case you need medicines urgently.
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
                <section class=" container-fulid pharmacy">
                    <div class="row align-items-center">
                        <div class="col-lg-6" style={{ marginTop: 3 + 'rem' }}>
                            <div class="contact-form-area marginLeft12">
                                <div class="sec-title">
                                    <p className='font24'>
                                        Get everything you need at the Bridge Health pharmacy. Our pharmacy is well-stocked with prescription medicines and over-the-counter medicines at affordable prices. Bridge Health<br></br> operates its pharmacy through both<br></br> online and offline pharmacy formats.
                                    </p>

                                </div>
                                <div class="btn-box text-center btn5">
                                    {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                    <ContactForm buttonText="BOOK NOW" popupPosition="right" />

                                </div>

                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-wrapper">
                                <div class="image-one">
                                    <img src={require('../../assets/images/shape/phar1.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="contact-section margintop100 pharback">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/ph3.png')} alt="" className='' />
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
                                            Easy Booking through our onsite personnel
                                        </li>
                                        <li>
                                            Free home delivery of medicines*
                                        </li>
                                        <li>
                                            Easy order bookings through email, WhatsApp & direct call
                                        </li>
                                        <li>
                                            Emergency & institutional medical supplies available
                                        </li>
                                        <li>
                                            All branded & generic medicines available
                                        </li>

                                        <li>
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
export default pharmacy;