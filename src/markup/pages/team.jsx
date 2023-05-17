import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Testimonial1 from '../element/testimonial1';

const aboutbg = require('./../../assets/images/background/image-11.jpg');
const wellcomebg1 = require('./../../assets/images/resource/image-1.jpg');

class Team extends Component {


    render() {
        return (
            <>
                <Header />

                <div className='margin150'>
                </div>
                <Testimonial1 />

                {/* <!-- About Section Two --> */}
                <section class="about-section-two">
                    <div class="auto-container">
                        <div class="row align-items-center">

                            <div class="col-lg-4">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/team.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">

                                        <div class="text font18"><strong>Dr. Dhanya Prabhu </strong>Ramadas is a highly motivated, team-<br></br>oriented, and compassionate family physician. She believes in <br></br>providing evidence-based holistic care to all her patients. Her <br></br>fields of interest are geriatrics, neurology, women & child health <br></br>and lifestyle medicine.<br></br>
                                            She has completed her DNB from Bangalore Baptist Hospital<br></br> and thereafter, completed MRCGP [Int]. She is a member of The <br></br>Academy of Family Physicians of India (AFPI) and is certified by <br></br>the Karnataka Medical Council.<br></br>
                                            When not with her patients, she is busy travelling, spending <br></br>time with family, listening to old English country music or <br></br>reading. She keeps herself fit by practicing yoga, jogging and <br></br>dancing.</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row align-items-center marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/team1.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <div class="text font18">
                                            <strong>Dr. Vedavathi. N </strong>is an empathetic, competent and passionate <br></br>doctor. She has over 10 years of experience in identifying and <br></br>screening individuals of all age groups for risk factors to <br></br>prevent diseases and their progression. She has a special <br></br>interest in preventive medicine and anatomy.<br></br>
                                            She has completed her P.G Diploma in Family Medicine from<br></br> Apollo Hospitals, Bangalore, through the Royal College of<br></br> General Practitioners - United Kingdom. She is a certified NABH <br></br>Assessor and ISO Assessor. Dr. Veda has also been a faculty <br></br>member of the paramedical college at Dayanand Sagar<br></br> University.<br></br>
                                            At a personal level, she loves learning rangoli designs and also <br></br>enjoys dancing.
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="row align-items-center marginTop50">

                            <div class="col-lg-4">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/team2.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="author-info">
                                    <div class="wrapper-box text">
                                        <div class="text font18">
                                            <strong>Dr. Jyotsna Mathai </strong>is a Consultant Physician with a special<br></br> interest in Women's Health. She has completed her MBBS from <br></br>Jawaharlal Nehru Medical College-Dharwad University and<br></br> DGO from College of Physician and Surgeons- Mumbai. She<br></br> was previously associated with Activ Doctors Clinic and <br></br>NationWide Primary Health Clinic. She is known for her knowledge of Obstetrics and Gynaecology.<br></br>
                                            Dr Jyotsna believes in integrity, respect and responsibility,<br></br> which have led her to have a successful practice and career. <br></br>Her core beliefs have helped her reach out to all kinds of <br></br>people, from every walk of life. She also loves reading about spirituality, esoteric philosophy, and human behaviour analysis.<br></br>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>





                <Footer />
            </>
        )
    }
}
export default Team;