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
\                            <div class="row align-items-center">

                                <div class="col-lg-6">
                                    <div class="content-box boxsha">
                                
                                    <div class=" text-center textleft">
                            <h2 className='textleft'><span className='headeingcolorblue'>Our Services</span></h2>
                          
                              </div>
                              <div class="">
                                            <div class="text">Having good health allows you to experience the simple joys of life. Your health is like an investment. The more you invest, the more returns you get. Therefore, nurturing and taking good care of it is important.     </div>
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
                                        <h2 className='expertise'>Annual Preventive Health Plans</h2>

                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                    <img src={require('../../assets/images/shape/s1.png')} alt="" />
                                        <h2 className='expertise'>Chronic Care Programs</h2>

                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                                    </div>
                                </div>
                               
                                <div class="col-lg-3 team-block-one wow fadeInUp margontop50" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                    <img src={require('../../assets/images/shape/s2.png')} alt="" />
                                            <h2 className='expertise'>Comprehensive Health Checks</h2>
                                            <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margin100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="grow bozhover">
                                        <div>
                                           <img src={require('../../assets/images/shape/s3.png')} alt="" />
                                           <h2 className='expertise'>Doctor Consults</h2>
                                            <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margintop100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                           <img src={require('../../assets/images/shape/s4.png')} alt="" />
                                           <h2 className='expertise'>Psychologist Consults</h2>
 <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                           <img src={require('../../assets/images/shape/s5.png')} alt="" />
                                           <h2 className='expertise'>Dental Consults</h2>
 <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margontop50" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                           <img src={require('../../assets/images/shape/s7.png')} alt="" />
                                           <h2 className='expertise'>Dermatology</h2>
 <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margin100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                           <img src={require('../../assets/images/shape/s8.png')} alt="" />
                                           <h2 className='expertise'>Ophthalmology</h2>
 <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
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
 <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                           <img src={require('../../assets/images/shape/s10.png')} alt="" />
                                           <h2 className='expertise'>Elderly Care</h2>
 <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margontop50" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                           <img src={require('../../assets/images/shape/s11.png')} alt="" />
                                           <h2 className='expertise'>Lab Tests</h2>
 <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margin100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                           <img src={require('../../assets/images/shape/s12.png')} alt="" />
                                           <h2 className='expertise'>Diet and Nutrition</h2>
 <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
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
 <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                           <img src={require('../../assets/images/shape/s14.png')} alt="" />
                                           <h2 className='expertise'>Fitness Assessment and Coaching</h2>
 <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margontop50" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                           <img src={require('../../assets/images/shape/s15.png')} alt="" />
                                           <h2 className='expertise'>Pharmacy</h2>
                                            <span>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margin100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                           <img src={require('../../assets/images/shape/s16.png')} alt="" />
                                           <h2 className='expertise'>Nursing At Home</h2>
 <p>Annual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health PlansAnnual Preventive Health Plans</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>



                <Footer />
            </>
        )
    }
}
export default ourservice;