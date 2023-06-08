import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../../assets/css/slider.css';

const slides = [
    {
        title: 'The Gift of Preventive Healthcare made easy.',
        description: 'Our Annual Health Plans are membership-based integrated healthcare programs covering everything from clinical assessments to consultations, lab tests to nutrition sessions, lifestyle management to emotional wellness, and more',
        // btnLearn: "-- Learn More --",
        // finan: "Finan",
        // dox: "dox",
        btnService: "GET STARTED",
        image: require('./../../assets/images/shape/b2c2.png'),
    },
  

];


class b2c_page extends Component {
    componentDidMount() {
        document.title = 'B2C Page | Bridge Health';
    }

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
export default b2c_page;