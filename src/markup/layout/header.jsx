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

  state = {
    scrolled: false
  };
  render() {
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
                  <a href="">
                    <img src={require('../../assets/images/Group3.png')} alt="" />
                  </a>
                  <ul>
                    <li><a href="#">Menu</a>
                      <ul>
                        <li><a href="#">About Us</a>
                          <ul>
                            <li><a href="#">Board of Directors</a></li>
                            <li>
                              <a href="#">Leadership Team</a>
                            </li>
                            <li><a href="#">Clinical Team</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Our Services</a>
                        </li>
                        <li><a href="#">Experience Center</a>

                        </li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Media</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Contact</a></li>


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
                  <a href="" class="active">
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
                  <a href="">
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
                  <a href="">
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

          <Popup trigger={<div class="top-right flotright1"><a class="top-right flotright1" href="#">  <img src={require('../../assets/images/Group53.png')} alt="" /></a></div>
          } position="bottom">
            <div class="contact-form-area">

              {/* <!-- Contact Form--> */}
              <div class="contact-form">
                <form>
                  {/* <form ref={form} onSubmit={sendEmail}> */}

                  <div class="row clearfix">
                    <div class="col-md-12 form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name*"
                        required="" />
                    </div>

                    <div class="col-md-12 form-group">
                      <input type="email"
                        name="email"
                        id="email"
                        placeholder="Email*"
                        required="" />
                    </div>
                    <div class="col-md-12 form-group">
                      <input type="phone"
                        name="phone"
                        id="phone"
                        placeholder="Phone*"
                        required="" />
                    </div>

                    <div class="col-md-12 form-group">
                      <textarea
                        name="message"
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
                      <button class="theme-btn btn-style-one btncontact" type="submit" name="submit-form"><span class="btn-title">SUBMIT</span></button>
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


