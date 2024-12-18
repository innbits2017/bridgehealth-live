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
errors.username = 'Name is required';
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
this.setState({ show: true, email: '', username: '', phone: '', message: '' });
console.log('Email sent');
}
};

render() {
const { username, email, phone, message, isSubmitDisabled, errors, submitted } = this.state;
return (
<>
  <Header />
  <section class="team-section padding personal-health">
    <section class="container-fluid">
      <div class="row align-items-center auto-container reverseFlex">

        <div class="col-lg-6">
          <div class="content-box marginTop40header">

            <div class="sec-title text-center textleft personal">
              <h2 className='textleft fontSize50'>
                <span className='headeingcolorblack'> Your </span>
                <span className='headeingcolorblue'>Good Health </span> <br></br>
                <span className='headeingcolorblack'>is Our Plan</span>
              </h2>
              <h3 className='textleft marginTop40 b2c-heading'>Choose from a selection of<br></br> Annual Preventive
                Health plans
              </h3>
              <div class=" btnleft">
                <ContactForm buttonText="BOOK NOW" popupPosition="right" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="imgright">
            <img src={require('../../assets/images/shape/image2.png')} alt="" className='imgwidth' />
          </div>
        </div>
      </div>
    </section>
  </section>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2"></div>
      <div class="col-lg-8 b2cimgcenter">
        <h1>The <span className='headeingcolorblue'>Gift</span> of Preventive Healthcare
          Made Easy.</h1>
        <p>Our Annual Health Plans are membership-based integrated healthcare programs covering everything from clinical
          assessments to consultations, lab tests to nutrition sessions, lifestyle management to emotional wellness, and
          more</p>
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
              <h4 className='textleft marginTop40'>A host of benefits await you as soon as you say <span
                  className='headeingcolorblue'> YES</span>
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
            <div class="btn-box btn5">
              <ContactForm buttonText="say yes" className='submitcontact left' />
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
            <div class="sec-title marginto90">
              <h2 className='texttile1 heathCareTitle'>
                <span className='headeingcolorblack'>Why </span>
                <span className='headeingcolorblue'> Preventive </span><br></br>
                <span className='headeingcolorblack '>Health Care?</span>
              </h2>
              <p className='font20 marginRigh'>
                Preventive healthcare helps in predicting & preventing
                serious health conditions while prolonging your life.
                It also helps you in making proactive choices regarding your mental health and lifestyle to stay fit at
                all times
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
        <h2><span class="headeingcolorblack">Annual Preventive Health</span><span class="headeingcolorblue">
            Plans</span></h2>
        <p>Say<span class="headeingcolorblue"> YES </span>to a plan just for you!</p>
      </div>
      <div className="desktop-plan-table">
        <table>
          <thead>
            <tr>
              <td rowspan="15" className='tablebox1'>CLINICAL ASSESSMENTS
              </td>
            </tr>
            <tr>
              <th className="pers-serv">SERVICE OFFERING</th>
              <th className="pers-blue">BH BLUE</th>
              <th>BH SILVER</th>
              <th className="pers-col">BH GOLD</th>
              <th className="pers-plat">BH PLATINUM</th>
              <th className="pers-plat">BH PLATINUM +</th>
            </tr>
            <tr>
              <th></th>
              <td className="pers-bh">101 Tests + ECG</td>
              <td className="pers-bh1">118 Tests + ECG + USG</td>
              <td className="pers-gold">122 Tests + ECG + USG</td>
              <td className="pers-plat">138 Tests + ECG + USG</td>
              <td className="pers-plus">222 Tests + ECG + USG</td>

            </tr>
            <tr>
              <th>Initial Health Assessment</th>
              <td className="pers-bh"><i class="fa-solid fa-check"></i></td>
              <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
              <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
            </tr>
            <tr>
              <th>Blood Health</th>
              <td className="pers-bh"><i class="fa-solid fa-check"></i></td>
              <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
              <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
            </tr>
            <tr>
              <th>Diabetic Profile</th>
              <td className="pers-bh"><i class="fa-solid fa-check"></i></td>
              <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
              <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
            </tr>
            <tr>
              <th>Kidney Health</th>
              <td className="pers-bh"><i class="fa-solid fa-check"></i></td>
              <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
              <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
            </tr>
            <tr>
              <th>Cardiac Health</th>
              <td className="pers-bh"><i class="fa-solid fa-check"></i></td>
              <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
              <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
            </tr>
            <tr>
              <th>Liver Health</th>
              <td className="pers-bh"></td>
              <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
              <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
            </tr>
            <tr>
              <th>Nutrition Health</th>
              <td className="pers-bh"></td>
              <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
              <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
            </tr>
            <tr>
              <th>Bone Health</th>
              <td className="pers-bh"></td>
              <td className="pers-bh1"></td>
              <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
            </tr>
            <tr>
              <th>Thyroid Profile</th>
              <td className="pers-bh"></td>
              <td className="pers-bh1"></td>
              <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
            </tr>
            <tr>
              <th>Oncology Screening</th>
              <td className="pers-bh"></td>
              <td className="pers-bh1"></td>
              <td className="pers-gold"></td>
              <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
            </tr>
            <tr>
              <th>Respiratory Health</th>
              <td className="pers-bh"></td>
              <td className="pers-bh1"></td>
              <td className="pers-gold"></td>
              <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
            </tr>
            <tr>
              <th>Radiology Screening</th>
              <td className="pers-bh">ECG</td>
              <td className="pers-bh1">ECG, USG (ABD. & PELVIS)</td>
              <td className="pers-gold">ECG, USG (ABD. & PELVIS),ECHO</td>
              <td className="pers-plat">X-ray, ECG, USG (ABD. & PELVIS), ECHO</td>
              <td className="pers-plus">X-ray, ECG, USG (ABD. & PELVIS), ECHO</td>
            </tr>

            <tr>
              <td rowspan="8" className='tablebox2'>CONSULTATIONS
              </td>
            </tr>
            <tr>
              <th>Physician Consults</th>
              <td className="pers-bh">2</td>
              <td className="pers-bh1">2</td>
              <td className="pers-gold">2</td>
              <td className="pers-plat">2</td>
              <td className="pers-plus">4</td>
            </tr>
            <tr>
              <th>Emotional Health Consults</th>
              <td className="pers-bh">1</td>
              <td className="pers-bh1">1</td>
              <td className="pers-gold">2</td>
              <td className="pers-plat">2</td>
              <td className="pers-plus">4</td>
            </tr>
            <tr>
              <th>Webinars and Group Sessions</th>
              <td className="pers-bh"><i class="fa-solid fa-check"></i></td>
              <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
              <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
            </tr>

            <tr>
              <th>Dental, Eye and Derma Screening</th>
              <td className="pers-bh"></td>
              <td className="pers-bh1"></td>
              <td className="pers-gold"></td>
              <td className="pers-plat"></td>
              <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
            </tr>
            <tr>
              <th>Nutrition Assessment and Consults</th>
              <td className="pers-bh">12</td>
              <td className="pers-bh1">1</td>
              <td className="pers-gold">4</td>
              <td className="pers-plat">4</td>
              <td className="pers-plus">4</td>
            </tr>
            <tr>
              <th>Yoga/Fitness Assessments and Sessions</th>
              <td className="pers-bh"></td>
              <td className="pers-bh1"></td>
              <td className="pers-gold">5</td>
              <td className="pers-plat">15</td>
              <td className="pers-plus">15</td>
            </tr>
            <tr>
              <th>App Access</th>
              <td className="pers-bh"><i class="fa-solid fa-check"></i></td>
              <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
              <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
              <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
            </tr>
            <tr>
              <td rowspan="6" className='tablebox3'>ADDITIONAL DISCOUNTS (UP TO)
              </td>
            </tr>
            <tr>
              <th>Medicines/Pharmacy (At-Home Delivery)</th>
              <td className="pers-bh">10%</td>
              <td className="pers-bh1">10%</td>
              <td className="pers-gold">15%</td>
              <td className="pers-plat">20%</td>
              <td className="pers-plus">20%</td>
            </tr>
            <tr>
              <th>Lab tests/ Annual Plans for Family</th>
              <td className="pers-bh">10%</td>
              <td className="pers-bh1">10%</td>
              <td className="pers-gold">15%</td>
              <td className="pers-plat">15%</td>
              <td className="pers-plus">15%</td>
            </tr>
            <tr>
              <th>Physiotherapy for Self & family</th>
              <td className="pers-bh">10%</td>
              <td className="pers-bh1">10%</td>
              <td className="pers-gold">10%^</td>
              <td className="pers-plat">1 session + 10%</td>
              <td className="pers-plus">1 session + 10%</td>
            </tr>
            <tr>
              <th>Home Sample Collection</th>
              <td className="pers-bh"></td>
              <td className="pers-bh1"></td>
              <td className="pers-gold">FREE</td>
              <td className="pers-plat">FREE</td>
              <td className="pers-plus">FREE</td>
            </tr>
            <tr>
              <th>Price</th>
              <td className="pers-bh">
                <p class="buy-btn border-blue BhBlue">₹3,999</p>
              </td>
              <td className="pers-bh1">
                <p class="buy-btn border-blue BhBlue">₹7,999</p>
              </td>
              <td className="pers-gold">
                <p class="buy-btn border-blue BhBlue">₹16,999</p>
              </td>
              <td className="pers-plat">
                <p class="buy-btn border-blue BhBlue">₹24,999</p>
              </td>
              <td className="pers-plus">
                <p class="buy-btn border-blue BhBlue">₹29,999</p>
              </td>
            </tr>
            <tr>
              <td colspan="2"></td>
              <td> <a href="https://razorpay.com/payment-link/inv_M2vyRWdM09nxcw" class="getStarted" target='_blank'>Get
                  Started</a>
              </td>
              <td> <a href="https://razorpay.com/payment-link/inv_M2vyRWdM09nxcw" class="getStarted" target='_blank'>Get
                  Started</a>
              </td>
              <td> <a href="https://razorpay.com/payment-link/inv_M2w1L4i4SwsI7p" class="getStarted" target='_blank'>Get
                  Started</a>
              </td>
              <td> <a href="https://razorpay.com/payment-link/inv_M2w30g1YwaCMwd" class="getStarted" target='_blank'>Get
                  Started</a>
              </td>
              <td> <a href="https://razorpay.com/payment-link/inv_M2wMTGZG5XdOa0" class="getStarted" target='_blank'>Get
                  Started</a>
              </td>
            </tr>
          </thead>
        </table>

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
                <th className="pers-serv priceTextLeft">SERVICE OFFERING</th>
                <th className="pers-blue">BH BLUE</th>
                <th>BH SILVER</th>
                <th className="pers-col">BH GOLD</th>
                <th className="pers-plat">BH PLATINUM</th>
                <th className="pers-plat">BH PLATINUM +</th>
              </tr>
            </thead>
            <tbody className="per-price">
              <tr>
                <th></th>
                <td className="pers-bh">101 Tests + ECG</td>
                <td className="pers-bh1">118 Tests + ECG + USG</td>
                <td className="pers-gold">122 Tests + ECG + USG</td>
                <td className="pers-plat">138 Tests + ECG + USG</td>
                <td className="pers-plus">222 Tests + ECG + USG</td>
              </tr>
              <tr>
                <th className='priceTextLeft'>Initial Health Assessment</th>
                <td className="pers-bh"><i class="fa-solid fa-check"></i></td>
                <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
                <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Blood Health</th>
                <td className="pers-bh"><i class="fa-solid fa-check"></i></td>
                <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
                <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Diabetic Profile</th>
                <td className="pers-bh"><i class="fa-solid fa-check"></i></td>
                <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
                <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Kidney Health</th>
                <td className="pers-bh"><i class="fa-solid fa-check"></i></td>
                <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
                <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Cardiac Health</th>
                <td className="pers-bh"><i class="fa-solid fa-check"></i></td>
                <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
                <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Liver Health</th>
                <td className="pers-bh"></td>
                <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
                <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Nutrition Health</th>
                <td className="pers-bh"></td>
                <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
                <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Bone Health</th>
                <td className="pers-bh"></td>
                <td className="pers-bh1"></td>
                <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Thyroid Profile</th>
                <td className="pers-bh"></td>
                <td className="pers-bh1"></td>
                <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Oncology Screening</th>
                <td className="pers-bh"></td>
                <td className="pers-bh1"></td>
                <td className="pers-gold"></td>
                <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Respiratory Health</th>
                <td className="pers-bh"></td>
                <td className="pers-bh1"></td>
                <td className="pers-gold"></td>
                <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Radiology Screening</th>
                <td className="pers-bh">ECG</td>
                <td className="pers-bh1">ECG, USG (ABD. & PELVIS)</td>
                <td className="pers-gold">ECG, USG (ABD. & PELVIS),ECHO</td>
                <td className="pers-plat">X-ray, ECG, USG (ABD. & PELVIS), ECHO</td>
                <td className="pers-plus">X-ray, ECG, USG (ABD. & PELVIS), ECHO</td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Physician Consults</th>
                <td className="pers-bh">2</td>
                <td className="pers-bh1">2</td>
                <td className="pers-gold">2</td>
                <td className="pers-plat">2</td>
                <td className="pers-plus">4</td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Emotional Health Consults</th>
                <td className="pers-bh">1</td>
                <td className="pers-bh1">1</td>
                <td className="pers-gold">2</td>
                <td className="pers-plat">2</td>
                <td className="pers-plus">4</td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Webinars and Group Sessions</th>
                <td className="pers-bh"><i class="fa-solid fa-check"></i></td>
                <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
                <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
              </tr>

              <tr>
                 <th className='priceTextLeft'>Dental, Eye and Derma Screening</th>
                <td className="pers-bh"></td>
                <td className="pers-bh1"></td>
                <td className="pers-gold"></td>
                <td className="pers-plat"></td>
                <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Nutrition Assessment and Consults</th>
                <td className="pers-bh">12</td>
                <td className="pers-bh1">1</td>
                <td className="pers-gold">4</td>
                <td className="pers-plat">4</td>
                <td className="pers-plus">4</td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Yoga/Fitness Assessments and Sessions</th>
                <td className="pers-bh"></td>
                <td className="pers-bh1"></td>
                <td className="pers-gold">5</td>
                <td className="pers-plat">15</td>
                <td className="pers-plus">15</td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>App Access</th>
                <td className="pers-bh"><i class="fa-solid fa-check"></i></td>
                <td className="pers-bh1"><i class="fa-solid fa-check"></i></td>
                <td className="pers-gold"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plat"><i class="fa-solid fa-check"></i></td>
                <td className="pers-plus"><i class="fa-solid fa-check"></i></td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Medicines/Pharmacy (At-Home Delivery)</th>
                <td className="pers-bh">10%</td>
                <td className="pers-bh1">10%</td>
                <td className="pers-gold">15%</td>
                <td className="pers-plat">20%</td>
                <td className="pers-plus">20%</td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Lab tests/ Annual Plans for Family</th>
                <td className="pers-bh">10%</td>
                <td className="pers-bh1">10%</td>
                <td className="pers-gold">15%</td>
                <td className="pers-plat">15%</td>
                <td className="pers-plus">15%</td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Physiotherapy for Self & family</th>
                <td className="pers-bh">10%</td>
                <td className="pers-bh1">10%</td>
                <td className="pers-gold">10%^</td>
                <td className="pers-plat">1 session + 10%</td>
                <td className="pers-plus">1 session + 10%</td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Home Sample Collection</th>
                <td className="pers-bh"></td>
                <td className="pers-bh1"></td>
                <td className="pers-gold">FREE</td>
                <td className="pers-plat">FREE</td>
                <td className="pers-plus">FREE</td>
              </tr>
              <tr>
                 <th className='priceTextLeft'>Price</th>
                <td className="pers-bh">₹3,999</td>
                <td className="pers-bh1">₹7,999</td>
                <td className="pers-gold">₹16,999</td>
                <td className="pers-plat">₹24,999</td>
                <td className="pers-plus">₹29,999</td>
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

  {/*
  <!-- Contact Section --> */}
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
            {/*
            <!-- Contact Form--> */}
            <div class="contact-form" style={{ marginTop: 5 + 'rem' }}>
              <form method="post" onSubmit={this.handleSubmit} action="#" id="contact-form">
                <div class="row clearfix">
                  <div class="col-md-12 form-group">
                    <input type="text" name="username" value={this.state.username} onChange={e=> this.handleChange(e)}
                    id="name"
                    placeholder="Name*"
                    // required=""
                    />
                    {errors.username && <div className="error">{errors.username}</div>}
                  </div>
                  <div class="col-md-12 form-group">
                    <input type="email" name="email" value={this.state.email} onChange={e=> this.handleChange(e)}
                    id="name"
                    placeholder="Email"
                    />
                    {/* {errors.email && <div className="error">{errors.email}</div>} */}
                  </div>
                  <div class="col-md-12 form-group">
                    <input type="text" name="phone" value={this.state.phone} onChange={e=> this.handleChange(e)}
                    id="name"
                    placeholder="Phone*"
                    // required=""
                    />
                    {errors.phone && <div className="error">{errors.phone}</div>}
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="checkbox1" name="option1" value="good"
                      required />
                    <label class="form-check-label heading">
                      I agree that Bridge Health may contact me at the email address or phone number above.
                    </label>
                  </div>
                  <div class="col-md-12 form-group">
                    <div class="btn-box text-center btn5">
                      <button class="submitcontact" type="submit" disabled={isSubmitDisabled} onSubmit={e=>
                        this.handleSubmit(e)}
                        name="submit-form">SUBMIT</button>
                    </div>

                  </div>
                </div>
              </form>
              {submitted && (
              <div className="thankyou-popup" onClick={this.closePopup}>
                <h2>Thank You!</h2>
                <p>Your details has been successfully submitted. Thanks!</p>
                <button type='button'>OK</button>
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