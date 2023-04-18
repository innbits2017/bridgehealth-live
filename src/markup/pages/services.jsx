import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Brand1 from '../element/brand1'
import VideoPopup1 from '../element/video-popup1';
import ServiceFilter1 from '../element/service-filter1'

const aboutbg = require('./../../assets/images/background/image-11.jpg');

class Services extends Component {


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
                      <h2 className='textleft'> <span className='headeingcolorblack'>    Your Good Health </span><br></br> <span className='headeingcolorblue'>is Our Plan</span></h2>
                      <h3 className='textleft marginTop40'>Choose from a selection of<br></br> Annual Preventive Health plans
                      </h3>
                    </div>
                    <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>


                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="image-wrapper">
                    <div class="image-one">
                      <img src={require('../../assets/images/shape/service.png')} alt="" className='imgwidth' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* <!-- Video Section --> */}
        <VideoPopup1 />
        {/* <!-- About --> */}

        <section class="team-section">
          {/* About Section Two */}
          <section class="">
            <div class="auto-container">
              <div class="row align-items-center">

                <div class="col-lg-6">
                  <div class="content-box">
                    <h3 className='h2title'>In our fast-paced world, our health is our biggest asset.</h3>
                    <div class="sec-title">
                      <div class="text">Having good health allows you to experience the simple joys of life. Your health is like an investment. The more you invest, the more returns you get. Therefore, nurturing and taking good care of it is important.     </div>
                    </div>

                  </div>
                  <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>

                </div>
                <div class="col-lg-6">
                  <div class="image-wrapper">
                    <div class="image-one">
                      <img src={require('../../assets/images/shape/our.png')} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section class="team-section">
          {/* About Section Two */}
          <section class="">
            <div class="auto-container">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="image-wrapper">
                    <div class="image-one">
                      <img src={require('../../assets/images/shape/ourn.png')} alt="" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="content-box">
                    <h3 className='h2title'>Our Annual Preventive Health Plans are carefully curated</h3>
                    <div class="sec-title">
                      <div class="text">
                        We ensure that you always have the best mental and physical well-being. From online consultations with experts to lab tests and health checks, we do everything to help you live a healthier life throughout the year.
                      </div>
                    </div>

                  </div>
                  <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Book Now</span></button>

                </div>
              </div>
            </div>
          </section>
        </section>


        <div class="container-fulid">
          <div class="auto-container">
            <div class="sec-title text-center">
              <h2>
                <span className='headeingcolorblack'> Explore Our</span> <span className='headeingcolorblue'>Plans</span>
              </h2>
            </div>

          </div>

          <div class="pricing-plan card-group d-flex">
          <div class="card business p-1">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 text-white card-title">Clinical Assessments</h5>
                
                {/* <p class="small text-white">No VAT &amp; No Hidden Costs</p> */}
              </div>
              {/* <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-center">
                  <li>
                    <span class="d-lg-none">Custom Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Choice of Layout </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>6 - 9 Pages</li>
                  <li>
                    <span class="d-lg-none">Update and add pages (CMS) </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Mobile Friendly Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Homepage Banner Designs </span>
                    1</li>
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
                  <li>
                    <span class="d-lg-none">Search Engine Optimisation </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Website Visitor Statistics </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
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
            <div class="card set-price p-1 d-none d-lg-none d-lg-block">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 text-white card-title">Service Offering</h5>
                {/* <span class="h1 text-white">Price</span>
                <p class="small text-white">No VAT &amp; No Hidden Costs</p> */}

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
                  <li>Respiratory Health</li>
                  <li>Radiology - (+Echo)</li>

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
              </div>
            </div>

            <div class="w-100 d-md-none mt-4"></div>

            <div class="card p-1 starter">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 text-white card-title">Silver</h5>
                <p class="small text-white">117 Tests with ECG & U/S</p>
                {/* <span class="h1 text-white">£349</span> */}
                {/* <p class="small text-white">No VAT &amp; No Hidden Costs</p> */}
              </div>
              <div class="card-body d-flex flex-column">

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

              </div>
            </div>

            <div class="w-100 d-md-none mt-4"></div>

            <div class="card advanced p-1">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 text-white card-title">Gold</h5>
                {/* <span class="h1 text-white">£449</span> */}
                <p class="small text-white">122 Tests with ECG & U/S</p>
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-center">
                  <li>
                    <span class="d-lg-none">Custom Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Choice of Layout </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>3 - 6 Pages</li>
                  <li>
                    <span class="d-lg-none">Update and add pages (CMS) </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Mobile Friendly Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Homepage Banner Designs </span>
                    1</li>
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
                  <li>
                    <span class="d-lg-none">Search Engine Optimisation </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Website Visitor Statistics </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
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

              </div>
            </div>

            <div class="w-100 d-md-none mt-4"></div>

            <div class="card business p-1">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 text-white card-title">Platinum</h5>
                {/* <span class="h1 text-white">£549</span> */}
                <p class="small text-white">122 Tests with ECG & U/S</p>
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-center">
                  <li>
                    <span class="d-lg-none">Custom Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Choice of Layout </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>6 - 9 Pages</li>
                  <li>
                    <span class="d-lg-none">Update and add pages (CMS) </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Mobile Friendly Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Homepage Banner Designs </span>
                    1</li>
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
                  <li>
                    <span class="d-lg-none">Search Engine Optimisation </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Website Visitor Statistics </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
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

              </div>
            </div>
            <div class="w-100 d-md-none mt-4"></div>

            <div class="card business p-1">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 text-white card-title">Platinum +</h5>
                {/* <span class="h1 text-white">£549</span> */}
                <p class="small text-white">222 Tests with Echo & U/S</p>
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-center">
                  <li>
                    <span class="d-lg-none">Custom Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Choice of Layout </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>6 - 9 Pages</li>
                  <li>
                    <span class="d-lg-none">Update and add pages (CMS) </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Mobile Friendly Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Homepage Banner Designs </span>
                    1</li>
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
                  <li>
                    <span class="d-lg-none">Search Engine Optimisation </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Website Visitor Statistics </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
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

              </div>
            </div>
            <div class="w-100 d-md-none mt-4"></div>

            {/* <div class="card business p-1">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 text-white card-title">Platinum +</h5>
                
                <p class="small text-white">No VAT &amp; No Hidden Costs</p>
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-center">
                  <li>
                    <span class="d-lg-none">Custom Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Choice of Layout </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>6 - 9 Pages</li>
                  <li>
                    <span class="d-lg-none">Update and add pages (CMS) </span>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <span class="d-lg-none">Mobile Friendly Design </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Homepage Banner Designs </span>
                    1</li>
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
                  <li>
                    <span class="d-lg-none">Search Engine Optimisation </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Website Visitor Statistics </span>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
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

              </div>
            </div> */}
          </div>
        </div>


        <section class="team-section">
          <div class="auto-container">
            <div class="sec-title text-center">
              <h2>
                <span className='headeingcolorblack'> PREDICT.</span> <span className='headeingcolorblue'>PREVENT.</span>  <span className='headeingcolorblack'>  DELAY.</span>
              </h2>
            </div>

          </div>
          {/* About Section Two */}
          <section class="">
            <div class="auto-container">
              <div class="row align-items-center">



                <div class="col-lg-6">
                  <div class="content-box">
                    <div class="sec-title">
                      <div class="text">Predict the onset of   <span className='headeingcolorblack'>hidden illnesses</span> and health conditions, prevent them by undergoing tests and check-ups, and delay the onset of chronic illness.
                      </div>
                    </div>
                    <ul className='listicon'>
                      <li> Get a detailed assessment report</li>
                      <li>Health score built on 7 parameters</li>
                      <li>Pre and Post score comparisons</li>
                      <li> Get a detailed assessment report</li>
                      <li>Health score built on 7 parameters</li>
                      <li>Pre and Post score comparisons</li>

                    </ul>
                    <div class="btn-box"><a class="theme-btn btn-style-one" href="/demo/fianandox/"><span class="btn-title">KNOW MORE</span></a></div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="image-wrapper">
                    <div class="image-one">
                      <img src={require('../../assets/images/shape/health.png')} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>



        <Footer />
      </>
    )
  }
}
export default Services;