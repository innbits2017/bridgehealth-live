import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';
import FormValidation from './formvalidation';
const aboutbg = require('./../../assets/images/shape/Vaccination.png');

class vaccination extends Component {
    componentDidMount() {
        document.title = 'Pharmacy | Bridge Health';
    }

    constructor(props) {
        super(props);
        this.state = {
            vaccineName: '',
            age: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };


    handleSearch = (event) => {
        event.preventDefault();
        // Perform search or validation logic here based on the entered values.
        // For example, you can fetch data or display an alert.
        alert(`Searching for ${this.state.vaccineName} at age ${this.state.age}`);
    };


    render() {
        return (
            <>
                <Header />

                <section class="internalpage internalpageresponsive style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">
                            <div class=" text-center textleft">
                                <h1 className='textleft fontSize'>
                                    <span className='headeingcolorblack'>Looking for </span><br></br>
                                    <span className='headeingcolorblue'> Vaccinations? </span>
                                </h1>
                                <h2 className='textleft marginTop40'>
                                    We have got you covered!<br></br> Check out our list!!
                                </h2>
                            </div>
                            <div class="btn-box btn5">
                                <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                            </div>
                        </div>
                    </div>
                </section>

                <section>

                    <div class="auto-container">
                        <div className="vcc-form-card">
                            <div className="marginTop40">
                                <h3>Check Vaccination</h3>
                            </div>
                            <form onSubmit={this.handleSearch}>
                                <div className="row wrapvccform">
                                    <div className="subform">
                                        <div className="">
                                            <div className="form-group">

                                                <input
                                                    type="text"
                                                    id="vaccineName"
                                                    name="vaccineName"
                                                    value={this.state.vaccineName}
                                                    onChange={this.handleInputChange}
                                                    class="form-control vacc-input1"
                                                    placeholder="Vaccine Name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="form-group">

                                                <input
                                                    type="number"
                                                    id="age"
                                                    name="age"
                                                    value={this.state.age}
                                                    onChange={this.handleInputChange}
                                                    class="form-control vacc-input"
                                                    placeholder="Age"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <button type="submit" class="btn-style-vacc">
                                            Search <img src={require('../../assets/images/shape/Group 237788.png')} alt="" className='search-vacc-img' />
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                </section>


                <section >
                    <div class="auto-container margin-vcc2">
                        <div class="sec-title text-center">
                            <h2 className='header1'>
                                <span className='headeingcolorblack'> WHY YOU SHOULD GET</span>
                                <span className='headeingcolorblue'>  VACCINATED</span>
                            </h2>
                        </div>

                        <div class="row reverseFlex">
                            <div class="col-lg-6">
                                <div >
                                    <p className='font22'>

                                        <br></br>

                                        Routine Immunization can protect you from several deadly diseases. Be it an outbreak
                                        or some other calamity, a thousand things big or small may come in your way. But it’s
                                        necessary to remember, some of the deadliest or highly contagious diseases in the world
                                        may be stopped or stalled when a majority of the population is vaccinated. Think Small Pox.
                                        Understandably, the current Pandemic has become a hindrance in many a patient’s healthcare plan.
                                        But it’s time you get up to date with that immunization schedule

                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-5">
                                <img src={require('../../assets/images/shape/Vacc1.png')} alt="" className='width100 imgFloatRight' />
                            </div>

                        </div>
                    </div>

                </section>

                <section>

                    <div class="auto-container wrap-vcc4">
                        <div className="row">
                            <div class="col-sm-4">
                                <div className="card-vacc">
                                    <div className='vaccHeadCard'>
                                        <img src={require('../../assets/images/shape/VccCard.png')} alt="" className='' />
                                        <h4>Vaccination<br></br>for Kids</h4>
                                    </div>
                                    <h5 ><span className='headeingcolorblue'>
                                        (Birth - 9 Years)</span>
                                    </h5>

                                    <p>Immunization schedule Vaccine-<br></br>preventable-diseases</p>

                                    <a href=''>
                                        <h5 >
                                            <span className='headeingcolorblue'>READ MORE <img src={require('../../assets/images/shape/Arrow 9.png')} alt="" className='' /> </span>
                                        </h5>
                                    </a>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div className="card-vacc">
                                    <div className='vaccHeadCard'>
                                        <img src={require('../../assets/images/shape/VccCard.png')} alt="" className='' />
                                        <h4>Vaccination<br></br>for Adolescents</h4>
                                    </div>
                                    <h5 ><span className='headeingcolorblue'>
                                        (10 - 18 Years)</span>
                                    </h5>
                                    <p>Immunization schedule Vaccine-<br></br>preventable-diseases</p>
                                    <a href=''>
                                        <h5 >
                                            <span className='headeingcolorblue'>READ MORE <img src={require('../../assets/images/shape/Arrow 9.png')} alt="" className='' /> </span>
                                        </h5>
                                    </a>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div className="card-vacc">
                                    <div className='vaccHeadCard'>
                                        <img src={require('../../assets/images/shape/VccCard.png')} alt="" className='' />
                                        <h4>Vaccination<br></br>for Adults</h4>
                                    </div>
                                    <h5 ><span className='headeingcolorblue'>
                                        (18-50 Years, All Genders)</span>
                                    </h5>
                                    <p>Immunization schedule Vaccine-<br></br>preventable-diseases</p>
                                    <a href=''>
                                        <h5 >
                                            <span className='headeingcolorblue'>READ MORE <img src={require('../../assets/images/shape/Arrow 9.png')} alt="" className='' /> </span>
                                        </h5>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="row mt-4">
                            <div class="col-sm-4">
                                <div className="card-vacc">
                                    <div className='vaccHeadCard'>
                                        <img src={require('../../assets/images/shape/VccCard.png')} alt="" className='' />
                                        <h4>Vaccination<br></br>for Pregnent Women</h4>
                                    </div>
                                    <p>Immunization schedule Vaccine-<br></br>preventable-diseases</p>
                                    <a href=''>
                                        <h5 >
                                            <span className='headeingcolorblue'>READ MORE <img src={require('../../assets/images/shape/Arrow 9.png')} alt="" className='' /> </span>
                                        </h5>
                                    </a>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div className="card-vacc">
                                    <div className='vaccHeadCard'>
                                        <img src={require('../../assets/images/shape/VccCard.png')} alt="" className='' />
                                        <h4>Vaccination<br></br>above 50 Years</h4>
                                    </div>
                                    <p>Immunization schedule Vaccine-<br></br>preventable-diseases</p>
                                    <a href=''>
                                        <h5 >
                                            <span className='headeingcolorblue'>READ MORE <img src={require('../../assets/images/shape/Arrow 9.png')} alt="" className='' /> </span>
                                        </h5>
                                    </a>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div className="card-vacc">
                                    <div className='vaccHeadCard'>
                                        <img src={require('../../assets/images/shape/VccCard.png')} alt="" className='' />
                                        <h4>Vaccination<br></br>for Trevelers</h4>
                                    </div>
                                    <p>Immunization schedule Vaccine-<br></br>preventable-diseases</p>
                                    <a href=''>
                                        <h5 >
                                            <span className='headeingcolorblue'>READ MORE <img src={require('../../assets/images/shape/Arrow 9.png')} alt="" className='' /> </span>
                                        </h5>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>


                </section>

                <section>
                    <div class="image-wrapper wrap-vcc5">
                        <div class="image-one">
                            <img src={require('../../assets/images/shape/Vacc2.png')} alt="" className='width100' />
                        </div>
                    </div>
                </section>

                <section>
                    <div class="auto-container margin-vcc2">
                        <div class="sec-title text-center">
                            <h2 className='header1'>
                                <span className='headeingcolorblack'> EXCLUSIVE VACCINESS BY</span>
                                <span className='headeingcolorblue'>  BRIDGE HEALTH</span>
                            </h2>
                        </div>

                        <div className="row mt-5">
                            <div class="col-sm-4">
                                <div className="card-vacc">
                                    <div className='vaccHeadCard'>
                                        <img src={require('../../assets/images/shape/syringe 1.png')} alt="" className='syringeimg' />
                                        <h3>
                                            <span className='VccHeadeingcolorblack'>Influenza Vaccine</span><br></br>
                                            <span className='VcccHeadingcolorblue'>1 Dose Anually For Every Age</span>
                                        </h3>
                                    </div>


                                    <p>New versions of the vaccines are develop
                                        twice a year, as the influenza virus rapidly changes. While their
                                        effectiveness varies from year to year, most provide modest
                                        to high protection against influenza.</p>
                                    <div className='read-vcc'>
                                        <a href=''>
                                            <div class="">
                                                <button class="submitreadmore" type="submit"
                                                    name="submit-form">KNOW MORE</button>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div className="card-vacc">
                                    <div className='vaccHeadCard'>
                                        <img src={require('../../assets/images/shape/syringe 1.png')} alt="" className='syringeimg' />
                                        <h3>
                                            <span className='VccHeadeingcolorblack'>Influenza Vaccine</span><br></br>
                                            <span className='VcccHeadingcolorblue'>1 Dose Anually For Every Age</span>
                                        </h3>
                                    </div>

                                    <p>New versions of the vaccines are develop twice a year,
                                        as the influenza virus rapidly changes. While their
                                        effectiveness varies from year to year, most provide
                                        modest to high protection against influenza.</p>
                                    <div className='read-vcc'>
                                        <a href=''>
                                            <div class="">
                                                <button class="submitreadmore" type="submit"
                                                    name="submit-form">KNOW MORE</button>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div className="card-vacc">
                                    <div className='vaccHeadCard'>
                                        <img src={require('../../assets/images/shape/syringe 1.png')} alt="" className='syringeimg' />
                                        <h3>
                                            <span className='VccHeadeingcolorblack'>Influenza Vaccine</span><br></br>
                                            <span className='VcccHeadingcolorblue'>1 Dose Anually For Every Age</span>
                                        </h3>
                                    </div>

                                    <p>New versions of the vaccines are develop twice a year,
                                        as the influenza virus rapidly changes. While their
                                        effectiveness varies from year to year, most provide
                                        modest to high protection against influenza.</p>
                                    <div className='read-vcc'>
                                        <a href=''>
                                            <div class="">
                                                <button class="submitreadmore" type="submit"
                                                    name="submit-form">KNOW MORE</button>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='cont'>
                            <div className="row mt-4">
                                <div class="col-sm-6">
                                    <div className="card-vacc">
                                        <div className='vaccHeadCard'>
                                            <img src={require('../../assets/images/shape/syringe 1.png')} alt="" className='syringeimg' />
                                            <h3>
                                                <span className='VccHeadeingcolorblack'>Influenza Vaccine</span><br></br>
                                                <span className='VcccHeadingcolorblue'>1 Dose Anually For Every Age</span>
                                            </h3>
                                        </div>

                                        <p>New versions of the vaccines are develop twice a year,
                                            as the influenza virus rapidly changes. While their
                                            effectiveness varies from year to year, most provide
                                            modest to high protection against influenza.</p>

                                        <div className='read-vcc'>
                                            <a href=''>
                                                <div class="">
                                                    <button class="submitreadmore" type="submit"
                                                        name="submit-form">KNOW MORE</button>

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div className="card-vacc">
                                        <div className='vaccHeadCard'>
                                            <img src={require('../../assets/images/shape/syringe 1.png')} alt="" className='syringeimg' />
                                            <h3>
                                                <span className='VccHeadeingcolorblack'>Influenza Vaccine</span><br></br>
                                                <span className='VcccHeadingcolorblue'>1 Dose Anually For Every Age</span>
                                            </h3>
                                        </div>

                                        <p>New versions of the vaccines are develop twice a year,
                                            as the influenza virus rapidly changes. While their
                                            effectiveness varies from year to year, most provide
                                            modest to high protection against influenza.</p>
                                        <div className='read-vcc'>
                                            <a href=''>
                                                <div class="">
                                                    <button class="submitreadmore" type="submit"
                                                        name="submit-form">KNOW MORE</button>

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                </section>


                <section class="marginTop80">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2> <span className='headeingcolorblue'>REACH </span> <span className='headeingcolorblack'>OUT TO
                                US</span><br></br>
                                <p style={{ fontSize: 22 + 'px' }}>Our health advisor is ready to answer your queries about what we do and how we
                                    <br></br> <span >can help you take care of yourself and your loved ones better.</span></p>
                            </h2>
                        </div>

                    </div>
                </section>
                <div class="auto-container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="image-wrapper">
                                <div class="image-one">
                                    <img class="reachout" src={require('../../assets/images/shape/contact.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <FormValidation />

                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
export default vaccination;