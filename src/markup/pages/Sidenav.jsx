import React from 'react';
import JobListingForm from './JobListingForm';
// import './sidenav.css'; // Assuming the CSS file is in the same directory

class Sidenav extends React.Component {
  render() {
    return (
      <><div>

        <div className="row">
          <div className="col-lg-3">
            <nav id="sidebar">
              <div className="sidebar-header">
                <img className="sidebar_logo" src={require('../../assets/images/shape/logo_bridgehealth.png')} alt="Bridge Health" />
              </div>

              <ul className="list-unstyled components">
                <li>
                  <a className="on_hover_components" href="#">
                    Dashboard
                  </a>
                </li>

                <li>
                  <a className="on_hover_components" href="#">Add New Job</a>
                </li>
                <li>
                  <a className="on_hover_components" href="#">Job listings</a>
                </li>
                <li>
                  <a className="on_hover_components" href="#">Settings</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-11">
                <JobListingForm />
              </div>
            </div>
          </div>
        </div>



      </div>
        <section class="sidebarmargin d-none">

          <div class="auto-container">
            
            <div class="row">
              <div class="contact-form-area">
                <JobListingForm />
                {/* <!-- Contact Form--> */}
                <div class="contact-form">
                  <form method="post">
                    <div class="row clearfix">
                      <div class="col-md-12 form-group">
                        <input
                          type="text"
                          name="username"
                          id="name"
                          placeholder="Name*"
                        // required
                        />
                      </div>

                      <div class="col-md-6 form-group">
                        <input type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                        // required
                        />
                        {/* {errors.email && <div className="error">{errors.email}</div>} */}
                      </div>
                      <div class="col-md-6 form-group">
                        <input type="text"
                          name="phone"
                          id="phone"
                          placeholder="Phone*"
                        // required
                        />
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
                          type="checkbox" id="checkbox1" name="option1" value="good" required />
                        <label class="form-check-label heading">
                          I agree that Bridge Health may contact me at the email address or phone number above.
                        </label>
                      </div>
                      <div class="col-md-12 form-group">

                        <div class="btn-box text-center">
                          <button class="submitcontact" type="submit"
                            name="submit-form">SUBMIT</button>

                        </div>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Sidenav;
