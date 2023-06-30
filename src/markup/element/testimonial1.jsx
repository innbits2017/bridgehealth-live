import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './css/styles111.css';
import './css/responsive.css';
import './css/bootstrap.min.css';
import './css/animated-slider.css'
import "slick-carousel/slick/slick-theme.css";
const bgimg7 = require('./../../assets/images/background/image-7.jpg');
class Testimonial1 extends Component {


  render() {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false
    };
    const settings1 = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <>
        <section class="testimonial-section">
          <div class="auto-container">
            <div class="sec-title text-center">
              <h2 style={{ fontSize: 50 + 'px' }}>
                {/* Confused about your health checks?<br></br> */}
                <span className='headeingcolorblack'> Meet The </span> <span className='headeingcolorblue'>Bridgers</span>
              </h2>
              <h5 className='heading3'>Build a Healthy Future With the Help of Our Specialists</h5>
            </div>
          </div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          />
          <div
            className="testimonial-section sbs-testimonial-section pd-top-105 pd-bottom-120"
            style={{ backgroundImage: "url(assets/img/bg/1h3.png)" }}
          >
            <div className="container-fulid testback">
              <div className="container">

                <div className="row justify-content-center">
                  <div className="col-lg-12 order-lg-1">
                    <div className="sbs-testimonial-slider">
                      <div className="choose_slider">
                        <div className="choose_slider_items">
                          <ul id="testimonial-slider">
                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/test12.png')} alt="" />
                              </div>
                              <div className="media">
                                <div class="author-info">
                                  {/* <div class="thumb"><img src={require('../../assets/images/shape/test11.png')} alt="" />
                                                </div> */}
                                </div>
                                <div className="media-body">
                                  <h6>Dr Vedavathi. N</h6>
                                  <p className="designation">Family Physician</p>

                                </div>
                              </div>
                              <p>
                                Dr. Veda is an empathetic, competent and passionate doctor. She has over 10 years of experience in identifying and screening individuals
                              </p>

                            </li>
                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/test11.png')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>Dr. Dhanya Prabhu Ramadas</h6>
                                  <p className="designation">Head - Clinical Services</p>

                                </div>
                              </div>
                              <p>
                                Dr. Dhanya is a highly motivated, team-oriented, and compassionate family physician. She believes in providing evidence-based holistic care to all her patients.
                              </p>

                            </li>
                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/maleicon.svg')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>Srinivasa Murthy K</h6>
                                  <p className="designation">Senior Physiotherapist</p>

                                </div>
                              </div>
                              <p>
                                Srinivasa Murthy has completed his Bachelor of Physiotherapy from NTR University in Andhra Pradesh and thereafter, MPT in Rehabilitation from Pondicherry University.
                              </p>
                            </li>
                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/801.png')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>Dr. Krithika Prasad</h6>
                                  <p className="designation">Head – Pathologist</p>

                                </div>
                              </div>
                              <p>
                                Dr. Krithika Prasad is the Head Pathologist at Bridge Health, where she brings over 7+ years of experience.
                              </p>
                            </li>
                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/794.png')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>Dr Jisha B</h6>
                                  <p className="designation">Consultant Physician </p>

                                </div>
                              </div>
                              <p>
                                Dr Jisha B has an MBBS degree from Pondicherry University. With several years of experience in the healthcare industry, Dr. Benansia has worked in various prestigious hospitals.
                              </p>
                            </li>

                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/femaleicon.svg')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>Arpitha Mirchandani</h6>
                                  <p className="designation">Psychologist</p>

                                </div>
                              </div>
                              <p>
                                Arpitha Mirchandani holds a Master’s degree in Psychology and has 17+ years of work experience.
                                She has been associated with organizations and schools like Jindal Nature Cure Institute, K12 Techno Services, RIMS International School, Lenovo, etc.
                              </p>

                            </li>

                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/femaleicon.svg')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>
                                    Sonal Preet Sachdev
                                  </h6>
                                  <p className="designation">Psychologist</p>

                                </div>
                              </div>
                              <p>
                                Sonal Preet Sachdev is a highly qualified and experienced Psychologist with a passion for helping people achieve optimal mental health.
                                With a Master’s in Clinical Psychology and a Post Graduate Diploma in Special Education.
                              </p>

                            </li>

                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/anup.jpeg')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>
                                    Anoop M
                                  </h6>
                                  <p className="designation">Optometrist</p>

                                </div>
                              </div>
                              <p>
                                Anoop M a certified clinical optometrist from the University of Kerela and has about 7 years of work experience.
                                He has also completed a Diploma in Ophthalmic Assistance.
                              </p>

                            </li>

                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/793.png')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>
                                    Shivakumara Nayaka
                                  </h6>
                                  <p className="designation">Radiographer</p>

                                </div>
                              </div>
                              <p>
                                Shivakumara Nayaka is a highly skilled Radiographer with over 5 years of experience in the field.
                                He holds a Diploma in Medical Imaging Technology and has expertise in X-ray, CT, PET CT, and other imaging technologies.
                              </p>

                            </li>

                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/795.png')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>
                                    Maitreyee De Sarkar
                                  </h6>
                                  <p className="designation">Senior Clinical Nutritionist</p>

                                </div>
                              </div>
                              <p>
                                Maitreyee De Sarkar with about 11 years of experience, Maitreyee’s goal is to simplify existing health
                                issues by providing practical and enjoyable lifestyle management strategies without restricting favourite foods, suggesting extreme diets or fad diets.
                              </p>

                            </li>

                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/799.png')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>
                                    Prathima A
                                  </h6>
                                  <p className="designation">Clinical Nutritionist</p>

                                </div>
                              </div>
                              <p>
                                Prathima A is a highly qualified and experienced professional in the field of food science and nutrition.
                                She holds an MSc degree in Dietetics and Food Service Management (DFSM) and has completed specializations in DFSM and Diabetes Management.
                              </p>

                            </li>

                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/803.png')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>
                                    Madhura Paroolker Behki
                                  </h6>
                                  <p className="designation">Senior Nutritionist </p>

                                </div>
                              </div>
                              <p>
                                Madhura Paroolker Behki is a MSc Dietetics & Applied Nutrition graduate from Manipal University, who has been working in the field of healthcare for over 5 years. She is also a Certified Diabetes
                                Educator and is passionate about helping people understand the importance of healthy eating.
                              </p>

                            </li>

                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/maleicon.svg')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>
                                    Vighneshwar Hebbar
                                  </h6>
                                  <p className="designation">Yoga Therapist </p>

                                </div>
                              </div>
                              <p>
                                Vighneshwar Hebbar is an advanced yoga expert and practitioner with 6 years of experience in instruction-led-delivery & therapy.
                                He has worked with institutions such as NIMHANS, Pradipika Institute and S-Vyasa.
                              </p>

                            </li>

                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/802.png')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>
                                    Shrilaxmi Hegde
                                  </h6>
                                  <p className="designation">Assistant Yoga Therapist </p>

                                </div>
                              </div>
                              <p>
                                Shrilaxmi Hegde is an accomplished yoga therapist and trainer. Besides doing her MSc in Yogic Science, specializing in Yoga Therapy from Mangalore University (where she was a gold medallist),
                                she has extensive knowledge of Kriyas, Asanas, Bandhas, Mudras, Pranayama, Advanced Yoga Techniques.
                              </p>

                            </li>

                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/800.png')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>
                                    Roshan Madhusudhan Suvarna
                                  </h6>
                                  <p className="designation">Fitness Coach</p>

                                </div>
                              </div>
                              <p>
                                Roshan Madhusudhan Suvarna a certified exercise specialist with over 7 years of experience in the field of fitness and exercise science.
                                With a passion for helping individuals achieve their health and fitness goals.
                              </p>

                            </li>

                            <li className="current_item">
                              <div class="thumb"><img src={require('../../assets/images/shape/test13.png')} alt="" />
                              </div>
                              <div className="media">

                                <div className="media-body">
                                  <h6>Dr. Jyotsna Mathai</h6>
                                  <p className="designation">Consultant Physician</p>

                                </div>
                              </div>
                              <p>
                                Dr. Jyotsna is a Consultant Physician with a special interest in Women's Health. She has completed her MBBS
                              </p>

                            </li>


                          </ul>
                        </div>
                      </div>
                      <div>
                        <div className="sbs-arrowleft">
                          <a id="btn_next" href="#">
                            <i className="fa fa-long-arrow-left" />
                          </a>
                        </div>
                        <div className="sbs-arrowright">
                          <a id="btn_prev" href="#">
                            <i className="fa fa-long-arrow-right" />
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div></div>
        </section>
      </>
    )
  }
}
export default Testimonial1;