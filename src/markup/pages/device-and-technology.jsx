import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/shape/comming.png');


class deviceAndTechnology extends Component {

    render() {
        return (
            <>
                <Header />
              {/* <!-- Page Banner Section --> */}
              <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>
                </section>
                 

                <Footer />
            </>
        )
    }


}

export default deviceAndTechnology;
