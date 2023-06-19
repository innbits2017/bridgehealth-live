import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';


const aboutfair = require('./../../assets/images/shape/dera.png');

class dermatology extends Component {

    componentDidMount() {
        document.title = 'Dermatology | Bridge Health';
    }

    render() {
        return (
            <>
                <Header />

                <section class="internalpage dermatologyresponsive style-two darmanorepeat" style={{ backgroundImage: "url(" + aboutfair + ")" }}>
                    <div class="auto-container">
                        <div class="content-box mar-der">

                            <div class=" text-center textleft">
                                {/* <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblack'> LOOKS DO</span><br></br>
                                    <span className='headeingcolorblue'>  MATTER</span>
                                </h2>

                                <h4 className='textleft marginTop40 '>
                                    Talk to our experts and find out <br></br>how you can look great!
                                </h4> */}

                            </div>
                            {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                            <div class="btn-box btn5 margin300">

                                <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                            </div>


                        </div>

                    </div>
                </section>


                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title squrebox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            A good physical appearance is a reflection of youth and confidence. Unfortunately, as we age, our physical appearance deteriorates. This could be in the form of pimples, hair loss, stretch marks, unintended weight gain around the abdominal area, and scarring. Therefore,
                                            it’s important to take care of the physical features of our body so that we always remain confident about how we look.
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
                                        <img src={require('../../assets/images/shape/darma.png')} alt="" className='widthimg imgFloatRight' />
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

                            <div class="sec-title cont-box martobutton">
                                {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                <p className='font22'>
                                    Our expert dermatologists at Bridge Health know how to give your physical appearance a boost. They will give you expert advice on skin and haircare routines, diet plans, and treatments so that you always look your best!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>

                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <img src={require('../../assets/images/gallery/dermatology1.png')} alt="" class="avtar" />
                                <p className='treat'>Non-surgical fat removal</p>
                            </div>

                            <div class="col-sm-4">
                                <img src={require('../../assets/images/gallery/dermatology2.png')} alt="" class="avtar" />
                                <p className='treat'>Laser Hair Removal</p>
                            </div>

                            <div class="col-sm-4">
                                <img src={require('../../assets/images/gallery/dermatology3.png')} alt="" class="avtar" />
                                <p className='treat'>Dandruff control and gray<br></br> hair treatment</p>
                            </div>
                        </div>

                    </div>
                </section>


                <section class="contact-section dermaback">

                    <div class="auto-container">
                        <div class="row align-items-center">
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
                                            Hair transplant
                                        </li>
                                        <li>
                                            Skincare routine assistance
                                        </li>
                                        <li>
                                            Pigmentation treatment
                                        </li>
                                        <li>
                                            Face resurfacing
                                        </li>
                                        <li>
                                            Stretch mark removal
                                        </li>
                                        <li>
                                            Assistance in developing diet plans to maintain healthy skin
                                        </li>
                                        <li>
                                            Consultations with expert dermatologists
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/fair4.png')} alt="" className='widthimg ' />
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

export default dermatology;