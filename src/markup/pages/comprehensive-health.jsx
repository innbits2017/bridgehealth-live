import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'

class comprehensiveHealth extends Component {

    componentDidMount() {
        document.title = 'Comprehensive Health | Bridge Health';
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
                                            <span className='headeingcolorblack'> Don’t compromise </span>
                                            <br></br>
                                            <span className='headeingcolorblue'> on your health </span>
                                        </h2>
                                        <h3 className='textleft marginTop40'>
                                            Take a comprehensive <br></br> health check today!
                                        </h3>
                                    </div>
                                    <button class="commonBtnforAll">BOOK NOW</button>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper imgright">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/health1.png')} alt="" className='imgwidth' />
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

                                <img src={require('../../assets/images/shape/health2.png')} alt="" className='widthimg' />

                            </div>
                            <div class="col-lg-6">
                                <div class="sec-title squrebox">
                                    {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                    <p className='font22'>
                                        Health is defined as a state of complete physical, mental, and social well-being. If even one aspect isn’t satisfied, it means that you are not healthy. Most people today have some sort of vitamin deficiency or suffer from mental health issues like anxiety or depression.
                                        Technology in the form of AI and analytics have been implemented into the healthcare industry for seamless monitoring but are not being utilized effectively by healthcare providers. Therefore, there is a need to evaluate your entire health profile at all times with the highest possible accuracy.
                                    </p>

                                </div>
                                <div class="btn-box text-center btn5 marBtnTop">
                                    <button class="commonBtnforAll">BOOK NOW</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="">

                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="sec-title squrebox">
                                    {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                    <p className='font22'>
                                        The comprehensive health checks at Bridge Health evaluate all aspects of your health. We have a unique health quiz that assesses your physical health parameters and our experts regularly get in touch with you in order to make sure that you are at the peak of your healthy life.
                                        Furthermore, we use the latest health-tracking devices and machines to ensure the that your health is monitored as accurately as possible.
                                        When it comes to your health, we make no compromises.
                                    </p>

                                </div>
                                <div class="btn-box text-center btn5 marBtnTop">
                                    <button class="commonBtnforAll">BOOK NOW</button>

                                </div>
                            </div>


                            <div class="col-lg-6">

                                <img src={require('../../assets/images/shape/health3.png')} alt="" className='widthimg imgFloatRight' />

                            </div>
                        </div>
                    </div>
                </section>
                <section>

                    <div class="auto-container heath-margin">
                        <h2 className='header1 textaligncenter'>
                            <span className='headeingcolorblack'> The</span>
                            <span className='headeingcolorblue'>  Bridge Health</span>
                            <span className='headeingcolorblack'> Advantage </span>
                        </h2>
                        <div class="row derm-data ">
                            <div class="col-sm-4 healts">

                                <img src={require('../../assets/images/gallery/health4.png')} alt="" class="avtar " />
                                <div className='treat1'>
                                    <img src={require('../../assets/images/Healthquiz.svg')} alt="" class="avtar " />
                                    <p >Health Quiz</p>

                                </div>

                            </div>

                            <div class="col-sm-4 healts">

                                <img src={require('../../assets/images/gallery/health4.png')} alt="" class="avtar " />

                                <div className='treat1'>
                                    <img src={require('../../assets/images/RegularCheckup.svg')} alt="" class="avtar " />
                                    <p >Regular  check-ups <br></br>with experts</p>

                                </div>


                            </div>

                            <div class="col-sm-4 healts">

                                <img src={require('../../assets/images/gallery/health4.png')} alt="" class="avtar " />

                                <div className='treat1'>
                                    <img src={require('../../assets/images/weght.svg')} alt="" class="avtar " />
                                    <p >BMI Tracker</p>

                                </div>


                            </div>


                        </div>
                        <div class="row derm-data">
                            <div class="col-sm-4 healts">

                                <img src={require('../../assets/images/gallery/health4.png')} alt="" class="avtar " />

                                <div className='treat1'>
                                    <img src={require('../../assets/images/Thermometer.svg')} alt="" class="avtar " />
                                    <p >Thermographic HRA</p>

                                </div>

                            </div>

                            <div class="col-sm-4 healts">

                                <img src={require('../../assets/images/gallery/health4.png')} alt="" class="avtar " />

                                <div className='treat1'>
                                    <img src={require('../../assets/images/Musclemass.svg')} alt="" class="avtar " />
                                    <p >Muscle Mass Measurement</p>

                                </div>

                            </div>

                            <div class="col-sm-4 healts">

                                <img src={require('../../assets/images/gallery/health4.png')} alt="" class="avtar " />

                                <div className='treat1'>
                                    <img src={require('../../assets/images/Bodymeasurment.svg')} alt="" class="avtar " />
                                    <p >Body Fat Measurement</p>

                                </div>
                               

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
                                            Automated blood pressure measurement
                                        </li>

                                        <li>
                                            Lung function tests
                                        </li>

                                        <li>
                                            Wearable devices or sensors
                                        </li>

                                        <li>
                                            Imaging tests like CT scans and MRIs
                                        </li>

                                        <li>
                                            Virtual consultations using telemedicine
                                        </li>

                                        <li>
                                            Advanced infectious disease testing
                                        </li>

                                        <li>
                                            Blood tests for cholesterol, blood sugar, and other health indicators
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <ul className='listicon'>
                                        <li>
                                            Cardiac tests like ECGs
                                        </li>

                                        <li>
                                            Cognitive tests
                                        </li>

                                        <li>
                                            Pharmacogenetic testing
                                        </li>

                                        <li>
                                            AI-powered algorithms to analyze health data
                                        </li>

                                        <li>
                                            Mental health screening using AI-powered tools
                                        </li>

                                        <li>
                                            Point-of-care testing using handheld devices
                                        </li>

                                        <li>
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
                            <button class="commonBtnforAll">BOOK NOW</button>

                        </div>
                    </div>
                </section>

                <Footer />
            </>
        )
    }

}

export default comprehensiveHealth;