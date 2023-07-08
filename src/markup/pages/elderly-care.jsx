import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';
import Seo from '../layout/seo';

class elderlyCare extends Component {

componentDidMount() {
document.title = 'Elderly Care | Bridge Health';
}

render() {
    const title = "Best Elder care / Geriatric care Services in Bangalore | Bridge Health";
    const description = "Comprehensive senior care services. Best Doctor for Geriatric care in Bangalore Discover our elderly care services at Bridge Health.";
    // const metadata = "steel building, steel buildings";
return (
<>
<Seo title={title} description={description} />
    <Header />

    <section class="team-section padding doctoeback">
        {/* About Section Two */}
        <section class="container-fluid">
            <div class="row align-items-center auto-container reverseFlex">
                <div class="col-lg-5">
                    <div class="content-box marginTop40header">
                        <div class="sec-title text-center textleft">
                            <h1 className='d-none'></h1>
                            <h2 className='textleft fontSize50'>
                                <span className='headeingcolorblack'> Age is not just </span>
                                <br></br>
                                <span className='headeingcolorblack'> a </span>
                                <span className='headeingcolorblue'> Number</span>
                            </h2>
                            <h3 className='textleft marginTop40'>
                                Professional elderly care at <br></br> your doorstep
                            </h3>
                        </div>
                        <div class="btn-box btn5">
                            <ContactForm buttonText="BOOK NOW" popupPosition="right" />
                        </div>

                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="imgright">
                        <img src={require('../../assets/images/shape/care1.png')} alt="" className='width100' />
                    </div>
                </div>
            </div>
        </section>
    </section>

    <section class="contact-section heath-margin">
        <div class="auto-container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <img src={require('../../assets/images/shape/care2.png')} alt="" className='width100' />
                </div>
                <div class="col-lg-6">
                    <div class="contact-form-area">
                        <div class="sec-title squrebox">
                            <p className='font22'>
                                Although we may stay young at heart, our body starts ageing. As we grow older, our
                                physical abilities decline
                                and we might find ourselves slower and more dependent on others for physical assistance.
                            </p>

                        </div>
                        <div class="btn-box text-center btn5">
                            <ContactForm buttonText="BOOK NOW" popupPosition="left" />

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>

    <div class="auto-container">
        <div class="row reverseFlex">
            <div class="col-lg-6">
                <div class="sec-title squrebox">
                    <p className='font22'>
                        <span className='headeingcolorblue'>
                            At Bridge Health, we understand the <br></br> importance of elderly care.
                        </span>
                        <br></br>

                        Bridge Health's One Care Program revolutionizes geriatric care in India by providing specialized
                        plans to improve the lifespan and health span of the elderly population.
                        It starts with a Comprehensive Elder Care Assessment (CECA) to evaluate functional abilities,
                        physical and cognitive health, and mental well-being.
                        Our clinical experts then create personalized prevention and treatment plans based on the
                        assessments.

                    </p>
                </div>
            </div>

            <div class="col-lg-5">
                <img src={require('../../assets/images/shape/care3.png')} alt="" className='width100 imgFloatRight' />
            </div>

        </div>
    </div>

    <section class="contact-section">
        <div class="auto-container">
            <div class="row reverseFlex">
                <div class="col-lg-6">
                    <h2 className='header1'>
                        <span className='headeingcolorblack'> The</span>
                        <span className='headeingcolorblue'> Bridge Health</span>
                        <span className='headeingcolorblack'> Advantage </span>
                    </h2>
                    <ul className='listicon'>
                        <li>
                            Home care
                        </li>

                        <li>
                            Consults with experts
                        </li>

                        <li>
                            Assistive care
                        </li>

                        <li>
                            Diet and exercise plans for improved health
                        </li>

                        <li>
                            Nursing at home
                        </li>

                        <li>
                            Dialysis at home
                        </li>

                        <li>
                            Physiotherapy at home
                        </li>

                        <li>
                            Medicine delivered directly to your home
                        </li>

                        <li>
                            X-ray and ECG at home
                        </li>

                        <li>
                            Blood and urine sample collection at home
                        </li>

                    </ul>
                </div>

                <div class="col-lg-5">
                    <img src={require('../../assets/images/shape/care4.png')} alt=""
                        className='width100 marginTop40reverse' />
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="auto-container">
            <div class="sec-title text-center">
                <h2 className='header1'>
                    <span className='headeingcolorblack'>Giving the Elderly the Care </span>
                    <span className='headeingcolorblue'> They Deserve </span>
                </h2>
            </div>
            <div class="btn-box text-center btn5">
                <ContactForm buttonText="BOOK NOW" popupPosition="right" />
            </div>
        </div>
    </section>

    <Footer />

</>
)
}
}

export default elderlyCare;