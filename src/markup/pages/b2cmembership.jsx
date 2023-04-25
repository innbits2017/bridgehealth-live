import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Brand1 from '../element/brand1'
import VideoPopup1 from '../element/video-popup1';
import ServiceFilter1 from '../element/service-filter1'
import b2c_page from '../pages/b2c-page'

const aboutbg = require('./../../assets/images/shape/b2c2.png');

class b2cmembership extends Component {


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
                        <span className='headeingcolorblack'> Your  </span> <span className='headeingcolorblue'>Good Health </span> <br></br><span className='headeingcolorblack'>is Our Plan</span></h2>
                      <h3 className='textleft marginTop40'>Choose from a selection of<br></br> Annual Preventive Health plans
                      </h3>
                    </div>
                    <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>


                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="image-wrapper">
                    <div class="image-one">
                      <img src={require('../../assets/images/shape/b2cmembership.png')} alt="" className='imgwidth' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* <b2c_page /> */}
         <section>
          <div class="image-five">
          <img src={require('../../assets/images/shape/b2c2.png')} alt="" className='imgwidth' />
          </div>
          
        </section> 
        

        <section class="contact-section">

          <div class="auto-container">
            <div class="row">

              <div class="col-lg-4">
                <div class="contact-form-area">

                  <div class="sec-title">
                    <h2> <span className='headeingcolorblack'>Why </span>
                      <span className='headeingcolorblue'> Annual </span>
                      <span className='headeingcolorblack'>Health Plans?</span>
                    </h2>
                    <h4 className='textleft marginTop40'>A host of benefits await you as soon as you say <span className='headeingcolorblue'> YES</span>
                    </h4>

                  </div>

                  <div class="content-box">

                    <ul className='listicon'>
                      <li>
                        <img className='listicon1' src={require('../../assets/images/shape/favicon-logo1.png')} alt="" />
                        Reduce healthcare expenditure
                      </li>
                      <li>
                        <img className='listicon1' src={require('../../assets/images/shape/favicon-logo1.png')} alt="" />
                        Discover any hidden health conditions
                      </li>
                      <li>
                        <img className='listicon1' src={require('../../assets/images/shape/favicon-logo1.png')} alt="" />
                        Know your health score
                      </li>
                      <li>
                        <img className='listicon1' src={require('../../assets/images/shape/favicon-logo1.png')} alt="" />
                        Implement lifestyle changes for better quality of life
                      </li>
                    </ul>

                  </div>
                  <div class="contact-form">

                    <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                      <div class="row clearfix">



                        <div class="col-md-12 form-group" style={{ marginLeft: 5 + 'rem' }}>
                          <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Say YES!</span></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="image-wrapper">
                  <div class="image-one">
                    <img src={require('../../assets/images/shape/b2c.png')} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="contact-section">

          <div class="auto-container">
            <div class="row">
              <div class="col-lg-8">
                <div class="image-wrapper">
                  <div class="image-one">
                    <img src={require('../../assets/images/shape/b2c1.png')} alt="" />
                  </div>
                </div>
              </div>

              <div class="col-lg-4" style={{ marginTop: 10 + 'rem' }}>
                <div class="contact-form-area">

                  <div class="sec-title">
                    <h2> <span className='headeingcolorblack'>Why </span>
                      <span className='headeingcolorblue'> Preventive</span>
                      <span className='headeingcolorblack'> Health Care?</span>
                    </h2>
                    {/* <h4 className='textleft marginTop40'>A host of benefits await you as soon as you say <span className='headeingcolorblue'> YES</span>
          </h4> */}
                    <p>
                      Preventive healthcare helps in predicting & preventing serious health conditions while prolonging your life. It also helps you in making proactive choices regarding your mental health and lifestyle to stay fit at all times
                    </p>

                  </div>


                  <div class="contact-form">

                    <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                      <div class="row clearfix">



                        <div class="col-md-12 form-group" style={{ marginLeft: 15 + 'rem' }}>
                          <button class="theme-btn btn-style-one" type="submit" name="submit-form">
                            <span class="btn-title" >Say YES!</span></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>




        {/* <!-- Video Section --> */}
        {/* <VideoPopup1 /> */}


        {/* <!-- About --> */}


        <div class="container-fulid margintop100">
          <div class="auto-container">
            <div class="sec-title text-center">
              <h2>
                <span className='headeingcolorblack'>Annual Preventive Health</span>
                <span className='headeingcolorblue'> Plans</span>
              </h2>
              <p>Say
                <span className='headeingcolorblue'> YES </span>to a plan just for you!</p>
            </div>

          </div>
          <div class="pricing-plan card-group d-flex">
            <div class="card set-price p-1 d-none d-lg-none d-lg-block">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 text-white card-title">Clinical Assessments</h5>
                {/* <span class="h1 text-white">Price</span>
                <p class="small text-white">No VAT &amp; No Hidden Costs</p> */}

              </div>

              {/* <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-right">
                  <li>Custom Design</li>
                  <li>Choice of Layout</li>
                  <li>Number of Pages Included</li>
                  <li>Update and add pages (CMS)</li>
                  <li>Mobile Friendly Design</li>
                  <li>Homepage Banner Designs</li>
                  <li>Professional Logo Design</li>
                  <li>Search Engine Friendly</li>
                  <li>Search Engine Submission</li>
                  <li>Website Contact Form</li>
                  <li>Built on Wordpress</li>
                  <li>Search Engine Optimisation</li>
                  <li>Website Visitor Statistics</li>
                  <li>Full Website Ownership</li>
                  <li>Google Maps Integration</li>
                  <li>5GB SSD Disk Space</li>
                  <li>5 Email Addresses</li>
                  <li>Free Domain Name for 1 year</li>
                  <li>Free Website hosting for 1 year</li>
                  <li>UK Email Support</li>
                  <li>Built in the UK, NO outsourcing</li>
                </ul>
              </div> */}
            </div>


            <div class="w-100 d-md-none mt-4"></div>

            <div class="card p-1 starter">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 text-white card-title">Service Offering</h5>
                {/* <span class="h1 text-white">£349</span> */}
                {/* <p class="small text-white">No VAT &amp; No Hidden Costs</p> */}
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-right">
                  <li>Initial Health Assessment</li>
                  <li>Blood Health</li>
                  <li>Diabetic Profile</li>
                  <li>Kidney Health</li>
                  <li>Cardiac Health</li>
                  <li>Liver Health</li>
                  <li>Nutrition Health</li>
                  <li>Bone Health</li>
                  <li>Thyroid Profile</li>
                  <li>Oncology Assessment</li>
                  <li>Respiratory Healt</li>
                  <li>Radiology - (+Echo)</li>
                  <li>Doctor Consultations</li>
                  <li>Additional Physician Consults</li>
                  <li>Specialist Consults</li>
                  <li>Emotional Wellness Webinars / Group Sessions</li>
                  <li>1-on-1 Emotional Health Consult</li>
                  <li>Dental/Ophthal Screening/Dermatology Consult</li>
                  <li>Dietary / Nutrition Webinars</li>
                  <li>1 to 1 Dietician / Nutrition Consult</li>
                  <li>Group Yoga Sessions(1 Hour)</li>
                  <li>Yoga Sessions(1 Hour)</li>
                  <li>Medicines /e-Pharmacy for Self and Family</li>
                  <li>Physiotherapy Services for Self and Family</li>
                  <li>Lab / Clinical Services & Retail Health Plans for Family</li>
                  <li>Home Sample Collection</li>
                  <li>BH Mobile App-Access</li>
                  <li>Price</li>
                </ul>
              </div>
              {/* <div class="card-body d-flex flex-column">

                <ul class="list-unstyled text-center">
                  <li>
                    <span class="d-lg-none">Custom Design  </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Choice of Layout </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>1 - 3 Pages</li>
                  <li>
                    <span class="d-lg-none">Update and add pages (CMS) </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Mobile Friendly Design  </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Homepage Banner Designs  </span>
                    1</li>
                  <li>
                    <span class="d-lg-none">Professional Logo Design </span>
                    <i class="fa fa-times" data-unicode="f00d"></i></li>
                  <li>
                    <span class="d-lg-none">Search Engine Friendly </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Search Engine Submission </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Website Contact Form </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Built on Wordpress </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Search Engine Optimisation </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Website Visitor Statistics </span>
                    <i class="fa fa-times" data-unicode="f00d"></i></li>
                  <li>
                    <span class="d-lg-none">Full Website Ownership </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Google Maps Integration </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">5GB SSD Disk Space </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">5 Email Addresses </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Free Domain Name for 1 year </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Free Website hosting for 1 year </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">UK Telephone/Email Support </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Built in the UK, NO outsourcing </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>

                </ul>
                <a class="btn btn-lg btn-block btn-dark mt-auto" href="#">Get started</a>

              </div> */}
            </div>

            <div class="w-100 d-md-none mt-4"></div>

            <div class="card advanced p-1">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 text-white card-title">SILVER</h5>
                {/* <span class="h1 text-white">£449</span> */}
                {/* <p class="small text-white">No VAT &amp; No Hidden Costs</p> */}
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-center">
                  <li>117 Tests with ECG & U/S</li>
                  <li>
                    <span class="d-lg-none">Custom Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Choice of Layout </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  {/* <li>3 - 6 Pages</li> */}
                  <li>
                    <span class="d-lg-none">Update and add pages (CMS) </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Update and add pages (CMS) </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Mobile Friendly Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Homepage Banner Designs </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Professional Logo Design </span>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Search Engine Friendly </span>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Search Engine Submission </span>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Website Contact Form </span>
                    <i data-unicode="f00c"></i></li>
                  {/* <li>
                    <span class="d-lg-none">Built on Wordpress </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li> */}

                  <li>ECG / Ultrasound Abdomen + Pelvis</li>
                  <li>2</li>
                  <li>Paid Consult</li>
                  <li>10% Off</li>
                  <li>4</li>
                  <li>1</li>
                  <li>
                    <span class="d-lg-none">Search Engine Optimisation </span>
                    <i data-unicode="f00c"></i></li>
                  <li>4</li>
                  <li>1</li>
                  <li>4</li>
                  <li>
                    <span class="d-lg-none">Website Visitor Statistics </span>
                    <i data-unicode="f00c"></i></li>

                  <li>10% Off</li>
                  <li>10% Off</li>
                  <li>10% Off</li>
                  <li>Paid</li>
                  <li>
                    <span class="d-lg-none">Full Website Ownership </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>₹7999</li>
                  {/* <li>
                    <span class="d-lg-none">Google Maps Integration </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">5GB SSD Disk Space </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">5 Email Addresses </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Free Domain Name for 1 year </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Free Website hosting for 1 year </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">UK Telephone/Email Support </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Built in the UK, NO outsourcing </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li> */}

                </ul>
                {/* <a class="btn btn-lg btn-block btn-dark mt-auto" href="#">Get started</a> */}

              </div>
            </div>

            <div class="w-100 d-md-none mt-4"></div>

            <div class="card business p-1">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 text-white card-title">GOLD</h5>
                {/* <span class="h1 text-white">£549</span>
                <p class="small text-white">No VAT &amp; No Hidden Costs</p> */}
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-center">
                  <li>122 Tests with ECG & U/S</li>
                  <li>
                    <span class="d-lg-none">Custom Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Choice of Layout </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  {/* <li>6 - 9 Pages</li> */}
                  <li>
                    <span class="d-lg-none">Update and add pages (CMS) </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Update and add pages (CMS) </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Mobile Friendly Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Homepage Banner Designs </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Professional Logo Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Search Engine Friendly </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>


                  <li>
                    <span class="d-lg-none">Search Engine Submission </span>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Website Contact Form </span>
                    <i data-unicode="f00c"></i></li>
                  {/* <li>
                    <span class="d-lg-none">Built on Wordpress </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li> */}

                  <li>ECG / Ultrasound Abdomen + Pelvis - ECHO</li>
                  <li>2</li>
                  <li>Paid Consult</li>
                  <li>10% Off</li>
                  <li>12</li>
                  <li>2</li>
                  <li>
                    <span class="d-lg-none">Search Engine Optimisation </span>
                    <i data-unicode="f00c"></i></li>
                  <li>12</li>
                  <li>4</li>
                  <li>
                    <span class="d-lg-none">Website Visitor Statistics </span>
                    <i data-unicode="f00c"></i></li>
                  <li>5</li>
                  <li>15% Off</li>
                  <li>15% Off</li>
                  <li>15% Off</li>
                  <li>Free</li>
                  <li>
                    <span class="d-lg-none">Full Website Ownership </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>₹16999</li>
                  {/* <li>
                    <span class="d-lg-none">Google Maps Integration </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">5GB SSD Disk Space </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">5 Email Addresses </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Free Domain Name for 1 year </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Free Website hosting for 1 year </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">UK Telephone/Email Support </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Built in the UK, NO outsourcing </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li> */}

                </ul>
                {/* <a class="btn btn-lg btn-block btn-dark mt-auto" href="#">Get started</a> */}

              </div>
            </div>
            <div class="w-100 d-md-none mt-4"></div>

            <div class="card business p-1">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 text-white card-title">Platinum</h5>
                {/* <span class="h1 text-white">£549</span>
                <p class="small text-white">No VAT &amp; No Hidden Costs</p> */}
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-center">
                  <li>138 Tests with Echo & U/S</li>
                  <li>
                    <span class="d-lg-none">Custom Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Choice of Layout </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Update and add pages (CMS) </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  {/* <li>6 - 9 Pages</li> */}
                  <li>
                    <span class="d-lg-none">Update and add pages (CMS) </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Mobile Friendly Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  {/* <li>
                    <span class="d-lg-none">Homepage Banner Designs </span>
                    1</li> */}
                  <li>
                    <span class="d-lg-none">Professional Logo Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Search Engine Friendly </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Search Engine Submission </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Website Contact Form </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Built on Wordpress </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>X-Ray / Echo / Ultrasound Abdomen + Pelvis / Breast Screening</li>
                  <li>2</li>
                  <li>Unlimited</li>
                  <li>10% Off</li>
                  <li>Unlimited</li>
                  <li>2</li>
                  <li>
                    <span class="d-lg-none">Search Engine Optimisation </span>
                    <i data-unicode="f00c"></i></li>
                  <li>Unlimited</li>
                  <li>4</li>
                  <li>
                    <span class="d-lg-none">Website Visitor Statistics </span>
                    <i data-unicode="f00c"></i></li>
                  <li>15</li>
                  <li>20% Off</li>
                  <li>1 Session + 10% Off</li>
                  <li>15% Off</li>
                  <li>Free</li>

                  <li>
                    <span class="d-lg-none">Full Website Ownership </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>₹24999</li>
                  {/* <li>
                    <span class="d-lg-none">Google Maps Integration </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">5GB SSD Disk Space </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">5 Email Addresses </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Free Domain Name for 1 year </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Free Website hosting for 1 year </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">UK Telephone/Email Support </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Built in the UK, NO outsourcing </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li> */}

                </ul>
                {/* <a class="btn btn-lg btn-block btn-dark mt-auto" href="#">Get started</a> */}

              </div>
            </div>
            <div class="w-100 d-md-none mt-4"></div>

            <div class="card business p-1">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 text-white card-title">Platinum +</h5>
                {/* <span class="h1 text-white">£549</span>
                <p class="small text-white">No VAT &amp; No Hidden Costs</p> */}
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-center">
                  <li>222 Tests with Echo & U/S</li>
                  <li>
                    <span class="d-lg-none">Custom Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Choice of Layout </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  {/* <li>6 - 9 Pages</li> */}
                  <li>
                    <span class="d-lg-none">Update and add pages (CMS) </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Update and add pages (CMS) </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Mobile Friendly Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  {/* <li>
                    <span class="d-lg-none">Homepage Banner Designs </span>
                    1</li> */}
                  <li>
                    <span class="d-lg-none">Professional Logo Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Search Engine Friendly </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Search Engine Submission </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Website Contact Form </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Built on Wordpress </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>X-Ray / Echo / Ultrasound Abdomen + Pelvis / Breast Screening</li>
                  <li>4</li>
                  <li>Unlimited</li>
                  <li>10% Off</li>
                  <li>Unlimited</li>
                  <li>4</li>
                  <li>1</li>
                  <li>Unlimited</li>
                  <li>4</li>
                  <li>
                    <span class="d-lg-none">Search Engine Optimisation </span>
                    <i data-unicode="f00c"></i></li>
                  <li>15</li>
                  <li>20% Off</li>
                  <li>1 Session + 15% Off</li>
                  <li>15% Off</li>
                  <li>Free</li>
                  <li>
                    <span class="d-lg-none">Website Visitor Statistics </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>₹29999</li>
                  {/* <li>
                    <span class="d-lg-none">Full Website Ownership </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Google Maps Integration </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">5GB SSD Disk Space </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">5 Email Addresses </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Free Domain Name for 1 year </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Free Website hosting for 1 year </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">UK Telephone/Email Support </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Built in the UK, NO outsourcing </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li> */}

                </ul>
                {/* <a class="btn btn-lg btn-block btn-dark mt-auto" href="#">Get started</a> */}

              </div>
            </div>
          </div>
        </div>


        {/* <!-- Contact Section --> */}
        <section class="contact-section">
          <section class="">
            <div class="auto-container">
              <div class="sec-title text-center">
                <h2> <span className='headeingcolorblue'>CONTACT US</span>
                </h2>
              </div>

            </div>
          </section>
          <div class="auto-container">
            <div class="row">

              <div class="col-lg-6">
                <div class="contact-form-area">

                  {/* <!-- Contact Form--> */}
                  <div class="contact-form" style={{ marginTop: 5 + 'rem' }}>
                    {/* <p>Reach out to us and we'll help you in setting up the best of <span className='headeingcolorblue'>Preventive Healthcare</span> Services for your teams.</p> */}
                    <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                      <div class="row clearfix">
                        <div class="col-md-12 form-group">
                          <input type="text" name="username" id="name" placeholder="Name*" required="" />
                        </div>
                        <div class="col-md-12 form-group">
                          <input type="text" name="username" id="name" placeholder="Email*" required="" />
                        </div>  <div class="col-md-12 form-group">
                          <input type="text" name="username" id="name" placeholder="Phone*" required="" />
                        </div>

                        <div class="form-check">
                          <input class="form-check-input"
                            type="checkbox" id="checkbox1" name="option1" value="good" />
                          <label class="form-check-label heading">
                            I agree that Bridge Health may contact me at the email address or phone number above.
                          </label>
                        </div>
                        <div class="col-md-12 form-group" style={{ marginLeft: 7 + 'rem' }}>
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
                    <img src={require('../../assets/images/shape/contactus.png')} alt="" />
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
export default b2cmembership;