import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';
const aboutbg = require('./../../assets/images/shape/b2c2.png');
class b2cmembership extends Component {

  componentDidMount() {
    document.title = 'B2C Membership | Bridge Health';
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      phone: '',
      errors: {
        username: '',
        email: '',
        phone: ''
      },
      submitted: false
    };
  }

  closePopup = () => {
    this.setState({ submitted: false });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    const errors = { ...this.state.errors };
    errors[name] = '';
    this.setState({
      [name]: value,
      errors
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, phone } = this.state;
    const errors = {};
    // Validate username
    if (username.trim() === '') {
      errors.username = 'Username is required';
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

      // Reset the form
      this.setState({
        username: '',
        email: '',
        phone: '',
        errors: {
          username: '',
          email: '',
          phone: '',
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

    const { email, username, phone, message } = this.state;

    const res = await fetch('https://mail.bridgehealth.in/register', {
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
      this.setState({ show: true, email: '', username: '', phone: '' });
      console.log('Email sent');
    }
  };
  render() {
    const { username, email, phone, message, isSubmitDisabled, errors, submitted } = this.state;
    return (
      <>
        <Header />
        <section class="team-section padding">
          <section class="container-fluid">
            <div class="row align-items-center auto-container">

              <div class="col-lg-6">
                <div class="content-box marginTop40header">

                  <div class="sec-title text-center textleft personal">
                    <h2 className='textleft fontSize50'>
                      <span className='headeingcolorblack'> Your  </span>
                      <span className='headeingcolorblue'>Good Health </span> <br></br>
                      <span className='headeingcolorblack'>is Our Plan</span>
                    </h2>
                    <h3 className='textleft marginTop40 b2c-heading'>Choose from a selection of<br></br> Annual Preventive Health plans
                    </h3>
                    <div class=" btnleft">
                      <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="image-wrapper imgright">
                  <div class="image-one">
                    <img src={require('../../assets/images/shape/image2.png')} alt="" className='imgwidth' />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div class="container-fluid marginTop80">
          <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8 b2cimgcenter">
              <h1>The <span className='headeingcolorblue'>Gift</span> of Preventive Healthcare
                Made Easy.</h1>
              <p>Our Annual Health Plans are membership-based integrated healthcare programs covering everything from clinical assessments to consultations, lab tests to nutrition sessions, lifestyle management to emotional wellness, and more</p>
              <h3>Preventive Health Plans</h3>
              <div class="image-one">
                <img src={require('../../assets/images/shape/imageb2c.png')} alt="" className='imgwidth' />
              </div>

              <div class="btn-box text-center ">
                <ContactForm buttonText="say yes" className='submitcontact extra-mar' />
              </div>
            </div>
            <div class="col-lg-2"></div>
          </div>
        </div>
        <section class="">
          <div class="container-fluid annualback">
            <div class="row">
              <div class="col-lg-6">
                <div class="contact-form-area marleft">
                  <div class="sec-title persona3">
                    <h2>
                      <span className='headeingcolorblack'>Why </span>
                      <span className='headeingcolorblue'> Annual </span><br></br>
                      <span className='headeingcolorblack'>Health Plans?</span>
                    </h2>
                    <h4 className='textleft marginTop40'>A host of benefits await you as soon as you say <span className='headeingcolorblue'> YES</span>
                    </h4>
                  </div>
                  <div class="content-box">
                    <ul className='listicon'>
                      <li className='listper'>
                        <img className='listicon6' src={require('../../assets/images/shape/b21.png')} alt="" />
                        Reduce healthcare expenditure
                      </li>
                      <li className='listper'>
                        <img className='listicon6' src={require('../../assets/images/shape/b13.png')} alt="" />
                        Discover any hidden health conditions
                      </li>
                      <li className='listper'>
                        <img className='listicon6' src={require('../../assets/images/shape/b12.png')} alt="" />
                        Know your health score
                      </li>
                      <li className='listper'>
                        <img className='listicon6' src={require('../../assets/images/shape/b14.png')} alt="" />
                        Implement lifestyle changes for better quality of life
                      </li>
                    </ul>
                  </div>
                  <div class="btn-box text-center btn5">
                    <ContactForm buttonText="say yes" className='submitcontact' />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="image-wrapper">
                  <div class="image-one">
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="blogdesignerd1">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-7">
              </div>
              <div class="col-lg-5">
                <div class="contact-form-area margintop145">
                  <div class="sec-title marginto90" >
                    <h2 className='marginleft texttile1'>
                      <span className='headeingcolorblack'>Why </span>
                      <span className='headeingcolorblue'> Preventive </span><br></br>
                      <span className='headeingcolorblack '>Health Care?</span>
                    </h2>
                    <p className='font20'>
                      Preventive healthcare helps in predicting & preventing
                      serious health conditions while prolonging your life.
                      It also helps you in making proactive choices regarding your mental health and lifestyle to stay fit at all times
                    </p>
                  </div>
                  <div class="btn-box text-center btn5">
                    <ContactForm buttonText="say yes" className='submitcontact' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="health-plan pt-5 d-lg-block">
          <div class="container-fluid aos-init aos-animate" data-aos="fade-up">
            <div class="section-header">
              <h2><span class="headeingcolorblack">Annual Preventive Health</span><span class="headeingcolorblue"> Plans</span></h2>
              <p>Say<span class="headeingcolorblue"> YES </span>to a plan just for you!</p>
            </div>
            <div className="desktop-plan-table">
            <div class="row seven-cols gy-4">
              <div class="col-md-1 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div class="health-plan-title-1">
                  <h3>Clinical Assessments</h3>
                </div>
                <div class="health-plan-title-2">
                  <h3>Consultations</h3>
                </div>
                <div class="health-plan-title-3">
                  <h3>Additional Discounts (Up to)</h3>
                </div>
                {/* <div class="health-plan-title-4">
                        <h3>Discounts</h3>
                     </div> */}
              </div>
              <div class="col-md-1 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <div class="health-plan-item featured table-content">
                  <h3>Service Offering</h3>
                  <ul>
                    <li> Initial Health Assessment</li>
                    <li> Blood Health</li>
                    <li> Diabetic Profile</li>
                    <li> Kidney Health</li>
                    <li> Cardiac Health</li>
                    <li> Liver Health</li>
                    <li> Nutrition Health</li>
                    <li> Bone Health</li>
                    <li> Thyroid Profile	</li>
                    <li> Oncology Screening</li>
                    <li> Respiratory Health</li>
                    <li> Radiology Screening</li>
                  </ul>
                  <ul class="clinicAss">
                    <li> Physician Consults​</li>
                    <li> Emotional Health<br></br> Consults</li>
                    <li> Webinars and Group Sessions</li>
                    <li> Dental, Eye and Derma Screening </li>
                    <li> Nutrition Assessment and Consults</li>
                    <li> Yoga/Fitness Assessments and Sessions</li>
                    <li>App Access</li>
                  </ul>
                  <ul>
                    <li> Medicines/Pharmacy (At-Home Delivery)</li>
                    <li> Lab tests/ Annual Plans for Family</li>
                    <li> Physiotherapy for Self & family</li>
                    <li> Home Sample Collection</li>
                  </ul>
                  {/* <ul>
                           <li> Medicines / e-Pharmacy <br></br>for Self and Family</li>
                           <li> Physiotherapy Services <br></br>for Self and Family</li>
                           <li> Lab / Clinical Services <br></br>&amp; Retail Health Plans <br></br>for Family <br></br></li>
                           <li> Home Sample Collection</li>
                           <li> BH Mobile App-Access</li>
                        </ul> */}
                  <p class="buy-btn">Price</p>
                </div>
              </div>
              <div class="col-md-1 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <div class="health-plan-item silver">
                  <h3>BH Blue</h3>
                  <ul>
                    <li> 101Tests  + ECG</li>
                    <li><i class="fa-solid fa-check"></i></li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>ECG</li>
                  </ul>
                  <ul class="clincAss-2">
                    <li class="mt-3">2</li>
                    <li>1</li>
                    <li><i class="fa-solid fa-check"></i></li>
                    <li>&nbsp;</li>
                    <li>1</li>
                    <li>&nbsp;</li>
                    <li><i class="fa-solid fa-check"></i></li>
                  </ul>
                  {/* <ul class="consults">
                           <li>4</li>
                           <li>1</li>
                           <li>5</li>
                           <li>&nbsp;</li>
                        </ul> */}
                  <ul class="discounts">
                    <li>10% </li>
                    <li>10% </li>
                    <li>10%</li>
                    {/* <li>Paid</li> */}
                    <li><i class="bi bi-check"></i> </li>
                  </ul>
                  <p class="buy-btn border-blue">₹7,999</p>
                </div>
              </div>
              <div class="col-md-1 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <div class="health-plan-item silver">
                  <h3>BH Silver</h3>
                  <ul>
                    <li> 118 Tests + ECG + USG</li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>ECG, USG (ABD. & PELVIS)</li>
                  </ul>
                  <ul class="clincAss-2">
                    <li>2</li>
                    <li>1</li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li>&nbsp;</li>
                    <li class="mt-3">1</li>
                    <li>&nbsp;</li>
                    <li><i class="fa-solid fa-check"></i> </li>
                  </ul>
                  {/* <ul class="consults">
                           <li>4</li>
                           <li>1</li>
                           <li>5</li>
                           <li>&nbsp;</li>
                        </ul> */}
                  <ul class="discounts">
                    <li>10% </li>
                    <li>10% </li>
                    <li>10% </li>
                    {/* <li>Paid</li> */}
                    <li><i class="bi bi-check"></i> </li>
                  </ul>
                  <p class="buy-btn border-silver">₹7,999</p>
                </div>
              </div>
              <div class="col-md-1 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <div class="health-plan-item gold">
                  <h3>BH GOLD</h3>
                  <ul>
                    <li>122 Tests + ECG + USG</li>
                    <li><i class="fa-solid fa-check"></i></li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>ECG, USG (ABD. & PELVIS),ECHO</li>
                  </ul>
                  <ul class="clincAss-2">
                    <li>2</li>
                    <li>2</li>
                    <li><i class="fa-solid fa-check"></i></li>
                    <li>&nbsp;</li>
                    <li>4</li>
                    <li>5</li>
                    <li><i class="fa-solid fa-check"></i></li>
                  </ul>
                  {/* <ul class="consults">
                           <li>12</li>
                           <li>4</li>
                           <li>&nbsp;</li>
                           <li>5</li>
                        </ul> */}
                  <ul class="discounts">
                    <li>15%</li>
                    <li>15%</li>
                    <li>10%</li>
                    <li>FREE</li>
                    <li><i class="bi bi-check"></i> </li>
                  </ul>
                  <p class="buy-btn border-gold">₹16,999</p>
                </div>
              </div>
              <div class="col-md-1 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <div class="health-plan-item platinum">
                  <h3>BH Platinum</h3>
                  <ul>
                    <li>138 Tests + ECG + USG</li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li>X-ray, ECG, USG (ABD. & PELVIS), ECHO</li>
                  </ul>
                  <ul class="platinumMinh">
                    <li>2</li>
                    <li>2</li>
                    <li><i class="fa-solid fa-check"></i></li>
                    <li>&nbsp;</li>
                    <li>4</li>
                    <li>15</li>
                    <li><i class="fa-solid fa-check"></i></li>
                  </ul>
                  {/* <ul class="consults">
                           <li>Unlimited</li>
                           <li>4</li>
                           <li>&nbsp;</li>
                           <li>15</li>
                        </ul> */}
                  <ul class="discounts">
                    <li>20%</li>
                    <li>15%</li>
                    <li>1 session + 10%</li>
                    <li>FREE</li>
                    <li><i class="bi bi-check"></i> </li>
                  </ul>
                  <p class="buy-btn border-platinum">₹24,999</p>
                </div>
              </div>
              <div class="col-md-1 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <div class="health-plan-item platinum-plus">
                  <h3>BH Platinum +</h3>
                  <ul>
                    <li>222 Tests + ECG + USG</li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li><i class="fa-solid fa-check"></i> </li>
                    <li>X-ray, ECG, USG (ABD. & PELVIS), ECHO</li>
                  </ul>
                  <ul class="platinumMinh">
                    <li>4</li>
                    <li>4</li>
                    <li><i class="fa-solid fa-check"></i></li>
                    <li><i class="fa-solid fa-check"></i></li>
                    <li>4</li>
                    <li>15</li>
                    <li><i class="fa-solid fa-check"></i></li>
                  </ul>
                  {/* <ul class="consults">
                           <li>Unlimited</li>
                           <li>4</li>
                           <li>&nbsp;</li>
                           <li>15</li>
                        </ul> */}
                  <ul class="discounts">
                    <li>20% </li>
                    <li>15%</li>
                    <li>1 session + 10%</li>
                    <li>FREE</li>
                    <li><i class="bi bi-check"></i> </li>
                  </ul>
                  <p class="buy-btn border-platinum-plus">₹29,999</p>
                </div>
              </div>
            </div>
            <div class="row seven-cols">
              <div class="col-md-1 col-md-6">
              </div>
              <div class="col-md-1 col-md-6">
              </div>

              <div class="col-md-1 col-md-6">
                <div class="d-flex">
                  <a href="https://razorpay.com/payment-link/inv_M2vyRWdM09nxcw" class="getStarted">Get Started</a>
                </div>
              </div>
              <div class="col-md-1 col-md-6">
                <div class="d-flex">
                  {/* <a href="pay.php/?amt=1699900" class="getStarted">Get Started</a> */}
                  <a href="https://razorpay.com/payment-link/inv_M2vyRWdM09nxcw" class="getStarted">Get Started</a>
                </div>
              </div>
              <div class="col-md-1 col-md-6">
                <div class="d-flex">
                  {/* <a href="pay.php/?amt=2499900" class="getStarted">Get Started</a> */}
                  <a href="https://razorpay.com/payment-link/inv_M2w1L4i4SwsI7p" class="getStarted">Get Started</a>
                </div>
              </div>
              <div class="col-md-1 col-md-6">
                <div class="d-flex">
                  {/* <a href="pay.php/?amt=2999900" class="getStarted">Get Started</a> */}
                  <a href="https://razorpay.com/payment-link/inv_M2w30g1YwaCMwd" class="getStarted">Get Started</a>
                </div>
              </div>
              <div class="col-md-1 col-md-6">
                <div class="d-flex">
                  {/* <a href="pay.php/?amt=2999900" class="getStarted">Get Started</a> */}
                  <a href="https://razorpay.com/payment-link/inv_M2wMTGZG5XdOa0" class="getStarted">Get Started</a>
                </div>
              </div>
            </div>
            <div class="row mt-3 ">
              <div class="col-lg-4 col-md-6">
              </div>
              <div class="col-lg-8 col-md-6">
                <div class="d-flex">
                  <a href="javascript:void(0)" class="knowMore toggle2">KNOW MORE</a>
                </div>
              </div>
            </div>
            </div>


            {/* Mobile code */}
            <div class="table-container d-block d-lg-none">
              <div class="table-horizontal-container">
                <table class="unfixed-table">
                  <thead>
                    <tr>
                      <th>SERVICE OFFERING</th>
                      <th>BH BLUE</th>
                      <th>BH SILVER</th>
                      <th>BH GOLD</th>
                      <th>BH PLATINUM</th>
                      <th>BH PLATINUM +</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th></th>
                      <td>101Tests + ECG</td>
                      <td>118 Tests + ECG + USG</td>
                      <td>122 Tests + ECG + USG</td>
                      <td>138 Tests + ECG + USG</td>
                      <td>222 Tests + ECG + USG</td>
                    </tr>
                    <tr>
                      <th>Initial Health Assessment</th>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <th>Blood Health</th>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <th>Diabetic Profile</th>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <th>Kidney Health</th>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <th>Cardiac Health</th>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <th>Liver Health</th>
                      <td></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <th>Nutrition Health</th>
                      <td></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <th>Bone Health</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <th>Thyroid Profile</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <th>Oncology Screening</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <th>Respiratory Health</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <th>Radiology Screening</th>
                      <td>ECG</td>
                      <td>ECG, USG (ABD. & PELVIS)</td>
                      <td>ECG, USG (ABD. & PELVIS),ECHO</td>
                      <td>X-ray, ECG, USG (ABD. & PELVIS), ECHO</td>
                      <td>X-ray, ECG, USG (ABD. & PELVIS), ECHO</td>
                    </tr>
                    <tr>
                      <th>Physician Consults</th>
                      <td>2</td>
                      <td>2</td>
                      <td>2</td>
                      <td>2</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th>Emotional Health Consults</th>
                      <td>1</td>
                      <td>1</td>
                      <td>2</td>
                      <td>2</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th>Webinars and Group Sessions</th>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                    </tr>

                    <tr>
                      <th>Dental, Eye and Derma Screening</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <th>Nutrition Assessment and Consults</th>
                      <td>12</td>
                      <td>1</td>
                      <td>4</td>
                      <td>4</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th>Yoga/Fitness Assessments and Sessions</th>
                      <td></td>
                      <td></td>
                      <td>5</td>
                      <td>15</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <th>App Access</th>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                      <td><i class="fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                      <th>Medicines/Pharmacy (At-Home Delivery)</th>
                      <td>10%</td>
                      <td>10%</td>
                      <td>15%</td>
                      <td>20%</td>
                      <td>20%</td>
                    </tr>
                    <tr>
                      <th>Lab tests/ Annual Plans for Family</th>
                      <td>10%</td>
                      <td>10%</td>
                      <td>15%</td>
                      <td>15%</td>
                      <td>15%</td>
                    </tr>
                    <tr>
                      <th>Physiotherapy for Self & family</th>
                      <td>10%</td>
                      <td>10%</td>
                      <td>10%^</td>
                      <td>1 session + 10%</td>
                      <td>1 session + 10%</td>
                    </tr>
                    <tr>
                      <th>Home Sample Collection</th>
                      <td></td>
                      <td></td>
                      <td>FREE</td>
                      <td>FREE</td>
                      <td>FREE</td>
                    </tr>
                    <tr>
                      <th>Price</th>
                      <td>₹7,999</td>
                      <td>₹7,999</td>
                      <td>₹16,999</td>
                      <td>₹24,999</td>
                      <td>₹29,999</td>
                    </tr>
                  </tbody>

                  <tfoot>
                    <tr>
                      <th></th>
                      <td>
                        <a href="https://razorpay.com/payment-link/inv_M2vyRWdM09nxcw" class="getStarted">Get Started</a>
                      </td>
                      <td>
                        <a href="https://razorpay.com/payment-link/inv_M2vyRWdM09nxcw" class="getStarted">Get Started</a>
                      </td>
                      <td>
                        <a href="https://razorpay.com/payment-link/inv_M2w1L4i4SwsI7p" class="getStarted">Get Started</a>
                      </td>
                      <td>
                        <a href="https://razorpay.com/payment-link/inv_M2w30g1YwaCMwd" class="getStarted">Get Started</a>
                      </td>
                      <td>
                        <a href="https://razorpay.com/payment-link/inv_M2wMTGZG5XdOa0" class="getStarted">Get Started</a>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>


          </div>
        </section>

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
                    <form method="post" onSubmit={this.handleSubmit} action="#" id="contact-form">
                      <div class="row clearfix">
                        <div class="col-md-12 form-group">
                          <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={e => this.handleChange(e)}
                            id="name"
                            placeholder="Name*"
                          // required="" 
                          />
                          {errors.username && <div className="error">{errors.username}</div>}
                        </div>
                        <div class="col-md-12 form-group">
                          <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={e => this.handleChange(e)}
                            id="name"
                            placeholder="Email"
                          />
                          {/* {errors.email && <div className="error">{errors.email}</div>} */}
                        </div>  <div class="col-md-12 form-group">
                          <input
                            type="text"
                            name="phone"
                            value={this.state.phone}
                            onChange={e => this.handleChange(e)}
                            id="name"
                            placeholder="Phone*"
                          // required="" 
                          />
                          {errors.phone && <div className="error">{errors.phone}</div>}
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
                            <button class="submitcontact" type="submit" disabled={isSubmitDisabled}
                              onSubmit={e => this.handleSubmit(e)}
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