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
            errors: {
                username: '',
                email: '',
                phone: ''
            },
            submitted: false
        };
    }

    closePopup = () => {
        this.setState({ submitted: false });
    };

    handleChange = (event) => {
        // console.log("I am handle change", event.target)
        const { name, value } = event.target;
        const errors = { ...this.state.errors };

        // Clear the error for the changed field
        errors[name] = '';

        this.setState({
            [name]: value,
            errors
        });
    };

    handleSubmit = async (event) => {
        // console.log("i am handle Submit", event)
        event.preventDefault();

        const { username, email, phone } = this.state;
        const errors = {};

        // Validate username
        if (username.trim() === '') {
            errors.username = 'Username is required';
        }

        // Validate email
        if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            errors.email = 'Invalid email format';
        }

        // Validate phone
        if (!phone.match(/^\d{10}$/)) {
            errors.phone = 'Phone number must be 10 digits';
        }

        // Update the state with the errors
        this.setState({ errors });

        // If there are no errors, submit the form
        if (Object.keys(errors).length === 0) {
            // Perform the form submission logic here
            // e.g., call an API endpoint, update the database, etc.

            // Reset the form
            this.setState({
                username: '',
                email: '',
                phone: '',
                message: '',
                errors: {
                    username: '',
                    email: '',
                    phone: '',
                    message: ''
                }
            });

            // Show the "Thank you" message
            this.setState({ submitted: true });

            // Call the sendEmail function
            await this.sendEmail();
        }
    };

    sendEmail = async (e) => {
        // e.preventDefault();

        const { email, username, phone, message } = this.state;

        const res = await fetch('https://mail.bridgehealth.in/register', {
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
            this.setState({ show: true, email: '', username: '', phone: '' });
            console.log('Email sent');
        }
    };


    render() {
        const { username, email, phone, message, isSubmitDisabled, errors, submitted } = this.state;
        const { buttonText, className, popupPosition } = this.props;

        return (
            <Popup trigger={
                <button className={`theme-btn btn-style-one ${className}`} type="submit" name="submit-form">
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
                                        // required
                                    />
                                    {errors.username && <div className="error">{errors.username}</div>}
                                </div>

                                <div className="col-md-12 form-group">
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={this.handleChange}
                                        name="email"
                                        id="email"
                                        placeholder="Email*"
                                        // required
                                    />
                                    {errors.email && <div className="error">{errors.email}</div>}
                                </div>

                                <div className="col-md-12 form-group">
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={this.handleChange}
                                        name="phone"
                                        id="phone"
                                        placeholder="Phone*"
                                        // required
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
                                        required
                                    />
                                    <label className="form-check-label heading colorwhite agree-tick">
                                        I agree that Bridge Health may contact me at the email address or phone number above.
                                    </label>
                                </div>

                                <div className="col-md-12 form-group">

                                    <div class="btn-box text-center btn5">
                                        <button class="commonBtnforAll" type="submit" disabled={isSubmitDisabled}
                                            onSubmit={e => this.handleSubmit(e)}
                                            name="submit-form">SUBMIT</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {submitted && (
                            <div className="thankyou-popup" onClick={this.closePopup}>
                                <h2>Thank You!</h2>
                                <p>Your details has been successfully submitted. Thanks!</p>
                                <button type='button' >OK</button>
                            </div>
                        )}
                    </div>
                </div>
            </Popup>
        );
    }
}

export default ContactForm;
