import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import FaqQuestions from './faq-questions';

const aboutbg = require('./../../assets/images/shape/faqhead.png');


class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            category: 'Category',
            checkboxes: [
                { name: 'About Proactive Health', checked: false },
                { name: 'Annual Health Plans', checked: false },
                { name: 'All Health Services', checked: false },
                { name: 'Payments & Refunds', checked: false },
                { name: 'More Common Questions', checked: false },
            ],
        };
    }

    componentDidMount() {
        document.title = 'FAQ | Bridge Health';
    }

    handleInputChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    handleCategoryChange = (event) => {
        this.setState({ category: event.target.value });
    };

    handleCheckboxChange = (index) => {
        const { checkboxes } = this.state;
        checkboxes[index].checked = !checkboxes[index].checked;
        this.setState({ checkboxes });
    };

    render() {
        const { searchQuery, category, checkboxes } = this.state;
        return (
            <>
                <Header />

                {/* <!-- Page Banner Section --> */}
                <section class="internalpage-faq internalpageresponsive style-two" style={{ backgroundImage: "url(" + aboutbg + ")" }}>
                    <div class="auto-container">
                        <div class="content-box">
                            <div class=" text-center textleft">
                                <h2 className='textleft fontSize'>
                                    <span className='headeingcolorblack'> Got a </span>
                                    <span className='headeingcolorblue'> query? </span> <br></br>
                                    <span className='headeingcolorblack'> We are here to help. </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container-fluid">
                        <div className="auto-container">
                            <div className="search-containerfaq custom-searchfaq">
                                <input
                                    type="text"
                                    placeholder="What would you like to know?"
                                    value={searchQuery}
                                    onChange={this.handleInputChange}
                                    className='search-input-faq underline-placeholder-faq'
                                />
                                <button className="search-button-faq">
                                    <img src={require('../../assets/images/shape/Group 237788.png')} alt="" className='' />
                                </button>
                            </div>

                            <div className="search-bar-faq">
                                <div className='row'>
                                    <div className="col suggested-faq">
                                        <h4>SUGGESTED TOPICS:</h4>
                                    </div>
                                    <div className="col ">
                                        <select className="custom-dropdown-faq" value={category} onChange={this.handleCategoryChange}>
                                            <option value="Category">CATEGORY</option>
                                            <option value="1">About Proactive Health</option>
                                            <option value="2">Annual Health Plans</option>
                                            <option value="3">All Health Services</option>
                                            <option value="4">Payments & Refunds</option>
                                            <option value="5">More Common Questions</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="checkbox-row-faq">
                                    {checkboxes.slice(0, 2).map((checkbox, index) => (
                                        <label key={index}>
                                            <input
                                                type="checkbox"
                                                checked={checkbox.checked}
                                                onChange={() => this.handleCheckboxChange(index)}
                                            />
                                            {checkbox.name}
                                        </label>
                                    ))}
                                </div>
                                <div className="checkbox-row-faq ">
                                    {checkboxes.slice(2).map((checkbox, index) => (
                                        <label key={index + 2}>
                                            <input
                                                type="checkbox"
                                                checked={checkbox.checked}
                                                onChange={() => this.handleCheckboxChange(index + 2)}
                                            />
                                            {checkbox.name}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section>
                    <div>
                        <FaqQuestions />
                    </div>
                </section>

                <Footer />
            </>
        )
    }


}

export default FAQ;
