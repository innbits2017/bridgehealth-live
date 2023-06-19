import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';


class nursingAtHome extends Component {
    componentDidMount() {
        document.title = 'Nursing at Home | Bridge Health';
    }
    render() {
        return (
            <>

                <Header />

                <section class="team-section padding doctoeback">
                    {/* About Section Two */}
                    <section class="container-fluid">
                        <div class="row align-items-center auto-container">

                            <div class="col-lg-6">
                                <div class="content-box marginTop40header triangleback">

                                    <div class="sec-title text-center textleft">
                                        <h2 className='textleft'>
                                            <span className='headeingcolorblack'>
                                                The care you need in the
                                            </span>
                                            <span className='headeingcolorblue '> Comfort of your Home </span></h2>
                                        <h3 className='textleft marginTop40'>
                                            Nursing services provided directly at your home
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
                                        <img src={require('../../assets/images/shape/nursing.png')} alt="" className='imgwidth' />
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
                                        <img src={require('../../assets/images/shape/nursing1.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title squrebox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            Sometimes, especially for the elderly and for patients suffering from chronic illnesses, it becomes a challenge to travel to a hospital to get timely care.
                                            Furthermore, bedridden patients need timely care and assistance at all times to perform their daily routines.
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

                <section>
                    <div class="image-wrapper">
                        <div class="image-one">
                            <img src={require('../../assets/images/shape/nursing2.png')} alt="" className='labwidth' />
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="contact-form-area">

                            <div class="sec-title cont-box">
                                {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                <p className='font22'>
                                    We provide nursing services directly in the comfort of your home.
                                    Our nursing staff is professionally trained to assist all kinds of patients and will see to all their needs.
                                </p>
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
                                        <img src={require('../../assets/images/shape/anurse.png')} alt="" />
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
                                            Assistance with daily routine
                                        </li>
                                        <li>
                                            Administering medicines and treatments
                                        </li>
                                        <li>
                                            Hygiene care
                                        </li>
                                        <li>
                                            Movement assistance
                                        </li>
                                        <li>
                                            Critical nursing care
                                        </li>
                                        <li>
                                            Palliative care
                                        </li>
                                        <li>
                                            Tracheostomy care
                                        </li>
                                        <li>
                                            Spinal injury care
                                        </li>
                                        <li>
                                            PEG feeding
                                        </li>
                                        <li>
                                            Catheter, stoma, and bowel management
                                        </li>
                                        <li>
                                            Domiciliary care
                                        </li>
                                        <li>
                                            Ventilator care and management
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
                                <span className='headeingcolorblue'>Nursing  </span>
                                <span className='headeingcolorblack'>without the hassle! </span>
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
export default nursingAtHome;