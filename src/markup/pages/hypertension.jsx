import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'

class hypertension extends Component {

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
                                                <span className='headeingcolorblack'>
                                                    Adios Hypertension,
                                                </span>
                                                <br></br>
                                                <span className='headeingcolorblue'>  Hello Life </span>
                                            </h2>
                                            <h3 className='textleft marginTop40'>
                                                Beat hypertension with   <br></br> our experts
                                            </h3>
                                        </div>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>


                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one">
                                            <img src={require('../../assets/images/shape/tension1.png')} alt="" className='imgwidth' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section class="contact-section heath-margin">

                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/tension2.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            Hypertension, or high blood pressure, is a common and often asymptomatic condition that affects millions of people worldwide. If left unmanaged,
                                            hypertension can lead to serious health problems such as heart disease, stroke, kidney failure, and vision loss. It is a major risk factor for cardiovascular disease, which is the leading cause of death globally.
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
                                            Fortunately, hypertension can be effectively managed with the right care, including lifestyle changes and medication when necessary.
                                            By prioritizing hypertension management, individuals can significantly reduce their risk of developing serious health problems and improve their overall health and well-being
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
                                        <img src={require('../../assets/images/shape/tension3.png')} alt="" className='width84' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="contact-section">

                    <div class="auto-container bgcolor">
                        <div class="row col-lg-12">

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/tension4.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area martop">

                                    <div class="sec-title">
                                        <p className='font22'>
                                            At Bridge Health, we understand how important it is to manage hypertension to prevent serious health problems. That's why our team of healthcare professionals works with each individual to create a
                                            personalized management plan that includes lifestyle modifications, like diet and exercise, as well as medication when needed. Using the latest technology and tools, we closely monitor blood pressure readings and provide ongoing support to help individuals achieve their goals.
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

                                    <div class="sec-title phybox1">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            Our hypertension management program is designed to empower individuals to take control of their health and reduce their risk of developing serious health problems.
                                            With Bridge Health, individuals can feel confident that they have the resources and support they need to effectively manage their hypertension and improve their overall health and well-being
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
                                        <img src={require('../../assets/images/shape/tension5.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div class="image-wrapper">
                        <div class="image-one">
                            <img src={require('../../assets/images/shape/tension6.png')} alt="" className='labwidth' />
                        </div>
                    </div>
                </section>


                <section class="contact-section">

                    <div class="auto-container opth-title">
                        <h2 className='header1'>
                            <span className='headeingcolorblack'> The</span>
                            <span className='headeingcolorblue'>  Bridge Health</span>
                            <span className='headeingcolorblack'> Advantage </span>
                        </h2>
                    </div>

                    <div class="auto-container heath-margin">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <ul className='listicon'>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Develop a personalized management plan that includes lifestyle modifications and medication when necessary
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Provide ongoing support to help individuals achieve their hypertension management goals
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Encourage regular follow-up appointments to track progress and make any necessary adjustments to the management plan
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Collaborate with other healthcare providers to provide comprehensive care to patients with hypertension
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <ul className='listicon'>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Monitor blood pressure readings using the latest technology and tools
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Refer patients to specialists when needed, such as dietitians, exercise specialists, or cardiologists
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Educate patients on the importance of managing hypertension and the potential health risks associated with uncontrolled hypertension
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Empower patients to take an active role in their hypertension management and encourage them to ask questions and share concerns
                                        </li>
                                        <br></br>

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
                                <span className='headeingcolorblack'> Rise Above </span>
                                <span className='headeingcolorblue'> Hypertension! </span>

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

};

export default hypertension;