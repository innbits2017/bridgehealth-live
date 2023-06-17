import React, { Component } from 'react';
import $ from 'jquery';
import Header from '../layout/header'
import Footer from '../layout/footer'


const aboutbg = require('./../../assets/images/shape/car1.png');
// $(document).ready(function(){
//     $('.toggle').click(function(){
//       $('.sidebar-contact').toggleClass('active')
//       $('.toggle').toggleClass('active')
//     })
//     })
//  $(document).ready(function(){
//     $('.toggle2').click(function(){
//       $('.sidebar-contact').toggleClass('active')
//       $('.toggle2').toggleClass('active')
//     })
//     })
//    var wasSubmitted = false;
//     function validateForm() {
// if(!wasSubmitted) {
//    wasSubmitted = true;
//    return wasSubmitted;
//  }
//  return false;
//    let x = document.forms["name"]["name"].value;
//    if (x == "") {
//        alert("Name must be filled out");
//   return false;
//   }
//   let phone = document.forms["phone"]["phone"].value;
//    if (phone == "") {
//        alert("phone must be filled out");
//   return false;
// }
// }

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

                <section class="internalpage internalimp  internalpageresponsive style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">

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

                <section class="contact-section career-head1">
                    <div className="car-head2">
                        <h2>
                            <svg width="70" height="69" viewBox="0 0 84 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M55.1264 23.8419V18.7026C55.1254 18.0252 54.9889 17.3548 54.7249 16.7308C54.461 16.1067 54.0748 15.5415 53.5892 15.0682C52.5966 14.1009 51.2637 13.5603 49.8764 13.5625H34.1264C32.7391 13.5603 31.4062 14.1009 30.4136 15.0682C29.9279 15.5415 29.5418 16.1067 29.2778 16.7308C29.0139 17.3548 28.8774 18.0252 28.8764 18.7026V23.8419M70.8789 23.8419H13.1289C11.6791 23.8419 10.5039 24.9922 10.5039 26.4116V67.5268C10.5039 68.9461 11.6799 70.0972 13.1289 70.0972H70.8789C72.3287 70.0972 73.5039 68.9461 73.5039 67.5268V26.4124C73.5039 24.993 72.3279 23.8419 70.8789 23.8419Z" stroke="#FBAD17" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M73.5039 41.287C63.9304 46.7088 53.0617 49.556 42.0014 49.5392C30.9428 49.556 20.0757 46.7096 10.5039 41.2895M38.0643 39.2598H45.9385" stroke="#FBAD17" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> OPEN POSITIONS
                        </h2>
                    </div>

                    {/* <div className="search-fil">
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
                    </div> */}
                    <div class="container">
                        <div class="row" style={{ background: 'white' }}>
                            <div class="col-lg-8">

                                <div class="bg-white p-5 ">
                                    {/* <!-- Search --> */}
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
                </section>


                <section class=" career-head">
                    {filteredJobs.map((job, index) => (
                        <div class="job-card" key={index}>
                            <div class="job-card-header">
                                <h3 class="job-title">{job.title}</h3>
                                <div className='careerpadding'>   <span class="job-location"><img src={require('../../assets/images/shape/iconmap.png')} alt="" className='padeight' />

                                    {job.location}</span>
                                    <span class="job-timing">
                                        <img src={require('../../assets/images/shape/icontime.png')} alt="" className='padeight' /> {job.timing}</span></div>
                                <div class="job-card-footer">
                                    <a href="#" class="view-position">View Position &#8594;</a>
                                </div>
                            </div>

                            <div class="job-card-details">
                                <p class="job-department"><span className='fontweight'>Department:</span> {job.department}</p>

                            </div>

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