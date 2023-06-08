import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'

class elderlyCare extends Component {

    componentDidMount() {
        document.title = 'Elderly Care | Bridge Health';
    }

    render() {
        return (
            <>
                <Header />

                <section class="team-section padding">
                    {/* About Section Two */}
                    <section class="container-fluid">
                        <div class="row align-items-center auto-container">

                            <div class="col-lg-6">
                                <div class="content-box marginTop40header">

                                    <div class="sec-title text-center textleft">
                                        <h2 className='textleft'>
                                            <span className='headeingcolorblack'> Age is not just </span>
                                            <br></br>
                                            <span className='headeingcolorblack'> a </span>
                                            <span className='headeingcolorblue'> Number</span>
                                        </h2>
                                        <h3 className='textleft marginTop40'>
                                            Professional elderly care at <br></br> your doorstep
                                        </h3>
                                    </div>
                                    <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>


                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper imgright">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/care1.png')} alt="" className='imgwidth' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>


                <section class="contact-section heath-margin">

                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/care2.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            Although we may stay young at heart, our body starts ageing. As we grow older, our physical abilities decline
                                            and we might find ourselves slower and more dependent on others for physical assistance.
                                        </p>

                                    </div>
                                    <button class="theme-btn btn-style-one"><span class="btn-title">BOOK NOW</span></button>


                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="contact-section heath-margin">

                    <div class="auto-container">
                        <div class="row col-lg-12">


                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title">
                                        <p className='font22'>

                                            <span className='headeingcolorblue'>
                                                At Bridge Health, we understand the <br></br> importance of elderly care.
                                            </span>
                                            <br></br>

                                            From providing special movement assistance equipment to home care, all of our services are designed around accessibility to ensure that the elderly in your family are well looked after so that they experience the best health at all times.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-5">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/care3.png')} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                <section class="contact-section heath-margin">

                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <div class="auto-container">
                                        <h2 className='header1'>
                                            <span className='headeingcolorblack'> The</span>
                                            <span className='headeingcolorblue'>  Bridge Health</span>
                                            <span className='headeingcolorblack'> Advantage </span>
                                        </h2>

                                    </div>
                                    <ul className='listicon'>
                                        <li>
                                            Home care
                                        </li>

                                        <li>
                                            Consults with experts
                                        </li>

                                        <li>
                                            Assistive care
                                        </li>

                                        <li>
                                            Diet and exercise plans for improved health
                                        </li>

                                        <li>
                                            Nursing at home
                                        </li>

                                        <li>
                                            Dialysis at home
                                        </li>

                                        <li>
                                            Physiotherapy at hom
                                        </li>

                                        <li>
                                            Medicine delivered directly to your home
                                        </li>

                                        <li>
                                            X-ray and ECG at home
                                        </li>

                                        <li>
                                            Blood and urine sample collection at home
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-5">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/care4.png')} alt="" className='width84' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section>
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='header1'>
                                <span className='headeingcolorblack'>Giving the Elderly the Care   </span>
                                <span className='headeingcolorblue'> They Deserve </span>
                            </h2>
                        </div>
                        <div class="btn-box text-center btn5">
                            <a class="theme-btn btn-style-one" href="#">
                                <span class="btn-title">BOOK NOW</span>
                            </a>
                        </div>
                    </div>
                </section>

                <Footer />

            </>
        )
    }
}

export default elderlyCare;