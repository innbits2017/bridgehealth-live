import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Menu from './menu'

class Header extends Component {

  state = {
    scrolled: false
  };

  componentDidMount() {
    var btn = document.querySelector('.mobile-nav-toggler');
    var closeBtn = document.querySelector('.close-btn');
    var body = document.getElementsByTagName('body')[0];

    function addFunc() {
      return body.classList.add("mobile-menu-visible");
    }
    function closeFunc() {
      return body.classList.remove("mobile-menu-visible");
    }

    btn.addEventListener('click', addFunc);
    closeBtn.addEventListener('click', closeFunc);

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    if (window.scrollY > 100) {
      this.setState({ scrolled: true });
    }
    else {
      this.setState({ scrolled: false });
    }
  };

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
        message: '',
        errors: {
          username: '',
          email: '',
          phone: '',
          message: ''
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

    const { email, username, phone } = this.state;

    const res = await fetch('https://mail.bridgehealth.in/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, username, phone
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
  state = {
    scrolled: false
  };
  render() {
    const { username, email, phone, message, isSubmitDisabled, errors, submitted } = this.state;
    const { scrolled } = this.state;
    return (
      <>
        <header class={scrolled ? "main-header fixed-header" : "main-header mobilehide"}>
          <div class="header-top">
            <div class="auto-container">
              <div class="inner">
                <div class="top-left">
                  <div class="logo-box">
                    <div class="logo"><Link to={'/'}>
                      <img src={require('../../assets/images/logo.png')} alt="" /></Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <nav>
              <ul class="mcd-menu">
                <li>
                  <a href="#">
                    <img src={require('../../assets/images/menu.png')} alt="" />
                  </a>
                  <ul>
                    <li><a href="#">Menu</a>
                      <ul>
                        <li><a href="/about-us">About Us</a>
                          <ul>
                            <li><a href="/leadership">Board of Directors</a></li>
                            <li>
                              <a href="/leadership">Leadership Team</a>
                            </li>
                            <li><a href="/team">Clinical Team</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="/our-services">Our Services</a>
                        </li>
                        <li><a href="/experience-centre">Experience Center</a>
                        </li>
                        <li><a href="/blog">Blogs</a></li>
                        <li><a href="/media-and-pr">Media</a></li>
                        <li><a href="/faq-page">FAQ</a></li>
                        <li><a href="/career">Career</a></li>
                        <li><a href="/contact-us">Contact</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="/personal-membership-program">Health Plan</a>

                    </li>
                    <li><a href="#">Health Risk Assessment</a></li>
                    <li><a href="#">Search</a></li>
                  </ul>
                </li>


              </ul>
            </nav>
          </div>
          <Popup trigger={<div class="top-right flotright1"><a class="top-right flotright1" href="#">  <img src={require('../../assets/images/Group53.png')} alt="" className='talkexpert' /></a></div>
          } position="bottom">
            <div class="contact-form-area">

              {/* <!-- Contact Form--> */}
              <div class="contact-form">
                <form onSubmit={this.handleSubmit} action="#">
                  {/* <form ref={form} onSubmit={sendEmail}> */}

                  <div class="row clearfix">
                    <div class="col-md-12 form-group">
                      <input
                        type="text"
                        value={this.state.username}
                        onChange={e => this.handleChange(e)}
                        name="username"
                        id="name"
                        placeholder="Name*"
                      // required={true}
                      />
                      {errors.username && <div className="error">{errors.username}</div>}
                    </div>

                    <div class="col-md-12 form-group">
                      <input
                        type="text"
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
                        name="email"
                        id="email"
                        placeholder="Email*"
                      // required={true} 
                      />
                      {errors.email && <div className="error">{errors.email}</div>}

                    </div>
                    <div class="col-md-12 form-group">
                      <input
                        type="text"
                        value={this.state.phone}
                        onChange={e => this.handleChange(e)}
                        name="phone"
                        id="phone"
                        placeholder="Phone*"
                      // required="" 
                      />
                      {errors.phone && <div className="error">{errors.phone}</div>}

                    </div>

                    <div class="col-md-12 form-group">
                      <textarea
                        name="message"
                        value={this.state.message}
                        onChange={e => this.handleChange(e)}
                        id="message"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input"
                        type="checkbox" id="checkbox1" name="option1" value="good" />
                      <label class="form-check-label heading colorwhite">
                        I agree that Bridge Health may contact me at the email address or phone number above.
                      </label>
                    </div>
                    <div class="col-md-12 form-group">
                      <div class="btn-box text-center btn5">
                        <button class="commonBtnforAll" type="submit"
                          onSubmit={e => this.handleSubmit(e)}
                          disabled={isSubmitDisabled}
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

          </Popup>
        </header>
        <header class={scrolled ? "main-header header-style-two fixed-header" : "main-header header-style-two desktophide"}>
          <div class="header-upper">
            <div class="auto-container">
              <div class="inner-container">

                <div class="nav-outer clearfix">

                  <div class="logo-box">
                    <div class="logo"><Link to={''}><img src={require('../../assets/images/logo.png')} alt="" /></Link></div>
                  </div>
                  <div class="mobile-nav-toggler"><span class="icon fal fa-bars"></span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><span class="icon flaticon-cancel"></span></div>

            <nav class="menu-box">
              <div class="nav-logo"><Link to={'/'}><img src="assets/images/logo.png" alt="" title="" /></Link></div>
              <div class="menu-outer">
                <Menu />
              </div>
            </nav>
          </div>

        </header>
      </>
    )
  }
}
export default Header;


