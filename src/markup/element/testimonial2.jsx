import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal, Button } from "react-bootstrap";

class Testimonial2 extends Component {
    state = {
        isOpen: false
    };
    state1 = {
        isOpen1: false
    };
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render()
     {
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
                            <h2>   <div class="sec-title text-center">
                                <h2>
                                    <span className='headeingcolorblack'> Testimonials</span>
                                </h2>
                                <h5 className='heading3'>They <span className='headeingcolorblue'>#BridgeTheGap!</span> Here’s what they said.
                                </h5>
                            </div></h2>
                        </div>
                        <div class="row marginTop50">
                            <div className="col-xl-12">
                                <Slider {...settings} className="theme_carousel">

                                    <div class="slide-item">
                                        <section class="">
                                            <div class="auto-container">
                                                <div class="row align-items-center">


                                                    <div class="col-lg-6">
                                                        <div class="image-wrapper">
                                                            <div class="image-one"  onClick={this.openModal}>
                                                                <img src={require('../../assets/images/shape/testimonial.png')} alt="" className='imgwidth' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="content-box">
                                                            <div class="sec-title testtitle">
                                                                <div class="text mar25">
                                                                    <span>
                                                                        <img src={require('../../assets/images/shape/testimonial1.png')} alt="" className='testthumb' />
                                                                    </span>
                                                                    <span className='headeingcolorblack spenheading'>Anil Kesavan</span>
                                                                    <p className='textpa'>Empowering transformation in employee wellness</p>
                                                                </div>
                                                            </div>
                                                            <div class="text">
                                                            By incorporating preventive healthcare strategies, individuals can identify potential cancer risks, take proactive steps to minimize those risks and detect cancer at early stages when treatment options are often more successful. These efforts improve overall cancer outcomes and reduce the disease's burden.
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
                                                                <img src={require('../../assets/images/shape/testimonial.png')} alt="" className='imgwidth' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="content-box">
                                                            <div class="sec-title testtitle">
                                                            <div class="text mar25">
                                                                    <span><img src={require('../../assets/images/shape/testimonial1.png')} alt="" className='testthumb' /></span>
                                                                    <span className='headeingcolorblack spenheading'>Shanaya Gupta</span>
                                                                    <p className=' textpaextra'>SUBSCRIBED TO THE PLATINUM PLAN</p>
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
                    <Modal show={this.state.isOpen} onHide={this.closeModal} className='widthdialog modalDialog'>
                    <Modal.Header closeButton>
                    <iframe className='widthVideo' src="https://www.youtube.com/embed/Faz-OTvBuEk" title="Empowering transformation in employee wellness - Bridge Health" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Modal.Header>

                </Modal>
                </section>
            </>
        )
    }
}
export default Testimonial2;