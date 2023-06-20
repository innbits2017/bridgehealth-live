import React, { Component } from 'react';
import $ from 'jquery';
import Header from '../layout/header'
import Footer from '../layout/footer'


const aboutbg = require('./../../assets/images/shape/car1.png');
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

        document.title = 'Career | Bridge Health';
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

                <section class="internalpage carrerpadding  internalpageresponsive style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box careerbox">

                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblue'> Careers   </span>
                                    <span className='headeingcolorblack'> at <br></br> Bridge Health </span><br></br>

                                </h2>

                            </div>
                            <button class="commonBtnforAll">Apply Now</button>


                        </div>

                    </div>
                </section>

                <section>
                    <div class="auto-container">
                        <div class="text-center btn5 careertitle">
                            <img src={require('../../assets/images/shape/careersicon.png')} alt="" />
                        </div>
                    </div>
                    {/* <!-- Search --> */}
                </section>

                <div class="container">
                    <div class="row" style={{ background: 'white' }}>
                        <div class="col-lg-8 mx-auto">

                            <div class="bg-white p-5 ">
                                {/* <!-- Search --> */}
                                <div class=" search-box">

                                    <form>
                                        <div class="form-group1">
                                            <input
                                                type="search"
                                                name="search-field"
                                                value={this.state.searchTerm}
                                                onChange={e => this.handleChange(e)}
                                                placeholder="Search Topic"
                                                required="" />
                                            <button type="submit" className='submitsearch'><span class="icon far fa-search searchblog"></span></button>
                                        </div>
                                    </form>
                                    <div class="filtter">
                                        <form action="#" class="language-switcher">
                                            <select>
                                                <option value="">Filter</option>
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
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 
                <section class="career-head1">
                    <div class="container">
                        <div class="row" style={{ background: 'white' }}>
                            <div class="col-lg-8">

                                <div class="bg-white p-5 ">
                                    <div class=" search-box">
                                        <form onSubmit={e => this.handleSubmit(e)}>
                                            <div class="form-group1">
                                                <input
                                                    type="search"
                                                    name="search-field"
                                                    value={this.state.searchTerm}
                                                    onChange={e => this.handleChange(e)}
                                                    placeholder="Search Topic"
                                                    required="" />
                                                <button type="submit" className='submitsearch'><span class="icon far fa-search searchblog"></span></button>
                                            </div>
                                        </form>
                                        <div class="language marginleft10">
                                            <form action="#" class="language-switcher">
                                                <select>
                                                    <option value="1">Filter</option>
                                                    <option value="1">FR</option>
                                                    <option value="1">SP</option>
                                                    <option value="1">BE</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                <section class="auto-container marginTop50 career-head1">
                    {filteredJobs.map((job, index) => (
                        <div class="job-card" key={index}>
                            <div class="job-card-header">
                                <div>
                                    <span class="job-title">{job.title}</span>
                                    <span class="job-department"><span className='fontweight'>Department:</span> {job.department}</span>

                                </div>
                                <div className='careerpadding'>   <span class="job-location"><img src={require('../../assets/images/shape/iconmap.png')} alt="" className='padeight' />
                                    {job.location}<span> <img src={require('../../assets/images/shape/dash.png')} alt="" className='dash' /></span></span>
                                    <span class="job-timing">
                                        <img src={require('../../assets/images/shape/icontime.png')} alt="" className='padeight' /> {job.timing}</span>
                                    <span  class="job-department"> <a href="/career-form" class="view-position">Apply Now</a> </span>
                                </div>
                                <div class="job-card-footer">
                                    <a href="/job-description" class="view-position">View Position &#8594;</a>

                                </div>
                            </div>
                            {/* 
                            <div class="job-card-details">
                                <p class="job-department"><span className='fontweight'>Department:</span> {job.department}</p>

                            </div> */}

                        </div>
                    ))}

                </section>



                <section class="contact-section">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/shape/career2.png')} alt="" className='widthimg' />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form-area">


                                    <div class="sec-title squrebox">
                                        <h2 className='header1'>
                                            <span className='headeingcolorblack'> Why work at</span>
                                            <span className='headeingcolorblue'>  Bridge Health</span>
                                        </h2>
                                        <p className='font22'>
                                            Join Bridge Health and be part of a transformative healthcare team. With a dynamic work environment and opportunities for growth, your contributions can truly make a difference.
                                            We prioritize work-life balance and offer a supportive atmosphere where you can advance your career while positively impacting lives.
                                        </p>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                <div class="auto-container">
                    <div class="row align-items-center">

                        <div class="col-lg-6">
                            <div class="contact-form-area">

                                <div class="sec-title squrebox">                                                <h2 className='header1'>

                                    <span className='headeingcolorblack'> Life at</span>

                                    <span className='headeingcolorblue'>  Bridge Health</span>
                                </h2>

                                    {/* <h2> <span className='headeingcolorblack1'>YOU ARE WHAT YOU EAT</span></h2> */}
                                    <p className='font22'>
                                        Experience a fulfilling and inclusive life at Bridge Health. Our collaborative culture fosters teamwork and a sense of belonging.
                                        From engaging activities to professional development opportunities, we prioritize your well-being and growth. Join our community dedicated to work-life balance and making a meaningful impact in the preventive healthcare industry.
                                    </p>


                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-wrapper">
                                <div class="image-one">
                                    <img src={require('../../assets/images/shape/career3.png')} alt="" className='widthimg imgFloatRight' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <div class="sidebar-contact" id="sidebarCont">
         <div class="toggle">
            <div class="talkTo"><img src="assets/img/talkto.png"></img><span>Talk to a Health Advisor</span></div>
         </div>
         <div class="scroll">
            <div class="form-body">
               <div class="row">
                  <div class="form-holder">
                     <div class="form-content">
                        <div class="form-items">
                           <form action="forms/contact.php" method="POST" class="requires-validation" onsubmit="return validateForm()">
                              <div class="col-md-12 mb-2">
                                 <input class="form-control inputWidth" type="text" name="name" id="validationTooltip01" placeholder="Name" required></input>
						
                              </div>
                              <div class="col-md-12 mb-2">
                                 <input class="form-control inputWidth" type="number" name="phone" id="validationServer05" placeholder="Phone" required></input>
                              </div>
                         
                              <div class="col-md-12 mb-2">
                                 <textarea name="message" placeholder="Message here.." class="inputWidth"></textarea>
                              </div>
                              <div class="form-check">
                                 <input class="form-check-input" type="checkbox" value="" id="invalidCheck3" required></input>
                                 <label class="form-check-label">I confirm that all data are correct</label>
                              </div>
                              <div class="form-button mt-3 text-center">
                                 <input type="submit" name="submit" value="Submit"></input>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div> */}
                <Footer />
            </>
        )
    }



}

export default Career;