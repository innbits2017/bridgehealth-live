import React, { Component } from 'react';

class FooterFormValidation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            errors: {
                username: '',
                email: '',
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
        console.log("i am handle Submit", event)
        event.preventDefault();

        const { username, email } = this.state;
        const errors = {};

        // Validate username
        if (username.trim() === '') {
            errors.username = 'Username is required';
        }

        // Validate email
        if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            errors.email = 'Invalid email format';
        }


        // Update the state with the errors
        this.setState({ errors });

        // If there are no errors, submit the form
        if (Object.keys(errors).length === 0) {
            try {
                // Call the sendEmail function
                await this.sendEmail();

                // Show the "Thank you" message
                this.setState({ submitted: true });

                // Reset the form
                this.setState({
                    username: '',
                    email: '',
                    errors: {
                        username: '',
                        email: ''
                    }
                });
            } catch (error) {
                console.log('Error sending email:', error);
            }
        }
    };

    sendEmail = async (e) => {
        // e.preventDefault();

        const { email, username } = this.state;

        const res = await fetch('http://localhost:3001/register',  {
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

    render() {
        const { username, email, submitted, errors } = this.state;

        return (

            <div class="contact-form">
                <form method="post" onSubmit={this.handleSubmit} action="#" id="contact-form">
                    <div class="row clearfix">

                        <div class="col-md-12 form-group">
                            <label for="email" style={{ marginLeft: 20 + '%' }}>Get in touch with us</label>
                            <input
                                type="text"
                                value={username}
                                onChange={this.handleChange}
                                name="username"
                                id="name"
                                placeholder="Name*"
                                className='inputfooter'
                            />
                            {errors.username && <div className="error">{errors.username}</div>}

                        </div>
                        <div class="col-md-12 form-group">
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                id="email"
                                placeholder="Email ID"
                                className='inputfooter'
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div class="col-md-12 form-group">
                            <div class="btn-box text-center">
                                <button class="commonBtnforAll" name="submit-form" type="submit">SUBMIT</button>

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
        );
    }
}

export default FooterFormValidation;
