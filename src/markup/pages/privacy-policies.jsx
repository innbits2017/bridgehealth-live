import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/shape/car1.png');


class privacyPolicies extends Component {

    render() {
        return (
            <>
                <Header />
                {/* <!-- Page Banner Section --> */}
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>
                </section>
                <div class="auto-container commimgsoon">
                    <div class=" text-center">
                        <h2 className='fontSize'>
                            <span className='headeingcolorblue'> Coming Soon...  </span>
                            <span className='headeingcolorblack'> </span><br></br>
                            <span className='headeingcolorblack'>Privacy Policies </span>

                        </h2>
                    </div>

                </div>

                <Footer />
            </>
        )
    }


}

export default privacyPolicies;
