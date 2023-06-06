import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';


const options = [
  { value: 'English', label: 'English' },
  { value: 'French', label: 'French' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'Bengli', label: 'Bengli' }
]


class Header extends Component {


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


  state = {
    scrolled: false
  };
  render() {


    const { username, email } = this.state;
    const isSubmitDisabled = username === '' || email === ''

    const { scrolled } = this.state;
    return (
      <>
        <header class={scrolled ? "main-header fixed-header" : "main-header"}>
          <div class="header-top">
            <div class="auto-container">
              <div class="inner">
                <div class="top-left">


                  <div class="logo-box">
                    <div class="logo"><Link to={'/#'}>
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
                    <img src={require('../../assets/images/Group3.png')} alt="" />
                  </a>
                  <ul>
                    <li><a href="#">Menu</a>
                      <ul>
                        <li><a href="/about-us">About Us</a>
                          <ul>
                            <li><a href="/leadership">Board of Directors</a></li>
                            <li>
                              <a href="/team">Leadership Team</a>
                            </li>
                            <li><a href="/team">Clinical Team</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="/our-services">Our Services</a>
                        </li>
                        <li><a href="#">Experience Center</a>

                        </li>
                        <li><a href="/blog">Blogs</a></li>
                        <li><a href="#">Media</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="/career">Career</a></li>
                        <li><a href="/contact-us">Contact</a></li>


                      </ul>
                    </li>
                    <li>
                      <a href="#">Health Plan</a>

                    </li>
                    <li><a href="#">Health Risk Assessment</a></li>
                    <li><a href="#">Search</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" class="active">
                    <img src={require('../../assets/images/Group.png')} alt="" />

                  </a>
                  {/* <ul>
                <li><a href="#">Menu</a></li>
                <li>
                  <a href="#">Health Plan</a>
                  <ul>
                    <li><a href="#">Leyla Sparks</a></li>
                    <li>
                      <a href="#">Gleb Ismailov</a>
                    </li>
                    <li><a href="#">Viktoria Gibbers</a></li>
                  </ul>
                </li>
                <li><a href="#">Health Risk Assessment</a></li>
                <li><a href="#">Search</a></li>
              </ul> */}
                </li>
                <li>
                  <a href="#">
                    <img src={require('../../assets/images/Group1.png')} alt="" />
                  </a>
                  {/* <ul>
                <li><a href="#">Menu</a></li>
                <li>
                  <a href="#">Health Plan</a>
                  <ul>
                    <li><a href="#">Leyla Sparks</a></li>
                    <li>
                      <a href="#">Gleb Ismailov</a>
                    </li>
                    <li><a href="#">Viktoria Gibbers</a></li>
                  </ul>
                </li>
                <li><a href="#">Health Risk Assessment</a></li>
                <li><a href="#">Search</a></li>
              </ul> */}
                </li>
                <li>
                  <a href="#">
                    <img src={require('../../assets/images/Group2.png')} alt="" />
                  </a>
                  {/* <ul>
                <li><a href="#">Menu</a></li>
                <li>
                  <a href="#">Health Plan</a>
                  <ul>
                    <li><a href="#">Leyla Sparks</a></li>
                    <li>
                      <a href="#">Gleb Ismailov</a>
                    </li>
                    <li><a href="#">Viktoria Gibbers</a></li>
                  </ul>
                </li>
                <li><a href="#">Health Risk Assessment</a></li>
                <li><a href="#">Search</a></li>
              </ul> */}
                </li>
                {/* <li>
              <a href="">
                <i class="fa fa-comments-o"></i>
                <strong>Blog</strong>

              </a>
              <ul>
                <li><a href="#"><i class="fa fa-globe"></i>Mission</a></li>
                <li>
                  <a href="#"><i class="fa fa-group"></i>Our Team</a>
                  <ul>
                    <li><a href="#"><i class="fa fa-female"></i>Leyla Sparks</a></li>
                    <li>
                      <a href="#"><i class="fa fa-male"></i>Gleb Ismailov</a>
                      <ul>
                        <li><a href="#"><i class="fa fa-leaf"></i>About</a></li>
                        <li><a href="#"><i class="fa fa-tasks"></i>Skills</a></li>
                      </ul>
                    </li>
                    <li><a href="#"><i class="fa fa-female"></i>Viktoria Gibbers</a></li>
                  </ul>
                </li>
                <li><a href="#"><i class="fa fa-trophy"></i>Rewards</a></li>
                <li><a href="#"><i class="fa fa-certificate"></i>Certificates</a></li>
              </ul>
            </li>
            <li>
              <a href="">
                <i class="fa fa-picture-o"></i>
                <strong>Portfolio</strong>
              </a>
            </li>
           */}
              </ul>
            </nav>
          </div>

          {/* <div class="top-right flotright1">
                        <a href={'/contact-us'}><span class="btn-title1">
                        <img src={require('../../assets/images/Group53.png')} alt="" />
                            </span>
                        </a>
                    </div>    */}

          <Popup trigger={<div class="top-right flotright1"><a class="top-right flotright1" href="#">  <img src={require('../../assets/images/Group53.png')} alt="" className='talkexpert' /></a></div>
          } position="bottom">
            <div class="contact-form-area">

              {/* <!-- Contact Form--> */}
              <div class="contact-form">
                <form method="post" onSubmit={e => { this.sendEmail(e); this.saveData(e)}}   action="#">
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
                        required={true} />
                    </div>

                    <div class="col-md-12 form-group">
                      <input
                        type="email"
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
                        name="email"
                        id="email"
                        placeholder="Email*"
                        required={true} />
                    </div>
                    <div class="col-md-12 form-group">
                      <input
                        type="phone"
                        value={this.state.phone}
                        onChange={e => this.handleChange(e)}
                        name="phone"
                        id="phone"
                        placeholder="Phone*"
                        required="" />
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
                      <button
                        class="theme-btn btn-style-one btncontact"
                        type="submit"
                        name="submit-form"
                        disabled={isSubmitDisabled}
                        onSubmit={e => this.handleSubmit(e)}
                      ><span class="btn-title">SUBMIT</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </Popup>
        </header>

      </>
    )
  }
}
export default Header;


