import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Popup from 'reactjs-popup';
import ServiceFilter1 from '../element/service-filter1'
import ContactForm from '../element/contact-form';
import TeamSizeDropdown from './teamsize';


const aboutbg = require('./../../assets/images/background/image-11.jpg');
// const casebg = require('./../../assets/images/background/image-14.jpg');

class corporate_membership_program extends Component {

    componentDidMount() {
        document.title = 'Corporate Membership Program | Bridge Health';
    }


    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            phone: '',
            message: '',
        };
        // this.handleChange = this.handleChange.bind(this)
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

        const res = await fetch('http://localhost:8000/submit', {
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

        const res = await fetch('http://localhost:8000/register', {
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

                <section class="team-section padding">
                    {/* About Section Two */}
                    <div class="container-fulid">
                        <div class="row align-items-center paddinground">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/back.gif')} alt="" className='imgb2p' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="content-box">

                                    <div class="textleft">
                                        <h3 className='textleft' style={{ fontSize: 40 + 'px' }}>
                                            <span className='headeingcolorblack'>Redefining the Meaning of </span><br></br>
                                            <span className='headeingcolorblue'>Employee-Centric Care</span>
                                        </h3>
                                        <h4 className='textleft marginTop40'>Array of benefits for a healthier <br></br>and happier workforce
                                        </h4>
                                        <button class="commonBtnforAll btnleft">SAY YES!</button>

                                    </div>

                                    {/* <ContactForm buttonText="SAY YES!" /> */}


                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="">

                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 margin10rem">
                                <div class="sec-title">
                                    <h3 className='sec-heading'>
                                        <span >  We help you figure out <br></br></span >
                                        <i><span className='headeingcolorblue'>where you are </span></i>on your
                                        <i><span className='headeingcolorblue'> wellbeing journey </span></i>
                                    </h3>
                                    <button class="theme-btn btn-style-one" type="submit" name="submit-form">
                                        <span class="btn-title sec-heading1">GET QUOTE</span></button>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/Frame3.png')} alt=""
                                            style={{ marginRight: 2 + 'rem' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div className='container-fulid'>
                    <div className='container margintop100'>
                        <div className='sliderbox'>
                            <div class="image-one">
                                <img src={require('../../assets/images/shape/imageb2c.png')} alt="" />
                            </div>
                        </div>
                        <h2 className='sec-title text-center'>to take care of their employees</h2>

                        <img src={require('../../assets/images/shape/b2bsli.png')} alt="" />

                    </div>
                </div> */}


                <div class="auto-container margin150">
                    <div class="sec-title">
                        <h2>
                            <span className='headeingcolorblack'>THE CORPORATE </span>
                            <span className='headeingcolorblue'> WELLNESS </span>
                            <span className='headeingcolorblack'>MAP</span>
                        </h2>
                        <h4 className='textleft marginTop40'>Where are you on the well being journey?
                        </h4>
                    </div>

                </div>
                <div class="row align-items-center">
                    <div class="image-wrapper">
                        <div class="image-one">
                            <img src={require('../../assets/images/shape/slider1.png')} alt="" className='imgwidth' />
                        </div>
                    </div>
                </div>

                {/* <div class="container containerbackground">


                                to take care of their employees
                                </div> */}

                <div className='container-fulid'>
                    <div className='container margintop100'>
                        <div class="row align-items-center">
                            <div class="image-wrapper">
                                <div class="image-one">
                                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" className='videofull'>
                                        <source src={require('../../assets/images/logo.mp4')} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="container-fluid b2bback margin150">

                    <div className='container '>
                        <div class="sec-title text-center textleft">
                            <h3 className=''> <span className='headeingcolorblue'>BRIDGE HEALTH </span>
                                makes it possible for  <span className='headeingcolorblue'> Employers </span>to <br></br>keep a check on their  <span className='headeingcolorblue'> Employees’ Health Metrics </span></h3>

                        </div>
                        <div class="row align-items-center">
                            <div class="image-wrapper">
                                <div class="image-one">
                                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" className='videofull'>
                                        <source src={require('../../assets/images/output.mp4')} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Contact Section --> */}
                <section class="contact-section">
                    <section class="">
                        <div class="auto-container">
                            <div class="sec-title text-center">
                                <h2> <span className='headeingcolorblue'>BOOST  </span>
                                    <span className='headeingcolorblack'>YOUR EMPLOYEES  HEALTH</span><br></br>
                                </h2>
                            </div>

                        </div>
                    </section>
                    <div class="auto-container" style={{ marginBottom: 4 + 'rem' }}>
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    {/* <!-- Contact Form--> */}
                                    <div class="contact-form">
                                        <p>Reach out to us and we'll help you in setting up the <br></br>best of <span className='headeingcolorblue'>Preventive Healthcare</span> Services for your employee.</p>
                                        <form method="post" onSubmit={e => { this.sendEmail(e); this.saveData(e) }} id="contact-form">
                                            <div class="row clearfix">
                                                <div class="col-md-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        value={this.state.username}
                                                        onChange={e => this.handleChange(e)}
                                                        id="name"
                                                        placeholder="Name*"
                                                        required="" />
                                                </div>
                                                <div class="col-md-12 form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={this.state.email}
                                                        onChange={e => this.handleChange(e)}
                                                        id="name"
                                                        placeholder="Email*"
                                                        required="" />
                                                </div>  <div class="col-md-12 form-group">
                                                    <input
                                                        type="phone"
                                                        name="phone"
                                                        value={this.state.phone}
                                                        onChange={e => this.handleChange(e)}
                                                        id="name"
                                                        placeholder="Phone*"
                                                        required="" />
                                                </div>  <div class="col-md-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        id="name"
                                                        placeholder="Company Name"
                                                        required="" />
                                                </div>
                                                <div class="col-md-12 form-group">
                                                    < TeamSizeDropdown />
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
                                                        class="theme-btn btn-style-one"
                                                        type="submit"
                                                        name="submit-form"
                                                    ><span class="btn-title">SUBMIT</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/b2b1.png')} alt="" />
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
export default corporate_membership_program;