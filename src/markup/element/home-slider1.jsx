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
                                <h1 style={{fontSize: 50 + 'px'}}>{slide.title}</h1>
                                <h2>{slide.finan}<span>{slide.dox} </span></h2>
                                <div className="text" style={{fontSize: 33 + 'px'}}>{slide.description}</div>
                                <div className="btn-box">
                                    <Link to={'/#'} className="theme-btn btn-style-one">
                                        <span className="btn-title">{slide.btnService}</span>
                                    </Link></div>
                            </div>
                        </div>)}
                </Slider>
            </>
        )
    }
}
export default HomeSlider1;