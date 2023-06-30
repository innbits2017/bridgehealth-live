import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/shape/comming.png');


class mediaAndPR extends Component {

    render() {
        return (
            <>
                <Header />
                {/* <!-- Page Banner Section --> */}
                <section class="page-banner commimgsoon">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>
                </section>
           
                <Footer />
            </>
        )
    }


}

export default mediaAndPR;
