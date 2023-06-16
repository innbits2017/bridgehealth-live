import React, { Component } from 'react';
import Popup from 'reactjs-popup';
const BRIDGE_HEALTH_SITE = process.env.BRIDGE_HEALTH_SITE;


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            phone: '',
            message: '',
            isSubmitDisabled: true,
            errors: {}
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            this.validateForm();
        });
    }

    validateForm = () => {
        const { username, email, phone } = this.state;
        const errors = {};

        // Username validation
        if (username.trim() === "") {
            errors.username = "Please enter your name*";
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = "Please enter a valid email address*";
        }

        // Phone validation
        if (!/^\d{10}$/.test(phone)) {
            errors.phone = "Please enter a 10-digit phone number*";
        }

        this.setState({
            errors,
            isSubmitDisabled: Object.keys(errors).length > 0
        });
    };


    saveData = async (e) => {

        console.log(e, "Data is saving");

        e.preventDefault();

        const { email, username, phone, message } = this.state;

        const res = await fetch(`${BRIDGE_HEALTH_SITE}/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, username, phone, message
            }),
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log('error');
        } else {
            this.setState({ show: true, email: '', username: '', phone: '', message: '' });
            console.log('Data saved');
        }

    }


    sendEmail = async (e) => {
        e.preventDefault();

        const { email, username } = this.state;

        const res = await fetch(`${BRIDGE_HEALTH_SITE}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, username
            }),
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log('error');
        } else {
            this.setState({ show: true, email: '', username: '' });
            console.log('Email sent');
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    }

    render() {
        const { username, email, phone, message, isSubmitDisabled, errors } = this.state;
        const { buttonText, className, popupPosition } = this.props;

        return (
            <Popup trigger={
                <button  className={`theme-btn btn-style-one ${className}`} type="submit" name="submit-form">
                    <span className="btn-title btn-style-one">{buttonText}</span>
                </button>
            } position={popupPosition} repositionOnResize={true}>
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
                                    {errors.username && <div className="error">{errors.username}</div>}
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
                                    {errors.email && <div className="error">{errors.email}</div>}
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
                                    {errors.phone && <div className="error">{errors.phone}</div>}
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
                                  
                                    <div class="btn-box text-center btn5">
                            <button class="commonBtnforAll"  type="submit"    disabled={isSubmitDisabled}
                            onSubmit={e => this.handleSubmit(e)}
                            name="submit-form">SUBMIT</button>
                                    </div>
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
