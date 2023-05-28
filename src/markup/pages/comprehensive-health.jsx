import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'

class comprehensiveHealth extends Component {
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
                                                <span className='headeingcolorblack'> Don’t compromise </span>
                                                <br></br>
                                                <span className='headeingcolorblue'> on your health </span>
                                            </h2>
                                            <h3 className='textleft marginTop40'>
                                                Take a comprehensive <br></br> health check today!
                                            </h3>
                                        </div>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>


                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one">
                                            <img src={require('../../assets/images/shape/health1.png')} alt="" className='imgwidth' />
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
                                        <img src={require('../../assets/images/shape/health2.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            Health is defined as a state of complete physical, mental, and social well-being. If even one aspect isn’t satisfied, it means that you are not healthy. Most people today have some sort of vitamin deficiency or suffer from mental health issues like anxiety or depression.
                                            Technology in the form of AI and analytics have been implemented into the healthcare industry for seamless monitoring but are not being utilized effectively by healthcare providers. Therefore, there is a need to evaluate your entire health profile at all times with the highest possible accuracy.
                                        </p>
                                    </div>



                                    <div class="col-md-12 form-group" style={{ marginLeft: 1 + 'rem' }}>
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

                                    <div class="sec-title phybox1">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            The comprehensive health checks at Bridge Health evaluate all aspects of your health. We have a unique health quiz that assesses your physical health parameters and our experts regularly get in touch with you in order to make sure that you are at the peak of your healthy life.
                                            Furthermore, we use the latest health-tracking devices and machines to ensure the that your health is monitored as accurately as possible.
                                            When it comes to your health, we make no compromises.
                                        </p>


                                    </div>


                                    <div class="contact-form">

                                        <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                            <div class="row clearfix">



                                                <div class="col-md-12 form-group" style={{ marginLeft: 14 + 'rem' }}>
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
                                        <img src={require('../../assets/images/shape/health3.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section>

                    <div class="auto-container opth-title">
                        <h2 className='header1'>
                            <span className='headeingcolorblack'> The</span>
                            <span className='headeingcolorblue'>  Bridge Health</span>
                            <span className='headeingcolorblack'> Advantage </span>
                        </h2>
                    </div>
                </section>


                <section>

                    <div class="auto-container heath-margin">
                        <div class="col-lg-12 derm-data ">
                            <div class="column healts">

                                <img src={require('../../assets/images/gallery/health4.png')} alt="" class="avtar " />


                                <p className='treat1'>Health Quiz</p>
                            </div>

                            <div class="column healts">

                                <img src={require('../../assets/images/gallery/health4.png')} alt="" class="avtar " />


                                <p className='treat1'>Regular <br></br> check-ups <br></br>with experts</p>
                            </div>

                            <div class="column healts">

                                <img src={require('../../assets/images/gallery/health4.png')} alt="" class="avtar " />


                                <p className='treat1'>BMI Tracker</p>
                            </div>


                        </div>
                        <div class="col-lg-12 derm-data">
                            <div class="column healts">

                                <img src={require('../../assets/images/gallery/health4.png')} alt="" class="avtar " />


                                <p className='treat1'>Thermographic HRA</p>
                            </div>

                            <div class="column healts">

                                <img src={require('../../assets/images/gallery/health4.png')} alt="" class="avtar " />


                                <p className='treat1'>Muscle Mass Measurement</p>
                            </div>

                            <div class="column healts">

                                <img src={require('../../assets/images/gallery/health4.png')} alt="" class="avtar " />

                                <p className='treat1'>Body Fat Measurement</p>

                            </div>


                        </div>

                    </div>


                </section>


                <section class="contact-section">

                    <div class="auto-container heath-margin">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <ul className='listicon'>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Automated blood pressure measurement
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Lung function tests
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Wearable devices or sensors
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Imaging tests like CT scans and MRIs
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Virtual consultations using telemedicine
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Advanced infectious disease testing
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Blood tests for cholesterol, blood sugar, and other health indicators
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <ul className='listicon'>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Cardiac tests like ECGs
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Cognitive tests
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Pharmacogenetic testing
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            AI-powered algorithms to analyze health data
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Mental health screening using AI-powered tools
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Point-of-care testing using handheld devices
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Body composition analysis using bioelectrical impedance or similar technology
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
                                <span className='headeingcolorblack'> The real  </span>
                                <span className='headeingcolorblue'> wealth is health! </span>
                               
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

export default comprehensiveHealth;