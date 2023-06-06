import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'



class doctor_consults extends Component {

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
                                            <span className='headeingcolorblack'> Your  </span> <span className='headeingcolorblue'>Good Health </span> <br></br><span className='headeingcolorblack'>is Our Plan</span></h2>
                                        <h3 className='textleft marginTop40'>Choose from a selection of<br></br> Annual Preventive Health plans
                                        </h3>
                                    </div>
                                    <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>


                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper imgright">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/doct1.png')} alt="" className='imgwidth' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section>
                    <div class="image-wrapper">
                        <div class="image-one">
                            <img src={require('../../assets/images/shape/doct2.png')} alt="" className='labwidth' />
                        </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="contact-form-area">

                            <div class="sec-title cont-box martobutton">
                                {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                <p className='font22'>
                                    All of us get sick at some point in life. And whenever we get sick, we always go to the doctor to find out the reason and get the appropriate medicines so that we can better quickly.
                                    In the past, doctor consultations had to be done in the traditional way. You book an appointment, visit the doctor’s office, and get a prescription.
                                </p>
                                <button class="theme-btn btn-style-one"><span class="btn-title">BOOK NOW</span></button>

                            </div>

                        </div>
                    </div>


                </section>


                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row col-lg-12">

                            <div class="col-lg-5">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/doct3.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        <p className='font22'>
                                            The expert doctors at Bridge Health have years of experience as practicing professionals. You can directly book an appointment with them and avail of virtual consultations with them wherever you are. This simplifies the process and eliminates the long queue times at the doctor’s clinic.
                                        </p>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">BOOK NOW</span></button>

                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section>

                    <div class="auto-container">
                        <h2 className='header1 textaligncenter'>
                            <span className='headeingcolorblack'> The</span>
                            <span className='headeingcolorblue'>  Bridge Health</span>
                            <span className='headeingcolorblack'> Advantage </span>
                        </h2>
                        <div class="row">

                            <div class="col-sm-4">
                                <img src={require('../../assets/images/gallery/fair1.png')} alt="" class="avtar" />
                                <p className='treat'>Book your consultation<br></br> easily and quickly</p>
                            </div>
                            <div class="col-sm-4">
                                <img src={require('../../assets/images/gallery/fair2.png')} alt="" class="avtar" />

                                <p className='treat'>Expert doctors with years <br></br>of experience</p>
                            </div>

                            <div class="col-sm-4">
                                <img src={require('../../assets/images/gallery/fair3.png')} alt="" class="avtar" />

                                <p className='treat'>Virtual prescription  generation</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='header1'>
                                <span className='headeingcolorblack'> It’s a </span>
                                <span className='headeingcolorblue'> Doctor on call. </span>
                                <span className='headeingcolorblack'> literally! </span>
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

export default doctor_consults;