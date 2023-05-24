import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'



const abouteye = require('./../../assets/images/shape/eyetest.png');

class ophthalmologist extends Component {
    render() {
        return (
            <>

                <Header />

                <section class="internalpage style-two" style={{ backgroundImage: "url(" + abouteye + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">

                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblack'> Experience the benefits </span><br></br>
                                    <span className='headeingcolorblack'>of</span>
                                    <span className='headeingcolorwhite'> Crystal Clear Vision</span>

                                </h2>
                                <h3 className='textleft marginTop40'>
                                    Talk to our Ophthalmologists today
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
                                        <img src={require('../../assets/images/shape/ps1.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            Our eyes are the windows to the world. They allow us to see every detail and colour, near and far. However, because of our modern-day habits and work,
                                            we spend too much time looking at screens which strains our eyes. We also tend to blink less which leads to dry eyes. These factors contribute to poor eyesight in children and adults.
                                        </p>
                                    </div>


                                    <div class="col-md-12 form-group">
                                        <button class="theme-btn btn-style-one btnflot" type="submit" name="submit-form"><span class="btn-title">BOOK NOW</span></button>
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
                        <div class="row">


                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            Your eyes deserve great care. At Bridge Health, our expert ophthalmologists will help you through regular eye testing, vision enhancement recommendations, and treatments so
                                            that you’ll never have to worry about squinting to read that sign board acRoss the street ever again!
                                        </p>


                                    </div>


                                    <div class="contact-form">

                                        <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                            <div class="row clearfix">



                                                <div class="col-md-12 form-group" style={{ marginLeft: 5 + 'rem' }}>
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
                                        <img src={require('../../assets/images/shape/ph1.png')} alt="" className='width84' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="contact-section">

                    <div class="auto-container">
                        <div class="auto-container opth-title">
                            <h2 className='header1'>
                                <span className='headeingcolorblack'> The</span>
                                <span className='headeingcolorblue'>  Bridge Health</span>
                                <span className='headeingcolorblack'> Advantage </span>
                            </h2>
                        </div>
                        <br></br>
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
                                <span className='headeingcolorblack'>Experience the beauty of</span>
                                <span className='headeingcolorblue'> Clear Vision!  </span>
                            </h2>
                        </div>
                        <div class="btn-box text-center btn5">
                            <a class="theme-btn btn-style-one" href="/demo/fianandox/">
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

export default ophthalmologist;