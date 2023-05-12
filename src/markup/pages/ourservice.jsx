import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/background/image-11.jpg');
const wellcomebg1 = require('./../../assets/images/resource/image-1.jpg');

class ourservice extends Component {


    render() {
        return (
            <>
                <Header />
                <section class="team-section padding ourservice">
                    {/* About Section Two */}
                    <section class="container">
                        <div class="row align-items-center">

                            <div class="col-lg-6">
                                <div class="content-box boxsha">

                                    <div class=" text-center textleft">
                                        <h2 className='textleft'><span className='headeingcolorblue'>Our Services</span></h2>

                                    </div>
                                    <div class="">
                                        <div class="text">
                                        With our suite of personalised preventive health plans, you and your loved ones can enjoy the benefits of a healthier tomorrow. 
                                        It’s time to #BridgeTheGap between you and your health.
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/service222.png')} alt="" className='imgwidth' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                {/* <!--End Banner Section --> */}


                {/* <!-- Gallery Section --> */}
                <section class="gallery-section ourservice1">
                    <section class="">
                        <div class="auto-container">
                            <div class="row">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margintop100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div className=''>
                                        <div class="grow bozhover">
                                            <img src={require('../../assets/images/shape/doctor.png')} alt="" />
                                            <h2 className='expertise'>Annual Preventive<br></br> Health Plans</h2>

                                            <p>
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <img src={require('../../assets/images/shape/s1.png')} alt="" />
                                        <h2 className='expertise'>Chronic Care Programs</h2>

                                        <p>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                        </p>
                                    </div>
                                </div>

                                <div class="col-lg-3 team-block-one wow fadeInUp margontop50" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <img src={require('../../assets/images/shape/s2.png')} alt="" />
                                        <h2 className='expertise'>Comprehensive Health Checks</h2>
                                        <p>
                                        Health is defined as a state of complete physical, mental, and social well-being. 
                                        If even one aspect isn’t satisfied, it means that you are not healthy
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margin100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/aaa1.jpeg')} alt="" />
                                            <h2 className='expertise'>Doctor Consults</h2>
                                            <p>All of us get sick at some point in life. And whenever we get sick, we always go to the doctor </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margintop100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/aaa.jpeg')} alt="" />
                                            <h2 className='expertise'>Psychologist Consults</h2>
                                            <p>
                                            Unlike physical health issues, psychological issues are not as visible. They are generally ignored 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s5.png')} alt="" />
                                            <h2 className='expertise'>Dental Consults</h2>
                                            <p>
                                            Our teeth are made of enamel which is the hardest substance in the human body. Unhealthy food items like sugary carbonated drinks
                                             and candies weaken our enamel which causes a variety of problems including tooth decay.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margontop50" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s7.png')} alt="" />
                                            <h2 className='expertise'>Dermatology</h2>
                                            <p>
                                            A good physical appearance is a reflection of youth and confidence.
                                             Unfortunately, as we age, our physical appearance deteriorates.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margin100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s8.png')} alt="" />
                                            <h2 className='expertise'>Ophthalmology</h2>
                                            <p>
                                            Our eyes are the windows to the world. They allow us to see every detail and color, near and far.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margintop100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s9.png')} alt="" />
                                            <h2 className='expertise'>Physiotherapy</h2>
                                            <p>
                                            Due to natural age progression, chronic illnesses, or accidents that cause 
                                            crippling injuries, your ability to move may be compromised.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s10.png')} alt="" />
                                            <h2 className='expertise'>Elderly Care</h2>
                                            <p>
                                            Although we may stay young at heart, our body starts ageing. As we grow older, our physical abilities decline and
                                            we might find ourselves slower and more dependent on others for physical assistance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margontop50" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s11.png')} alt="" />
                                            <h2 className='expertise'>Lab Tests</h2>
                                            <p>
                                            The first step to treating any health condition is identification. 
                                            Lab tests are essential in this regard as they help to accurately examine a patient’s 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margin100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s12.png')} alt="" />
                                            <h2 className='expertise'>Diet and Nutrition</h2>
                                            <p>
                                            It’s no secret that eating a balanced diet is the key to a longer and healthier life. 
                                            Therefore, it’s important to understand that making wise changes in your diet could improve your health
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margintop100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s13.png')} alt="" />
                                            <h2 className='expertise'>Yoga Assessment and Coaching</h2>
                                            <p>
                                            Practiced for thousands of years, yoga has several benefits on your overall health. 
                                            Through a series of breathing exercises and poses, yoga
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s14.png')} alt="" />
                                            <h2 className='expertise'>Fitness Assessment and Coaching</h2>
                                            <p>
                                            To stay healthy, regular exercise is a must! Regular exercise and keeping our bodies active reduces blood pressure,
                                             improves blood circulation, burns excess fat & calories, and reduces
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margontop50" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s15.png')} alt="" />
                                            <h2 className='expertise'>Pharmacy</h2>
                                            <span>
                                            It’s important to always keep an adequate supply of the medicines you need. 
                                            This is especially important if you suffer from any chronic conditions. 
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margin100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <img src={require('../../assets/images/shape/s16.png')} alt="" />
                                            <h2 className='expertise'>Nursing At Home</h2>
                                            <p>
                                            Sometimes, especially for the elderly and for patients suffering from chronic illnesses,
                                             it becomes a challenge to travel to a hospital to get timely care. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section>
                    <div class="image-eight imgpa">
                        <img src={require('../../assets/images/shape/scan.png')} alt="" 
                         style={{marginLeft: 6 + '%', width: 90 + 'px', height: 100 + 'px', marginBottom: 3 + 'rem'}}/>
                    </div>
                </section>



                <Footer />
            </>
        )
    }
}
export default ourservice;