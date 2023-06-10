import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/background/leadership1.jpg');
const wellcomebg1 = require('./../../assets/images/resource/image-1.jpg');
class leadership extends Component {

    componentDidMount() {
        document.title = 'Leadership | Bridge Health';
    }


    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    toggleContent = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    };


    render() {

        const { expanded } = this.state;

        return (
            <>
                <Header />
                {/* <!-- Page Banner Section --> */}
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        {/* <h1 className='colorwhite'>LeaderShip</h1> */}
                        <h1 className='colorwhite'></h1>

                    </div>

                </section>
                {/* <!--End Banner Section --> */}

                {/* <!-- About Section Two --> */}
                <section class="about-section-two">
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
                                                    business thinkers, in...
                                                </i>
                                                {!expanded && (
                                                    <h6 className="leader-btn" onClick={this.toggleContent}>
                                                        <i>KNOW MORE</i>
                                                    </h6>
                                                )}
                                                {expanded && (
                                                    <div>
                                                        <span>
                                                            Additional content goes here...
                                                        </span>
                                                        <h6 className="leader-btn" onClick={this.toggleContent}>
                                                            <i>SHOW LESS</i>
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
                                                    footprint of Manipal Hospitals in new geographies both within & outside India. He also was
                                                    the Chairman of ...
                                                </i>
                                                {!expanded && (
                                                    <h6 className="leader-btn" onClick={this.toggleContent}>
                                                        <i>KNOW MORE</i>
                                                    </h6>
                                                )}
                                                {expanded && (
                                                    <div>
                                                        <span>
                                                            Additional content goes here...
                                                        </span>
                                                        <h6 className="leader-btn" onClick={this.toggleContent}>
                                                            <i>SHOW LESS</i>
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
                            <div class="sec-title textalign martextleft ">
                                <h2> <span className='headeingcolorblue'> LEADERSHIP</span><br></br> <span className='headeingcolorblack marginleftspan'> TEAM</span></h2>
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
                                                <Link to={'/#'}><div class="fab fa-linkedin linkdinicon1"></div></Link>

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
                                            <div class="texttitle">Karan Verma</div>
                                            <div className='designation1'>CEO</div>
                                            <div className='linkdinicon'>
                                                <Link to={'/#'}><div class="fab fa-linkedin linkdinicon1"></div></Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="leadership">
                                        <img src={require('../../assets/images/gallery/L5.png')} alt="" class="avtar" />
                                        <div class="overlay">
                                            <div class="texttitle">Karan Verma</div>
                                            <div className='designation1'>CEO</div>
                                            <div className='linkdinicon'>
                                                <Link to={'/#'}><div class="fab fa-linkedin linkdinicon1"></div></Link>

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
                                            <div class="texttitle">Karan Verma</div>
                                            <div className='designation1'>CEO</div>
                                            <div className='linkdinicon'>
                                                <Link to={'/#'}><div class="fab fa-linkedin linkdinicon1"></div></Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="leadership">
                                        <img src={require('../../assets/images/gallery/L6.png')} alt="" class="avtar" />
                                        <div class="overlay">
                                            <div class="texttitle">Karan Verma</div>
                                            <div className='designation1'>CEO</div>
                                            <div className='linkdinicon'>
                                                <Link to={'/#'}><div class="fab fa-linkedin linkdinicon1"></div></Link>

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
                                            <div class="texttitle">Karan Verma</div>
                                            <div className='designation1'>CEO</div>
                                            <div className='linkdinicon'>
                                                <Link to={'/#'}><div class="fab fa-linkedin linkdinicon1"></div></Link>

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