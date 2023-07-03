import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';


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
            company: '',
            team: '',
            errors: {
                username: '',
                email: '',
                phone: '',
                company: '',
                team: '',
            },
            submitted: false
        };
    }

    closePopup = () => {
        this.setState({ submitted: false });
    };

    handleChange = (event) => {
        // console.log("I am handle change", event.target)
        const { name, value } = event.target;
        const errors = { ...this.state.errors };

        // Clear the error for the changed field
        errors[name] = '';

        this.setState({
            [name]: value,
            errors
        });
    };

    handleSubmit = async (event) => {
        // console.log("i am handle Submit", event)
        event.preventDefault();

        const { username, company, email, phone } = this.state;
        const errors = {};

        // Validate username
        if (username.trim() === '') {
            errors.username = 'Name is required';
        }

        // Validate Company
        if (company.trim() === '') {
            errors.company = 'Company name is required';
        }

        // Validate email
        if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            errors.email = 'Invalid email format';
        }

        // Validate phone
        if (!phone.match(/^\d{10}$/)) {
            errors.phone = 'Phone number must be 10 digits';
        }

        // Update the state with the errors
        this.setState({ errors });

        // If there are no errors, submit the form
        if (Object.keys(errors).length === 0) {
            // Perform the form submission logic here
            // e.g., call an API endpoint, update the database, etc.

            // Show the "Thank you" message
            this.setState({ submitted: true });

            // Reset the form
            this.setState({
                username: '',
                email: '',
                phone: '',
                company: '',
                team: '',
                errors: {
                    username: '',
                    company: '',
                    email: '',
                    phone: '',
                    team: '',
                }
            });

            // Show the "Thank you" message
            this.setState({ submitted: true });

            // Call the sendEmail function
            await this.sendEmail();
        }
    };


    sendEmail = async (e) => {
        // e.preventDefault();

        const { email, username, phone, team, company } = this.state;

        const res = await fetch('https://mail.bridgehealth.in/employe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, username, phone, team, company
            }),
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log('error');
        } else {
            this.setState({ show: true, email: '', username: '', phone: '', company: '', team: '' });
            console.log('Email sent');
        }
    };





    render() {

        const { submitted, errors, company, team } = this.state;

        return (
            <>
                <Header />

                <section class="team-section padding">
                    {/* About Section Two */}
                    <div class="container-fulid">
                        <div class="row align-items-center corporatepaddinground">
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
                                        {/* <button class="commonBtnforAll btnleft">SAY YES!</button> */}

                                        <div class="btn-box btn5">
                                            <ContactForm buttonText="SAY YES!" className='submitcontact' />
                                        </div>

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

                                    <div class="btn-box text-center btn5 btnleft">
                                        <ContactForm buttonText="GET QUOTE" />
                                    </div>


                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/b2b12.png')} alt=""
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
                    <div class="sec-title text-align-center">
                        <h2>
                            <span className='headeingcolorblack'>THE CORPORATE </span>
                            <span className='headeingcolorblue'> WELLNESS </span>
                            <span className='headeingcolorblack'>MAP</span>
                        </h2>
                        <h4 className='marginTop40 text-align-center'>Where are you on the well being journey?
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
                <section class="container-fluid b2bback">

                    <div className='auto-container '>
                        <div class="sec-title text-center textleft marginleft20forpersonal1">
                            <h3 className='fonts'> <span className='headeingcolorblue'>BRIDGE HEALTH </span>
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
                <section class="">
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
                                        <p className='text-center'>Reach out to us and we'll help you in setting up the <br></br>best of <span className='headeingcolorblue'>Preventive Healthcare</span> Services for your employee.</p>
                                        <form method="post" onSubmit={this.handleSubmit} id="contact-form">
                                            <div class="row clearfix">
                                                <div class="col-md-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        value={this.state.username}
                                                        onChange={e => this.handleChange(e)}
                                                        id="name"
                                                        placeholder="Name*"
                                                        required=""
                                                    />
                                                    {errors.username && <div className="error">{errors.username}</div>}
                                                </div>
                                                <div class="col-md-12 form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={this.state.email}
                                                        onChange={e => this.handleChange(e)}
                                                        id="name"
                                                        placeholder="Email"
                                                        required=""
                                                    />
                                                </div>
                                                <div class="col-md-12 form-group">
                                                    <input
                                                        type="phone"
                                                        name="phone"
                                                        value={this.state.phone}
                                                        onChange={e => this.handleChange(e)}
                                                        id="name"
                                                        placeholder="Phone*"
                                                        required=""
                                                    />
                                                    {errors.phone && <div className="error">{errors.phone}</div>}
                                                </div>
                                                <div class="col-md-12 form-group">
                                                    <input
                                                        type="text"
                                                        value={company}
                                                        onChange={this.handleChange}
                                                        name="company"
                                                        id="company"
                                                        placeholder="Company Name*"
                                                    />
                                                    {errors.company && <div className="error">{errors.company}</div>}
                                                </div>
                                                <div class="col-md-12 form-group">
                                                    <select 
                                                        name="team"
                                                        type="text"
                                                        value={team}
                                                        onChange={this.handleChange}
                                                        id="team"
                                                        placeholder="Team Size"
                                                        required=""
                                                        >

                                                        <option value="" >
                                                            Team Size
                                                        </option>
                                                        <option value="0-10">0-10</option>
                                                        <option value="11-50">11-50</option>
                                                        <option value="51-100">51-100</option>
                                                        <option value="101-500">101-500</option>
                                                        <option value="501-1000">501-1000</option>
                                                        <option value="1001-above">1001-above</option>
                                                    </select>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        type="checkbox" id="checkbox1" name="option1" value="good" required />
                                                    <label class="form-check-label heading">
                                                        I agree that Bridge Health may contact me at the email address or phone number above.
                                                    </label>
                                                </div>

                                                <div class="col-md-12 form-group">
                                                    <div class="btn-box text-center btn5">
                                                        <button class=" submitcontact" type="submit"
                                                            name="submit-form">SUBMIT</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        {submitted && (
                                            <div className="thankyou-popup" onClick={this.closePopup}>
                                                <h2>Thank You!</h2>
                                                <p>Your details has been successfully submitted. Thanks!</p>
                                                <button type='button' >OK</button>
                                            </div>
                                        )}
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