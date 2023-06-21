import React, { useState } from 'react';

const JobListingForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobCategory: '',
    department: '',
    requisitionNumber: '',
    workInShifts: '',
    reportingTo: '',
    numberOfPersons: '',
    jobDescription: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic goes here
      console.log('Form submitted:', formData);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.jobTitle) {
      errors.jobTitle = 'Job Title is required';
    }
    if (!formData.jobCategory) {
      errors.jobCategory = 'Job Category is required';
    }
    if (!formData.department) {
      errors.department = 'Department/Group is required';
    }
    if (!formData.requisitionNumber) {
      errors.requisitionNumber = 'Requisition Number is required';
    }
    if (!formData.workInShifts) {
      errors.workInShifts = 'Shift requirement is required';
    }
    if (!formData.reportingTo) {
      errors.reportingTo = 'Reporting To is required';
    }
    if (!formData.numberOfPersons) {
      errors.numberOfPersons = 'Number of persons is required';
    }
    if (!formData.jobDescription) {
      errors.jobDescription = 'Job Description is required';
    }
    return errors;
  };

  return (
    <>
      <div className="content-wrap-x1">
        <h2 className="logo_outlet">Add New Job</h2>
        {/* <div className="logo_outlet">
          <img className="only_logo" src={require('../../assets/images/shape/logo_bridgehealth.png')} alt="logo_bridgehealth" />
        </div> */}
        <div className="form-wrap">
          <form onSubmit={handleSubmit} className="job-form-x1">
            <div className="">
              <label htmlFor="jobTitle" className="form-label">Job Title</label>
              <input
                type="text"
                className={`form-control ${errors.jobTitle ? 'is-invalid' : ''}`}
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
              {errors.jobTitle && <div className="invalid-feedback">{errors.jobTitle}</div>}
            </div>
            <div className="">
              <label htmlFor="jobCategory" className="form-label">Job Category</label>
              <input
                type="text"
                className={`form-control ${errors.jobCategory ? 'is-invalid' : ''}`}
                id="jobCategory"
                name="jobCategory"
                value={formData.jobCategory}
                onChange={handleChange}
                required
              />
              {errors.jobCategory && <div className="invalid-feedback">{errors.jobCategory}</div>}
            </div>
            <div className="">
              <label htmlFor="department" className="form-label">Department/Group</label>
              <input
                type="text"
                className={`form-control ${errors.department ? 'is-invalid' : ''}`}
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              />
              {errors.department && <div className="invalid-feedback">{errors.department}</div>}
            </div>
            <div className="">
              <label htmlFor="requisitionNumber" className="form-label">Requisition Number</label>
              <input
                type="tel"
                className={`form-control ${errors.requisitionNumber ? 'is-invalid' : ''}`}
                id="requisitionNumber"
                name="requisitionNumber"
                value={formData.requisitionNumber}
                onChange={handleChange}
                required
              />
              {errors.requisitionNumber && <div className="invalid-feedback">{errors.requisitionNumber}</div>}
            </div>
            <div className="">
              <label htmlFor="workInShifts" className="form-label">Will be required to work in shifts?</label>
              <input
                type="text"
                className={`form-control ${errors.workInShifts ? 'is-invalid' : ''}`}
                id="workInShifts"
                name="workInShifts"
                value={formData.workInShifts}
                onChange={handleChange}
                required
              />
              {errors.workInShifts && <div className="invalid-feedback">{errors.workInShifts}</div>}
            </div>
            <div className="">
              <label htmlFor="reportingTo" className="form-label">Reporting To</label>
              <input
                type="text"
                className={`form-control ${errors.reportingTo ? 'is-invalid' : ''}`}
                id="reportingTo"
                name="reportingTo"
                value={formData.reportingTo}
                onChange={handleChange}
                required
              />
              {errors.reportingTo && <div className="invalid-feedback">{errors.reportingTo}</div>}
            </div>
            <div className="">
              <label htmlFor="numberOfPersons" className="form-label">Number of persons that would potentially report for this role</label>
              <input
                type="text"
                className={`form-control ${errors.numberOfPersons ? 'is-invalid' : ''}`}
                id="numberOfPersons"
                name="numberOfPersons"
                value={formData.numberOfPersons}
                onChange={handleChange}
                required
              />
              {errors.numberOfPersons && <div className="invalid-feedback">{errors.numberOfPersons}</div>}
            </div>
            <div className="">
              <label htmlFor="jobDescription" className="form-label">Job Description</label>
              <textarea
                className={`form-control ${errors.jobDescription ? 'is-invalid' : ''}`}
                id="jobDescription"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                placeholder="Tell us what you want more..."
                required
              ></textarea>
              {errors.jobDescription && <div className="invalid-feedback">{errors.jobDescription}</div>}
            </div>
            <div className="form-submit-wrap">
              <button type="submit" className="sub-btn2">SUBMIT</button>
              {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            </div>
          </form>
        </div>

      </div>
    </>
  );
};

export default JobListingForm;
