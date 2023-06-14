import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';



class doctor_consults extends Component {

    componentDidMount() {
        document.title = 'Doctor Consults | Bridge Health';
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
                                           <span className='headeingcolorblack'>Your doctor is just</span> <br></br> <span className='headeingcolorblue'>a phone call away </span></h2>
                                        <h3 className='textleft marginTop40'>Schedule a consultation with <br></br> one of our expert doctors
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

                        <div class="sec-title cont-box martobutton">
                            {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                            <p className='font22'>
                                All of us get sick at some point in life. And whenever we get sick, we always go to the doctor to find out the reason and get the appropriate medicines so that we can better quickly.
                                In the past, doctor consultations had to be done in the traditional way. You book an appointment, visit the doctor’s office, and get a prescription.
                            </p>
                        </div>
                        <div class="btn-box text-center btn5">
                                {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                            </div>

                    </div>


                </section>


                <section class="">

                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <img src={require('../../assets/images/shape/doct3.png')} alt="" className='imgwidth' />

                            </div>
                            <div class="col-lg-6">

                                <div class="sec-title squrebox">
                                    <p className='font22'>
                                        The expert doctors at Bridge Health have years of experience as practicing professionals. You can directly book an appointment with them and avail of virtual consultations with them wherever you are. This simplifies the process and eliminates the long queue times at the doctor’s clinic.
                                    </p>
                                </div>
                                <div class="btn-box text-center btn5 marBtnTop">
                                        {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                        <ContactForm buttonText="BOOK NOW" popupPosition="left" />

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

export default doctor_consults;