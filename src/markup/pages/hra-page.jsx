import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/shape/coming.png');


class HRA extends Component {

    render() {
        return (
            <>
                <Header />

                <section class="internalpage internalimp  internalpageresponsive style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">
                            {/* 
                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblue'> Coming   Soon...</span> <br></br>
                                    <span className='headeingcolorblack'>HRA Page</span>


                                </h2>

                            </div>
                            <button class="commonBtnforAll">Apply Now</button> */}


                        </div>

                    </div>
                </section>

                <section class="internalpage1 ">

                    <div class="auto-container">
                        <div class="content-box">
                            
                            <div class=" text-center textleft">
                                <h2 className=' fontSize'>
                                    <span className='headeingcolorblue'> Coming   Soon...</span> <br></br>
                                    <span className='headeingcolorblack'>HRA Page</span>


                                </h2>

                            </div>
                            {/* <button class="commonBtnforAll">Apply Now</button> */}


                        </div>

                    </div>


                </section>



                <Footer />
            </>
        )
    }


}

export default HRA;
