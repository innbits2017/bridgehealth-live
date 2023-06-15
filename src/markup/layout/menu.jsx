import React, { Component } from 'react';

class Menu extends Component {

    render() {
        return (
            <>
                <div class="collapse navbar-collapse show clearfix " id="navbarSupportedContent">
                    <div class="menu-outer">
                        <ul class="navigation clearfix">
                            <li class="dropdown"><a href='/about-us'>About Us</a>
                                <ul>
                                    <li><a href='/leadership'>Board of Direchrefrs</a></li>
                                    <li><a href='/team'>Leadership Team</a></li>
                                    <li><a href='/team'>Clinical Team</a></li>
                                </ul>
                            </li>
                            <li><a href='/our-services' >Our Services</a></li>
                            <li><a href='/' >Experience Center</a></li>
                            <li><a href='/blog'>Blogs</a></li>
                            <li><a href='/'>Media</a></li>
                            <li><a href='/'>FAQ</a></li>
                            <li><a href='/career'>Career</a></li>
                            <li><a href='/contact-us'>Contact</a></li>
                            <li><a href='/'>Health Plans</a></li>
                            <li><a href='/'>Health Risk Assessment</a></li>


                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
export default Menu;