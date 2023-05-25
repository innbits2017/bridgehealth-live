import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'


class manageWeight extends Component {
    render() {
        return (
            <>
                <Header />

                <section class="team-section padding">
                    {/* About Section Two */}
                    <section class="container-fluid">
                        <div class="container-fluid">
                            <div class="row align-items-center">

                                <div class="col-lg-6">
                                    <div class="content-box">

                                        <div class="sec-title text-center textleft">
                                            <h2 className='textleft'>
                                                <span className='headeingcolorblack'>
                                                    Manage Weight,
                                                </span>
                                                <br></br>
                                                <span className='headeingcolorblue'> Feel Great</span>
                                            </h2>
                                            <h3 className='textleft marginTop40'>
                                                Maintain the right weight  <br></br> with the help of our experts
                                            </h3>
                                        </div>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>


                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="image-wrapper">
                                        <div class="image-one">
                                            <img src={require('../../assets/images/shape/weight1.png')} alt="" className='imgwidth' />
                                        </div>
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
                                        <img src={require('../../assets/images/shape/weight2.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            Weight management is vital for maintaining good health. Failing to manage one's weight can lead to a range of health problems and complications, including an
                                            increased risk of heart disease, stroke, and diabetes. Obesity is linked to a higher risk of high blood pressure, high cholesterol, and sleep apnea.
                                        </p>
                                    </div>



                                    <div class="col-md-12 form-group" style={{ marginLeft: 4 + 'rem' }}>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">BOOK NOW</span></button>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row">


                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox1">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            Conversely, being underweight can lead to malnutrition, a weakened immune system, and osteoporosis. In addition to physical health issues, improper weight management can also have an impact on mental health and wellbeing, including depression, anxiety, and low self-esteem.
                                            It is important to take weight management seriously and seek support from healthcare professionals to help prevent these potential health problems.
                                        </p>


                                    </div>


                                    <div class="contact-form">

                                        <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                            <div class="row clearfix">



                                                <div class="col-md-12 form-group" style={{ marginLeft: 14 + 'rem' }}>
                                                    <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">BOOK NOW</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/weight3.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="contact-section heath-margin">

                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-7">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/weight4.png')} alt="" className='width64' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="contact-form-area">

                                    <div class="sec-title phybox">
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            Diabetes is a chronic condition that affects millions of people worldwide. If left untreated or improperly managed, it can lead to a range of complications,
                                            including nerve damage, blindness, kidney disease, and heart disease. Therefore, proper diabetes care is essential for maintaining good health and preventing these complications.
                                        </p>
                                    </div>



                                    <div class="col-md-12 form-group" style={{ marginLeft: 1 + 'rem' }}>
                                        <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">BOOK NOW</span></button>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section class="contact-section">

                    <div class="auto-container opth-title">
                        <h2 className='header1'>
                            <span className='headeingcolorblack'> The</span>
                            <span className='headeingcolorblue'>  Bridge Health</span>
                            <span className='headeingcolorblack'> Advantage </span>
                        </h2>
                    </div>

                    <div class="auto-container heath-margin">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <ul className='listicon'>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Assess current health status, weight, BMI, and medical conditions
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Develop personalized weight management plan based on goals, lifestyle, and medical history
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Provide guidance on healthy eating habits and food choices
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Recommend appropriate physical activity and exercise
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Refer to other healthcare professionals as needed
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <ul className='listicon'>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Monitor progress and provide ongoing support and encouragement
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Offer resources such as weight management guides and videos
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Collaborate with other healthcare team members for comprehensive care
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Prescription of medications or other medical interventions
                                        </li>
                                        <br></br>
                                        <li>
                                            <img className='listicon2' src={require('../../assets/images/shape/nu11.png')} alt="" />
                                            Identify and address emotional or behavioural issues that may be underlying causes for weight issues
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section>
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2 className='header1'>
                                <span className='headeingcolorblack'> Fit is the new  </span>
                                <span className='headeingcolorblue'> Skinny! </span>

                            </h2>
                        </div>
                        <div class="btn-box text-center btn5">
                            <a class="theme-btn btn-style-one" href="/demo/fianandox/">
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
export default manageWeight;