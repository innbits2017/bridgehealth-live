import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';
import Seo from '../layout/seo';

const aboutbg = require('./../../assets/images/shape/phesio.png');

class physiotherapy extends Component {

    componentDidMount() {
        document.title = 'Physiotherapy | Bridge Health';
    }


    render() {
        const title = "Best Physiotherapy Services in Bangalore|Book Online|Bridge Health";
        const description = "Book physiotherapy consultation with Bridge health's experienced & skilled professionals in Bangalore. Schedule a physiotherapy session with us and move with ease. Get in touch with our physiotherapists in Bangalore ";
        // const metadata = "steel building, steel buildings";
        return (
            <>
                <Seo title={title} description={description} />
                <Header />
                <section class="internalpage internalpageresponsive style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box physiobox">
                            <h1 className='d-none'></h1>
                            <div class="textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblack'>Improve your<span className='headeingcolorblue'> mobility </span><br></br>
                                        one step at a time </span>

                                </h2>
                                <h3 className='textleft marginTop40'>
                                    Schedule a physiotherapy<br></br> session with us
                                </h3>
                            </div>
                            <div class="btn-box btn5">
                                <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                            </div>

                        </div>

                    </div>
                </section>


                <section class="contact-section">

                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-lg-6 doctor-image">
                                <img src={require('../../assets/images/shape/p1.png')} alt="" className='width100 marginTop40reverse' />
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <div class="sec-title squrebox">
                                        <p className='font22'>
                                            Due to natural age progression, chronic illnesses, or accidents that cause crippling injuries, your ability to move may be compromised. Physiotherapy helps you regain strength in your limbs gradually so that you can improve your mobility.
                                        </p>
                                        <p className='font22'>

                                            At Bridge Health, we try to go a step further with our physiotherapy treatments. Apart from helping you regain mobility, our physiotherapists are trained to help you improve the strength and function of your limbs, increase your endurance, and minimize pain.
                                        </p>

                                    </div>
                                    <div class="btn-box text-center btn5">
                                        <ContactForm buttonText="BOOK NOW" popupPosition="left" />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section class="team-section">

                    {/* About Section Two */}
                    <div class="auto-container">
                        <div class="row align-items-center reverseFlex">
                            <div class="col-lg-6">
                                <div class="content-box">
                                    <h2>
                                        <span className='headeingcolorblack'> What We </span>
                                        <span className='headeingcolorblue'>  Offer</span>
                                    </h2>

                                    <ul className='listicon'>
                                        <li>
                                            Physiotherapy for Musculo-Skeletal & Ortho Conditions
                                        </li>
                                        <li>

                                            Physiotherapy for Women Health which inludes Pelvic Floor Weakness, Pre and Post Natal Cases
                                        </li>
                                        <li>

                                            Physiotherapy for Elderly Care/Geriatrics
                                        </li>
                                        <li>

                                            Physiotherapy for Neurological Conditions
                                        </li>
                                        <li>
                                            Physiotherapy for Post-Operative Rehabilitation
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
                                        <img src={require('../../assets/images/shape/p2.png')} alt="" className='width100' />
                                        {/* <img src={require('../../assets/images/shape/video2.gif')} alt="" /> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="contact-section physi">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <img src={require('../../assets/images/shape/p3.png')} alt="" className='width100' />
                            </div>

                            <div class="col-lg-6">
                                <h2 className='header1 fontrem'>
                                    <span className='headeingcolorblack'> The</span>
                                    <span className='headeingcolorblue'>  Bridge Health</span>
                                    <span className='headeingcolorblack'> Advantage </span>
                                </h2>
                                <ul className='listicon'>
                                    <li>
                                        Goal-oriented programs
                                    </li>
                                    <li>
                                        Regular progress monitoring
                                    </li>
                                    <li>
                                        Personalized programs and sessions with expert guidance from physicians
                                    </li>

                                    <li>
                                        Home visits are available across Bangalore
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='header1'>
                                <span className='headeingcolorblack'>Its time to start moving towards a    </span>
                                <span className='headeingcolorblue'> better life! </span>


                            </h2>
                        </div>
                        <div class="btn-box text-center btn5">
                            <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}
export default physiotherapy;