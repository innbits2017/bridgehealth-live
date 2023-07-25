import React, { Component } from 'react';

class Menu extends Component {

    render() {
        return (
            <>
                <div class="collapse navbar-collapse show clearfix " id="navbarSupportedContent">
                    <div class="menu-outer">
                        <ul class="navigation clearfix">
                            <li><a href='/about-us'>About Us</a> </li>
                            <li><a href="/leadership">Leadership Team</a></li>
                            <li><a href="/team">Clinical Team</a></li>
                            <li><a href='/our-services' >Our Services</a></li>
                            <li><a href='/experience-centre' >Experience Center</a></li>
                            <li><a href='/blog'>Blogs</a></li>
                            <li><a href='/media-and-pr'>Media</a></li>
                            <li><a href='/faq'>FAQ</a></li>
                            <li><a href='/career'>Career</a></li>
                            <li><a href='/contact-us'>Contact</a></li>
                            <li><a href='/personal-membership-program'>Health Plans</a></li>
                            <li><a href='/health-risk-assessment'>Health Risk Assessment</a></li>


                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
export default Menu;