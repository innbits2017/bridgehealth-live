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
        <header class={scrolled ? "main-header fixed-header" : "main-header mobilehide"}>
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
                    <img src={require('../../assets/images/menu.png')} alt="" />
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
        <header class={scrolled ? "main-header header-style-two fixed-header" : "main-header header-style-two desktophide"}>
                    
                   

                    <div class="header-upper">
                        <div class="auto-container">
                            <div class="inner-container">
                                
                                <div class="nav-outer clearfix">
                                    
                                    <div class="logo-box">
                                        <div class="logo"><Link to={''}><img src={require('../../assets/images/logo.png')} alt=""/></Link></div>
                                    </div>
                                    
                                    <div class="mobile-nav-toggler"><span class="icon fal fa-bars"></span></div>


                                    <nav class="main-menu navbar-expand-md navbar-light">
                                    <Menu />
                                    </nav>
                                    <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Get A Quote</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    


             <div class={scrolled ? "sticky-header animated slideInDown" : "sticky-header"}>
                        {/* <div class="auto-container clearfix">
                            
                            <div class="logo pull-left">
                                <Link to={'/#'} title=""><img src="assets/images/logo.png" alt="" title=""/></Link>
                            </div>
                            
                            <div class="pull-right">
                                
                                <nav class="main-menu clearfix">
                                <Menu />
                                </nav>
                                
                            </div>
                        </div> */}
                    </div>
                    


                    <div class="mobile-menu">
                        <div class="menu-backdrop"></div>
                        <div class="close-btn"><span class="icon flaticon-cancel"></span></div>
                        
                        <nav class="menu-box">
                            <div class="nav-logo"><Link to={'/#'}><img src="assets/images/logo.png" alt="" title=""/></Link></div>
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


