import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

    render() {
        return (
            <>
                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <div class="menu-outer">
                        <ul class="navigation clearfix">
                            <li class="dropdown"><Link to={'/about-us'}>About Us</Link>
                                <ul>
                                    <li><Link to={'/leadership'}>Board of Directors</Link></li>
                                    <li><Link to={'/team'}>Leadership Team</Link></li>
                                    <li><Link to={'/team'}>Clinical Team</Link></li>
                                </ul>
                            </li>
                            <li><Link to={'/our-services'} >Our Services</Link></li>
                            <li><Link to={'/'} >Experience Center</Link></li>
                            <li><Link to={'/blog'}>Blogs</Link></li>
                            <li><Link to={'/'}>Media</Link></li>
                            <li><Link to={'/'}>FAQ</Link></li>
                            <li><Link to={'/career'}>Career</Link></li>
                            <li><Link to={'/contact-us'}>Contact</Link></li>
                            <li><Link to={'/'}>Health Plans</Link></li>
                            <li><Link to={'/'}>Health Risk Assessment</Link></li>


                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
export default Menu;