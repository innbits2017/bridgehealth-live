import React, { useState } from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer'
const aboutbg = require('./../../assets/images/shape/car1.png');


const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: '',
    position: '',
    dob: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  const validateForm = () => {
    let formErrors = {};

    // Validate name
    if (!formData.name) {
      formErrors.name = 'Name is required';
    }

    // Validate email
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Invalid email format';
    }

    // Validate mobile
    if (!formData.mobile) {
      formErrors.mobile = 'Mobile is required';
    }



    // Validate gender
    if (!formData.gender || formData.gender === "") {
      formErrors.gender = 'Gender is required';
    }

    // Validate if "Select Gender" option is selected
    if (formData.gender === "") {
      formErrors.gender = 'Please select a valid Gender';
    }

    // Validate position
    if (!formData.position || formData.position === "") {
      formErrors.position = 'Position is required';
    }

    // Validate if "Select Position" option is selected
    if (formData.position === "") {
      formErrors.position = 'Please select a valid position';
    }

    // Validate date of birth
    if (!formData.dob) {
      formErrors.dob = 'Date of birth is required';
    }

    // Validate resume
    if (!formData.resume) {
      formErrors.resume = 'Resume is required';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, you can submit it
      console.log('Form submitted:', formData);
    } else {
      // Form is invalid, handle the errors
      console.log('Form errors:', errors);
    }
  };

  return (
    <><><Header />
      {/* <!-- Page Banner Section --> */}
      <section class="page-banner">
        <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
        <div class="bottom-rotten-curve alternate"></div>
      </section>
      <div class="auto-container commimgsoon">
        <div class=" text-center">
          <h2 className='fontSize'>


          </h2>
        </div>

      </div>
      <section class="auto-container">
        <form onSubmit={handleSubmit} className="container">

          <h2 className=' fontSize text-center'>
            <span className='headeingcolorblue'> Apply   </span>
            <span className='headeingcolorblack'> Now </span>

          </h2>

          <div class="row align-items-center ">
            <div class="col-md-6 form-group">
              <label htmlFor="name" className="form-label" placeholder='Name'>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                value={formData.name}
                onChange={handleChange} />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div class="col-md-6 form-group">
              <label htmlFor="email" className="form-label" placeholder="Email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={formData.email}
                onChange={handleChange} />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div class="col-lg-6 form-group">
              <label htmlFor="mobile" className="form-label" placeholder="Mobile">Mobile:</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                value={formData.mobile}
                onChange={handleChange} />
              {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
            </div>
            <div class="col-lg-6 form-group">
              <label htmlFor="gender" className="form-label">Gender:</label>
              <select
                id="gender"
                name="gender"
                className={`selectbox ${errors.gender ? 'is-invalid' : ''}`}
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
            </div>

            <div class="col-lg-6 form-group">
              <label htmlFor="position" className="form-label">Position Applying:</label>
              <select
                id="position"
                name="position"
                className={`selectbox ${errors.position ? 'is-invalid' : ''}`}
                value={formData.position}
                onChange={handleChange}
              >
                <option value=" ">Select Position</option>
                <option value="clinical-services">Clinical Services</option>
                <option value="operations">Operations</option>
                <option value="corporate-operations">Corporate Operations</option>
                <option value="corporate-sales">Corporate Sales</option>
                <option value="marketing">Marketing</option>
                <option value="technology">Technology</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="sales-operations">Sales & Operations</option>
                <option value="finance">Finance</option>
                <option value="hr">HR</option>
                <option value="facility-admin">Facility & Admin</option>
                <option value="strategic-initiatives">Strategic Initiatives</option>
                <option value="affiliates-alliances">Affiliates & Alliances</option>
              </select>
              {errors.position && <div className="invalid-feedback">{errors.position}</div>}
            </div>
            <div class="col-lg-6 form-group">
              <label htmlFor="dob" className="form-label" placeholder="Date of Birth">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                value={formData.dob}
                onChange={handleChange} />
              {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
            </div>

            <div class="col-lg-6 form-group">
              <label htmlFor="resume" className="form-label">Upload Resume:</label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                className={`form-control ${errors.resume ? 'is-invalid' : ''}`}
                onChange={handleFileChange} />
              {errors.resume && <div className="invalid-feedback">{errors.resume}</div>}
            </div>
            <div class="col-lg-12">

              <div class="btn-box text-center btn5">
                <button class=" submitcontact" type="submit"
                  name="submit-form">SUBMIT</button>
              </div>
            </div>
          </div>
        </form>
      </section>




    </><Footer /></>
  );
};

export default FormComponent;
