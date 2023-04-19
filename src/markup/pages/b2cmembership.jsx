import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Brand1 from '../element/brand1'
import VideoPopup1 from '../element/video-popup1';
import ServiceFilter1 from '../element/service-filter1'

const aboutbg = require('./../../assets/images/background/image-11.jpg');

class b2cmembership extends Component {


    render() {
        return (
            <>
                 <Header/>
              
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
                                            <img src={require('../../assets/images/shape/b2cmembership.png')} alt="" className='imgwidth' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                {/* <!-- Video Section --> */}
                <VideoPopup1/>
      {/* <!-- About --> */}

    
                <div class="container-fulid">
                <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2>
                                <span className='headeingcolorblack'> Explore Our</span> <span className='headeingcolorblue'>Plans</span>
                            </h2>
                        </div>

                    </div>
  <div class="pricing-plan card-group d-flex">
    <div class="card set-price p-1 d-none d-lg-none d-lg-block">
      <div class="card-header text-center pb-4 item">
         <h5 class="pt-3 text-white card-title">Set-priced web design</h5>
        <span class="h1 text-white">Price</span>
        <p class="small text-white">No VAT &amp; No Hidden Costs</p>

      </div>
      <div class="card-body d-flex flex-column">
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
      </div>
    </div>

    <div class="w-100 d-md-none mt-4"></div>

    <div class="card p-1 starter">
      <div class="card-header text-center pb-4 item">
        <h5 class="pt-3 text-white card-title">Starter Package</h5>
        <span class="h1 text-white">£349</span>
        <p class="small text-white">No VAT &amp; No Hidden Costs</p>
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
        <h5 class="pt-3 text-white card-title">Advanced Package</h5>
        <span class="h1 text-white">£449</span>
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
        <h5 class="pt-3 text-white card-title">Business Package</h5>
        <span class="h1 text-white">£549</span>
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
    </div>
    <div class="w-100 d-md-none mt-4"></div>

<div class="card business p-1">
  <div class="card-header text-center pb-4 item">
    <h5 class="pt-3 text-white card-title">Business Package</h5>
    <span class="h1 text-white">£549</span>
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
</div>
<div class="w-100 d-md-none mt-4"></div>

<div class="card business p-1">
  <div class="card-header text-center pb-4 item">
    <h5 class="pt-3 text-white card-title">Business Package</h5>
    <span class="h1 text-white">£549</span>
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

                    </div></section>
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
                                            <input type="text" name="username" id="name" placeholder="Name*" required=""/>
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <input type="text" name="username" id="name" placeholder="Email*" required=""/>
                                        </div>  <div class="col-md-12 form-group">
                                            <input type="text" name="username" id="name" placeholder="Phone*" required=""/>
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
                                            <img src={require('../../assets/images/shape/contactus.png')} alt="" />
                                        </div>
                                    </div>
                                    </div>
                        </div>
                    </div>
                </section>


                 
                 <Footer/>
            </>
        )
    }
}
export default b2cmembership;