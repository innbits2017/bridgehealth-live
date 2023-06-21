import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
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
                <section class="testimonial-section testback">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 style={{ fontSize: 50 + 'px' }}>
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
                                                <p className='textpara1'>Family Physician</p>
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
                                                <div class="thumb"><img src={require('../../assets/images/shape/794.png')} alt="" />
                                                </div>
                                            </div>
                                            <div class="inner-box test1">
                                                <h5 className='heading12 spenheading'>Dr Jisha B</h5>
                                                <p className='textpara1'>Consultant Physician</p>
                                                <div class="text">
                                                    Dr Jisha B has an MBBS degree from Pondicherry University. With several years of experience in the healthcare industry,
                                                    Dr. Benansia has worked in various prestigious hospitals.
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="slide-item testimonal2">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/801.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test2">
                                                <h5 className='heading12 spenheading'>Dr. Krithika Prasad</h5>
                                                <p className='textpara1'>Head – Pathologist</p>

                                                <div class="text">
                                                    Dr. Krithika Prasad is the Head Pathologist at Bridge Health, where she brings over 7+ years of experience.
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="slide-item">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/maleicon.svg')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test1">
                                                <h5 className='heading12 spenheading'>Srinivasa Murthy K</h5>
                                                <p className='textpara1'>Senior Physiotherapist</p>

                                                <div class="text">
                                                    Srinivasa Murthy has completed his Bachelor of Physiotherapy from NTR University in Andhra Pradesh and thereafter, MPT in Rehabilitation from Pondicherry University.
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="slide-item testimonal3">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/femaleicon.svg')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test3">
                                                <h5 className='heading12 spenheading'>Arpitha Mirchandani</h5>
                                                <p className='textpara1'>Psychologist </p>

                                                <div class="text">
                                                    Arpitha Mirchandani holds a Master’s degree in Psychology and has 17+ years of work experience.
                                                    She has been associated with organizations and schools like Jindal Nature Cure Institute, K12 Techno Services, RIMS International School, Lenovo, etc.
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="slide-item testimonal2">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/femaleicon.svg')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test2">
                                                <h5 className='heading12 spenheading'>Sonal Preet Sachdev</h5>
                                                <p className='textpara1'>Psychologist</p>

                                                <div class="text">
                                                    Sonal Preet Sachdev is a highly qualified and experienced Psychologist with a passion for helping people achieve optimal mental health.
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="slide-item">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/anup.jpeg')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test1">
                                                <h5 className='heading12 spenheading'>Anoop M</h5>
                                                <p className='textpara1'>Optometrist</p>

                                                <div class="text">
                                                    Anoop M a certified clinical optometrist from the University of Kerela and has about 7 years of work experience. He has also completed a Diploma in Ophthalmic Assistance.
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="slide-item testimonal3">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/793.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test3">
                                                <h5 className='heading12 spenheading'>Shivakumara Nayaka</h5>
                                                <p className='textpara1'>Radiographer</p>

                                                <div class="text">
                                                    Shivakumara Nayaka is a highly skilled Radiographer with over 5 years of experience in the field.
                                                    He holds a Diploma in Medical Imaging Technology and has expertise in X-ray, CT, PET CT, and other imaging technologies.
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="slide-item testimonal2">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/795.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test2">
                                                <h5 className='heading12 spenheading'>Maitreyee De Sarkar</h5>
                                                <p className='textpara1'>Senior Clinical Nutritionist</p>

                                                <div class="text">
                                                    Maitreyee De Sarkar with about 11 years of experience, Maitreyee’s goal is to simplify existing health issues by providing practical and enjoyable lifestyle management
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="slide-item">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/799.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test1">
                                                <h5 className='heading12 spenheading'>Prathima A</h5>
                                                <p className='textpara1'>Clinical Nutritionist</p>

                                                <div class="text">
                                                    Prathima A is a highly qualified and experienced professional in the field of food science and nutrition.
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="slide-item testimonal3">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/803.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test3">
                                                <h5 className='heading12 spenheading'>Madhura Paroolker Behki</h5>
                                                <p className='textpara1'>Senior Nutritionist</p>

                                                <div class="text">
                                                    Madhura Paroolker Behki is a MSc Dietetics & Applied Nutrition graduate from Manipal University, who has been working in the field of healthcare for over 5 years.
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="slide-item testimonal2">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/maleicon.svg')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test2">
                                                <h5 className='heading12 spenheading'>Vighneshwar Hebbar</h5>
                                                <p className='textpara1'>Yoga Therapist</p>

                                                <div class="text">
                                                    Vighneshwar Hebbar is an advanced yoga expert and practitioner with 6 years of experience in instruction-led-delivery & therapy.
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="slide-item">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/802.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test1">
                                                <h5 className='heading12 spenheading'>Shrilaxmi Hegde</h5>
                                                <p className='textpara1'>Assistant Yoga Therapist</p>

                                                <div class="text">
                                                    Shrilaxmi Hegde is an accomplished yoga therapist and trainer. Besides doing her MSc in Yogic Science, specializing in Yoga Therapy from Mangalore University (where she was a gold medallist).
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="slide-item testimonal3">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/800.png')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test3">
                                                <h5 className='heading12 spenheading'>Roshan Madhusudhan Suvarna</h5>
                                                <p className='textpara1'>Fitness Coach</p>

                                                <div class="text">
                                                    Roshan Madhusudhan Suvarna a certified exercise specialist with over 7 years of experience in the field of fitness and exercise science.
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="slide-item testimonal2">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/femaleicon.svg')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test2">
                                                <h5 className='heading12 spenheading'>Dr. Krithika Prasad
                                                </h5>
                                                <p className='textpara1'>Head – Pathologist
                                                </p>

                                                <div class="text">
                                                    Dr. Krithika Prasad is the Head Pathologist at Bridge Health, where she brings over 7+ years of experience.                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="slide-item testimonal3">
                                        {/* <!-- Testimonial-block --> */}
                                        <div class="testimonial-block">
                                            <div class="author-info">
                                                <div class="thumb"><img src={require('../../assets/images/shape/maleicon.svg')} alt="" />
                                                </div>

                                            </div>
                                            <div class="inner-box test3">
                                                <h5 className='heading12 spenheading'>Srinivasa Murthy K

                                                </h5>
                                                <p className='textpara1'>Senior Physiotherapist
                                                </p>

                                                <div class="text">
                                                    Srinivasa Murthy has completed his Bachelor of Physiotherapy from NTR University in Andhra Pradesh and thereafter, MPT in Rehabilitation from Pondicherry University.                                             </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            {/* SEE ALL */}
                            <h6 class="leader-btn1">
                                <a href={'/team'}>
                                    SEE ALL
                                </a>
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
                                                <h5 className='heading12 spenheading'>Dr Vedavathi. N</h5>
                                                <p className='textpara1'>Family Physician</p>

                                                <div class="text">
                                                    Dr. Veda is an empathetic, competent and passionate doctor. She has over 10 years of experience in identifying and screening individuals.
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
                                                <h5 className='heading12 spenheading'>Dr. Jyotsna Mathai</h5>
                                                <p className='textpara1'>Consultant Physician</p>

                                                <div class="text">
                                                    Dr. Jyotsna is a Consultant Physician with a special interest in Women's Health. She has completed her MBBS.
                                                </div>
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
                                <a href={'/team'}>
                                    SEE ALL
                                </a>
                            </h6>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Testimonial1;