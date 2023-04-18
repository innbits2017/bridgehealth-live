import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';


const videobg1 = require('./../../assets/images/shape/videoback.png');


class VideoPopup1 extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <>

                <section class="video-section" style={{ backgroundImage: "url(" + videobg1 + ")" }}>
                    <div class="auto-container">
                        {/* <div class="default-video-box text-center wow zoomIn" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <Link onClick={this.openModal} class="overlay-link lightbox-image video-fancybox ripple"><span class="fas fa-play"></span></Link>
                        </div> */}
                        <div class="sec-title light text-center paadintop">
                            {/* <div class="sub-title">Intro Video</div> */}
                            <h2>Learn more about <br></br>Preventive Healthcare.</h2>
                        </div>
                    </div>
                </section>

                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({ isOpen: false })} />


            </>
        )
    }
}
export default VideoPopup1;