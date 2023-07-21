import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../element/contact-form';
import { Link } from 'react-router-dom';
import ShinglesPopup from '../element//shinglesPopup'
import ShinglessTab from '../element/ShinglessTab';
import TabAccordian from '../element/TabAccordian';
import RadioButtonComponent from '../element/shingles-popup';


function shingles() {
    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }


    };
    const handleClickScroll1 = () => {
        const element1 = document.getElementById('section-2');

        if (element1) {
            element1.scrollIntoView({ behavior: 'smooth' });
        }

    };
    const handleClickScroll2 = () => {
        const element2 = document.getElementById('section-3');

        if (element2) {
            element2.scrollIntoView({ behavior: 'smooth' });
        }

    };

    return (
        <>
            <Header />

            <section class="team-section padding doctoeback">
                {/* About Section Two */}
                <section class="container-fluid backimg3">
                    <div class="row align-items-center auto-container reverseFlex">

                        <div class="col-lg-6">
                            <div class="content-box marginTop40header">

                                <div class="sec-title text-center textleft">
                                    <h2 className='textleft fontSize50 wrap-font mt-5'>
                                        <span className='headeingcolorblue wrap-shin'>Shield Yourself </span> <br></br> <span
                                            className='headeingcolorblue wrap-shin'> from Shingles </span>
                                    </h2>

                                    <h3 className='textleft marginTop40 wrap-text1'>Prioritize prevention and <br></br> enjoy a shingles-free life
                                    </h3>
                                </div>
                                <div class="btn-box btn5">
                                    <ContactForm buttonText="CONSULT / BOOK" popupPosition="right" className='btn-style-one' />
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
                <div className="wrap-shi">
                    <div className="wrap-head mt-5">
                        <img src={require('../../assets/images/shape/shingles3.png')} alt="" className='wrap-labwidth' />
                    </div>
                    <div className="wrap-tpo">
                        <div className="row">
                            <div className="col-lg-3 wrap-item-header">
                                <div className="card wrap-shig bg1" onClick={handleClickScroll}>
                                    <div className="card-body wrap-shig-text">
                                        <p className="card-text-partners">What is Shingles/Herpes?</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 wrap-item-header" >
                                <div className="card wrap-shig bg2" onClick={handleClickScroll1}>
                                    <div className="card-body wrap-shig-text">
                                        <p className="card-text-partners">Symptoms and intensity of pain</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-lg-3 wrap-item-header">
                                <div className="card wrap-shig bg3" onClick={handleClickScroll2}>
                                    <div className="card-body wrap-shig-text">
                                        <p className="card-text-partners">About the <br></br>Vaccine</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 wrap-item-header">
                                <div className="card wrap-shig bg4">
                                    <div className="card-body wrap-shig-text">
                                        <p className="card-text-partners">Are you at risk <br></br>for Shingles?</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 wrap-item-header">
                                <div className="card wrap-shig bg5" onClick={handleClickScroll2}>
                                    <div className="card-body wrap-shig-text">
                                        <p className="card-text-partners">Why take <br></br>the vaccine?</p>
                                    </div>
                                </div>
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
                </div>
            </section >

            {/* Mobile Code  */}

            <section className="container">
                <div className="mobile-element">
                    <div className="wrap-head mt-5">
                        <img src={require('../../assets/images/shape/MobileImg.png')} alt="" className='wrap-labwidth' />
                    </div>
                    <div className="wrap-tpo1">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 wrap-item-header">
                                <a href='' className="wrap-cont-col">
                                    <div className="card wrap-shig1 bg11">
                                        <div className="card-body wrap-shig-text">
                                            <p className="card-text-partners1">What is Shingles/Herpes?</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-6 col-md-6 wrap-item-header">
                                <a href='' className="wrap-cont-col">
                                    <div className="card wrap-shig1 bg21">
                                        <div className="card-body wrap-shig-text">
                                            <p className="card-text-partners1">Symptoms and intensity of pain</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 wrap-item-header">
                                <a href='' className="wrap-cont-col">
                                    <div className="card wrap-shig1 bg31">
                                        <div className="card-body wrap-shig-text">
                                            <p className="card-text-partners1">About the Vaccine</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-6 col-md-6 wrap-item-header">
                                <a href='' className="wrap-cont-col">
                                    <div className="card wrap-shig1 bg41">
                                        <div className="card-body wrap-shig-text">
                                            <p className="card-text-partners1">Are you at risk for Shingles?</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 wrap-item-header">
                                <a href='' className="wrap-cont-col">
                                    <div className="card wrap-shig1 bg51">
                                        <div className="card-body wrap-shig-text">
                                            <p className="card-text-partners1">Why take the vaccine?</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-6 col-md-6 wrap-item-header">
                                <a href='' className="wrap-cont-col">
                                    <div className="card wrap-shig1 bg61">
                                        <div className="card-body wrap-shig-text">
                                            <p className="card-text-partners1">Take the vaccine today!</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section>
                <div class="auto-container marginTop80 wrap-header">
                    <h2 className='header1 textaligncenter'>
                        <span className='headeingcolorblack wrap-header1 wrap-header2'>Listen to what the doctor have to <br></br>say about</span>
                        <span className='headeingcolorblue wrap-header1 wrap-header2'> Shingles/Herpes</span>
                    </h2>
                </div>
            </section >
            <div>
                < ShinglesPopup />
            </div>
            <div class="btn-box text-center btn5">
                <ContactForm buttonText="CONSULT / BOOK" popupPosition="right" className='btn-style-one' />

            </div>

            <section className='container wrap-shingles-img'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="card wrap-inter6">
                            <div className="card-body">
                                <h3 className="card-text-partners5">How Painful is Shingles</h3>
                            </div>
                            <img src={require('../../assets/images/shape/bridge-health-(Final).gif')} alt="" className='wrap-labwidth12' />

                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="card wrap-inter">
                            <div class="btn-box text-center">
                                <RadioButtonComponent buttonText="CHECK NOW" popupPosition="right" className='btn-style-one' />

                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section id="section-1">
                <div className="shi-wrap">
                    <div className="wrap-img-sec4">
                        <img src={require('../../assets/images/shape/shg1.png')} alt="" className='imgwidth123' />
                    </div>
                    <div>
                        <div className="card wrap-inter1">
                            <div className="card-body">
                                <h2 className='wrap-heading'>WHAT IS SHINGLES?</h2>
                                <p className="card-text-partners1">Shingles, also known as herpes zoster, is a viral infection caused by the varicella-zoster virus—the same virus that causes chickenpox. After recovering from chickenpox, the virus can remain dormant in the body and reactivate later in life, leading to shingles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Code  */}
            <section>
                <div className="shi-wrap-mobile">
                    <div className="wrap-img-sec4">
                        <img src={require('../../assets/images/shape/mobile123.png')} alt="" className='imgwidth12' />
                    </div>
                    <div>
                        <div className="card wrap-inter12">
                            <div className="card-body">
                                <h2 className='wrap-heading1'>WHAT IS SHINGLES?</h2>
                                <p className="card-text-partners12">Shingles, also known as herpes zoster, is a viral infection caused by the varicella-zoster virus—the same virus that causes chickenpox. After recovering from chickenpox, the virus can remain dormant in the body and reactivate later in life, leading to shingles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="desktop-element" id="section-2">
                    <div className="wrap-image-item">
                        <img src={require('../../assets/images/shape/symp.png')} alt="" className="image-symp" />
                    </div>
                </div>
            </section>

            {/* Mobile Code  */}
            <section className="container">
                <div className="mobile-element-item">
                    <div className="wrap-image-item">
                        <img src={require('../../assets/images/shape/mobile1234.png')} alt="" className="image-symp" />
                    </div>
                </div>
            </section>

            <section className='container mt-5'>
                <div className="sites-desktop">
                    <div className='wrap-sites'>
                        <div class="sec-title text-center textleft mb-5">
                            <h2 className='wrap-sites-item'>
                                <span className='headeingcolorblue'> SITES</span>
                                <span className='headeingcolorblack'> WHERE SHINGLES OCCUR</span>
                            </h2>
                        </div>
                        <div className="wrap-img-sec7 mt-4">
                            <img src={require('../../assets/images/shape/sites.png')} alt="" className='imgwidth3' />
                        </div>
                        <div className="parg1-item">
                            <p><i>*Characteristics of Herpes Zoster</i></p>
                        </div>
                        <div class="btn-box text-center btn5 shin-btn1">
                            <ContactForm buttonText="CONSULT / BOOK" popupPosition="right" className='btn-style-one' />

                        </div>
                    </div>
                </div>
            </section>


            {/* Mobile Code  */}
            <section className='container mt-5'>
                <div className="sites-mobile">
                    <div className='wrap-sites'>
                        <div class="sec-title text-center textleft">
                            <h2 className='wrap-sites-item12'>
                                <span className='headeingcolorblue'> SITES</span>
                                <span className='headeingcolorblack'> WHERE SHINGLES OCCUR</span>
                            </h2>
                        </div>
                        <div className="wrap-img-sec7">
                            <img src={require('../../assets/images/shape/Mobile12345.png')} alt="" className='imgwidth3' />
                        </div>
                        <div className="parg12-item">
                            <p><i>*Characteristics of Herpes Zoster</i></p>
                        </div>
                        <div class="btn-box btn5">
                            <ContactForm buttonText="CONSULT / BOOK" popupPosition="right" className='btn-style-one' />
                        </div>
                    </div>
                </div>
            </section>

            <div className="desk-item backGroundRight">
                <div className='container-fulid backimg2'>
                    <div className='container'>
                        <ShinglessTab />
                    </div>
                </div>
            </div>

            {/* MORE ABOUT SHINGLE  */}
            <section>
                <div className="more-desktop">
                    <div className='wrap-sites'>
                        <div class="sec-title text-center textleft">
                            <h2 className='wrap-sites-poss'>
                                <span className='headeingcolorblack'>MORE ABOUT </span>
                                <span className='headeingcolorblue'> SHINGLES</span>
                            </h2>
                        </div>
                        <div className="wrap-img-sec7">
                            <img src={require('../../assets/images/shape/Shingles8.png')} alt="" className='imgwidth3' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile code  */}
            <section className='mt-3'>
                <div className="more-mobile">
                    <div className='wrap-sites'>
                        <div class="sec-title text-center textleft">
                            <h2 className='wrap-sites-poss1'>
                                <span className='headeingcolorblack'>MORE ABOUT </span>
                                <span className='headeingcolorblue'> SHINGLES</span>
                            </h2>
                        </div>
                        <div className="wrap-img-sec7">
                            <img src={require('../../assets/images/shape/mob12.png')} alt="" className='imgwidth3' />
                        </div>
                    </div>
                </div>
            </section>

            <div className='backFaqsRight' id="section-3">
                <div className='container-fulid backFaqsLeft'>
                    <div className='auto-container'>
                        <TabAccordian />
                    </div>
                </div>
            </div>
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
    );
}

export default shingles;