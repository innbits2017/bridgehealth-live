import React, { useState } from 'react';

const JobListingForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobCategory: '',
    department: '',
    requisitionNumber: '',
    workInShifts: '',
    reportingTo: '',
    positionOfApply: '',
    jobLocation: '',
    jobPosting: '',
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
    if (!formData.positionOfApply) {
      errors.positionOfApply = 'Number of persons is required';
    }
    if (!formData.jobLocation) {
      errors.jobLocation = 'Job Description is required';
    }
    if (!formData.jobPosting) {
      errors.jobPosting = 'Job Description is required';
    }
    if (!formData.jobDescription) {
      errors.jobDescription = 'Job Description is required';
    }
    return errors;
  };

  return (
    <>
      <div className="content-wrap-x1">
        <h2 className=' fontSize text-center'>
          <span className='headeingcolorblue'> Add New </span>
          <span className='headeingcolorblack'> Job </span>

        </h2>
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
            <div class="">
              <label htmlFor="positionOfApply" className="form-label">Position Applying:</label>
              <select
                id="positionOfApply"
                name="positionOfApply"
                className="selectbox"
                value={formData.positionOfApply}
                onChange={handleChange}
              >
                <option value="">Select Position</option>
                <option value="1">Clinical Services</option>
                <option value="2">Operations</option>
                <option value="3">Corporate Operations</option>
                <option value="4">Corporate Sales</option>
                <option value="5">Marketing</option>
                <option value="6">Technology</option>
                <option value="7">Pharmacy</option>
                <option value="8">Sales & Operations</option>
                <option value="7">Finance</option>
                <option value="7">HR</option>
                <option value="7">Facility & Admin</option>
                <option value="7">Strategic Initiatives</option>
                <option value="7">Affiliates & Alliances</option>
              </select>
              {errors.positionOfApply && <div className="invalid-feedback">{errors.positionOfApply}</div>}
            </div>
            {/* <div className="">
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
            </div> */}

            <div className="">
              <label htmlFor="jobLocation" className="form-label">Job Location</label>
              <input
                type="text"
                className={`form-control ${errors.jobLocation ? 'is-invalid' : ''}`}
                id="jobLocation"
                name="jobLocation"
                value={formData.jobLocation}
                onChange={handleChange}
                required
              />
              {errors.jobLocation && <div className="invalid-feedback">{errors.jobLocation}</div>}
            </div>
            <div className="">
              <label htmlFor="jobPosting" className="form-label">Job Posting</label>
              <input
                type="text"
                className={`form-control ${errors.jobPosting ? 'is-invalid' : ''}`}
                id="jobPosting"
                name="jobPosting"
                value={formData.jobPosting}
                onChange={handleChange}
                required
              />
              {errors.jobPosting && <div className="invalid-feedback">{errors.jobPosting}</div>}
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
            <div class="btn-box text-center btn5">
              <button class=" submitcontact" type="submit"
                name="submit-form">SUBMIT</button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
};

export default JobListingForm;
