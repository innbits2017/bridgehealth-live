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