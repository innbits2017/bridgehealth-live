import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';

const aboutbg = require('./../../assets/images/shape/Dietandnutrition.png');

class diet_and_nutrition extends Component {

    componentDidMount() {
        document.title = 'Diet & Nutrition | Bridge Health';
    }


    render() {
        return (
            <>
                <Header />

                <section class="internalpage internalpageresponsive style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">

                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblack'> EAT RIGHT.  </span><br></br>
                                    <span className='headeingcolorblue'> LIVE RIGHT. </span>

                                </h2>
                                <h3 className='textleft marginTop40'>
                                    Talk to our clinical nutritionists<br></br> and start eating healthy
                                </h3>
                            </div>
                            {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                            <div class="btn-box btn5">

                                <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                            </div>



                        </div>

                    </div>
                </section>
                {/* <b2c_page /> */}

                <section class="contact-section">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/nu3.png')} alt="" className='' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">

                                <div class="sec-title squrebox">
                                    <h2> <span className='headeingcolorblue'>YOU ARE WHAT YOU EAT</span>

                                    </h2>
                                    <p className='font22'>
                                        It’s no secret that eating a balanced diet is the key to a longer and healthier life. Therefore, it’s important to understand that making wise changes in your diet could improve your health. Having paroper knowledge about which foods to consume and limit or avoid is the first step in eating healthy.
                                    </p>


                                </div>
                                <div class="btn-box text-center btn5">
                                    {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                    <ContactForm buttonText="BOOK NOW" popupPosition="left" />

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <section class="">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/nu4.png')} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4" style={{ marginTop: 10 + 'rem' }}>
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        <h2> <span className='headeingcolorblack1'>A Healthy Diet to the Rescue! </span>

                                        </h2>

                                        <p>
                                            At Bridge Health, our dieticians are specialists in Medical Nutrition Therapy (MNT), an evidence-based approach to treating chronic conditions through the use of a tailored diet.
                                        </p>

                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}
                {/* dieat */}
                <div class="auto-container">

                    <img src={require('../../assets/images/shape/dieat.png')} alt="" />
                </div>
                <section class="team-section">
                    {/* About Section Two */}
                    <section class="">
                        <div class="auto-container">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="">
                                        <h2 className='header1'>
                                            <span className='headeingcolorblack'> What We </span>
                                            <span className='headeingcolorblue'>  Offer</span>
                                        </h2>
                                    </div>
                                    <div class="content-box">
                                        <ul className='listicon'>
                                            <li>
                                                Reduce the risk of diseases like diabetes, heart disease, kidney disease, hypertension, PCOS, and thyroid through diet modification plans
                                            </li>
                                            <li>
                                                Weight management for maintaining a healthy BMI
                                            </li>
                                            <li>
                                                Reverse prediabetes status with activity & specific diet plan
                                            </li>
                                            <li>
                                                Maintain a healthy lifestyle and reduce stress levels by including the right nutrients in meals
                                            </li>
                                        </ul>
                                        <div class="btn-box text-center btn5">
                                            {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                            <ContactForm buttonText="BOOK NOW" popupPosition="right" />

                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one image-two">
                                            <img src={require('../../assets/images/shape/nu5.png')} alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                {/* <!-- Contact Section --> */}
                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <img src={require('../../assets/images/shape/nu10.png')} alt="" />

                            </div>

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <div class="auto-container">
                                        <div class="">
                                            <h2 className='header1'>
                                                <span className='headeingcolorblack'> The</span>
                                                <span className='headeingcolorblue'>  Bridge Health</span>
                                                <span className='headeingcolorblack'> Advantage </span>
                                            </h2>
                                        </div>

                                    </div>
                                    <ul className='listicon'>
                                        <li>
                                            Inclusion of the right mix of macro & micronutrients based on Bridge Health’s nutritional approach to lower the insulin needed by the body
                                        </li>
                                        <li>
                                            Inclusion of Biota nutrients (prebiotics and probiotics) to strengthen your gut microbiomes
                                        </li>
                                        <li>
                                            Inclusion of natural antioxidants, anti-inflammatory nutrients, and adaptogens to reduce oxidative stress and inflammation
                                        </li>
                                        <li>
                                            Inclusion of organic, unprocessed & toxin-free ingredients to ensure no harmful additives enter your system
                                        </li>
                                        <li>
                                            Inclusion of the right amount of all essential nutrients to ensure good health and satisfy the respective dietary reference intakes.
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
                                <span className='headeingcolorblack'> The Secret to a</span>
                                <span className='headeingcolorblue'>  Healthier Life</span>
                                <span className='headeingcolorblack'> is a </span>
                                <span className='headeingcolorblue'>  Healthier Diet!</span>
                            </h2>
                        </div>
                        <div class="btn-box text-center btn7">
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
export default diet_and_nutrition;