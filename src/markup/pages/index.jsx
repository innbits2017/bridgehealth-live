import React, { Component, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Testimonial1 from '../element/testimonial1';
import Testimonial2 from '../element/testimonial2';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Modal, Button } from "react-bootstrap";
import CaseStudy from '../element/case-study';
import ContactForm from '../element/contact-form';
import FormValidation from './formvalidation';
const BRIDGE_HEALTH_SITE = process.env.BRIDGE_HEALTH_SITE;

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
            isSubmitDisabled: true,
            errors: {}
        };
    }

    handleChange = (event) => {
        // const { name, value } = event.target;
        // this.setState({ ...this.state, [name]: value });
        this.setState({ [event.target.name]: event.target.value }, () => {
            this.validateForm();
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        // Perform form submission logic here
    };


    validateForm = () => {
        const { username, email, phone } = this.state;
        const errors = {};

        // Username validation
        if (username.trim() === "") {
            errors.username = "Please enter your name*";
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = "Please enter a valid email address*";
        }

        // Phone validation
        if (!/^\d{10}$/.test(phone)) {
            errors.phone = "Please enter a 10-digit phone number*";
        }

        this.setState({
            errors,
            isSubmitDisabled: Object.keys(errors).length > 0
        });
    };

    saveData = async (e) => {

        console.log(e, "Data is saving");

        e.preventDefault();

        const { email, username, phone, message } = this.state;

        const res = await fetch("http://localhost:8000/submit", {
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

        const res = await fetch("http://localhost:8000/register", {
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

        const { isSubmitDisabled, errors } = this.state;

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
                                <h5 class="display-4"><span class="display-3">Let’s help you </span>#BridgeTheGap</h5>
                                <p class="lead mb-0">Personalised and holistic preventive health plans for <br></br>you and your loved ones
                                </p>

                                <button class="commonBtnforAll btnleft">GET STARTED</button>

                            </div>
                        </div>
                    </div>
                </div>

                <section class="team-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='fontwidth'>Confused about your health checks?<br></br>
                                <span className='headeingcolorblack'> Scan our </span>
                                <span className='headeingcolorblue'>BH Smart Guide<span className='headeingcolorblack'>!</span></span>
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
                                                Developed by our in-house clinical experts,
                                                the BH Smart Guide is a smarter way to understand the right diagnostic tests for you based on your current health status, family history, and lifestyle choices.
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
                                            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" className='videofull'>
                                                <source src={require('../../assets/images/hand.mp4')} type="video/mp4" />
                                            </video>                                        </div>
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
                                            <div class="text1 textpadding" style={{ marginRight: 40 + 'px' }}>
                                                Predict the onset of   <span className='headeingcolorblack'> hidden illnesses</span> and health conditions.<br></br>
                                                Prevent them by undergoing <span className='headeingcolorblack'>tests.</span><br></br>
                                                Progress towards <span className='headeingcolorblack'>good health.</span>
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
                                        {/* <div class="btn-box marginleft20">
                                            <a class="theme-btn btn-style-one" href="#">

                                                <Popup trigger={<Link class="top-right flotright1" to="">  <span class="btn-title btn-style-one">KNOW MORE</span> </Link>
                                                } position="left">
                                                    <div class="contact-form-area">

                                                        <div class="contact-form">
                                                            <form method="post" onSubmit={e => { this.sendEmail(e); this.saveData(e) }} action="#">
                                                                <div class="row clearfix">
                                                                    <div class="col-md-12 form-group">
                                                                        <input
                                                                            type="text"
                                                                            value={this.state.username}
                                                                            onChange={e => this.handleChange(e)}
                                                                            name="username"
                                                                            id="name"
                                                                            placeholder="Name*"
                                                                            required={true}
                                                                        />
                                                                        {errors.username && <div className="error">{errors.username}</div>}
                                                                    </div>

                                                                    <div class="col-md-12 form-group">
                                                                        <input
                                                                            type="email"
                                                                            value={this.state.email}
                                                                            onChange={e => this.handleChange(e)}
                                                                            name="email"
                                                                            id="email"
                                                                            placeholder="Email*"
                                                                            required={true}
                                                                        />
                                                                        {errors.email && <div className="error">{errors.email}</div>}
                                                                    </div>
                                                                    <div class="col-md-12 form-group">
                                                                        <input
                                                                            type="phone"
                                                                            value={this.state.phone}
                                                                            onChange={e => this.handleChange(e)}
                                                                            name="phone"
                                                                            id="phone"
                                                                            placeholder="Phone*"
                                                                            required=""
                                                                        />
                                                                        {errors.phone && <div className="error">{errors.phone}</div>}

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
                                                                        <label class="form-check-label heading colorwhite">
                                                                            I agree that Bridge Health may contact me at the email address or phone number above.
                                                                        </label>
                                                                    </div>
                                                                    <div class="col-md-12 form-group">
                                                                        <button
                                                                            class="theme-btn btn-style-one btncontact"
                                                                            type="submit"
                                                                            name="submit-form"
                                                                            disabled={isSubmitDisabled}
                                                                            onSubmit={e => this.handleSubmit(e)}
                                                                        ><span class="btn-title">SUBMIT</span></button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>

                                                </Popup>
                                            </a>
                                        </div> */}
                                        <div class="btn-box text-center btn5">
                                            <button class="commonBtnforAll">KNOW MORE</button>


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
                                <div class="col-lg-3 team-block-one" >
                                    <div onClick={this.openModal}>
                                        <div class="expanded-text grow bozhover">
                                            <p class="text">

                                                <img src={require('../../assets/images/shape/doctor.png')} alt="" />
                                                <div class="short-name expertise">Annual Preventive<br></br> Health Plans</div>
                                                <div class="longer-name">
                                                    No matter what you need, there’s always a plan for you. Choose from a selection of Annual Preventive Health plans and sign up for better health.
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 team-block-one" >
                                    <div>
                                        <CaseStudy />

                                    </div>
                                </div>
                                <div class="col-lg-3 team-block-one" >
                                    <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/comprehensive-health-checks'}>

                                                <img src={require('../../assets/images/shape/s2.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Comprehensive<br></br> Health Checks</div>
                                            <div class="longer-name">
                                                Prevention is better than cure. With advanced technology, we are able to understand your entire health profile and help you prevent illnesses. Book your Comprehensive Health Check today.
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one" >

                                    <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/doctor-consults'}>

                                                <img src={require('../../assets/images/shape/k3.jpeg')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Doctor <br></br>Consults</div>
                                            <div class="longer-name">
                                                Getting an appointment with your doctor at your nearest clinic can be burdensome.
                                                We simplify the process and allow you to consult with our experts whenever, wherever.
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row marginbutton30">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one" >


                                    <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/psychological-health'}>

                                                <img src={require('../../assets/images/shape/k2.jpeg')} alt="" /></a>
                                            <div class="short-name expertise">Psychologist Consults</div>
                                            <div class="longer-name">
                                                Mental health is extremely important in the current times due to increased work and social pressures. Talk to our expert clinical psychologists.
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one" >
                                    <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/dental-consults'}>

                                                <img src={require('../../assets/images/shape/s5.png')} alt="" /></a>
                                            <div class="short-name expertise">Dental Consults</div>
                                            <div class="longer-name">
                                                Most people neglect their oral health which can be disastrous for their overall health. Book your dental consultation with us today and smile with confidence.
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one" >
                                    <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/dermatology'}>

                                                <img src={require('../../assets/images/shape/s7.png')} alt="" /></a>
                                            <div class="short-name expertise">Dermatology</div>
                                            <div class="longer-name">
                                                Contrary to popular belief, don’t just cater to the needs of fashion models.
                                                Our hair, skin, and nails deserve to be treated well. Talk to our dermatologists today.
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one" >
                                    <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/ophthalmologist'}>
                                                <img src={require('../../assets/images/shape/s8.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Ophthalmology</div>
                                            <div class="longer-name">
                                                Our eyesight is a precious gift which allows us to see the beauty of the world. We need to take care of our eyes to prevent any eye-related illnesses. Meet our ophthalmologists today.
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row marginbutton30">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one" >
                                    <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/physio-therapy'}>
                                                <img src={require('../../assets/images/shape/s9.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Physiotherapy</div>
                                            <div class="longer-name">
                                                In life, we take our ability to move around freely for granted. Due to injuries or certain illnesses, our movement gets affected.
                                                Schedule a physiotherapy session with us and move with ease.
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one" >
                                    <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/elderly-care'}>
                                                <img src={require('../../assets/images/shape/s10.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Elderly Care</div>
                                            <div class="longer-name">
                                                Growing old is a natural part of our lives. As we age, our physical abilities gradually get compromised and we need assistance. Discover our elderly care services.
                                            </div>
                                        </p>
                                    </div>

                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one" >
                                    <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/lab-tests'}>
                                                <img src={require('../../assets/images/shape/s11.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Lab Tests</div>
                                            <div class="longer-name">
                                                The key to an effective diagnosis is effective testing.
                                                Advancements in lab testing have allowed us to accurately determine illnesses and provide treatment plans. Discover our state-of-the-art lab facilities.
                                            </div>
                                        </p>
                                    </div>

                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one" >
                                    <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/diet-and-nutrition'}>
                                                <img src={require('../../assets/images/shape/s12.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Diet and Nutrition</div>
                                            <div class="longer-name">
                                                A healthy diet is the basis for good health. After all, you are what you eat.
                                                Find out how our expert clinical nutritionists help you eat healthy to stay healthy.
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row marginbutton30">
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one" >

                                    <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/yoga-assessment'}>
                                                <img src={require('../../assets/images/shape/s13.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Yoga Assessment <br></br>and Coaching</div>
                                            <div class="longer-name">
                                                Yoga has been a part of our culture for centuries. The focus on harmony of mind, body,
                                                and spirit has been scientifically proven to have positive effects on health. Talk to our yoga therapists.
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one" >


                                    <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/fitness-assessment'}>
                                                <img src={require('../../assets/images/shape/s14.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Fitness Assessment<br></br> and Coaching</div>
                                            <div class="longer-name">
                                                For good health, exercise is important. We’ve taken this to another level and have adopted a clinical fact-based approach with our unique fitness program. Discover our pro-fit program.
                                            </div>
                                        </p>
                                    </div>



                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one" >
                                    <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/pharmacy'}>
                                                <img src={require('../../assets/images/shape/s15.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Pharmacy</div>
                                            <div class="longer-name">
                                                It’s important to get the medicines you need at the right time.
                                                At Bridge Health, we have a fully-stocked pharmacy which is built to meet your needs. Discover our pharmacy today.

                                            </div>
                                        </p>
                                    </div>

                                </div>
                                {/* <!-- Team Block One --> */}
                                <div class="col-lg-3 team-block-one" >
                                    <div class="expanded-text grow bozhover">
                                        <p class="text">
                                            <a href={'/nursing-at-home'}>
                                                <img src={require('../../assets/images/shape/s16.png')} alt="" />
                                            </a>
                                            <div class="short-name expertise">Nursing At Home</div>
                                            <div class="longer-name">
                                                With nursing services provided directly to you and your loved ones at the comfort of your own home,
                                                get the timely care and assistance you need at all times.
                                            </div>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </section>


                {/* <!-- Testimonial Section --> */}
                <Testimonial2 />
                <Testimonial1 />
                <popup />
                {/* <!-- News Section --> */}
                <section class="auto-container3">
                    <div class="auto-container">

                        <div class="row">
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4" >
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
                            <div class="news-block-one col-lg-4" >
                                <div class="inner-box">
                                    <div class="image"><Link to={'/'}><img src={require('../../assets/images/shape/blog1.png')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Blog heading</div>

                                        <h3><Link to={''}>Myths And Facts About GI Foods</Link></h3>
                                        <div class="text">Carbohydrates have been villainized in recent years as the culprit for weight gain and even chronic diseases</div>
                                    </div>
                                </div>


                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4" >
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/shape/blog3.png')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Blog heading</div>

                                        <h3><Link to={''}>Everything you need to know about Glycemic Index</Link></h3>
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
                                    <p style={{ fontSize: 22 + 'px' }}>There is a plan to fit the specific health needs of everybody - your spouse, parents, kids & YOU! <br></br> <span className='headeingcolorblue'>Talk to our health advisor today!!</span></p>
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
                            <FormValidation />

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