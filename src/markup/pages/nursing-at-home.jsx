import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'


class nursingAtHome extends Component {
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
                                                <span className='headeingcolorblack'>
                                                    The care you need in the
                                                </span>
                                                <br></br>
                                                <span className='headeingcolorblue '> Comfort of your Home </span></h2>
                                            <h3 className='textleft marginTop40'>
                                                Nursing services provided directly at your home
                                            </h3>
                                        </div>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>


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
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/nursing1.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            Sometimes, especially for the elderly and for patients suffering from chronic illnesses, it becomes a challenge to travel to a hospital to get timely care.
                                            Furthermore, bedridden patients need timely care and assistance at all times to perform their daily routines.
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
                                        <img src={require('../../assets/images/shape/ps1.png')} alt="" className='width84' />
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
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Assistance with daily routine 
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Administering medicines and treatments
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Hygiene care
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Movement assistance
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Critical nursing care
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Palliative care
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Tracheostomy care
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Spinal injury care
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            PEG feeding
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Catheter, stoma, and bowel management
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Domiciliary care
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
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
export default nursingAtHome;