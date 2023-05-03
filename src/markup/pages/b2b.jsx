import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ServiceFilter1 from '../element/service-filter1'


const aboutbg = require('./../../assets/images/background/image-11.jpg');
// const casebg = require('./../../assets/images/background/image-14.jpg');

class b2b extends Component {


    render() {
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
                                            <img src={require('../../assets/images/shape/b2b.png')} alt="" className='imgb2p' />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="content-box">

                                        <div class="text-center textleft">
                                            <h3 className='textleft'> <span className='headeingcolorblack'>Redefining the Meaning of </span><br></br>
                                                <span className='headeingcolorblue'>Employee-Centric Care</span></h3>
                                            <h4 className='textleft marginTop40'>Variety of benefits for a healthier <br></br>and happier workforce
                                            </h4>
                                        </div>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">SAY YES!</span></button>


                                    </div>
                                </div>

                            </div>
                        </div>
                </section>

                <section class="">
                   
                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-6" style={{marginTop: 10 + 'rem'}}>
                            <div class="sec-title">
                            <h3 className=''> <span className='headeingcolorblue'>     We help you figure out <br></br></span>where you are on your<br></br>   <span className='headeingcolorblue'> wellbeing journey </span></h3>
                            <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">SAY YES!</span></button>

                        </div> 
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/b2b12.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='container-fulid'>
                    <div className='container margintop100'>
                        {/* <div className='sliderbox'>
                        <div class="image-one">
                                        <img src={require('../../assets/images/shape/imageb2c.png')} alt="" />
                                    </div>
                        </div>
<h2 className='sec-title text-center'>to take care of their employees</h2> */}
                                        <img src={require('../../assets/images/shape/b2bsli.png')} alt="" />

                    </div>
                </div>


                <div class="auto-container margin150">
                    <div class="sec-title">
                        <h2> <span className='headeingcolorblack'>THE CORPORATE </span>
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
                            <img src={require('../../assets/images/shape/slider.png')} alt="" className='imgwidth' />
                        </div>
                    </div>
                </div>

                {/* <div class="container containerbackground">


                                to take care of their employees
                                </div> */}

                <section class="container-fluid b2bback margin150">

                    <div className='container '>
                        <div class="sec-title text-center">
                            <h3 className=''> <span className='headeingcolorblue'>     Bridge Health </span>makes it possible for  <span className='headeingcolorblue'> Employers </span><br></br>to keep a check on their  <span className='headeingcolorblue'> Employees’ Health Metrics </span></h3>

                        </div>
                        <div class="row align-items-center">
                            <div class="image-wrapper">
                                <div class="image-one">
                                    <img src={require('../../assets/images/shape/Sequence1.gif')} alt="" className='imgwidth' />
                                    {/* <img src={require('../../assets/images/shape/companey.png')} alt="" className='imgwidth' /> */}
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
                                <h2> <span className='headeingcolorblue'>BOOST  </span> <span className='headeingcolorblack'>YOUR TEAM’S HEALTH</span><br></br>
                                </h2>
                            </div>

                        </div>
                    </section>
                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    {/* <!-- Contact Form--> */}
                                    <div class="contact-form">
                                        <p>Reach out to us and we'll help you in setting up the best of <span className='headeingcolorblue'>Preventive Healthcare</span> Services for your teams.</p>
                                        <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                            <div class="row clearfix">
                                                <div class="col-md-12 form-group">
                                                    <input type="text" name="username" id="name" placeholder="Name*" required="" />
                                                </div>
                                                <div class="col-md-12 form-group">
                                                    <input type="text" name="username" id="name" placeholder="Email*" required="" />
                                                </div>  <div class="col-md-12 form-group">
                                                    <input type="text" name="username" id="name" placeholder="Phone*" required="" />
                                                </div>  <div class="col-md-12 form-group">
                                                    <input type="text" name="username" id="name" placeholder="Company Name" required="" />
                                                </div>  <div class="col-md-12 form-group">
                                                    <input type="text" name="username" id="name" placeholder="Team Size" required="" />
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        type="checkbox" id="checkbox1" name="option1" value="good" />
                                                    <label class="form-check-label heading">
                                                        I agree that Bridge Health may contact me at the email address or phone number above.
                                                    </label>
                                                </div>

                                                <div class="col-md-12 form-group">
                                                    <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Submit</span></button>
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
export default b2b;