import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/background/image-11.jpg');


class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            searchResults: [],
        };
    }


    componentDidMount() {
        // Fetch the data or perform API calls to get the initial search results
        // For demonstration purposes, using a setTimeout to simulate an asynchronous operation
        setTimeout(() => {
            const initialSearchResults = ['result 1', 'result 2', 'result 3'];
            this.setState({ searchResults: initialSearchResults });
        }, 1000); // Simulating a delay of 1 second
    }


    handleSearchTermChange = (event) => {
        const searchTerm = event.target.value;
        this.setState({ searchTerm }, () => {
            this.performSearch();
        });
    };

    performSearch() {
        const { searchTerm } = this.state;
        const pageContent = document.documentElement.innerHTML;
        const regex = new RegExp(searchTerm, 'gi');
        const searchResults = pageContent.match(regex) || [];
        this.setState({ searchResults });
    }


    render() {
        return (
            <>
                <Header />

                {/* <!-- Page Banner Section --> */}
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1 className='colorwhite'>BLOGS</h1>

                    </div>

                </section>
                {/* <!--End Banner Section --> */}


                {/* <!-- News Section --> */}
                <section class="news-section blogdesignerd">
                    <div class="container">
                        <div class="row" style={{ background: 'white' }}>
                            <div class="col-lg-8 mx-auto">

                                <div class="bg-white p-5 ">
                                    {/* <!-- Search --> */}
                                    <div class=" search-box">
                                        <div class="language">
                                            <form action="#" class="language-switcher">
                                                <select>
                                                    <option value="1">Category</option>
                                                    <option value="1">FR</option>
                                                    <option value="1">SP</option>
                                                    <option value="1">BE</option>
                                                </select>
                                            </form>
                                        </div>
                                        <form>
                                            <div class="form-group1">
                                                <input
                                                    type="search"
                                                    name="search-field"
                                                    value={this.state.searchTerm}
                                                    onChange={this.handleSearchTermChange}
                                                    placeholder="Search Topic"
                                                    required="" />
                                                {/* <button type="submit" style={{marginLeft: 40 + '%'}}><span class="icon far fa-search searchblog"></span></button> */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {this.state.searchResults.map((result, index) => (
                        <div class="auto-container" key={index}>
                            <div class="row">
                                {/* <!-- News Block One --> */}
                                <div class="news-block-one col-lg-4">
                                    <div class="inner-box">
                                        <div class="image"><Link to={'/#'}>
                                            <img src={require('../../assets/images/resource/b1.png')} alt="" /></Link></div>
                                        <div class="lower-content">
                                            <div class="category">Blog heading</div>

                                            <h3><Link to={'/blog-details'}>Top 10 yoga poses for overall fitness</Link></h3>
                                            <div class="text">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod temp incididunt ut labore</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- News Block One --> */}
                                <div class="news-block-one col-lg-4">
                                    <div class="inner-box">
                                        <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/b2.png')} alt="" /></Link></div>
                                        <div class="lower-content">

                                            <div class="category">Blog heading</div>
                                            <h3><Link to={'/blog-details'}>Top ten acai bowls to maintain that nice healthy glow</Link></h3>
                                            <div class="text">Lorem ipsum dolor sit amet, consectet adipisci elit, sed do eiusmod temp incididunt ut labore</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- News Block One --> */}
                                <div class="news-block-one col-lg-4">
                                    <div class="inner-box">
                                        <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/b1.png')} alt="" /></Link></div>
                                        <div class="lower-content">

                                            <div class="category">Blog heading</div>
                                            <h3><Link to={'/blog-details'}>Top 10 yoga poses for overall fitness</Link></h3>
                                            <div class="text">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod temp incididunt ut labore</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- News Block One --> */}
                                <div class="news-block-one col-lg-4 margintop175">
                                    <div class="inner-box">
                                        <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/b4.png')} alt="" /></Link></div>
                                        <div class="lower-content">
                                            <div class="category">Blog heading</div>

                                            <h3><Link to={'/blog-details'}>Top 10 yoga poses for overall fitness</Link></h3>
                                            <div class="text">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod temp incididunt ut labore</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- News Block One --> */}
                                <div class="news-block-one col-lg-4">
                                    <div class="inner-box">
                                        <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/b5.png')} alt="" /></Link></div>
                                        <div class="lower-content">

                                            <div class="category">Blog heading</div>
                                            <h3><Link to={'/blog-details'}>Top ten acai bowls to maintain that nice healthy glow</Link></h3>
                                            <div class="text">Lorem ipsum dolor sit amet, consectet adipisci elit, sed do eiusmod temp incididunt ut labore</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- News Block One --> */}
                                <div class="news-block-one col-lg-4 margintop175">
                                    <div class="inner-box">
                                        <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/b6.png')} alt="" /></Link></div>
                                        <div class="lower-content">

                                            <div class="category">Blog heading</div>
                                            <h3><Link to={'/blog-details'}>Top 10 yoga poses for overall fitness</Link></h3>
                                            <div class="text">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod temp incididunt ut labore</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- News Block One --> */}
                                <div class="news-block-one col-lg-4 margin200">
                                    <div class="inner-box">
                                        <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/b7.png')} alt="" /></Link></div>
                                        <div class="lower-content">

                                            <div class="category">Blog heading</div>
                                            <h3><Link to={'/blog-details'}>Top 10 yoga poses for overall fitness</Link></h3>
                                            <div class="text">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod temp incididunt ut labore</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- News Block One --> */}
                                <div class="news-block-one col-lg-4">
                                    <div class="inner-box">
                                        <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/b8.png')} alt="" /></Link></div>
                                        <div class="lower-content">

                                            <div class="category">Blog heading</div>
                                            <h3><Link to={'/blog-details'}>Top ten acai bowls to maintain that nice healthy glow</Link></h3>
                                            <div class="text">Lorem ipsum dolor sit amet, consectet adipisci elit, sed do eiusmod temp incididunt ut labore</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- News Block One --> */}
                                <div class="news-block-one col-lg-4 margin200">
                                    <div class="inner-box">
                                        <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/b9.png')} alt="" /></Link></div>
                                        <div class="lower-content">
                                            <div class="category">Blog heading</div>

                                            <h3><Link to={'/blog-details'}>Top 10 yoga poses for overall fitness</Link></h3>
                                            <div class="text">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod temp incididunt ut labore</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- News Block One --> */}
                                {/* <div class="news-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-18.jpg')} alt="" /></Link></div>
                                    <div class="lower-content">


                                        <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div> */}
                                {/* <!-- News Block One --> */}
                                {/* <div class="news-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-19.jpg')} alt="" /></Link></div>
                                    <div class="lower-content">


                                        <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div> */}
                                {/* <!-- News Block One --> */}
                                {/* <div class="news-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-20.jpg')} alt="" /></Link></div>
                                    <div class="lower-content">


                                        <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div> */}
                            </div>
                        </div>
                    ))}
                </section>

                {/* <section class="section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="text-center">
                                    <ul class="col container-filter portfolioFilte list-unstyled mb-0" id="filter">
                                        <li><a class="categories active" data-filter="*">All</a></li>
                                        <li><a class="categories" data-filter=".branding">Branding</a></li>
                                        <li><a class="categories" data-filter=".design">Design</a></li>
                                        <li><a class="categories" data-filter=".photo">Photo</a></li>
                                        <li><a class="categories" data-filter=".coffee">coffee</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="port portfolio-masonry mt-4">
                            <div class="portfolioContainer row photo" >
                                <div class="col-lg-4 p-4 ">
                                    <div class="item-box">
                                        <a class="mfp-image" title="Project Name">
                                        <img class="item-container img-fluid" src={require('../../assets/images/resource/b1.png')} alt="work-img" />
                                            
                                            <div class="item-mask">
                                                <div class="item-caption">
                                                    <p class="text-dark mb-0">Top 10 yoga poses for overall fitness</p>
                                                    <h6 class="text-dark mt-1 text-uppercase">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod temp incididunt ut labore</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-4 p-4 branding coffee">
                                    <div class="item-box">
                                        <a class="mfp-image"  title="Project Name">
                                        <img class="item-container img-fluid" src={require('../../assets/images/resource/b2.png')} alt="work-img" />
                                            
                                            <div class="item-mask">
                                                <div class="item-caption">
                                                    <p class="text-dark mb-0">Coffee</p>
                                                    <h6 class="text-dark mt-1 text-uppercase">PageMaker including</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-4 p-4 branding photo">
                                    <div class="item-box">
                                        <a class="mfp-image"  title="Project Name">
                                        <img class="item-container img-fluid" src={require('../../assets/images/resource/b3.png')} alt="work-img" />
                                            
                                            <div class="item-mask">
                                                <div class="item-caption">
                                                    <p class="text-dark mb-0">Lebles</p>
                                                    <h6 class="text-dark mt-1 text-uppercase">Sometime Active</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-4 p-4 branding design photo">
                                    <div class="item-box">
                                        <a class="mfp-image" title="Project Name">
                                        <img class="item-container img-fluid" src={require('../../assets/images/resource/b4.png')} alt="work-img" />
                                          
                                            <div class="item-mask">
                                                <div class="item-caption">
                                                    <p class="text-dark mb-0">Card</p>
                                                    <h6 class="text-dark mt-1 text-uppercase">Therefore Always</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-4 p-4 design photo">
                                    <div class="item-box">
                                        <a class="mfp-image" title="Project Name">
                                        <img class="item-container img-fluid" src={require('../../assets/images/resource/b5.png')} alt="work-img" />
                                           
                                            <div class="item-mask">
                                                <div class="item-caption">
                                                    <p class="text-dark mb-0">Pepers</p>
                                                    <h6 class="text-dark mt-1 text-uppercase">Therefore Always</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-4 p-4 branding design coffee">
                                    <div class="item-box">
                                        <a class="mfp-image" title="Project Name">
                                        <img class="item-container img-fluid" src={require('../../assets/images/resource/b6.png')} alt="work-img" />
                                           
                                            <div class="item-mask">
                                                <div class="item-caption">
                                                    <p class="text-dark mb-0">Bottle</p>
                                                    <h6 class="text-dark mt-1 text-uppercase">Therefore Always</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-4 p-4 branding design">
                                    <div class="item-box">
                                        <a class="mfp-image" title="Project Name">
                                        <img class="item-container img-fluid" src={require('../../assets/images/resource/b7.png')} alt="work-img" />
                                           
                                            <div class="item-mask">
                                                <div class="item-caption">
                                                    <p class="text-dark mb-0">Watch</p>
                                                    <h6 class="text-dark mt-1 text-uppercase">Sometime Active</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-4 p-4 branding design photo coffee">
                                    <div class="item-box">
                                        <a class="mfp-image" title="Project Name">
                                        <img class="item-container img-fluid" src={require('../../assets/images/resource/b8.png')} alt="work-img" />
                                           
                                            <div class="item-mask">
                                                <div class="item-caption">
                                                    <p class="text-dark mb-0">Milk</p>
                                                    <h6 class="text-dark mt-1 text-uppercase">Sometime Active</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-4 p-4 branding design photo coffee">
                                    <div class="item-box">
                                        <a class="mfp-image" title="Project Name">
                                        <img class="item-container img-fluid" src={require('../../assets/images/resource/b9.png')} alt="work-img" />
                                           
                                            <div class="item-mask">
                                                <div class="item-caption">
                                                    <p class="text-dark mb-0">Milk</p>
                                                    <h6 class="text-dark mt-1 text-uppercase">Sometime Active</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                <Footer />
            </>
        )
    }
}
export default Blog;