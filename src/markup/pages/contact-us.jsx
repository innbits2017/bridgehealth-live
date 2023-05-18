import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class contact extends Component {


    render() {
        return (
            <>
                {/* <!-- Wrapper container --> */}
                <div class="container container1 py-4 mt-5 page-wrapper1">

                    {/* <!-- Bootstrap 5 starter form --> */}
                    <form id="contactForm">

                        {/* <!-- Name input --> */}
                        <div className="mb-3">
                            {/* <label class="form-label" for="name">Name</label> */}
                            <input className="form-control" id="name" type="text" placeholder="Name" />
                        </div>
                        {/* <!-- Number input --> */}
                        <div className="mb-3">
                            {/* <label class="form-label" for="name">Name</label> */}
                            <input className="form-control" id="number" type="number" placeholder="Number" />
                        </div>

                        {/* <!-- Email address input --> */}
                        <div className="mb-3">
                            {/* <label class="form-label" for="emailAddress">Email Address</label> */}
                            <input className="form-control" id="emailAddress" type="email" placeholder="Email" />
                        </div>

                        {/* <!-- Message input --> */}
                        <div className="mb-3">
                            {/* <label class="form-label" for="message">Message</label> */}
                            <textarea className="form-control" id="message" type="text" placeholder="Message" style={{ height: 15 + 'rem' }}></textarea>
                        </div>
                        <div className="form-check1">
                            <input className="form-check-input"
                                type="checkbox" id="checkbox1" name="option1" value="good" />
                            <label className="form-check-label heading1">
                            I Authentication text goes here........
                            </label>
                        </div>

                        {/* <!-- Form submit button --> */}
                        <div className="d-grid">
                            <button className="btn-primary btn-lg btn-submit" type="submit">Submit</button>
                        </div>

                    </form>

                </div>


            </>
        )
    }
}
export default contact;