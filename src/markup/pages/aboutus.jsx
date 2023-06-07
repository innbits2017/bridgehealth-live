import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'


const aboutfair = require('./../../assets/images/shape/aboutback.png');
const aback = require('./../../assets/images/shape/aback.png');


class aboutUs extends Component {

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

                <section class="internalpage style-two aboutback ">
                    <div class="auto-container ">
                        <div className='aboutcont '>
                            <div className='aboutbox '>
                                <h3>OUR VISION</h3>
                                <p className='textaligncenter'> Spread Happiness <br></br> Through Good Health</p>

                            </div><div className='aboutbox '>
                                <h3 >OUR MISSION</h3>
                                <p className='textaligncenter'> Be Your Healthcare <br></br> Companion For Life</p>
                            </div>
                        </div>

                    </div>
                </section>



                <div class="auto-container marginTop50">
                    <div class="row">


                        <div class="col-lg-6">
                            <div class="contact-form-area">

                                <div class="sec-title phybox1">
                                    {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                    <p className='font22'>
                                        <span className='headeingcolorblue'>  Bridge Health</span>  is an integrated Medical & Digital Healthcare program designed to deliver Individualized Care Continuum proactively. This program is executed through well-curated and validated clinical protocols.
                                        The services are rendered with clinical outcomes being at the core of the program.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-wrapper">
                                <div class="image-one">
                                    <img src={require('../../assets/images/shape/apage2.png')} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <div class="auto-container">
                    <div class="row">

                        <div class="col-lg-6">
                            <div class="image-wrapper">
                                <div class="image-one">
                                    <img src={require('../../assets/images/shape/apage3.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="contact-form-area">

                                <div class="sec-title phybox">
                                    <p className='font22'>
                                        With our in-house specialized clinical and support team along with our credentialed affiliate partners,
                                        we have put together a personalized physical and digital ecosystem for your continued wellbeing.
                                        The promise this program delivers is to make available a comprehensive and continuing Healthcare Companionship that is personalized for you and your family. While the program is predicated on prevention,
                                        it is also designed to provide Healthcare Help and Support as and when required.
                                    </p>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>



                <section class="contact-section heath-margin">

                    <div class="auto-container">
                        <div class="row">


                            <div class="col-lg-5">
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            We, at Bridge Health, believe that a proactive focus on personalized healthcare and swift curative actions to mitigate risks are of paramount importance to each one of us.
                                            Our journey is all about being your trusted <span className='headeingcolorblue'> “Healthcare Companion for Life”.</span>
                                        </p>


                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/graph.png')} alt="" className='width84' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


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
                                    <form method="post" onSubmit={e => { this.sendEmail(e); this.saveData(e)}} id="contact-form">
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

                                            <div class="col-md-6 form-group">
                                                <input
                                                    type="email"
                                                    value={this.state.email}
                                                    onChange={e => this.handleChange(e)}
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email*"
                                                    required="" />
                                            </div>
                                            <div class="col-md-6 form-group">
                                                <input
                                                    type="phone"
                                                    value={this.state.phone}
                                                    onChange={e => this.handleChange(e)}
                                                    name="phone"
                                                    id="email"
                                                    placeholder="Phone."
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
                                                    class="theme-btn btn-style-one marginleft21"
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
                        </div>

                    </div>
                </div>


                <Footer />
            </>
        )
    }
}

export default aboutUs;