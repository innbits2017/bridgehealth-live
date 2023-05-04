import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../../assets/css/slider.css';

const slides = [
    {
        title: 'Lets help you #BridgeTheGap',
        description: 'Personalised and holistic preventive health plans for you and your loved ones',
        // btnLearn: "-- Learn More --",
        // finan: "Finan",
        // dox: "dox",
        btnService: "GET STARTED",
        image: require('./../../assets/images/main-slider/1095035413-preview.gif'),
    },

];


class HomeSlider1 extends Component {


    render() {
        return (
            <>
                <Slider className="slider-wrapper" autoplay >
                    {slides.map((slide, index) =>
                        <div key={index} className="slider-content" style={{ background: `url('${slide.image}') no-repeat center center` }}>
                            <div className="inner">
                                <h1>{slide.title}</h1>
                                <h2>{slide.finan}<span>{slide.dox} </span></h2>
                                <div class="text">{slide.description}</div>
                                <div class="btn-box">
                                    <Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">{slide.btnService}</span>
                                    </Link></div>
                            </div>
                        </div>)}
                </Slider>
            </>
        )
    }
}
export default HomeSlider1;