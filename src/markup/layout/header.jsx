import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'
import Menu from './menu'

const options = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Bengli', label: 'Bengli' }
]


class Header extends Component {

    state = {
        scrolled: false
    };

    // componentDidMount() {
    //     var btn = document.querySelector('.mobile-nav-toggler');
    //     var closeBtn = document.querySelector('.close-btn');
    //     var body = document.getElementsByTagName('body')[0];

    //     function addFunc() {
    //         return body.classList.add("mobile-menu-visible");
    //     }
    //     function closeFunc() {
    //         return body.classList.remove("mobile-menu-visible");
    //     }

    //     btn.addEventListener('click', addFunc);
    //     closeBtn.addEventListener('click', closeFunc);

    //     window.addEventListener("scroll", this.handleScroll);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener("scroll", this.handleScroll);
    // }

    // handleScroll = event => {
    //     if (window.scrollY > 100) {
    //         this.setState({ scrolled: true });
    //     }
    //     else {
    //         this.setState({ scrolled: false });
    //     }
    // };




    render() {
        const { scrolled } = this.state;
        return (
            <>
                <header class={scrolled ? "main-header fixed-header" : "main-header"}>
                    <div class="header-top">
                        <div class="auto-container">
                            <div class="inner">
                                <div class="top-left">


                                    <div class="logo-box">
                                        <div class="logo"><Link to={'/#'}>
                                            <img src={require('../../assets/images/logo.png')} alt="" /></Link></div>
                                    </div>
                                </div>

                                <div class="top-middile">
                                    {/* <div class="language">
                                        <span>Language:</span>
                                        <form action="#" class="language-switcher">
                                            <Select options={options} />
                                        </form>
                                    </div> */}
                                    <div class="contact-info">

                                        {/* <nav>
                                            <ul>

                                                <li>
                                                    <a href="#">
                                                        <span class="icon"><i class="fas fa-home"></i></span>
                                                        <span class="title">Home</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="icon"><i class="fas fa-user"></i></span>
                                                        <span class="title">Profile</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="icon"><i class="fas fa-envelope"></i></span>
                                                        <span class="title">Messages</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="icon"><i class="fas fa-info"></i></span>
                                                        <span class="title">Help</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="icon"><i class="fas fa-cog"></i></span>
                                                        <span class="title">Setting</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="icon"><i class="fas fa-lock"></i></span>
                                                        <span class="title">Password</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
                                                        <span class="title">Sign Out</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav> */}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="top-right flotright">
                        <a href={'/#'}><span class="btn-title">
                        <img src={require('../../assets/images/Group3.png')} alt="" />
                            </span></a>
                        <a href={'/#'}><span class="btn-title">
                        <img src={require('../../assets/images/Group.png')} alt="" />
                            </span></a>
                        <a href={'/#'}><span class="btn-title">
                        <img src={require('../../assets/images/Group1.png')} alt="" />
                            </span></a>
                        <a href={'/#'}><span class="btn-title">
                        <img src={require('../../assets/images/Group2.png')} alt="" />
                            </span></a>
                    </div>

                    <div class="top-right flotright1">
                        <a href={'/#'}><span class="btn-title1">
                        <img style={{marginTop: 80 + 'px'}} src={require('../../assets/images/Group53.png')} alt="" />
                            </span>
                        </a>
                    </div> 


                </header>

            </>
        )
    }
}
export default Header;


