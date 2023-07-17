import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';
import { Link } from 'react-router-dom';
import Diagnosis from './diagnosis';



class shingles extends Component {

    componentDidMount() {
        document.title = 'Shingles | Bridge Health';
    }

    render() {
        return (
            <>
                <Header />

                <section class="team-section padding doctoeback">
                    {/* About Section Two */}
                    <section class="container-fluid">
                        <div class="row align-items-center auto-container reverseFlex">

                            <div class="col-lg-6">
                                <div class="content-box marginTop40header">

                                    <div class="sec-title text-center textleft">
                                        <h2 className='textleft fontSize50'>
                                            <span className='headeingcolorblue wrap-shin'>Are you 50 years</span> <br></br> <span
                                                className='headeingcolorblue wrap-shin'> of age or older? </span>
                                        </h2>

                                        <h3 className='textleft marginTop40'>You could be at risk<br></br> for Shingles.
                                        </h3>
                                    </div>
                                    <div class="btn-box btn5">
                                        <ContactForm buttonText="CONSULT / BOOK" popupPosition="right" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="imgright">
                                    <img src={require('../../assets/images/shape/shingles4.png')} alt="" className='imgwidth' />
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="container">
                    <div className="wrap-head mt-5">
                        <img src={require('../../assets/images/shape/shingles3.png')} alt="" className='wrap-labwidth' />
                    </div>
                    <div className="wrap-tpo">
                        <div className="row">
                            <div className="col-lg-3 wrap-item-header">
                                <a href='' className="wrap-cont-col">
                                    <div className="card wrap-shig bg1">
                                        <div className="card-body wrap-shig-text">
                                            <p className="card-text-partners">What is Shingles/Herpes?</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 wrap-item-header">
                                <a href='' className="wrap-cont-col">
                                    <div className="card wrap-shig bg2">
                                        <div className="card-body wrap-shig-text">
                                            <p className="card-text-partners">Symptoms and intensity of pain</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-lg-3 wrap-item-header">
                                <a href='' className="wrap-cont-col">
                                    <div className="card wrap-shig bg3">
                                        <div className="card-body wrap-shig-text">
                                            <p className="card-text-partners">About the <br></br>Vaccine</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-3 wrap-item-header">
                                <a href='' className="wrap-cont-col">
                                    <div className="card wrap-shig bg4">
                                        <div className="card-body wrap-shig-text">
                                            <p className="card-text-partners">Are you at risk <br></br>for Shingles?</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 wrap-item-header">
                                <a href='' className="wrap-cont-col">
                                    <div className="card wrap-shig bg5">
                                        <div className="card-body wrap-shig-text">
                                            <p className="card-text-partners">Why take <br></br>the vaccine?</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 wrap-item-header">
                                <a href='' className="wrap-cont-col">
                                    <div className="card wrap-shig bg6">
                                        <div className="card-body wrap-shig-text">
                                            <p className="card-text-partners">Take the <br></br>vaccine today!</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </section >

                <section>
                    <div class="auto-container marginTop80 wrap-header">
                        <h2 className='header1 textaligncenter'>
                            <span className='headeingcolorblack wrap-header1'>Listen to what the doctor have to <br></br>say about Shingles/Herpes</span>
                            <span className='headeingcolorblue wrap-header1'> Shingles/Herpes</span>
                        </h2>
                    </div>
                </section >
                <div>
                    <iframe width="100%" height="815" src="https://www.youtube.com/embed/Abglsl0eL3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="btn-box text-center btn5">
                    <ContactForm buttonText="CONSULT / BOOK" popupPosition="right" />
                </div>

                <section className='container wrap-shingles-img'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className="card wrap-inter">
                                <div className="card-body">
                                    <h3 className="card-text-partners">How Painful is Shingles</h3>
                                </div>
                                <img src={require('../../assets/images/shape/sh2.jpeg')} alt="" className='wrap-labwidth1' />

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="card wrap-inter">
                                <div className="card-body">
                                    <h3 className="card-text-partners">Are you at risk OF SHINGLES?</h3>
                                </div>
                                <img src={require('../../assets/images/shape/shi1.png')} alt="" className='wrap-labwidth1' />
                                <div class="btn-box text-center btn5 wrap-btn">
                                    <ContactForm buttonText="CHECK NOW" popupPosition="right" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section>
                    <div className="wrap-img-sec4">
                        <img src={require('../../assets/images/shape/shg1.png')} alt="" className='imgwidth1' />
                    </div>
                    <div>
                        <div className="card wrap-inter1">
                            <div className="card-body">
                                <h2 className='wrap-heading'>WHAT IS SHINGLES?</h2>
                                <p className="card-text-partners1">Shingles, also known as herpes zoster, is a viral infection caused by the varicella-zoster virus—the same virus that causes chickenpox. After recovering from chickenpox, the virus can remain dormant in the body and reactivate later in life, leading to shingles.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container">
                    <div className="wrap-image-item">
                        <img src={require('../../assets/images/shape/symp.png')} alt="" className="image-symp" />
                    </div>
                </section>

                <section className='container mt-5'>
                    <div className='wrap-sites'>
                        <div class="sec-title text-center textleft">
                            <h2 className='textleft fontSize50 wrap-sites-item'>
                                <span className='headeingcolorblue'> SITES</span>
                                <span className='headeingcolorblack'> WHERE SHINGLES OCCUR</span>
                            </h2>
                        </div>
                        <div className="wrap-img-sec7">
                            <img src={require('../../assets/images/shape/sites.png')} alt="" className='imgwidth3' />
                        </div>
                        <div class="btn-box text-center btn5">
                            <ContactForm buttonText="CONSULT / BOOK" popupPosition="right" />

                        </div>
                    </div>
                </section>

                <section className="container">
                    <div class="sec-title text-center textleft">
                        <h2 className='textleft fontSize50 wrap-sites-poss'>
                            <span className='headeingcolorblack'>POSSIBLE COMPLICATIONS </span>
                            <span className='headeingcolorblue'> OF SHINGLES</span>
                        </h2>
                        <p class="subheading_shingles">While most people recover from Shingles infection fully, some might face health complications</p>
                    </div>
                   
                    <div class="centre_content">
                        <div class="list">
                            <ul>
                                <li class="list_items" onclick="myFunction()">Postherpetic neuralgia (PHN)</li>
                                <li class="list_items" onclick="myFunction()">Vision Problems</li>
                                <li class="list_items" onclick="myFunction()">Skin Infections</li>
                                <li class="list_items" onclick="myFunction()">Neurological Issues</li>
                                <li class="list_items" onclick="myFunction()">Disseminated Shingles</li>
                                <li class="list_items" onclick="myFunction()">Nerve Damage</li>
                            </ul>
                        </div>

                        <div id="image_para_section">
                            <img src={require('../../assets/images/shape/possible.png')} alt="" className='image_shingles' />
                            {/* <img class="image_shingles" src="shingles_image.png" /> */}
                            <p class="paragraph_after_image">
                            PHN is a health complication that affects up to 25% of people with Shingles. One of the 
                            main symptoms of PHN is nerve pain that continues for months or years after the Shingles 
                            rash is healed. The pain usually is experienced in the affected area.
                            </p>
                        </div>
                    </div>
                </section>






                {/* MORE ABOUT SHINGLE  */}
                <section className='mt-5'>
                    <div className='wrap-sites'>
                        <div class="sec-title text-center textleft">
                            <h2 className='textleft fontSize50 wrap-sites-item'>
                                <span className='headeingcolorblack'>MORE ABOUT </span>
                                <span className='headeingcolorblue'> SHINGLES</span>
                            </h2>
                        </div>
                        <div className="wrap-img-sec7">
                            <img src={require('../../assets/images/shape/Shingles8.png')} alt="" className='imgwidth3' />
                        </div>
                    </div>
                </section>

                <section className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className="card wrap-inter5">
                                <div className="card-body">
                                    <a href='' >
                                        <p className="card-text-partners5">Symptoms and<br></br> Diagnosis</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="card wrap-inter5">
                                <div className="card-body">
                                    <p className="card-text-partners5">Treatment & <br></br> Prevention</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="card wrap-inter5">
                                <div className="card-body">
                                    <p className="card-text-partners5">Shingles <br></br>Vaccine</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="card wrap-inter5">
                                <div className="card-body">
                                    <p className="card-text-partners5">Other Common<br></br> Questions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <Diagnosis />

                <section style={{ marginBottom: 4 + 'rem' }}>
                    <div class="auto-container">
                        <h2 className='head-title-margin'>

                        </h2>

                        <div class="row">
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/shape/blog.png')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Blog heading</div>

                                        <h3><Link to={''}>What Does Your GI Score Indicate?</Link></h3>
                                        <div class="text">As a child, you were likely cautioned to limit your intake of sweets. Remember the warning not to go</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/shape/blog1.png')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Blog heading</div>

                                        <h3><Link to={''}>Myths And Facts About GI Foods</Link></h3>
                                        <div class="text">Carbohydrates have been villainized in recent years as the culprit for weight gain and even chronic diseases</div>
                                    </div>
                                </div>
                                {/* <button class="theme-btn btn-style-one btnblog" type="submit" name="submit-form"><span class="btn-title btnblog">READ ALL BLOGS</span></button> */}

                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/shape/blog3.png')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Blog heading</div>

                                        <h3><Link to={''}>Everything you need to know about Glycemic Index</Link></h3>
                                        <div class="text">Even with the world becoming more health-conscious, diseases seem to be on the rise. While you frantically</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <div class="button-txt">
                            <Button class="btn"></Button>
                        </div> */}

                    </div>
                </section>
                {/* <section>
                    <div className="wrap-header">
                        <div class="auto-container marginTop80">
                            <div class="sec-title text-center">
                                <h2 className='header1'>
                                    <span className='headeingcolorblack'> It’s a </span>
                                    <span className='headeingcolorblue'> Doctor on call. </span>
                                    <span className='headeingcolorblack'> Literally! </span>
                                </h2>
                            </div>
                            <div class="btn-box text-center btn5">
                                <ContactForm buttonText="BOOK NOW" popupPosition="right" />

                            </div>
                        </div>
                    </div>
                </section> */}
                <Footer />
            </>
        )
    }
}

export default shingles;