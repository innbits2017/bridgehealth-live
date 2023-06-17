import React, { useState } from 'react';

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
    if (!formData.gender) {
      formErrors.gender = 'Gender is required';
    }

    // Validate position
    if (!formData.position) {
      formErrors.position = 'Position is required';
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
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="mobile" className="form-label">Mobile:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="gender" className="form-label">Gender:</label>
        <select
          id="gender"
          name="gender"
          className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
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

      <div className="mb-3">
        <label htmlFor="position" className="form-label">Position Applying:</label>
        <select
          id="position"
          name="position"
          className={`form-select ${errors.position ? 'is-invalid' : ''}`}
          value={formData.position}
          onChange={handleChange}
        >
          <option value="">Select Position</option>
          <option value="hr">HR</option>
          <option value="java-developer">Java Developer</option>
          <option value="ui-developer">UI Developer</option>
        </select>
        {errors.position && <div className="invalid-feedback">{errors.position}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="dob" className="form-label">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
          value={formData.dob}
          onChange={handleChange}
        />
        {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="resume" className="form-label">Upload Resume:</label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf,.doc,.docx"
          className={`form-control ${errors.resume ? 'is-invalid' : ''}`}
          onChange={handleFileChange}
        />
        {errors.resume && <div className="invalid-feedback">{errors.resume}</div>}
      </div>

      <button type="submit" className="form-bg">Submit</button>
    </form>
  );
};

export default FormComponent;