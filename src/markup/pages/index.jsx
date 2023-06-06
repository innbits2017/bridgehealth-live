import React, { Component, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import Header from '../layout/header';
import Footer from '../layout/footer';
import Testimonial1 from '../element/testimonial1';
import Testimonial2 from '../element/testimonial2';
import Popup from 'reactjs-popup';
import emailjs from "@emailjs/browser";
import 'reactjs-popup/dist/index.css';
import { Modal, Button } from "react-bootstrap";
import CaseStudy from '../element/case-study';
const BRIDGE_HEALTH_SITE=process.env.BRIDGE_HEALTH_SITE;

class Index extends Component {
    state = {
        isOpen: false
    };
    state1 = {
        isOpen1: false
    };
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            phone: '',
            message: '',
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ ...this.state, [name]: value });
        console.log(event)
    };

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state);
    };

    saveData = async (e) => {

        console.log(e, "Data is saving");

        e.preventDefault();

        const { email, username, phone, message } = this.state;

        const res = await fetch(`${BRIDGE_HEALTH_SITE}/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, username, phone, message
            }),
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log('error');
        } else {
            this.setState({ show: true, email: '', username: '', phone: '', message: '' });
            console.log('Data saved');
        }

    }


    sendEmail = async (e) => {
        e.preventDefault();

        const { email, username } = this.state;

        const res = await fetch(`${BRIDGE_HEALTH_SITE}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, username
            }),
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log('error');
        } else {
            this.setState({ show: true, email: '', username: '' });
            console.log('Email sent');
        }
    };

    render() {

        const { username, email } = this.state;
        const isSubmitDisabled = username === '' || email === ''

        return (
            <>

                <Header />

                {/* <!-- About --> */}
                <div class="video-background-holder">
                    <div class="video-background-overlay"></div>
                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src={require('../../assets/images/backgroundvideo.mp4')} type="video/mp4" />
                    </video>
                    <div class="video-background-content h-100 auto-container">
                        <div class="d-flex h-100 text-center align-items-center">
                            <div class="w-100 text-white floatleft">
                                <h5 class="display-4"><span class="display-3">Lets help you </span>#BridgeTheGap</h5>
                                <p class="lead mb-0">Personalised and holistic preventive health plans for <br></br>you and your loved ones
                                </p>
                                <Popup trigger={<div class="btn-box"><a class="theme-btn btn-style-one" href="#"><span class="btn-title">GET STARTED</span></a></div>
                                } position="right">
                                    <div class="contact-form-area">

                                        {/* <!-- Contact Form--> */}
                                        <div class="contact-form">
                                            <form method="post" onSubmit={e => { this.sendEmail(e); this.saveData(e) }} action="#">
                                                {/* <form ref={form} onSubmit={sendEmail}> */}

                                                <div class="row clearfix">
                                                    <div class="col-md-12 form-group">
                                                        <input
                                                            type="text"
                                                            value={this.state.username}
                                                            onChange={e => this.handleChange(e)}
                                                            name="username"
                                                            id="name"
                                                            placeholder="Name*"
                                                            required="" />
                                                    </div>

                                                    <div class="col-md-12 form-group">
                                                        <input
                                                            value={this.state.email}
                                                            onChange={e => this.handleChange(e)}
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            placeholder="Email*"
                                                            required="" />
                                                    </div>
                                                    <div class="col-md-12 form-group">
                                                        <input
                                                            type="phone"
                                                            name="phone"
                                                            value={this.state.phone}
                                                            onChange={e => this.handleChange(e)}
                                                            id="phone"
                                                            placeholder="Phone*"
                                                            required="" />
                                                    </div>

                                                    <div class="col-md-12 form-group">
                                                        <textarea
                                                            value={this.state.message}
                                                            onChange={e => this.handleChange(e)}
                                                            name="message"
                                                            id="message"
                                                            placeholder="Message"
                                                        ></textarea>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input"
                                                            type="checkbox" id="checkbox1" name="option1" value="good" />
                                                        <label class="form-check-label heading colorwhite">
                                                            I agree that Bridge Health may contact me at the email address or phone number above.
                                                        </label>
                                                    </div>
                                                    <div class="col-md-12 form-group">
                                                        <button
                                                            disabled={isSubmitDisabled}
                                                            onSubmit={e => this.handleSubmit(e)}
                                                            class="theme-btn btn-style-one btncontact"
                                                            type="submit"
                                                            name="submit-form"
                                                        ><span class="btn-title">SUBMIT</span></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </Popup>

                            </div>
                        </div>
                    </div>
                </div>

                <section class="team-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='fontwidth'>Confused about your health checks?<br></br>
                                <span className='headeingcolorblack'> Scan our </span>
                                <span className='headeingcolorblue'>BH Smart Guide <span className='headeingcolorblack'>!</span></span>
                            </h2>
                        </div>

                    </div>
                    {/* About Section Two */}
                    <section class="container-fluid">
                        <div class="auto-container">
                            <div class="row align-items-center">

                                <div class="col-lg-5">
                                    <div class="content-box">
                                        <div class="sec-title">
                                            <div class="text textpadding">
                                                Developed by our in-house clinical experts, BH Smart Guide is a smarter way to understand the right diagnostic tests for you based on your current health status, family history and lifestyle choices.
                                            </div>
                                        </div>
                                        <div class="image-one">
                                            <img className='imgstyle' src={require('../../assets/images/shape/Section1.png')} alt="" />
                                            <a href='https://api.whatsapp.com/send?phone=916366504753&text=Hey%20Bridge%20Health' target='_blank'>
                                                <img className='imgstyle1' src={require('../../assets/images/shape/Group3.png')} alt="" />
                                            </a>
                                        </div>
                                        <div class="qr-text">
                                            {/* <img className='imgstyle1' src={require('../../assets/images/shape/Group3.png')} alt="" /> */}
                                            {/* <button class="scan-qr">Scan QR Code
                                                <a style={{ color: '#fff' }} href="#" title="Whatsapp"><i class="fab fa-whatsapp"></i></a>
                                            </button> */}
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="image-wrapper imgright">
                                        <div class="image-one imgpad">
                                            <img src={require('../../assets/images/shape/Sequence-01.gif')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section>
                    <div class="image-seven imgpad">
                        <img src={require('../../assets/images/shape/scan.png')} alt="" />
                    </div>
                </section>

                {/* <!-- About --> */}



                <section class="team-section">
                    <div class="auto-container">
                        <div class="sec-title text-center marginbutton">
                            <h2 style={{ fontSize: 43 + 'px', lineHeight: 50 + 'px' }}> <span className=' headeingcolorblue'> Annual Preventive </span>
                                <span className='headeingcolorblack'>Health Plans</span>
                            </h2>
                            <h5 className='heading'>Membership-based integrated programs covering various aspects
                            </h5>
                        </div>

                    </div>
                    {/* About Section Two */}
                    <section class="">
                        <div class="auto-container">
                            <div class="row align-items-center">

                                <div class="col-lg-6">
                                    <div class="content-box">
                                        <div class="sec-title">
                                            <div class="text textpadding1">
                                                <span className='headeingcolorblue'>#BridgeTheGap</span> with our Annual Health<br></br> Plans that are membership-based <br></br>
                                                integrated programs covering everything <br></br>from clinical assessments to <br></br>
                                                consultations, lab tests to nutrition <br></br>sessions, lifestyle management to<br></br> emotional wellness and much more.
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-6 clmbackground">
                                    <div className='box'>
                                        <span>
                                            <img src={require('../../assets/images/shape/thumb.png')} alt="" />
                                        </span>
                                        <a href={'/personal-membership-program'}>
                                            <span className='textpara'>Personal Membership <br></br> Program</span>
                                        </a>
                                    </div>
                                    <div className='box marginTop40'>
                                        <a href={'/corporate-membership-program'}>
                                            <span className='textpara'>Corporate Membership <br></br> Program</span>
                                        </a>
                                        <span>
                                            <img src={require('../../assets/images/shape/thumb1.png')} alt="" className='flotrightimg' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section class="team-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='header1 predict'>
                                <span className='headeingcolorblack'><strong> PREDICT. </strong></span>
                                <span className='headeingcolorblue'><strong>PREVENT.</strong></span>
                                <span className='headeingcolorblack'> <strong> PROGRESS.</strong></span>
                            </h2>
                        </div>

                    </div>
                    {/* About Section Two */}
                    <section class="">
                        <div class="auto-container">
                            <div class="row align-items-center">


                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one image-two imgpad">
                                            <img src={require('../../assets/images/shape/ipad.gif')} alt="" />
                                            {/* <img src={require('../../assets/images/shape/video2.gif')} alt="" /> */}
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="content-box">
                                        <div class="sec-title">
                                            <div class="text1 textpadding" style={{ marginRight: 40 + 'px' }}>Predict the onset of
                                                <span className='headeingcolorblack'> hidden illnesses</span> and health conditions, prevent them by undergoing tests, check-ups and progress towards good health.
                                            </div>
                                        </div>
                                        <ul className='listicon10'>
                                            <li>
                                                <img className='listicon1' src={require('../../assets/images/shape/favicon-logo1.png')} alt="" />
                                                Get a detailed assessment report
                                            </li>
                                            <li>
                                                <img className='listicon1' src={require('../../assets/images/shape/favicon-logo1.png')} alt="" />
                                                Health score built on 7 parameters
                                            </li>
                                            <li>
                                                <img className='listicon1' src={require('../../assets/images/shape/favicon-logo1.png')} alt="" />
                                                Pre and Post score comparisons
                                            </li>
                                        </ul>
                                        <div class="btn-box marginleft20">
                                            <a class="theme-btn btn-style-one" href="#">
                                                <span class="btn-title">KNOW MORE</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section class="team-section expertiseback">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2> <span className='headeingcolorblack'>  Explore Our </span> <span className='headeingcolorblue'> Expertise</span></h2>
                            <h5 className='heading5'>From mental health and wellness to nutrition management, our services help <span className='headeingcolorblue'> #BridgeTheGap</span> between you and healthy living
                            </h5>
                        </div>

                    </div>
                    {/* About Section Two */}
                    <section class="">
                        <div class="auto-container">
                            <div class="row marginbutton30">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div onClick={this.openModal}>
                                        <div class="grow bozhover">

                                            <img src={require('../../assets/images/shape/doctor.png')} alt="" />

                                            <h2 className='expertise'>Annual Preventive<br></br> Health Plans</h2>

                                            <p>
                                                Explore our efficient membership services that provide a holistic care plan and guide you to start a healthy journey
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div>
                                        <CaseStudy />

                                    </div>
                                </div>
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <a href={'/comprehensive-health-checks'}>

                                            <img src={require('../../assets/images/shape/s2.png')} alt="" />
                                        </a>
                                        <a href={'/comprehensive-health-checks'}>

                                            <h2 className='expertise'>Comprehensive<br></br> Health Checks</h2>
                                        </a>
                                        <p>
                                            Health is defined as a state of complete physical, mental, and social well-being.
                                            If even one aspect isn’t satisfied, it means that you are not healthy
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <a href={'/doctor-consults'}>

                                                <img src={require('../../assets/images/shape/k3.jpeg')} alt="" />
                                            </a>
                                            <a href={'/doctor-consults'}>

                                                <h2 className='expertise'>Doctor Consults</h2>
                                            </a>
                                            <p>
                                                All of us get sick at some point in life. And whenever we get sick,
                                                we always go to the doctor
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row marginbutton30">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <a href={'/psychological-health'}>

                                                <img src={require('../../assets/images/shape/k2.jpeg')} alt="" />
                                            </a>
                                            <a href={'/psychological-health'}>

                                                <h2 className='expertise'>Psychologist Consults</h2>
                                            </a>
                                            <p>
                                                Unlike physical health issues, psychological issues are not as visible.
                                                They are generally ignored
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <a href={'/dental-consults'}>
                                                <img src={require('../../assets/images/shape/s5.png')} alt="" />
                                            </a>
                                            <a href={'/dental-consults'}>
                                                <h2 className='expertise'>Dental Consults</h2>
                                            </a>
                                            <p>
                                                Our teeth are made of enamel which is the hardest substance in the human body.
                                                Unhealthy food items like sugary carbonated drinks
                                                and candies weaken our enamel which causes a variety of problems including
                                                tooth decay.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <a href={'/dermatology'}>
                                                <img src={require('../../assets/images/shape/s7.png')} alt="" />
                                            </a>
                                            <a href={'/dermatology'}>
                                                <h2 className='expertise'>Dermatology</h2>
                                            </a>
                                            <p>
                                                A good physical appearance is a reflection of youth and confidence.
                                                Unfortunately, as we age, our physical appearance deteriorates.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <a href={'/ophthalmologist'}>
                                                <img src={require('../../assets/images/shape/s8.png')} alt="" />
                                            </a>
                                            <a href={'/ophthalmologist'}>
                                                <h2 className='expertise'>Ophthalmology</h2>
                                            </a>
                                            <p>
                                                Our eyes are the windows to the world. They allow us to see every detail
                                                and color, near and far.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row marginbutton30">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <a href={'/physio-therapy'}>
                                                <img src={require('../../assets/images/shape/s9.png')} alt="" />
                                            </a>
                                            <a href={'/physio-therapy'}>
                                                <h2 className='expertise'>Physiotherapy</h2>
                                            </a>
                                            <p>
                                                Due to natural age progression, chronic illnesses, or accidents that cause
                                                crippling injuries, your ability to move may be compromised.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <a href={'/elderly-care'}>
                                                <img src={require('../../assets/images/shape/s10.png')} alt="" />
                                            </a>
                                            <a href={'/elderly-care'}>
                                                <h2 className='expertise'>Elderly Care</h2>
                                            </a>
                                            <p>
                                                Although we may stay young at heart, our body starts ageing. As we grow older,
                                                our physical abilities decline and
                                                we might find ourselves slower and more dependent on others for physical
                                                assistance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <a href={'/lab-tests'}>
                                                <img src={require('../../assets/images/shape/s11.png')} alt="" />
                                            </a>
                                            <a href={'/lab-tests'}>
                                                <h2 className='expertise'>Lab Tests</h2>
                                            </a>
                                            <p>
                                                The first step to treating any health condition is identification.
                                                Lab tests are essential in this regard as they help to accurately examine
                                                a patient’s
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <a href={'/diet-and-nutrition'}>
                                                <img src={require('../../assets/images/shape/s12.png')} alt="" />
                                            </a>
                                            <a href={'/diet-and-nutrition'}>
                                                <h2 className='expertise'>Diet and Nutrition</h2>
                                            </a>
                                            <p>
                                                It’s no secret that eating a balanced diet is the key to a longer and healthier life.
                                                Therefore, it’s important to understand that making wise changes in your diet could improve your health
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row marginbutton30">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <a href={'/yoga-assessment'}>
                                                <img src={require('../../assets/images/shape/s13.png')} alt="" />
                                            </a>
                                            <a href={'/yoga-assessment'}>
                                                <h2 className='expertise'>Yoga Assessment <br></br>and Coaching</h2>
                                            </a>
                                            <p>
                                                Practiced for thousands of years, yoga has several benefits on your overall health.
                                                Through a series of breathing exercises and poses, yoga
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <a href={'/fitness-assessment'}>
                                                <img src={require('../../assets/images/shape/s14.png')} alt="" />
                                            </a>
                                            <a href={'/fitness-assessment'}>
                                                <h2 className='expertise'>Fitness Assessment<br></br> and Coaching</h2>
                                            </a>
                                            <p>
                                                To stay healthy, regular exercise is a must! Regular exercise and keeping our bodies active reduces blood pressure,
                                                improves blood circulation, burns excess fat & calories, and reduces
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <a
                                                href={'/pharmacy'}>
                                                <img src={require('../../assets/images/shape/s15.png')} alt="" />
                                            </a>
                                            <a href={'/pharmacy'}>
                                                <h2 className='expertise'>Pharmacy</h2>
                                            </a>
                                            <span>
                                                It’s important to always keep an adequate supply of the medicines you need.
                                                This is especially important if you suffer from any chronic conditions.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="grow bozhover">
                                        <div>
                                            <a href={'/nursing-at-home'}>
                                                <img src={require('../../assets/images/shape/s16.png')} alt="" />
                                            </a>
                                            <a href={'/nursing-at-home'}>
                                                <h2 className='expertise'>Nursing At Home</h2>
                                            </a>
                                            <p>
                                                Sometimes, especially for the elderly and for patients suffering from chronic illnesses,
                                                it becomes a challenge to travel to a hospital to get timely care.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>


                {/* <!-- Testimonial Section --> */}
                <Testimonial2 />
                <Testimonial1 />

                {/* <!-- News Section --> */}
                <section class="auto-container3">
                    <div class="auto-container">

                        <div class="row">
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/shape/blog.png')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category"> <a href='/blog-design'>  GI Score</a></div>

                                        <h3><a href={'/blog-design'}>What Does Your GI Score Indicate?</a></h3>
                                        <div class="text">As a child, you were likely cautioned to limit your intake of sweets. Remember the warning not to go</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/shape/blog1.png')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Blog heading</div>

                                        <h3><Link to={'/blog-details'}>Myths And Facts About GI Foods</Link></h3>
                                        <div class="text">Carbohydrates have been villainized in recent years as the culprit for weight gain and even chronic diseases</div>
                                    </div>
                                </div>


                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/shape/blog3.png')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Blog heading</div>

                                        <h3><Link to={'/blog-details'}>Everything you need to know about Glycemic Index</Link></h3>
                                        <div class="text">Even with the world becoming more health-conscious, diseases seem to be on the rise. While you frantically</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <button class="theme-btn btn-style-one btnblog blogtext" type="submit" name="submit-form">
                                <a href='/blog'>
                                    <span class="btn-title btnblog">READ ALL BLOGS</span>
                                </a>

                            </button>
                        </div>
                        {/* <div class="button-txt">
                            <Button class="btn"></Button>
                        </div> */}

                    </div>
                </section>

                {/* <!-- Contact Section --> */}
                <section class="contact-section">
                    <section class="">
                        <div class="auto-container">
                            <div class="sec-title text-center">
                                <h2 style={{ fontSize: 50 + 'px' }}> <span className='headeingcolorblue'>REACH </span> <span className='headeingcolorblack'>OUT TO US</span><br></br>
                                    <p style={{ fontSize: 22 + 'px' }}>Our health advisor is ready to answer your queries about what we do and how <br></br>we can help you take care of yourself and your loved ones better.</p>
                                </h2>
                            </div>

                        </div></section>
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img class="reachout" src={require('../../assets/images/shape/contact.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    {/* <!-- Contact Form--> */}
                                    <div class="contact-form">
                                        <form method="post" onSubmit={e => { this.sendEmail(e); this.saveData(e) }} action="#" id="contact-form">
                                            <div class="row clearfix">
                                                <div class="col-md-12 form-group">
                                                    <input
                                                        type="text"
                                                        value={this.state.username}
                                                        onChange={e => this.handleChange(e)}
                                                        name="username"
                                                        id="name"
                                                        placeholder="Name*"
                                                        required={true} />
                                                </div>

                                                <div class="col-md-6 form-group">
                                                    <input type="email"
                                                        value={this.state.email}
                                                        onChange={e => this.handleChange(e)}
                                                        name="email"
                                                        id="email"
                                                        placeholder="Email*"
                                                        required={true} />
                                                </div>
                                                <div class="col-md-6 form-group">
                                                    <input type="phone"
                                                        value={this.state.phone}
                                                        onChange={e => this.handleChange(e)}
                                                        name="phone"
                                                        id="phone"
                                                        placeholder="Phone"
                                                        required="" />
                                                </div>

                                                <div class="col-md-12 form-group">
                                                    <textarea
                                                        name="message"
                                                        value={this.state.message}
                                                        onChange={e => this.handleChange(e)}
                                                        id="message"
                                                        placeholder="Message"
                                                    ></textarea>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        type="checkbox" id="checkbox1" name="option1" value="good" />
                                                    <label class="form-check-label heading">
                                                        I agree that Bridge Health may contact me at the email address or phone number above.
                                                    </label>
                                                </div>
                                                <div class="col-md-12 form-group">
                                                    <button
                                                        disabled={isSubmitDisabled}
                                                        onSubmit={e => this.handleSubmit(e)}
                                                        class="theme-btn btn-style-one marginleft21"
                                                        type="submit"
                                                        name="submit-form"
                                                    ><span class="btn-title">SUBMIT</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
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
export default Index;