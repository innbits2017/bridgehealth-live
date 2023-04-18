import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bgimg7 = require('./../../assets/images/background/image-7.jpg');

const Testimonial1_content = [
    {
        thumb: require('./../../assets/images/resource/a1.png'),
        author: 'Dr. Dhanya Prabhu Ramadas',
        designation: 'Head - Clinical Services',
        title: 'Design Quality',
        description:
            'Dr. Dhanya is a highly motivated, team-oriented, and compassionate family physician. She believes in providing evidence-based holistic care to all her patients.',

    },
    {
        thumb: require('./../../assets/images/resource/a2.png'),
        author: 'Dr Vedavathi. N',
        designation: 'Consultant Physician',
        title: 'Design Quality',
        description:
            'Dr. Veda is an empathetic, competent and passionate doctor. She has over 10 years of experience in identifying and screening individuals',

    },
    {
        thumb: require('./../../assets/images/resource/a3.png'),
        author: 'Dr. Jyotsna Mathai',
        designation: 'Consultant Physician',
        title: 'Design Quality',
        description:
            'Dr. Jyotsna is a Consultant Physician with a special interest in Womens Health. She has completed her MBBS ',

    },
    {
        thumb: require('./../../assets/images/resource/thumb-4.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
        title: 'Design Quality',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',

    },
]


class Testimonial1 extends Component {


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <>
                <section class="testimonial-section testback">
                <div class="auto-container">
                        <div class="sec-title text-center">
                            <h2>Confused about your health checks?<br></br>
                                <span className='headeingcolorblack'> Meet The </span> <span className='headeingcolorblue'>Bridgers</span>
                            </h2>
                        </div>

                    </div>
                    <div class="auto-container">
                    
                        <div class="row">
                            <div className="col-xl-12">
                                <Slider {...settings} className="theme_carousel">
                                    {Testimonial1_content.map((item, id) => (
                                        <div class="slide-item" key={id}>
                                            {/* <!-- Testimonial-block --> */}
                                            <div class="testimonial-block">
                                            <div class="author-info">
                                                    <div class="thumb"><img src={item.thumb} alt="" /></div>
                                                
                                                </div>
                                                <div class="inner-box">
                                                        <h4>{item.author}</h4>
                                                    <div class="designation">{item.designation}</div>
                                                    <div class="text">{item.description} </div>
                                                </div>
                                             
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
export default Testimonial1;