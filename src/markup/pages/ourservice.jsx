import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import CaseStudy from '../element/case-study';
import { Modal, Button } from "react-bootstrap";
class ourservice extends Component {
    state = {
        isOpen: false
    };
    state1 = {
        isOpen1: false
    };
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    componentDidMount() {
        document.title = 'Our Services | Bridge Health';
    }


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
                                <div onClick={this.openModal}>
                                        <div class="expanded-text grow bozhover">
                                            <p class="text">

                                                <img src={require('../../assets/images/shape/doctor.png')} alt="" />
                                                <div class="short-name expertise">Annual Preventive<br></br> Health Plans</div>
                                                <div class="longer-name">No matter what you need, there’s always a plan for you. Choose from a selection of Annual Preventive Health plans and sign up for better health.
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div>
                                        <CaseStudy />

                                    </div>
                                </div>

                                <div class="col-lg-3 team-block-one wow fadeInUp margontop50" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/comprehensive-health-checks'}>

                                                <img src={require('../../assets/images/shape/s2.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Comprehensive<br></br> Health Checks</div>
                                            <div class="longer-name">   Health is defined as a state of complete physical, mental, and social well-being.
                                              </div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margin100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                   
                                <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/doctor-consults'}>

                                                <img src={require('../../assets/images/shape/k3.jpeg')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Doctor <br></br>Consults</div>
                                            <div class="longer-name">  All of us get sick at some point in life. And whenever we get sick,
                                                we always go to the doctor</div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margintop100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/psychological-health'}>

                                                <img src={require('../../assets/images/shape/k2.jpeg')} alt="" /></a>
                                            <div class="short-name expertise">Psychologist Consults</div>
                                            <div class="longer-name"> Mental health is extremely important in the current times due to increased work and social pressures. Talk to our expert clinical psychologists.
</div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/dental-consults'}>

                                                <img src={require('../../assets/images/shape/s5.png')} alt="" /></a>
                                            <div class="short-name expertise">Dental Consults</div>
                                            <div class="longer-name">  Our teeth are made of enamel which is the hardest substance in the human body.</div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margontop50" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="expanded-text grow bozhover">
                                        <p class="text">
                                        <a href={'/dermatology'}>

                                            <img src={require('../../assets/images/shape/s7.png')} alt="" /></a>
                                            <div class="short-name expertise">Dermatology</div>
                                            <div class="longer-name">    A good physical appearance is a reflection of youth and confidence.
                                                Unfortunately,</div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margin100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="expanded-text grow bozhover">
                                        <p class="text">
                                        <a href={'/ophthalmologist'}>
                                        <img src={require('../../assets/images/shape/s8.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Ophthalmology</div>
                                            <div class="longer-name">Our eyesight is a precious gift which allows us to see the beauty of the world. We need to take care of our eyes to prevent any eye-related illnesses. Meet our ophthalmologists today.
</div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margintop100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="expanded-text grow bozhover">
                                        <p class="text">
                                        <a href={'/physio-therapy'}>
                                        <img src={require('../../assets/images/shape/s9.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Physiotherapy</div>
                                            <div class="longer-name">In life, we take our ability to move around freely for granted. Due to injuries or certain illnesses, our movement gets affected. Schedule a physiotherapy session with us and move with ease.
</div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="expanded-text grow bozhover">
                                        <p class="text">
                                        <a href={'/elderly-care'}>
                                        <img src={require('../../assets/images/shape/s10.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Elderly Care</div>
                                            <div class="longer-name">Growing old is a natural part of our lives. As we age, our physical abilities gradually get compromised and we need assistance. Discover our elderly care services.
</div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margontop50" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="expanded-text grow bozhover">
                                        <p class="text">
                                        <a href={'/lab-tests'}>
                                        <img src={require('../../assets/images/shape/s11.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Lab Tests</div>
                                            <div class="longer-name">  The key to an effective diagnosis is effective testing. Advancements in lab testing have allowed us to accurately determine illnesses and provide treatment plans. Discover our state-of-the-art lab facilities.
</div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margin100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="expanded-text grow bozhover">
                                        <p class="text">
                                        <a href={'/diet-and-nutrition'}>
                                        <img src={require('../../assets/images/shape/s12.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Diet and Nutrition</div>
                                            <div class="longer-name"> A healthy diet is the basis for good health. After all, you are what you eat. Find out how our expert clinical nutritionists help you eat healthy to stay healthy.
</div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margintop100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="expanded-text grow bozhover">
                                        <p class="text">
                                        <a href={'/yoga-assessment'}>
                                        <img src={require('../../assets/images/shape/s13.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Yoga Assessment <br></br>and Coaching</div>
                                            <div class="longer-name">Yoga has been a part of our culture for centuries. The focus on harmony of mind, body, and spirit has been scientifically proven to have positive effects on health. Talk to our yoga therapists.
</div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="expanded-text grow bozhover">
                                        <p class="text">
                                        <a href={'/fitness-assessment'}>
                                                <img src={require('../../assets/images/shape/s14.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Fitness Assessment<br></br> and Coaching</div>
                                            <div class="longer-name">For good health, exercise is important. We’ve taken this to another level and have adopted a clinical fact-based approach with our unique fitness program. Discover our pro-fit program.</div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margontop50" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="expanded-text grow bozhover">
                                        <p class="text">
                                        <a href={'/pharmacy'}>
                                        <img src={require('../../assets/images/shape/s15.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Pharmacy</div>
                                            <div class="longer-name"> It’s important to always keep an adequate supply of the medicines you need.</div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp margin100" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="expanded-text grow bozhover">
                                        <p class="text">
                                        <a href={'/nursing-at-home'}>
                                        <img src={require('../../assets/images/shape/s16.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Nursing At Home</div>
                                            <div class="longer-name">With nursing services provided directly to you and your loved ones at the comfort of your own home, get the timely care and assistance you need at all times.
</div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section>
                    <div class="image-eight imgpa">
                        <img src={require('../../assets/images/shape/scan.png')} alt=""
                            style={{ marginLeft: 6 + '%', width: 90 + 'px', height: 100 + 'px', marginBottom: 3 + 'rem' }} />
                    </div>
                </section>

                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <a href={'/personal-membership-program'}>
                            <span><img class="width50" src={require('../../assets/images/shape/popup1.png')} alt="" />
                                <p className='width50p'>Personal Membership Programme</p>
                            </span>
                        </a>
                        <a href={'/corporate-membership-program'}>
                            <span>
                                <img class="width50" src={require('../../assets/images/shape/popup2.png')} alt="" />
                                <p className='width50p'>Corporate Membership Programme</p>
                            </span>
                        </a>

                    </Modal.Header>

                </Modal>


                <Footer />
            </>
        )
    }
}
export default ourservice;