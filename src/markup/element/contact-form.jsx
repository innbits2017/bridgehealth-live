import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            phone: '',
            message: '',
            isSubmitDisabled: false
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    }

    render() {
        const { username, email, phone, message, isSubmitDisabled } = this.state;
        const { buttonText, className } = this.props;

        return (
            <Popup trigger={
                <button className={`theme-btn btn-style-one ${className}`} type="submit" name="submit-form">
                    <span className="btn-title btn-style-one">{buttonText}</span>
                </button>
            } position="right">
                <div className="contact-form-area">
                    <div className="contact-form">
                        <form onSubmit={this.handleSubmit} action="#">
                            <div className="row clearfix">
                                <div className="col-md-12 form-group">
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={this.handleChange}
                                        name="username"
                                        id="name"
                                        placeholder="Name*"
                                        required
                                    />
                                </div>

                                <div className="col-md-12 form-group">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={this.handleChange}
                                        name="email"
                                        id="email"
                                        placeholder="Email*"
                                        required
                                    />
                                </div>

                                <div className="col-md-12 form-group">
                                    <input
                                        type="phone"
                                        value={phone}
                                        onChange={this.handleChange}
                                        name="phone"
                                        id="phone"
                                        placeholder="Phone*"
                                        required
                                    />
                                </div>

                                <div className="col-md-12 form-group">
                                    <textarea
                                        name="message"
                                        value={message}
                                        onChange={this.handleChange}
                                        id="message"
                                        placeholder="Message"
                                    ></textarea>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="checkbox1"
                                        name="option1"
                                        value="good"
                                    />
                                    <label className="form-check-label heading colorwhite">
                                        I agree that Bridge Health may contact me at the email address or phone number above.
                                    </label>
                                </div>

                                <div className="col-md-12 form-group">
                                    <button
                                        className="theme-btn btn-style-one btncontact"
                                        type="submit"
                                        name="submit-form"
                                        disabled={isSubmitDisabled}
                                    >
                                        <span className="btn-title">SUBMIT</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Popup>
        );
    }
}

export default ContactForm;
