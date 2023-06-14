import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/shape/car1.png');


class termsOfUse extends Component {

    render() {
        return (
            <>
                <Header />

                <section class="internalpage internalimp  internalpageresponsive style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">

                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblue'> Coming Soon...  </span>
                                    <span className='headeingcolorblack'> </span><br></br>
                                    <span className='headeingcolorblack'>Terms Of Use </span>

                                </h2>

                            </div>
                            <button class="commonBtnforAll">Apply Now</button>


                        </div>

                    </div>
                </section>

                <section class="internalpage ">


                </section>



                <Footer />
            </>
        )
    }


}

export default termsOfUse;
