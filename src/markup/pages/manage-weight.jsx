import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';


class manageWeight extends Component {

    componentDidMount() {
        document.title = 'Manage Weight | Bridge Health';
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
                                        <h2 className='textleft fontSize50'>
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

                                    <div class="btn-box btn5">

                                        <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                                    </div>
                                    {/* <button class="commonBtnforAll">BOOK NOW</button> */}


                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper imgright">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/weight1.png')} alt="" className='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section class="contact-section heath-margin">

                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <img src={require('../../assets/images/shape/weight2.png')} alt="" className='widthimg' />
                            </div>
                            <div class="col-lg-6">
                                <div class="sec-title squrebox">
                                    {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                    <p className='font22'>
                                        Weight management is vital for maintaining good health. Failing to manage one's weight can lead to a range of health problems and complications, including an
                                        increased risk of heart disease, stroke, and diabetes. Obesity is linked to a higher risk of high blood pressure, high cholesterol, and sleep apnea.
                                    </p>
                                </div>
                                <div class="btn-box text-center btn5">
                                    {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                    <ContactForm buttonText="BOOK NOW" popupPosition="left" />

                                </div>                            </div>

                        </div>
                    </div>
                </section>


                <section class="">

                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="sec-title squrebox">
                                    {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                    <p className='font22'>
                                        Conversely, being underweight can lead to malnutrition, a weakened immune system, and osteoporosis. In addition to physical health issues, improper weight management can also have an impact on mental health and wellbeing, including depression, anxiety, and low self-esteem.
                                        It is important to take weight management seriously and seek support from healthcare professionals to help prevent these potential health problems.
                                    </p>
                                </div>
                                <div class="btn-box text-center btn5">
                                    {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                    <ContactForm buttonText="BOOK NOW" popupPosition="right" />

                                </div>
                            </div>
                            <div class="col-lg-6">

                                <img src={require('../../assets/images/shape/mweight.png')} alt="" className='widthimg imgFloatRight' />

                            </div>

                        </div>
                    </div>
                </section>

                <section class="contact-section heath-margin">

                    <div class="auto-container">
                        <div class="row">

                            <div class="col-lg-6">

                                <img src={require('../../assets/images/shape/weight4.png')} alt="" className='widthimg' />

                            </div>
                            <div class="col-lg-6">

                                <div class="sec-title squrebox">
                                    {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                    <p className='font22'>
                                        Diabetes is a chronic condition that affects millions of people worldwide. If left untreated or improperly managed, it can lead to a range of complications,
                                        including nerve damage, blindness, kidney disease, and heart disease. Therefore, proper diabetes care is essential for maintaining good health and preventing these complications.
                                    </p>

                                </div>
                                <div class="btn-box text-center btn5">
                                    {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                                    <ContactForm buttonText="BOOK NOW" popupPosition="left" />

                                </div></div>
                        </div>
                    </div>
                </section>


                <section class="">
                <h2 className='header1 text-center'>
                                        <span className='headeingcolorblack'> The</span>
                                        <span className='headeingcolorblue'>  Bridge Health</span>
                                        <span className='headeingcolorblack'> Advantage </span>
                                    </h2>
                    <div class="auto-container heath-margin">
                   
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <ul className='listicon'>
                                        <li>
                                            Assess current health status, weight, BMI, and medical conditions
                                        </li>
                                        <li>
                                            Develop personalized weight management plan based on goals, lifestyle, and medical history
                                        </li>
                                        <li>
                                            Provide guidance on healthy eating habits and food choices
                                        </li>
                                        <li>
                                            Recommend appropriate physical activity and exercise
                                        </li>
                                        <li>
                                            Refer to other healthcare professionals as needed
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="contact-form-area">
                                    <ul className='listicon'>
                                        <li>
                                            Monitor progress and provide ongoing support and encouragement
                                        </li>
                                        <li>
                                            Offer resources such as weight management guides and videos
                                        </li>
                                        <li>
                                            Collaborate with other healthcare team members for comprehensive care
                                        </li>
                                        <li>
                                            Prescription of medications or other medical interventions
                                        </li>

                                        <li>
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
                            {/* <button class="commonBtnforAll">BOOK NOW</button> */}
                            <ContactForm buttonText="BOOK NOW" popupPosition="right" />

                        </div>
                    </div>
                </section>

                <Footer />

            </>
        )
    }

}
export default manageWeight;