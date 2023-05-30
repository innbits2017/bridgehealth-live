import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'

class fitnessAssessment extends Component {
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
                                            <span className='headeingcolorblack'> It’s time to get</span> <br></br>
                                            <span className='headeingcolorblue fontitalic'> MOVING </span></h2>
                                        <h3 className='textleft marginTop40'>
                                            Stay fit and active with our  <br></br> pro-fit program
                                        </h3>
                                    </div>
                                    <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>


                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper imgright">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/fitness.png')} alt="" className='imgwidth' />
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
                                        <img src={require('../../assets/images/shape/fitness4.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            To stay healthy, regular exercise is a must! Regular exercise and keeping our bodies active reduces blood pressure, improves blood circulation, burns excess fat & calories, and reduces the risk of heart ailments.
                                            Taking it a step further, doctors and specialists have developed workout plans based on clinical fact-based evidence with the help of interdisciplinary teams. These programs are proven to have incredible benefits on the overall health of individuals.
                                        </p>
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
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/fitness1.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>


                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            The <span style={{ fontWeight: 500 }}>Pro-Fit Program</span> at Bridge Health is designed based on clinical fact-based evidence. Our interdisciplinary team includes medical providers, licensed therapists,
                                            and exercise specialists. Our qualified trainers have several years of experience in the fitness industry and are available to assist you in creating a customized exercise program for your body type.
                                        </p>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">BOOK NOW</span></button>

                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>
                </section>

                <section class="team-section">

                    {/* About Section Two */}
                    <section class="">
                        <div class="auto-container">
                            <div class="row align-items-center">

                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one image-two">
                                            <img src={require('../../assets/images/shape/fitness2.png')} alt="" className='width84' />
                                            {/* <img src={require('../../assets/images/shape/video2.gif')} alt="" /> */}
                                        </div>

                                    </div>
                                </div>


                                <div class="col-lg-6">
                                    <div class="content-box">
                                        <h2>
                                            <span className='headeingcolorblack'> What We </span>
                                            <span className='headeingcolorblue'>  Offer</span>
                                        </h2>

                                        <ul className='listicon'>
                                            <li className='listicon'>
                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Cardiorespiratory Training
                                            </li>
                                            <li className='listicon'>

                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Strength and Conditioning
                                            </li>
                                            <li className='listicon'>

                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Functional Training
                                            </li>
                                            <li className='listicon'>

                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Prehabilitation and Rehabilitation services
                                            </li>
                                            <li className='listicon'>

                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Customized program for health issues
                                            </li>

                                            <li className='listicon'>

                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Posture and functional corrective exercises
                                            </li>
                                            <li className='listicon'>

                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Vitality exercises
                                            </li>
                                            <li className='listicon'>

                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Ability Improvement exercises
                                            </li>

                                            <li className='listicon'>

                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Group Classes
                                            </li>
                                            <li className='listicon'>

                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Corporate Fitness Programs
                                            </li>
                                            <li className='listicon'>

                                                <img className='listicon5' src={require('../../assets/images/shape/y3.png')} alt="" />
                                                Online Fitness Programs
                                            </li>


                                        </ul>
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
                                <div class="contact-form-area">
                                    <div class="auto-container">
                                        <h2 className='header1'>
                                            <span className='headeingcolorblack'> The</span>
                                            <span className='headeingcolorblue'>  Bridge Health</span>
                                            <span className='headeingcolorblack'> Advantage </span>
                                        </h2>

                                    </div>
                                    <ul className='listicon'>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Covid compliant atmosphere
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Daily vitals check
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Free trial session
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Early bird introductory offers on packages
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Pay in easy installments
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Flexible hours of workouts in a day
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Medical providers & licensed therapist support
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Supervision by an American Council-certified trainer
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-5">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/fitness3.png')} alt="" className='width84' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section>
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='header1'>
                                <span className='headeingcolorblack'> Get moving & Stay Active to  </span>
                                <span className='headeingcolorblue'> stay Healthy! </span>
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

export default fitnessAssessment;