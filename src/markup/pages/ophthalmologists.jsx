import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';



const abouteye = require('./../../assets/images/shape/eyetest.png');

class ophthalmologist extends Component {
    componentDidMount() {
        document.title = 'Ophthalmologist | Bridge Health';
    }
    render() {
        return (
            <>
                <Header />
                <section class="internalpage style-two internalpageresponsive" style={{ backgroundImage: "url(" + abouteye + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">

                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblack'> Experience the benefits </span><br></br>
                                    <span className='headeingcolorblack'>of</span>
                                    <span className='headeingcolorwhite'> Crystal Clear Vision</span>

                                </h2>
                                <h3 className='textleft marginTop40'>
                                    Talk to our OPHTHALMOLOGISTS today
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
                                        <img src={require('../../assets/images/shape/eye1.png')} alt="" className='widthimg' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title squrebox">
                                        <p className='font22'>
                                            Our eyes are the windows to the world. They allow us to see every detail and colour, near and far. However, because of our modern-day habits and work,
                                            we spend too much time looking at screens which strains our eyes. We also tend to blink less which leads to dry eyes. These factors contribute to poor eyesight in children and adults.
                                        </p>
                                    </div>
                                    <div class="btn-box text-center btn5">
                                        <ContactForm buttonText="BOOK NOW" popupPosition="left" />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div class="image-wrapper">
                        <div class="image-one">
                            <img src={require('../../assets/images/shape/eye2.png')} alt="" className='labwidth' />
                        </div>
                    </div>
                </section>

                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row align-items-center">

                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title squrebox">
                                        <p className='font22'>
                                            Your eyes deserve great care. At Bridge Health, our expert ophthalmologists will help you through regular eye testing, vision enhancement recommendations, and treatments so
                                            that you’ll never have to worry about squinting to read that sign board across the street ever again!
                                        </p>


                                    </div>
                                    <div class="btn-box text-center btn5">
                                        <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/eye3.png')} alt="" className='width84' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section class="">
                    <div class="auto-container">
                
                                    <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/eye5.png')} alt="" className='widthimg' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <h2 className='header1'>
                                        <span className='headeingcolorblack'> The</span>
                                        <span className='headeingcolorblue'>  Bridge Health</span>
                                        <span className='headeingcolorblack'> Advantage </span>
                                    </h2>
                                    <ul className='listicon'>
                                        <li>
                                            Eye care tips
                                        </li>
                                        <li>
                                            Consult with expert ophthalmologists
                                        </li>
                                        <li>
                                            Expert advice on eye surgeries and procedures
                                        </li>

                                        <li>
                                            Glasses and contact lens prescriptions
                                        </li>
                                        <li>
                                            Comprehensive eye tests and examinations
                                        </li>

                                        <li>
                                            Prescriptions and medicines for various eye conditions like conjunctivitis
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
                                <span className='headeingcolorblack'>Experience the beauty of</span>
                                <span className='headeingcolorblue'> Clear Vision!  </span>
                            </h2>
                        </div>
                        <div class="btn-box text-center btn5">
                            <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                        </div>
                    </div>
                </section>
                <Footer />

            </>
        )
    }

}

export default ophthalmologist;