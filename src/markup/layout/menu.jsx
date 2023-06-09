import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Menu extends Component {


    render() {
        return (
            <>
                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul class="navigation clearfix">
                        <li class="dropdown"><Link to={'/'}>About Us</Link>
                            <ul>
                                <li><Link to={'/#'}>Home page 01</Link></li>
                                <li><Link to={'/index-2'}>Home page 02</Link></li>
                                <li><Link to={'/index-3'}>Home page 03</Link></li>
                                <li><Link to={'/index-4'}>Home page 04</Link></li>
                                <li><Link to={'/onepage'}>Onepage Version</Link></li>
                                <li><Link to={'/rtl-home'}>Home RTL</Link></li>
                                <li class="dropdown"><Link to={'/#'}>Header Styles</Link>
                                    <ul>
                                        <li><Link to={'/'}>Header Style One</Link></li>
                                        <li><Link to={'/index-2'}>Header Style Two</Link></li>
                                        <li><Link to={'/index-3'}>Header Style Three</Link></li>
                                        <li><Link to={'/index-4'}>Header Style Four</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link to={'/'}>Health Plan</Link></li>
                        <li class="dropdown"><Link to={'/#'}>Services</Link>
                            <ul>
                                <li><Link to={'/services-1'}>Services One</Link></li>
                                <li><Link to={'/services-2'}>Services Two</Link></li>
                                <li><Link to={'/services-details'}>Services Details</Link></li>
                            </ul>
                        </li>
                        <li class="dropdown"><Link to={'/#'}>Health Risk Assessment</Link>
                            <ul>
                                <li><Link to={'/portfolio-1'}>Portfolio One</Link></li>
                                <li><Link to={'/portfolio-2'}>Portfolio Two</Link></li>
                                <li><Link to={'/portfolio-details'}>Portfolio Details</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </>
        )
    }
}
export default Menu;