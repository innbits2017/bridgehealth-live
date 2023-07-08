import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/background/direct.jpg');
const wellcomebg1 = require('./../../assets/images/resource/image-1.jpg');
class leadership extends Component {

    componentDidMount() {
        document.title = 'Leadership | Bridge Health';
    }


    constructor(props) {
        super(props);
        this.state = {
            showFullContent1: true,
            showFullContent2: true,
        };
    }

    toggleContent1 = () => {
        this.setState((prevState) => ({
            showFullContent1: !prevState.showFullContent1,
        }));
    };

    toggleContent2 = () => {
        this.setState((prevState) => ({
            showFullContent2: !prevState.showFullContent2,
        }));
    };


    render() {

        const { showFullContent1, showFullContent2 } = this.state;

        return (
            <>
                <Header />
                
                <img src={require('./../../assets/images/background/direct.jpg')} alt="" className='imgwidth100'/>

                {/* <!--End Banner Section --> */}

                {/* <!-- About Section Two --> */}
                <section class="about-section-two marginTop0">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2> <span className='headeingcolorblack'> BOARD OF</span> <span className='headeingcolorblue'> DIRECTORS</span></h2>
                        </div>

                    </div>
                    <div className='container-fulid teamback1'>
                        <div class="auto-container">
                            <div class="row align-items-center">

                                <div class="col-lg-2">
                                    <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="image-one">
                                            <img src={require('../../assets/images/shape/director.png')} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-10">
                                    <div class="author-info">
                                        <div class="wrapper-box text">
                                            <h2 class="leader-heading">Kris Gopalakrishnan</h2>
                                            <div class="designation leader-heading">Chairman & Co-Founder</div>
                                            <hr></hr>
                                            <div class="text">
                                                <i>Senapathy “Kris” Gopalakrishnan served as the Vice Chairman of Infosys from 2011 to 2014
                                                    and the Chief Executive Officer and Managing Director of Infosys from 2007 to 2011. Kris is
                                                    one of the co-founders of Infosys. He also was selected to Thinkers 50, an elite list of global
                                                    business thinkers, in 2009.
                                                </i>
                                                {showFullContent1 ? (
                                                    <h6 className="leader-btn" >
                                                        <i onClick={this.toggleContent1}>SHOW MORE</i>
                                                    </h6>
                                                ) : (
                                                    <div class="text">
                                                        <i>
                                                            He was elected president of India's apex industry chamber Confederation of Indian Industry (CII) for 2013-14, and served as one of the co-chairs of the World Economic Forum in Davos in January 2014.
                                                            He serves on the Board of Governors of Okinawa Institute for Science and Technology (OIST) and is the Chairman, Board of Governors of IIIT, Bangalore. He is the Chairman of the Vision Group on Information
                                                            Technology of Karnataka Government and the Chairman of CII Start up Council. In January 2011, the Government of India awarded Kris the Padma Bhushan, the country’s third-highest civilian honor. Kris holds Master’s degrees in physics and computer science from the Indian Institute of Technology, Madras. Kris is a Fellow of Indian National Academy of Engineers (INAE) and an Honorary Fellow of Institution of Electronics and Telecommunication Engineers (IETE) of India.
                                                        </i>
                                                        <h6 className="leader-btn" >
                                                            <i onClick={this.toggleContent1}>SHOW LESS</i>
                                                        </h6>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fulid teamback2'>

                        <div class="auto-container marginTop50">
                            <div class="row align-items-center">
                                <div class="col-lg-10">
                                    <div class="author-info">
                                        <div class="wrapper-box text">
                                            <h2 class="leader-heading1">Swami D Swaminathan</h2>
                                            <div class="designation leader-heading2">Director & Co-Founder</div>
                                            <hr></hr>
                                            <div class="text1">
                                                <i>Swaminathan Dandapani in his earlier role as Executive Chairman of Manipal Health
                                                    Enterprises, provided direction and leadership to the Healthcare business expanding the
                                                    footprint of Manipal Hospitals in new geographies both within & outside India.
                                                </i>
                                                {showFullContent2 ? (
                                                    <h6 className="leader-btn" >
                                                        <i onClick={this.toggleContent2}>SHOW MORE</i>
                                                    </h6>
                                                ) : (
                                                    <div class="text1">
                                                        <i>
                                                            He also was the Chairman of Manipal Integrated Services the integrated facility management company in the Manipal group, Swami was also the initiative lead for the “Bridging the Health DivideLeveraging Digital India” sponsored by NASSCOM ( Association of Software & Services Companies in India) and NATHEALTH ( Association of Healthcare Services & Products providers in India) . Prior to joining Manipal Group, Swami was the Managing Director & Chief Executive Officer of Infosys BPO (a fully owned subsidiary of Infosys Ltd). Swami led the firm building a 25000 + team worldwide, of over 65+ different nationalities in their workforce, with global operations in 6 centers in India and over 12 centers outside India in Americas, Europe, China, LATAM and APAC. Swami, a Chartered Accountant has over 40 years of experience in General Management, Finance & Accounting, Sales & Marketing, International Trading and Human Resources Management. He has performed multiple roles in Sales, Marketing and Operations, leading global teams in the Automobiles, Consumer Durables, Technology, Manufacturing and Services industries. He has also been associated with infrastructure projects in India and overseas.
                                                            Swami has successfully concluded & executed several M&A projects across US, Europe, APAC, Middle East & India in multiple business verticals.
                                                        </i>
                                                        <h6 className="leader-btn" >
                                                            <i onClick={this.toggleContent2}>SHOW LESS</i>
                                                        </h6>
                                                    </div>
                                                )}
                                            </div>

                                            {/* <div class="text">Senapathy “Kris” Gopalakrishnan served as the Vice Chairman of Infosys from 2011 to 2014 and the Chief Executive Officer and Managing Director of Infosys from 2007 to 2011. Kris is one of the co-founders of Infosys. He also was selected to Thinkers 50, an elite list of global business thinkers, in...</div> */}
                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-2">
                                    <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="image-one">
                                            <img src={require('../../assets/images/shape/director1.png')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!-- Gallery Section --> */}
                <section class="gallery-section teamleader">
                    <div class="auto-container">
                        <div class="auto-container">
                            <div class="sec-title textalign martextleft40 leadership-title">
                                <h2> <span className='headeingcolorblue leadership-title' > LEADERSHIP</span><br></br> <span className='headeingcolorblack marginleftspan leadership-title'> TEAM</span></h2>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-lg-3 team-block-one wow fadeInUp lead1" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="column">
                                    <div class="leadership">
                                        <img src={require('../../assets/images/gallery/L4.png')} alt="" class="avtar" />
                                        <div class="overlay">
                                            <div class="texttitle">Karan Verma</div>
                                            <div className='designation1'>CEO</div>
                                            <div className='linkdinicon'>
                                                <a href={'https://www.linkedin.com/in/karanverma/'}><div class="fab fa-linkedin linkdinicon1"></div></a>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 team-block-one wow fadeInUp lead2" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="column">
                                    <div class="leadership">
                                        <img src={require('../../assets/images/gallery/L1.png')} alt="" class="avtar" />
                                        <div class="overlay">
                                            <div class="texttitle">Dr. Dhanya Prabhu Ramdas</div>
                                            <div className='designation1'>Head – Clinical Services</div>
                                            <div className='linkdinicon'>
                                                {/* <Link to={'/#'}><div class="fab fa-linkedin linkdinicon1"></div></Link> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="leadership">
                                        <img src={require('../../assets/images/gallery/L5.png')} alt="" class="avtar" />
                                        <div class="overlay">
                                            <div class="texttitle">Bipul Jha</div>
                                            <div className='designation1'>Head of Operations</div>
                                            <div className='linkdinicon'>
                                                <a href={'https://www.linkedin.com/in/bipul-jha-96286110/'}><div class="fab fa-linkedin linkdinicon1"></div></a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="column">
                                    {/* <div>
                                        <figure><img src={require('../../assets/images/gallery/L2.png')} alt="" /></figure>
                                    </div> */}
                                    <div class="leadership">
                                        <img src={require('../../assets/images/gallery/L3.png')} alt="" class="avtar" />
                                        <div class="overlay">
                                            <div class="texttitle">Ravishankar Rao </div>
                                            <div className='designation1'>VP - Affiliates & Alliance</div>
                                            <div className='linkdinicon'>
                                                <a href={'https://www.linkedin.com/in/ravishankar-rao-2940858/'}><div class="fab fa-linkedin linkdinicon1"></div></a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="leadership">
                                        <img src={require('../../assets/images/gallery/L6.png')} alt="" class="avtar" />
                                        <div class="overlay">
                                            <div class="texttitle">Pavan Biddanda</div>
                                            <div className='designation1'>VP - Risk Management </div>
                                            <div className='linkdinicon'>
                                                <a href={'https://www.linkedin.com/in/pavanba/'}><div class="fab fa-linkedin linkdinicon1"></div></a>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-3 team-block-one wow fadeInUp lead3" data-wow-delay="200ms" data-wow-duration="1200ms">
                                {/* <div class="column">
                                    <div class="leadership">
                                        <img src={require('../../assets/images/gallery/L3.png')} alt="" class="avtar" />
                                        <div class="overlay">
                                            <div class="texttitle">Karan Verma</div>
                                            <div className='designation1'>CEO</div>
                                        </div>
                                    </div>
                                </div> */}
                                <div class="column">
                                    <div class="leadership div-heading">
                                        <img src={require('../../assets/images/gallery/L7.png')} alt="" class="avtar" />
                                        <div class="overlay">
                                            <div class="texttitle">Jayeeta Swar</div>
                                            <div className='designation1'>VP - Technology</div>
                                            <div className='linkdinicon'>
                                                <a href={'https://www.linkedin.com/in/jayeeta-swar-92b9bb65/'}><div class="fab fa-linkedin linkdinicon1"></div></a>

                                            </div>
                                        </div>
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
export default leadership;