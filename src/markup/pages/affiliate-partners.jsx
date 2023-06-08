import React, { Component } from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer';

const aboutbg = require('./../../assets/images/shape/career1.png');


class affiliatePartners extends Component {

    componentDidMount() {
        document.title = 'Affiliate Partners | Bridge Health';
    }

    render() {
        return (
            <>

                <Header />

                <section class="internalpage style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">

                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblue'> Coming   </span>
                                    <span className='headeingcolorblack'>  Soon..... </span><br></br>

                                </h2>

                            </div>
                            {/* <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Apply Now</span></button> */}


                        </div>

                    </div>
                </section>




                <Footer />
            </>
        )
    }
}

export default affiliatePartners;