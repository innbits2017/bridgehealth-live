import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Popup from 'reactjs-popup';
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
          {/* About Section Two */}
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
                    {/* <button class="commonBtnforAll btnleft">BOOK NOW</button> */}

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
        {/* <b2c_page /> */}
        {/* <section>
          <div class="image-five">
          <img src={require('../../assets/images/shape/b2c2.png')} alt="" className='imgwidth' />
          </div>
          
        </section>  */}
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

              {/* <div class="btn-box text-center btn5">
                <button class="commonBtnforAll marCard">SAY YES!</button>

              </div> */}

              <div class="btn-box  btn5">
                <ContactForm buttonText="SAY YES!" popupPosition="right" />
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
                    <h2 style={{ fontSize: 48 + 'px' }}>
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
                  {/* <div class="btn-box text-center btn5">
                    <button class="commonBtnforAll">SAY YES!</button>
                  </div> */}
                  <div class="btn-box btn5">
                    <ContactForm buttonText="SAY YES!" popupPosition="right" />
                  </div>

                </div>
              </div>
              <div class="col-lg-6">
                <div class="image-wrapper">
                  <div class="image-one">
                    {/* <img src={require('../../assets/images/shape/b2c3.png')} alt="" className='b2cimg' /> */}
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
                {/* <div class="image-wrapper">
                  <div class="image-one">
                    <img src={require('../../assets/images/shape/b2c1.png')} alt="" className='b2cimg' />
                  </div>
                </div> */}
              </div>

              <div class="col-lg-5">
                <div class="contact-form-area margintop145">

                  <div class="sec-title marginto90" >
                    <h2 style={{ fontSize: 48 + 'px' }} className='marginleft'>
                      <span className='headeingcolorblack'>Why </span>
                      <span className='headeingcolorblue'> Preventive </span><br></br>
                      <span className='headeingcolorblack '>Health Care?</span>
                    </h2>
                    {/* <h4 className='textleft marginTop40'>A host of benefits await you as soon as you say <span className='headeingcolorblue'> YES</span>
          </h4> */}
                    <p className='font20'>
                      Preventive healthcare helps in predicting & preventing
                      serious health conditions while prolonging your life.
                      It also helps you in making proactive choices regarding your mental health and lifestyle to stay fit at all times
                    </p>

                  </div>


                  {/* <div class="contact-form btnright">

                    <ContactForm buttonText="SAY YES!" />
                  </div> */}
                  {/* <div class="btn-box text-center btn5">
                    <button class="commonBtnforAll">SAY YES!</button>

                  </div> */}

                  <div class="btn-box text-center btn5">
                    <ContactForm buttonText="SAY YES!" popupPosition="left" />
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
               <p>Say<span class="headeingcolorblue"> YES </span>to a plan just for you!</p>               </div>
               <div class="row seven-cols gy-4">
                  <div class="col-md-1 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                     <div class="health-plan-title-1">
                        <h3>Clinical Assessments</h3>
                     </div>
                     <div class="health-plan-title-2">
                        <h3>Clinical Assessments</h3>
                     </div>
                     <div class="health-plan-title-3">
                        <h3>Consults</h3>
                     </div>
                     <div class="health-plan-title-4">
                        <h3>Discounts</h3>
                     </div>
                  </div>
                  <div class="col-md-1 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                     <div class="health-plan-item featured">
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
                           <li> Oncology Assessment</li>
                           <li> Respiratory Health</li>
                           <li> Radiology - (+Echo)</li>
                        </ul>
                        <ul class="clinicAss">
                           <li> Doctor Consultations</li>
                           <li> Additional Physician<br></br> Consults</li>
                           <li> Specialist Consults</li>
                           <li> Emotional Wellness <br></br> Webinars / Group <br></br>Sessions</li>
                           <li> 1 to 1 Emotional <br></br> Health Consult</li>
                           <li> Dental/Ophthal <br></br>Screening/Dermatology <br></br>Consult</li>
                        </ul>
                        <ul>
                           <li> Dietary / Nutrition <br></br>Webinars</li>
                           <li> 1 to 1 Dietician / <br></br> Nutrition Consult</li>
                           <li> Group Yoga Sessions <br></br>(1 Hour)</li>
                           <li> Yoga Sessions (1 Hour)</li>
                        </ul>
                        <ul>
                           <li> Medicines / e-Pharmacy <br></br>for Self and Family</li>
                           <li> Physiotherapy Services <br></br>for Self and Family</li>
                           <li> Lab / Clinical Services <br></br>&amp; Retail Health Plans <br></br>for Family <br></br></li>
                           <li> Home Sample Collection</li>
                           <li> BH Mobile App-Access</li>
                        </ul>
                        <p class="buy-btn">Price</p>
                     </div>
                  </div>
                  <div class="col-md-1 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                     <div class="health-plan-item silver">
                        <h3>Silver</h3>
                        <ul>
                           <li> 117 Tests with ECG &amp; U/S</li>
                           <li><i class="bi bi-check"></i> </li>
                           <li><i class="bi bi-check"></i> </li>
                           <li><i class="bi bi-check"></i> </li>
                           <li><i class="bi bi-check"></i> </li>
                           <li><i class="bi bi-check"></i> </li>
                           <li><i class="bi bi-check"></i> </li>
                           <li>&nbsp;</li>
                           <li>&nbsp;</li>
                           <li>&nbsp;</li>
                           <li>&nbsp;</li>
                           <li>ECG / Ultrasound Abdomen + Pelvis</li>
                        </ul>
                        <ul class="clincAss-2">
                           <li>2</li>
                           <li>Paid Consult</li>
                           <li class="mt-3">10% Off</li>
                           <li class="mt-3">4</li>
                           <li>1</li>
                           <li>&nbsp;</li>
                        </ul>
                        <ul class="consults">
                           <li>4</li>
                           <li>1</li>
                           <li>5</li>
                           <li>&nbsp;</li>
                        </ul>
                        <ul class="discounts">
                           <li>10% Off</li>
                           <li>10% Off</li>
                           <li>10% Off</li>
                           <li>Paid</li>
                           <li><i class="bi bi-check"></i> </li>
                        </ul>
                        <p class="buy-btn border-silver">₹7,999</p>
                     </div>
                  </div>
                  <div class="col-md-1 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                     <div class="health-plan-item silver">
                        <h3>Silver</h3>
                        <ul>
                           <li> 117 Tests with ECG &amp; U/S</li>
                           <li><i class="bi bi-check"></i> </li>
                           <li><i class="bi bi-check"></i> </li>
                           <li><i class="bi bi-check"></i> </li>
                           <li><i class="bi bi-check"></i> </li>
                           <li><i class="bi bi-check"></i> </li>
                           <li><i class="bi bi-check"></i> </li>
                           <li>&nbsp;</li>
                           <li>&nbsp;</li>
                           <li>&nbsp;</li>
                           <li>&nbsp;</li>
                           <li>ECG / Ultrasound Abdomen + Pelvis</li>
                        </ul>
                        <ul class="clincAss-2">
                           <li>2</li>
                           <li>Paid Consult</li>
                           <li class="mt-3">10% Off</li>
                           <li class="mt-3">4</li>
                           <li>1</li>
                           <li>&nbsp;</li>
                        </ul>
                        <ul class="consults">
                           <li>4</li>
                           <li>1</li>
                           <li>5</li>
                           <li>&nbsp;</li>
                        </ul>
                        <ul class="discounts">
                           <li>10% Off</li>
                           <li>10% Off</li>
                           <li>10% Off</li>
                           <li>Paid</li>
                           <li><i class="bi bi-check"></i> </li>
                        </ul>
                        <p class="buy-btn border-silver">₹7,999</p>
                     </div>
                  </div>
                  <div class="col-md-1 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                     <div class="health-plan-item gold">
                        <h3>GOLD</h3>
                        <ul>
                           <li>122 Tests with ECG &amp; U/S</li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li>&nbsp;</li>
                           <li>&nbsp;</li>
                           <li>ECG / Ultrasound Abdomen + Pelvis + ECHO</li>
                        </ul>
                        <ul class="clincAss-2">
                           <li> 2</li>
                           <li>Paid Consult</li>
                           <li class="mt-3">10% Off</li>
                           <li class="mt-3">12</li>
                           <li>2</li>
                           <li>&nbsp;</li>
                        </ul>
                        <ul class="consults">
                           <li>12</li>
                           <li>4</li>
                           <li>&nbsp;</li>
                           <li>5</li>
                        </ul>
                        <ul class="discounts">
                           <li>15% Off</li>
                           <li>15% Off</li>
                           <li>15% Off</li>
                           <li>Free</li>
                           <li><i class="bi bi-check"></i> </li>
                        </ul>
                        <p class="buy-btn border-gold">₹16,999</p>
                     </div>
                  </div>
                  <div class="col-md-1 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                     <div class="health-plan-item platinum">
                        <h3>Platinum</h3>
                        <ul>
                           <li>138 Tests with Echo &amp; U/S</li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li>X-Ray / Echo / Ultrasound Abdomen + Pelvis / Breast Screening</li>
                        </ul>
                        <ul class="platinumMinh">
                           <li>2</li>
                           <li>Unlimited</li>
                           <li class="mt-3">10% Off</li>
                           <li class="mt-3">Unlimited</li>
                           <li>2</li>
                           <li>&nbsp;</li>
                        </ul>
                        <ul class="consults">
                           <li>Unlimited</li>
                           <li>4</li>
                           <li>&nbsp;</li>
                           <li>15</li>
                        </ul>
                        <ul class="discounts">
                           <li>20% Off</li>
                           <li>1 Session + 10% Off</li>
                           <li>15% Off</li>
                           <li>Free</li>
                           <li><i class="bi bi-check"></i> </li>
                        </ul>
                        <p class="buy-btn border-platinum">₹24,999</p>
                     </div>
                  </div>
                  <div class="col-md-1 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                     <div class="health-plan-item platinum-plus">
                        <h3>Platinum +</h3>
                        <ul>
                           <li>222 Tests with Echo &amp; U/S</li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li><i class="bi bi-check"></i></li>
                           <li>X-Ray / Echo / Ultrasound Abdomen + Pelvis / Breast Screening</li>
                        </ul>
                        <ul class="platinumMinh">
                           <li>4</li>
                           <li>Unlimited</li>
                           <li class="mt-3">10% Off</li>
                           <li class="mt-3">Unlimited</li>
                           <li>4</li>
                           <li>1</li>
                        </ul>
                        <ul class="consults">
                           <li>Unlimited</li>
                           <li>4</li>
                           <li>&nbsp;</li>
                           <li>15</li>
                        </ul>
                        <ul class="discounts">
                           <li>20% Off</li>
                           <li>1 Session + 10% Off</li>
                           <li>15% Off</li>
                           <li>Free</li>
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
                        <a href="pay.php/?amt=799900" class="getStarted">Get Started</a>
                     </div>
                  </div>
                  <div class="col-md-1 col-md-6">
                     <div class="d-flex">
                        <a href="pay.php/?amt=1699900" class="getStarted">Get Started</a>
                     </div>
                  </div>
                  <div class="col-md-1 col-md-6">
                     <div class="d-flex">
                        <a href="pay.php/?amt=2499900" class="getStarted">Get Started</a>
                     </div>
                  </div>
                  <div class="col-md-1 col-md-6">
                     <div class="d-flex">
                        <a href="pay.php/?amt=2999900" class="getStarted">Get Started</a>
                     </div>
                  </div>
                  <div class="col-md-1 col-md-6">
                     <div class="d-flex">
                        <a href="pay.php/?amt=2999900" class="getStarted">Get Started</a>
                     </div>
                  </div>
               </div>
               <div class="row mt-3	">
                  <div class="col-lg-4 col-md-6">
                  </div>
                  <div class="col-lg-8 col-md-6">
                     <div class="d-flex">
                        <a href="javascript:void(0)" class="knowMore toggle2">KNOW MORE</a>
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
                          {errors.email && <div className="error">{errors.email}</div>}
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
                            type="checkbox" id="checkbox1" name="option1" value="good" required/>
                          <label class="form-check-label heading">
                            I agree that Bridge Health may contact me at the email address or phone number above.
                          </label>
                        </div>
                        <div class="col-md-12 form-group">
                          <div class="btn-box text-center btn5">
                            <button class="commonBtnforAll" type="submit" disabled={isSubmitDisabled}
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