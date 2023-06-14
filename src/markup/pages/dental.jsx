import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';


class dental extends Component {

    componentDidMount() {
        document.title = 'Dental | Bridge Health';
    }

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
                                        <h2 className='textleft fontSize50'>
                                            <span className='headeingcolorblack'> Healthy teeth.</span> <br></br>
                                            <span className='headeingcolorblue'> Lovely smile </span></h2>
                                        <h3 className='textleft marginTop40'>
                                            Book your dental <br></br> consultation today!
                                        </h3>
                                    </div>
                                    {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                    <div class="btn-box btn5">

                                        <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                                    </div>


                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper imgright">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/dental1.png')} alt="" className='imgwidth' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row align-items-center">

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/manteeth.png')} alt="" className='widthimg' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <div class="sec-title squrebox">
                                        <p className='fontimp'>
                                            Our teeth are made of enamel which is the hardest substance in the human body. Unhealthy food items like sugary carbonated drinks and candies weaken our enamel which causes a variety of problems including tooth decay.
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

                <div class="auto-container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="contact-form-area">

                                <div class="sec-title squrebox">
                                    {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                    <p className='font22'>
                                        It’s time to give your teeth the care they deserve. At Bridge Health, we provide dental consultations with experts who understand what your teeth need to stay strong and healthy.
                                        Our practitioners have several years of experience and are trained to perform a variety of different dental procedures so that all your dental needs are met.
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
                                    <img src={require('../../assets/images/shape/dent1.png')} alt="" className='widthimg imgFloatRight' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <section>

                    <div class="container marginTop50">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <img src={require('../../assets/images/gallery/dent2.png')} alt="" class="avtar" />

                                <p className='treat'>Braces And Teeth Alignment</p>
                            </div>

                            <div class="col-sm-4">
                                <img src={require('../../assets/images/gallery/dent3.png')} alt="" class="avtar" />

                                <p className='treat'>Root Canal Procedure</p>
                            </div>

                            <div class="col-sm-4">
                                <img src={require('../../assets/images/gallery/dent4.png')} alt="" class="avtar" />

                                <p className='treat'>Bridge And Crown Fixing</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section class="contact-section">

                    <div class="auto-container">

                        <div class="row">

                            <div class="col-lg-6">
                                <img src={require('../../assets/images/shape/dental2.png')} alt="" className='widthimg' />

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
                                            Dental hygiene and routine
                                        </li>
                                        <li>
                                            Expert advice on dental procedures
                                        </li>
                                        <li>
                                            Tooth extraction
                                        </li>
                                        <li>
                                            Cavity removal and fillings
                                        </li>
                                        <li>
                                            Teeth whitening
                                        </li>
                                        <li>
                                            Preventive dentistry through fissure sealants and fluoride application
                                        </li>
                                        <li>
                                            Implant fixing
                                        </li>
                                        <li>
                                            Dentures
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
                                <span className='headeingcolorblack'> Show off your </span>
                                <span className='headeingcolorblue'> Instagram-Worthy Smile </span>
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

export default dental;