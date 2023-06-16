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
      message: '',
    };
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {

    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
    console.log(event)
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  saveData = async (e) => {

    console.log(e, "Data is saving");

    e.preventDefault();

    const { email, username, phone, message } = this.state;

    const res = await fetch('http://localhost:8000/submit', {
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
      console.log('Data saved');
    }

  }


  sendEmail = async (e) => {
    e.preventDefault();

    const { email, username } = this.state;

    const res = await fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, username
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 401 || !data) {
      console.log('error');
    } else {
      this.setState({ show: true, email: '', username: '' });
      console.log('Email sent');
    }
  };




  render() {

    const { username, email } = this.state;
    const isSubmitDisabled = username === '' || email === ''

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
                      <ContactForm buttonText="BOOK NOW" popupPosition="right"/>
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
                    <ContactForm buttonText="SAY YES!" popupPosition="right"/>
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
                    <ContactForm buttonText="SAY YES!" popupPosition="left"/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

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
              <div class="card-header text-center pb-4 item priceheight">
                <h5 class="pt-3 card-title top110">Clinical
                  Assessments</h5>
              </div>
              <div class="card-header text-center pb-4 item priceheight tabcolor">
                <h5 class="pt-3 card-title top110">Clinical
                  Assessments</h5>
              </div>

              <div class="card-header text-center pb-4 item priceheight tablcolor1">
                <h5 class="pt-3 card-title top110">Lifestyle
                  Consults</h5>
              </div>

              <div class="card-header text-center pb-4 item tablcolor2">
                <h5 class="pt-3 card-title top110">Discounts</h5>
              </div>
            </div>


            <div class="w-100 d-md-none mt-4"></div>

            <div class="card p-1 starter">
              <div class="card-header text-center pb-4 item service1">
                <h5 class="pt-3 card-title">Service Offering</h5>
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled">
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
            </div>


            <div class="w-100 d-md-none mt-4"></div>

            <div class="card advanced p-1">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 card-title">BLUE</h5>
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-center">
                  <li>101 Tests + ECG​</li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                  </li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li> <li>
                    <i data-unicode="f00c"></i></li> <li>
                    <i data-unicode="f00c"></i></li> <li>
                    <i data-unicode="f00c"></i></li>
                  <li>ECG </li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>2</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>Paid Consult</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>10% Off</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>4</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>1</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>

                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>4</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>1</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>4</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>



                  <li>
                    <span class="d-lg-none">Website Visitor Statistics </span>
                    <i data-unicode="f00c"></i></li>

                  <li>10% Off</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>10% Off</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>10% Off</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>Paid</li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <button class="commonBtnforAll priceamt border-radius">₹7999</button>
                    <button class="commonBtnforAll priceamt border-radius started blucolor">Get Started</button>


                  </li>
                </ul>

              </div>

            </div>

            <div class="w-100 d-md-none mt-4"></div>

            <div class="card advanced p-1">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 card-title">SILVER</h5>
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-center">
                  <li>117 Tests with ECG & U/S</li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                  </li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li> <li>
                    <i data-unicode="f00c"></i></li> <li>
                    <i data-unicode="f00c"></i></li> <li>
                    <i data-unicode="f00c"></i></li>
                  <li>ECG / Ultrasound Abdomen + Pelvis</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>2</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>Paid Consult</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>10% Off</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>4</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>1</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>

                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>4</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>1</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>4</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>



                  <li>
                    <span class="d-lg-none">Website Visitor Statistics </span>
                    <i data-unicode="f00c"></i></li>

                  <li>10% Off</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>10% Off</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>10% Off</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>Paid</li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <button class="commonBtnforAll priceamt border-radius">₹7999</button>
                    <button class="commonBtnforAll priceamt border-radius started">Get Started</button>


                  </li>
                </ul>

              </div>

            </div>

            <div class="w-100 d-md-none mt-4"></div>

            <div class="card business p-1">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 card-title">GOLD</h5>
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-center">
                  <li>122 Tests with ECG & U/S</li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>


                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>ECG / Ultrasound Abdomen + Pelvis - ECHO</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>2</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>Paid Consult</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>10% Off</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>12</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>2</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li> <i data-unicode="f00c"></i></li>

                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>12</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>4</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li> <i data-unicode="f00c"></i></li>

                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>5</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>15% Off</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>15% Off</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>15% Off</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>Free</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>

                  <li>
                    <button class="commonBtnforAll priceamt border-radius">₹16999</button>
                    <button class="commonBtnforAll priceamt border-radius started">Get Started</button>


                  </li>
                </ul>

              </div>
            </div>
            <div class="w-100 d-md-none mt-4"></div>

            <div class="card Platinum p-1">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3  card-title">Platinum</h5>
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-center">
                  <li>138 Tests with Echo & U/S</li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  {/* <li>6 - 9 Pages</li> */}
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li> <i data-unicode="f00c"></i></li>

                  <li>X-Ray / Echo / Ultrasound Abdomen + Pelvis / Breast Screening</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>2</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>Unlimited</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>10% Off</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>Unlimited</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>2</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <span class="d-lg-none">Search Engine Optimisation </span>
                    <i data-unicode="f00c"></i></li>
                  <li>Unlimited</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>4</li>
                  <li> <i data-unicode="f00c"></i></li>

                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>15</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>20% Off</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>1 Session + 10% Off</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>15% Off</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>Free</li>
                  <li> <i data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>

                  <li>
                    <button class="commonBtnforAll priceamt border-radius">₹24999</button>
                    <button class="commonBtnforAll priceamt border-radius started">Get Started</button>



                  </li>
                </ul>
              </div>
            </div>
            <div class="w-100 d-md-none mt-4"></div>
            <div class="card Platinump p-1">
              <div class="card-header text-center pb-4 item">
                <h5 class="pt-3 card-title">Platinum +</h5>
              </div>
              <div class="card-body d-flex flex-column">
                <ul class="list-unstyled text-center">
                  <li>222 Tests with Echo & U/S</li>
                  <li>
                    \                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i>
                  </li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>
                  <li>X-Ray / Echo / Ultrasound Abdomen + Pelvis / Breast Screening</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>4</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>Unlimited</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>10% Off</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>Unlimited</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>4</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>1</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>
                    <i data-unicode="f00c"></i></li>

                  <li>Unlimited</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>4</li>
                  <li>
                    <span class="d-lg-none">Search Engine Optimisation </span>
                    <i data-unicode="f00c"></i></li>
                  <li>15</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>20% Off</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>1 Session + 15% Off</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>15% Off</li>
                  <li>
                    <i data-unicode="f00c"></i></li>
                  <li>Free</li>
                  <li>
                    <i class="fa fa-check" data-unicode="f00c"></i></li>

                  <li>

                    <button class="commonBtnforAll priceamt border-radius">₹29999</button>
                    <button class="commonBtnforAll priceamt border-radius started">Get Started</button>

                  </li>

                </ul>
              </div>
            </div>

          </div>
          <button class="commonBtnforAll priceamt border-radius started getstarted">KNOW MORE</button>

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
                    <form method="post" onSubmit={e => { this.sendEmail(e); this.saveData(e) }} action="#" id="contact-form">
                      <div class="row clearfix">
                        <div class="col-md-12 form-group">
                          <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={e => this.handleChange(e)}
                            id="name"
                            placeholder="Name*"
                            required="" />
                        </div>
                        <div class="col-md-12 form-group">
                          <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={e => this.handleChange(e)}
                            id="name"
                            placeholder="Email"
                          />
                        </div>  <div class="col-md-12 form-group">
                          <input
                            type="phone"
                            name="phone"
                            value={this.state.phone}
                            onChange={e => this.handleChange(e)}
                            id="name"
                            placeholder="Phone*"
                            required="" />
                        </div>

                        <div class="form-check">
                          <input class="form-check-input"
                            type="checkbox" id="checkbox1" name="option1" value="good" />
                          <label class="form-check-label heading">
                            I agree that Bridge Health may contact me at the email address or phone number above.
                          </label>
                        </div>
                        <div class="col-md-12 form-group">
                            <div class="btn-box text-center btn5">
                            <button class="commonBtnforAll"  type="submit"    disabled={isSubmitDisabled}
                            onSubmit={e => this.handleSubmit(e)}
                            name="submit-form">SUBMIT</button>
                        </div>

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