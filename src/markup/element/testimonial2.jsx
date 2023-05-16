import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Testimonial2 extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <>
                <section class="testimonial-section  testimonialpadding expertiseback1">
                    <div class="auto-container">
                        <div class="sec-title light">
                            <div class="sub-title">Testimonials</div>
                            <h2>   <div class="sec-title text-center">
                                <h2>
                                    <span className='headeingcolorblack'> Testimonials</span>
                                </h2>
                                <h5 className='heading3'>They <span className='headeingcolorblue'>#BridgeTheGap!</span> Here’s what they said.
                                </h5>
                            </div></h2>
                        </div>
                        <div class="row">
                            <div className="col-xl-12">
                                <Slider {...settings} className="theme_carousel">

                                    <div class="slide-item">
                                        <section class="">
                                            <div class="auto-container">
                                                <div class="row align-items-center">


                                                    <div class="col-lg-6">
                                                        <div class="image-wrapper">
                                                            <div class="image-one">
                                                                <img src={require('../../assets/images/shape/testimonial.png')} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="content-box">
                                                            <div class="sec-title testtitle">
                                                                <div class="text">
                                                                    <span>
                                                                        <img src={require('../../assets/images/shape/testimonial1.png')} alt="" className='testthumb' />
                                                                    </span>
                                                                    <span className='headeingcolorblack spenheading'>Shanaya Gupta</span>
                                                                    <p className='textpa'>SUBSCRIBED TO THE PLATINUM PLAN</p>
                                                                </div>
                                                            </div>
                                                            <div class="text">
                                                                I highly recommend this holistic healthcare company to anyone seeking a more holistic and personalized approach to their healthcare. The level of care and attention I received was top-notch, and I felt confident that I was in good hands throughout the entire process.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div class="slide-item">
                                        <section class="">
                                            <div class="auto-container">
                                                <div class="row align-items-center">


                                                    <div class="col-lg-6">
                                                        <div class="image-wrapper">
                                                            <div class="image-one">
                                                                <img src={require('../../assets/images/shape/testimonial.png')} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="content-box">
                                                            <div class="sec-title testtitle">
                                                                <div class="text">
                                                                    <span><img src={require('../../assets/images/shape/testimonial1.png')} alt="" className='testthumb' /></span>
                                                                    <span className='headeingcolorblack'>Shanaya Gupta</span>
                                                                    <p className='textpa'>SUBSCRIBED TO THE PLATINUM PLAN</p>
                                                                </div>
                                                            </div>
                                                            <div class="text">
                                                                I highly recommend this holistic healthcare company to anyone seeking a more holistic and personalized approach to their healthcare. The level of care and attention I received was top-notch, and I felt confident that I was in good hands throughout the entire process.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Testimonial2;