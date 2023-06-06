import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const aboutbg = require('./../../assets/images/shape/career1.png');


class Career extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',

            jobs: [
                {
                    title: 'Client Advisor',
                    location: 'Bengaluru, Karnataka, India',
                    department: 'Technology',
                    timing: 'Full-time'
                },
                {
                    title: 'Client Advisor',
                    location: 'Bengaluru, Karnataka, India',
                    department: 'Technology',
                    timing: 'Full-time'
                },
                {
                    title: 'Client Advisor',
                    location: 'Bengaluru, Karnataka, India',
                    department: 'Technology',
                    timing: 'Full-time'
                },
                {
                    title: 'Client Advisor',
                    location: 'Bengaluru, Karnataka, India',
                    department: 'Technology',
                    timing: 'Full-time'
                },
            ],
            filteredJobs: []
        };
    }

    componentDidMount() {
        // Initially, set filteredJobs to contain all jobs
        this.setState({ filteredJobs: this.state.jobs });
      }

    handleChange = (event) => {
        console.log("I am in HanndleChange", event.target.value)

        this.setState({ searchTerm: event.target.value }, () => {
            this.filterJobs();
        });
    };


    filterJobs = () => {
        const { searchTerm, jobs } = this.state;

        const filteredJobs = jobs.filter((job) => {
            const { title, location, department, timing } = job;
            const lowerSearchTerm = searchTerm.toLowerCase();
            return (
                title.toLowerCase().includes(lowerSearchTerm) ||
                location.toLowerCase().includes(lowerSearchTerm) ||
                department.toLowerCase().includes(lowerSearchTerm) ||
                timing.toLowerCase().includes(lowerSearchTerm)
            );
        });
        this.setState({ filteredJobs });
    };

    handleSubmit = (event) => {
        console.log("I am in handleSubmit", event);
        event.preventDefault();
        // this.props.onSearch(this.state.searchTerm);
        this.filterJobs();
    };


    render() {

        const { filteredJobs } = this.state;
        return (
            <>

                <Header />

                <section class="internalpage style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">

                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblue'> Careers   </span>
                                    <span className='headeingcolorblack'> at <br></br> Bridge Health </span><br></br>

                                </h2>

                            </div>
                            <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Apply Now</span></button>


                        </div>

                    </div>
                </section>

                <section class="contact-section career-head1">
                    <div className="car-head2">
                        <h2>
                            <svg width="70" height="69" viewBox="0 0 84 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M55.1264 23.8419V18.7026C55.1254 18.0252 54.9889 17.3548 54.7249 16.7308C54.461 16.1067 54.0748 15.5415 53.5892 15.0682C52.5966 14.1009 51.2637 13.5603 49.8764 13.5625H34.1264C32.7391 13.5603 31.4062 14.1009 30.4136 15.0682C29.9279 15.5415 29.5418 16.1067 29.2778 16.7308C29.0139 17.3548 28.8774 18.0252 28.8764 18.7026V23.8419M70.8789 23.8419H13.1289C11.6791 23.8419 10.5039 24.9922 10.5039 26.4116V67.5268C10.5039 68.9461 11.6799 70.0972 13.1289 70.0972H70.8789C72.3287 70.0972 73.5039 68.9461 73.5039 67.5268V26.4124C73.5039 24.993 72.3279 23.8419 70.8789 23.8419Z" stroke="#FBAD17" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M73.5039 41.287C63.9304 46.7088 53.0617 49.556 42.0014 49.5392C30.9428 49.556 20.0757 46.7096 10.5039 41.2895M38.0643 39.2598H45.9385" stroke="#FBAD17" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> OPEN POSITIONS
                        </h2>
                    </div>

                    <div className="search-fil">
                        <form onSubmit={e => this.handleSubmit(e)}>

                            <div className="search-container">
                                <input
                                    name="search"
                                    type="text"
                                    placeholder="Search Topic"
                                    value={this.state.searchTerm}
                                    onChange={e => this.handleChange(e)}
                                />
                                <button type="submit" className="search-button">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </form>

                        <select className="filter-search">
                            <option value="">Filter</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </section>


                <section class="contact-section career-head">
                    {filteredJobs.map((job, index) => (
                        <div class="job-card" key={index}>
                            <div class="job-card-header">
                                <h3 class="job-title">{job.title}</h3>
                                <p class="job-location"><svg width="20" height="25" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 13.5C11.6875 13.5 12.2762 13.255 12.7662 12.765C13.2562 12.275 13.5008 11.6867 13.5 11C13.5 10.3125 13.255 9.72375 12.765 9.23375C12.275 8.74375 11.6867 8.49917 11 8.5C10.3125 8.5 9.72375 8.745 9.23375 9.235C8.74375 9.725 8.49917 10.3133 8.5 11C8.5 11.6875 8.745 12.2763 9.235 12.7663C9.725 13.2563 10.3133 13.5008 11 13.5ZM11 25.5313C10.8333 25.5313 10.6667 25.5 10.5 25.4375C10.3333 25.375 10.1875 25.2917 10.0625 25.1875C7.02083 22.5 4.75 20.005 3.25 17.7025C1.75 15.4 1 13.2492 1 11.25C1 8.125 2.00542 5.63542 4.01625 3.78125C6.02708 1.92708 8.355 1 11 1C13.6458 1 15.9742 1.92708 17.985 3.78125C19.9958 5.63542 21.0008 8.125 21 11.25C21 13.25 20.25 15.4013 18.75 17.7038C17.25 20.0063 14.9792 22.5008 11.9375 25.1875C11.8125 25.2917 11.6667 25.375 11.5 25.4375C11.3333 25.5 11.1667 25.5313 11 25.5313Z" stroke="#1963C6" stroke-width="2" />
                                </svg>
                                    {job.location}</p>
                                <div class="job-card-footer">
                                    <a href="#" class="view-position">View Position &#8594;</a>
                                </div>
                            </div>

                            <div class="job-card-details">
                                <p class="job-department">Department: {job.department}</p>
                                <p class="job-timing"> <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.25 15.099V9.75H14.75V14.4875V14.9017L15.0429 15.1946L18.9708 19.1225L18.6158 19.475L14.25 15.099ZM14.4875 1.5C7.03391 1.5 1 7.54902 1 15C1 22.451 7.03391 28.5 14.4875 28.5C21.9516 28.5 28 22.4529 28 15C28 7.54706 21.9516 1.5 14.4875 1.5Z" stroke="#1963C6" stroke-width="2" />
                                </svg> {job.timing}</p>
                            </div>

                        </div>
                    ))}
                    {/* {filteredJobs.map((job, index) => (
                        <div class="job-card" key={index}>
                            <div class="job-card-header">
                                <h3 class="job-title">{job.title}</h3>
                                <p class="job-location"> <svg width="20" height="25" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 13.5C11.6875 13.5 12.2762 13.255 12.7662 12.765C13.2562 12.275 13.5008 11.6867 13.5 11C13.5 10.3125 13.255 9.72375 12.765 9.23375C12.275 8.74375 11.6867 8.49917 11 8.5C10.3125 8.5 9.72375 8.745 9.23375 9.235C8.74375 9.725 8.49917 10.3133 8.5 11C8.5 11.6875 8.745 12.2763 9.235 12.7663C9.725 13.2563 10.3133 13.5008 11 13.5ZM11 25.5313C10.8333 25.5313 10.6667 25.5 10.5 25.4375C10.3333 25.375 10.1875 25.2917 10.0625 25.1875C7.02083 22.5 4.75 20.005 3.25 17.7025C1.75 15.4 1 13.2492 1 11.25C1 8.125 2.00542 5.63542 4.01625 3.78125C6.02708 1.92708 8.355 1 11 1C13.6458 1 15.9742 1.92708 17.985 3.78125C19.9958 5.63542 21.0008 8.125 21 11.25C21 13.25 20.25 15.4013 18.75 17.7038C17.25 20.0063 14.9792 22.5008 11.9375 25.1875C11.8125 25.2917 11.6667 25.375 11.5 25.4375C11.3333 25.5 11.1667 25.5313 11 25.5313Z" stroke="#1963C6" stroke-width="2" />
                                </svg>
                                    {job.location}</p>
                                <div class="job-card-footer">
                                    <a href="#" class="view-position">View Position &#8594;</a>
                                </div>
                            </div>

                            <div class="job-card-details">
                                <p class="job-department">Department: {job.department}</p>
                                <p class="job-timing">
                                    <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.25 15.099V9.75H14.75V14.4875V14.9017L15.0429 15.1946L18.9708 19.1225L18.6158 19.475L14.25 15.099ZM14.4875 1.5C7.03391 1.5 1 7.54902 1 15C1 22.451 7.03391 28.5 14.4875 28.5C21.9516 28.5 28 22.4529 28 15C28 7.54706 21.9516 1.5 14.4875 1.5Z" stroke="#1963C6" stroke-width="2" />
                                    </svg>

                                    {job.timing}</p>
                            </div>

                        </div>
                    ))}
                    {filteredJobs.map((job, index) => (
                        <div class="job-card" key={index}>
                            <div class="job-card-header">
                                <h3 class="job-title">{job.title}</h3>
                                <p class="job-location"><svg width="20" height="25" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 13.5C11.6875 13.5 12.2762 13.255 12.7662 12.765C13.2562 12.275 13.5008 11.6867 13.5 11C13.5 10.3125 13.255 9.72375 12.765 9.23375C12.275 8.74375 11.6867 8.49917 11 8.5C10.3125 8.5 9.72375 8.745 9.23375 9.235C8.74375 9.725 8.49917 10.3133 8.5 11C8.5 11.6875 8.745 12.2763 9.235 12.7663C9.725 13.2563 10.3133 13.5008 11 13.5ZM11 25.5313C10.8333 25.5313 10.6667 25.5 10.5 25.4375C10.3333 25.375 10.1875 25.2917 10.0625 25.1875C7.02083 22.5 4.75 20.005 3.25 17.7025C1.75 15.4 1 13.2492 1 11.25C1 8.125 2.00542 5.63542 4.01625 3.78125C6.02708 1.92708 8.355 1 11 1C13.6458 1 15.9742 1.92708 17.985 3.78125C19.9958 5.63542 21.0008 8.125 21 11.25C21 13.25 20.25 15.4013 18.75 17.7038C17.25 20.0063 14.9792 22.5008 11.9375 25.1875C11.8125 25.2917 11.6667 25.375 11.5 25.4375C11.3333 25.5 11.1667 25.5313 11 25.5313Z" stroke="#1963C6" stroke-width="2" />
                                </svg>
                                    {job.location}</p>
                                <div class="job-card-footer">
                                    <a href="#" class="view-position">View Position &#8594;</a>
                                </div>
                            </div>

                            <div class="job-card-details">
                                <p class="job-department">Department: {job.department}</p>
                                <p class="job-timing">
                                    <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.25 15.099V9.75H14.75V14.4875V14.9017L15.0429 15.1946L18.9708 19.1225L18.6158 19.475L14.25 15.099ZM14.4875 1.5C7.03391 1.5 1 7.54902 1 15C1 22.451 7.03391 28.5 14.4875 28.5C21.9516 28.5 28 22.4529 28 15C28 7.54706 21.9516 1.5 14.4875 1.5Z" stroke="#1963C6" stroke-width="2" />
                                    </svg>

                                    {job.timing}</p>
                            </div>

                        </div>
                    ))}
                    {filteredJobs.map((job, index) => (
                        <div class="job-card" key={index}>
                            <div class="job-card-header">
                                <h3 class="job-title">{job.title}</h3>
                                <p class="job-location"><svg width="20" height="25" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 13.5C11.6875 13.5 12.2762 13.255 12.7662 12.765C13.2562 12.275 13.5008 11.6867 13.5 11C13.5 10.3125 13.255 9.72375 12.765 9.23375C12.275 8.74375 11.6867 8.49917 11 8.5C10.3125 8.5 9.72375 8.745 9.23375 9.235C8.74375 9.725 8.49917 10.3133 8.5 11C8.5 11.6875 8.745 12.2763 9.235 12.7663C9.725 13.2563 10.3133 13.5008 11 13.5ZM11 25.5313C10.8333 25.5313 10.6667 25.5 10.5 25.4375C10.3333 25.375 10.1875 25.2917 10.0625 25.1875C7.02083 22.5 4.75 20.005 3.25 17.7025C1.75 15.4 1 13.2492 1 11.25C1 8.125 2.00542 5.63542 4.01625 3.78125C6.02708 1.92708 8.355 1 11 1C13.6458 1 15.9742 1.92708 17.985 3.78125C19.9958 5.63542 21.0008 8.125 21 11.25C21 13.25 20.25 15.4013 18.75 17.7038C17.25 20.0063 14.9792 22.5008 11.9375 25.1875C11.8125 25.2917 11.6667 25.375 11.5 25.4375C11.3333 25.5 11.1667 25.5313 11 25.5313Z" stroke="#1963C6" stroke-width="2" />
                                </svg>
                                    {job.location}</p>
                                <div class="job-card-footer">
                                    <a href="#" class="view-position">View Position &#8594;</a>
                                </div>
                            </div>

                            <div class="job-card-details">
                                <p class="job-department">Department: {job.department}</p>
                                <p class="job-timing">
                                    <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.25 15.099V9.75H14.75V14.4875V14.9017L15.0429 15.1946L18.9708 19.1225L18.6158 19.475L14.25 15.099ZM14.4875 1.5C7.03391 1.5 1 7.54902 1 15C1 22.451 7.03391 28.5 14.4875 28.5C21.9516 28.5 28 22.4529 28 15C28 7.54706 21.9516 1.5 14.4875 1.5Z" stroke="#1963C6" stroke-width="2" />
                                    </svg>

                                    {job.timing}</p>
                            </div>

                        </div>
                    ))} */}

                </section>



                <section class="contact-section">

                    <div class="auto-container">

                        <div class="row">

                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/career2.png')} alt="" className='width84' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">


                                    <div class="sec-title">

                                        <div class="auto-container">
                                            <div class="">
                                                <h2 className='header1'>
                                                    <span className='headeingcolorblack'> Why work at</span>
                                                    <br></br>
                                                    <span className='headeingcolorblue'>  Bridge Health</span>
                                                </h2>
                                            </div>

                                        </div>
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span>

                                        </h2> */}
                                        <p className='font22'>
                                            At Bridge Health, we believe that proactive focus on personalised healthcare and swift curative actions to mitigate risks are of paramount importance to each one of us.
                                            Our journey is all about being your trusted “Healthcare Companion for Life”.
                                        </p>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section class="contact-section">

                    <div class="auto-container">
                        <div class="row">


                            <div class="col-lg-6">
                                <div class="contact-form-area">

                                    <div class="sec-title">

                                        <div class="auto-container">
                                            <div class="">
                                                <h2 className='header1'>
                                                    <span className='headeingcolorblack'> Life at</span>

                                                    <span className='headeingcolorblue'>  Bridge Health</span>
                                                </h2>
                                            </div>

                                        </div>
                                        {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                        <p className='font22'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis ipiscing elit, sed do eiusmod tempor incididunt.
                                        </p>


                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/career3.png')} alt="" className='width84' />
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

export default Career;