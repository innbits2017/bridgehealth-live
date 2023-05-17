import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bgimg7 = require('./../../assets/images/background/image-7.jpg');

// const Testimonial1_content = [
//     {
//         thumb: require('./../../assets/images/resource/a1.png'),
//         author: 'Dr. Dhanya Prabhu Ramadas',
//         designation: 'Head - Clinical Services',
//         title: 'Design Quality',
//         description:
//             'Dr. Dhanya is a highly motivated, team-oriented, and compassionate family physician. She believes in providing evidence-based holistic care to all her patients.',

//     },
//     {
//         thumb: require('./../../assets/images/resource/a2.png'),
//         author: 'Dr Vedavathi. N',
//         designation: 'Consultant Physician',
//         title: 'Design Quality',
//         description:
//             'Dr. Veda is an empathetic, competent and passionate doctor. She has over 10 years of experience in identifying and screening individuals',

//     },
//     {
//         thumb: require('./../../assets/images/resource/a3.png'),
//         author: 'Dr. Jyotsna Mathai',
//         designation: 'Consultant Physician',
//         title: 'Design Quality',
//         description:
//             'Dr. Jyotsna is a Consultant Physician with a special interest in Womens Health. She has completed her MBBS ',

//     },
//     {
//         thumb: require('./../../assets/images/resource/thumb-4.jpg'),
//         author: 'Alexer Valvin',
//         designation: 'Founder, Coxer IT',
//         title: 'Design Quality',
//         description:
//             'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',

//     },
// ]


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
                <section class="testimonial-section testback">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 style={{fontSize: 50 + 'px'}}>
                                {/* Confused about your health checks?<br></br> */}
                                <span className='headeingcolorblack'> Meet The </span> <span className='headeingcolorblue'>Bridgers</span>
                            </h2>
                            <h5 className='heading3'>Build a Healthy Future With the Help of Our Specialists</h5>
                        </div>

                    </div>
                    <div class="auto-container marginbtm desktoptest">

                        <div class="row">
                            <div className="col-xl-12">
                                <Slider {...settings} className="theme_carousel">
                                    <div class="slide-item">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/test11.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test1">
                                                <h5 className='heading12 spenheading'>Dr. Dhanya Prabhu Ramadas</h5>
                                                <p className='textpara1'>Head - Clinical Services</p>

                                                <div class="text">
                                                    Dr. Dhanya is a highly motivated, team-oriented, and compassionate family physician. She believes in providing evidence-based holistic care to all her patients.
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="slide-item testimonal2">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/test12.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test2">
                                                <h5 className='heading12 spenheading'>Dr Vedavathi. N</h5>
                                                <p className='textpara1'>Consultant Physician</p>

                                                <div class="text">
                                                    Dr. Veda is an empathetic, competent and passionate doctor. She has over 10 years of experience in identifying and screening individuals
                                                </div>
                                            </div>

                                        </div>
                                    </div>   
                                    <div class="slide-item testimonal3">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/test13.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test3">
                                                <h5 className='heading12 spenheading'>Dr. Jyotsna Mathai</h5>
                                                <p className='textpara1'>Consultant Physician</p>

                                                <div class="text">
                                                    Dr. Jyotsna is a Consultant Physician with a special interest in Women's Health. She has completed her MBBS                                                </div>
                                            </div>

                                        </div>
                                    </div>   
                                    <div class="slide-item">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/test11.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test1">
                                                <h5 className='heading12 spenheading'>Dr. Jyotsna Mathai</h5>
                                                <p className='textpara1'>Consultant Physician</p>

                                                <div class="text">
                                                    Dr. Jyotsna is a Consultant Physician with a special interest in Women's Health. She has completed her MBBS
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            {/* SEE ALL */}
                            <h6 class="leader-btn1">
                                SEE ALL
                            </h6>
                        </div>
                    </div>
                    <div class="auto-container mobiletest marginbutton30">

                        <div class="row">
                            <div className="col-xl-12">
                                <Slider {...settings1} className="theme_carousel">
                                    <div class="slide-item">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/test11.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test1">
                                                <h5 className='heading12 spenheading'>Dr. Dhanya Prabhu Ramadas</h5>
                                                <p className='textpara1'>Head - Clinical Services</p>

                                                <div class="text">
                                                    Dr. Dhanya is a highly motivated, team-oriented, and compassionate family physician. She believes in providing evidence-based holistic care to all her patients.
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="slide-item">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/test12.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test2">
                                                <h5 className='heading12 spenheading'>Dr. Dhanya Prabhu Ramadas</h5>
                                                <p className='textpara1'>Head - Clinical Services</p>

                                                <div class="text">
                                                    Dr. Veda is an empathetic, competent and passionate doctor. She has over 10 years of experience in identifying and screening individuals
                                                </div>
                                            </div>

                                        </div>
                                    </div>  
                                     <div class="slide-item">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/test13.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test3">
                                                <h5 className='heading12 spenheading'>Dr Vedavathi. N</h5>
                                                <p className='textpara1'>Consultant Physician</p>

                                                <div class="text">
                                                    Dr. Jyotsna is a Consultant Physician with a special interest in Women's Health. She has completed her MBBS                                                </div>
                                            </div>

                                        </div>
                                    </div>   
                                    <div class="slide-item">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/test11.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test1">
                                                <h5 className='heading12 spenheading'>Dr. Jyotsna Mathai</h5>
                                                <p className='textpara1'>Consultant Physician</p>

                                                <div class="text">
                                                    Dr. Jyotsna is a Consultant Physician with a special interest in Women's Health. She has completed her MBBS
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            {/* SEE ALL */}
                            
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
export default Testimonial1;