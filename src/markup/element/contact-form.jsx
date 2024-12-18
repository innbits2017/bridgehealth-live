import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
const BRIDGE_HEALTH_SITE = process.env.BRIDGE_HEALTH_SITE;


class ContactForm extends Component {
    state = {
        isOpen: false,
        submitted: false
    };
    state1 = {
        isOpen1: false
    };
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

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
        this.setState({ submitted: false, isOpen: false  });
    };

    handleChange = (event) => {
        console.log("I am handle change", event.target)
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
            errors.username = 'Name is required';
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
            this.setState({ show: true, email: '', username: '', phone: '', message: '' });
            console.log('Email sent');
        }
    };


    render() {
        const { username, email, phone, message, isSubmitDisabled, errors, submitted } = this.state;
        const { buttonText, className, popupPosition } = this.props;

        return (
            <>

                <button className={`commonBtnforAll  ${className}`} type="submit" name="submit-form" onClick={this.openModal}>
                    <span>{buttonText}</span>
                </button>
                <Modal show={this.state.isOpen} onHide={this.closeModal} className='popupform'>
                    <Modal.Header closeButton>
                        <div class="form-body">
                            <div class="row">
                                <div class="form-holder">
                                    <div class="form-content">
                                        <div class="form-items">
                                            <form class="requires-validation" method="post" onSubmit={this.handleSubmit}>
                                                <div class="col-md-12 mb-2">
                                                    <input class="form-control widthinput"
                                                        type="text"
                                                        value={username}
                                                        onChange={this.handleChange}
                                                        name="username"
                                                        id="name"
                                                        placeholder="Name*"
                                                    //   required
                                                    ></input>
                                                    {errors.username && <div className="error">{errors.username}</div>}
                                                </div>
                                                <div class="col-md-12 mb-2">
                                                    <input class="form-control widthinput"
                                                        type="email"
                                                        value={email}
                                                        onChange={this.handleChange}
                                                        name="email"
                                                        id="email"
                                                        placeholder="Email"
                                                    // required
                                                    ></input>
                                                </div>
                                                <div class="col-md-12 mb-2">
                                                    <input class="form-control widthinput"
                                                        type="text"
                                                        value={phone}
                                                        onChange={this.handleChange}
                                                        name="phone"
                                                        id="phone"
                                                        placeholder="Phone*"
                                                    // required
                                                    ></input>
                                                    {errors.phone && <div className="error">{errors.phone}</div>}
                                                </div>
                                                <div class="col-md-12 mb-2">
                                                    <textarea
                                                        name="message"
                                                        value={this.state.message}
                                                        onChange={this.handleChange}
                                                        id="message"
                                                        placeholder="Message here.."
                                                        class="widthinput textareaheight"
                                                    ></textarea>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck3" required></input>
                                                    <label class="form-check-label">I agree that Bridge Health may contact me at the email address or phone number above.
                                                    </label>
                                                </div>
                                                <div class="form-button mt-3 text-center">
                                                    <input type="submit" name="submit" value="Submit" className='submitbutton'></input>
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
                                </div>
                            </div>
                        </div>
                    </Modal.Header>

                </Modal></>
        );
    }
}

export default ContactForm;
