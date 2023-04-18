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

                {/* <!-- Testimonial Section --> */}
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

                                        <div class="text"><strong>Dr. Dhanya Prabhu </strong>Ramadas is a highly motivated, team-oriented, and compassionate family physician. She believes in providing evidence-based holistic care to all her patients. Her fields of interest are geriatrics, neurology, women & child health and lifestyle medicine.
                                            She has completed her DNB from Bangalore Baptist Hospital and thereafter, completed MRCGP [Int]. She is a member of The Academy of Family Physicians of India (AFPI) and is certified by the Karnataka Medical Council.
                                            When not with her patients, she is busy travelling, spending time with family, listening to old English country music or reading. She keeps herself fit by practicing yoga, jogging and dancing.</div>
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
                                        <div class="text">
                                            <strong>Dr. Vedavathi. N </strong>is an empathetic, competent and passionate doctor. She has over 10 years of experience in identifying and screening individuals of all age groups for risk factors to prevent diseases and their progression. She has a special interest in preventive medicine and anatomy.
                                            She has completed her P.G Diploma in Family Medicine from Apollo Hospitals, Bangalore, through the Royal College of General Practitioners - United Kingdom. She is a certified NABH Assessor and ISO Assessor. Dr. Veda has also been a faculty member of the paramedical college at Dayanand Sagar University.
                                            At a personal level, she loves learning rangoli designs and also enjoys dancing.
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
                                        <div class="text">
                                            <strong>Dr. Jyotsna Mathai </strong>is a Consultant Physician with a special interest in Women's Health. She has completed her MBBS from Jawaharlal Nehru Medical College-Dharwad University and DGO from College of Physician and Surgeons- Mumbai. She was previously associated with Activ Doctors Clinic and NationWide Primary Health Clinic. She is known for her knowledge of Obstetrics and Gynaecology.
                                            Dr Jyotsna believes in integrity, respect and responsibility, which have led her to have a successful practice and career. Her core beliefs have helped her reach out to all kinds of people, from every walk of life. She also loves reading about spirituality, esoteric philosophy, and human behaviour analysis.
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