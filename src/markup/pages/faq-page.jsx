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
            selectedCategory: 'Category',
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

        // Update the selected checkboxes in state
        this.setState({ checkboxes });
    };

    handleCategoryChange = (event) => {
        this.setState({ selectedCategory: event.target.value });
    };

    render() {
        const { searchQuery, selectedCategory, checkboxes } = this.state;

        const selectedCategories = checkboxes
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.name);

        return (
            <>
                <Header />

                {/* <!-- Page Banner Section --> */}
                <section class="team-section padding">
                    {/* About Section Two */}
                    <section class="container-fluid">
                        <div class="row align-items-center auto-container reverseFlex blogPagebox">

                            <div class="col-lg-5">
                                <div class="content-box marginTop40header">

                                    <div class="sec-title text-center textleft">
                                        <h2 className='textleft fontSize'>
                                            <span className='headeingcolorblack'> Got a </span>
                                            <span className='headeingcolorblue'> query? </span> <br></br>
                                            <span className='headeingcolorblack'> We are here to help. </span>
                                        </h2>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class=" imgright">
                                    <img src={require('./../../assets/images/shape/faqhead.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className='faqBack'>
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
                                        <select className="custom-dropdown-faq" value={selectedCategory} onChange={this.handleCategoryChange}>
                                            <option value="Category">CATEGORY</option>
                                            <option value="About Proactive Health">About Proactive Health</option>
                                            <option value="Annual Health Plans">Annual Health Plans</option>
                                            <option value="All Health Services">All Health Services</option>
                                            <option value="Payments & Refunds">Payments & Refunds</option>
                                            <option value="More Common Questions">More Common Questions</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="checkbox-row-faq">
                                    {checkboxes.slice(0, 5).map((checkbox, index) => (
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
                            </div>
                        </div>
                    </div>

                </section>

                <section>
                    <div>
                        <FaqQuestions selectedCategory={selectedCategory} selectedCategories={selectedCategories} />
                    </div>
                </section>

                <Footer />
            </>
        )
    }


}

export default FAQ;
