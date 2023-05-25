import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'


class dental extends Component {
    render() {
        return (
            <>

                <Header />

                <section class="team-section padding">
                    {/* About Section Two */}
                    <section class="container-fluid">
                        <div class="container-fluid">
                            <div class="row align-items-center">

                                <div class="col-lg-6">
                                    <div class="content-box">

                                        <div class="sec-title text-center textleft">
                                            <h2 className='textleft'>
                                                <span className='headeingcolorblack'> Healthy teeth.</span> <br></br>
                                                <span className='headeingcolorblue'> Lovely smile </span></h2>
                                            <h3 className='textleft marginTop40'>
                                                Book your dental <br></br> consultation today!
                                            </h3>
                                        </div>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>


                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one">
                                            <img src={require('../../assets/images/shape/dental1.png')} alt="" className='imgwidth' />
                                        </div>
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
                                        <img src={require('../../assets/images/shape/manteeth.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        <p className='fontimp'>
                                            Our teeth are made of enamel which is the hardest substance in the human body. Unhealthy food items like sugary carbonated drinks and candies weaken our enamel which causes a variety of problems including tooth decay.
                                        </p>
                                    </div>

                                    <div class="col-md-12 form-group" style={{ marginLeft: 5 + 'rem' }}>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">BOOK NOW</span></button>
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
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            It’s time to give your teeth the care they deserve. At Bridge Health, we provide dental consultations with experts who understand what your teeth need to stay strong and healthy.
                                            Our practitioners have several years of experience and are trained to perform a variety of different dental procedures so that all your dental needs are met.
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
                                        <img src={require('../../assets/images/shape/dent1.png')} alt="" className='width84' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section>

                    <div class="auto-container">
                        <div class="col-lg-12 derm-data">
                            <div class="column">
                                <div>
                                    <img src={require('../../assets/images/gallery/dent2.png')} alt="" class="avtar" />

                                </div>
                                <p className='treat'>Braces And Teeth Alignment</p>
                            </div>

                            <div class="column">
                                <div>
                                    <img src={require('../../assets/images/gallery/dent3.png')} alt="" class="avtar" />

                                </div>
                                <p className='treat'>Root Canal Procedure</p>
                            </div>

                            <div class="column">
                                <div>
                                    <img src={require('../../assets/images/gallery/dent4.png')} alt="" class="avtar" />

                                </div>
                                <p className='treat'>Bridge And Crown Fixing</p>
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
                                            Dental hygiene and routine
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Nutrition to maintain healthy teeth and gums
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Expert advice on dental procedures
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Tooth extraction
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Cavity removal and fillings
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Teeth whitening
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Preventive dentistry through fissure sealants and fluoride application
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Implant fixing
                                        </li>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
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

export default dental;