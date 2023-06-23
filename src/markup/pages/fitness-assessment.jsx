import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';

class fitnessAssessment extends Component {

    componentDidMount() {
        document.title = 'Fitness Assessment | Bridge Health';
    }

    render() {
        return (
            <>
                <Header />

                <section class="team-section padding doctoeback">
                    {/* About Section Two */}
                    <section class="container-fluid">
                        <div class="row align-items-center auto-container">

                            <div class="col-lg-5">
                                <div class="content-box marginTop40header fitnesback">

                                    <div class="sec-title text-center textleft">
                                        <h2 className='textleft fontSize50'>
                                            <span className='headeingcolorblack'> It’s time to get</span> <br></br>
                                            <span className='headeingcolorblue fontitalic'> MOVING </span></h2>
                                        <h3 className='textleft marginTop40'>
                                            Stay fit and active with our  <br></br> pro-fit program
                                        </h3>
                                    </div>
                                    {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                    <div class="btn-box btn5">

                                        <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7">
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
                                        <img src={require('../../assets/images/shape/fitness4.png')} alt="" className='widthimg' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title squrebox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            To stay healthy, regular exercise is a must! Regular exercise and keeping our bodies active reduces blood pressure, improves blood circulation, burns excess fat & calories, and reduces the risk of heart ailments.
                                            Taking it a step further, doctors and specialists have developed workout plans based on clinical fact-based evidence with the help of interdisciplinary teams. These programs are proven to have incredible benefits on the overall health of individuals.
                                        </p>

                                    </div>
                                    <div class="btn-box text-center btn5 marBtnTop">
                                        {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                        <ContactForm buttonText="BOOK NOW" popupPosition="left" />

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="fitnessbox">

                    <div class="auto-container ">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title squrebox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            By combining their expertise, our team at Bridge Health takes into account various aspects of your health and well-being. Doctors offer medical insights, nutritionists provide guidance on proper dietary choices, and exercise specialists design tailored workout programs.
                                            This collaborative approach ensures that all facets of your fitness journey are addressed, leading to optimal results.
                                        </p>

                                    </div>
                                    <div class="btn-box text-center btn5 marBtnTop">
                                        {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                        <ContactForm buttonText="BOOK NOW" popupPosition="right" />

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/fit.png')} alt="" className='width64' />
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
                                            <img src={require('../../assets/images/shape/fitness2.png')} alt="" className='widthimg' />
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
                                            <li>
                                                Cardiorespiratory Training
                                            </li>
                                            <li>
                                                Strength and Conditioning
                                            </li>
                                            <li>
                                                Functional Training
                                            </li>
                                            <li>
                                                Prehabilitation and Rehabilitation services
                                            </li>
                                            <li>
                                                Customized program for health issues
                                            </li>

                                            <li>
                                                Posture and functional corrective exercises
                                            </li>
                                            <li>
                                                Vitality exercises
                                            </li>
                                            <li>
                                                Ability Improvement exercises
                                            </li>

                                            <li>
                                                Group Classes
                                            </li>
                                            <li>
                                                Corporate Fitness Programs
                                            </li>
                                            <li>
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
                        <div class="row align-items-center">
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
                                            Covid compliant atmosphere
                                        </li>

                                        <li>
                                            Free trial session
                                        </li>

                                        <li>
                                            Pay in easy installments
                                        </li>
                                        <li>
                                            Flexible hours of workouts in a day
                                        </li>
                                        <li>
                                            Medical providers & licensed therapist support
                                        </li>
                                        <li>
                                            Supervision by an American Council-certified trainer
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-5">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/Workout.png')} alt="" className='widthimg imgFloatRight' />
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
                                <span className='headeingcolorblue'> Stay Healthy! </span>
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

export default fitnessAssessment;