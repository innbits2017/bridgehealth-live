import React, { Component } from 'react';

class FormValidation extends Component {
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
            }
        };
    }

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

    handleSubmit = (event) => {
        console.log("i am handle Submit", event)
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
                errors: {
                    username: '',
                    email: '',
                    phone: ''
                }
            });
        }
    };

    render() {
        const { username, email, phone, errors } = this.state;

        return (
            // <form onSubmit={this.handleSubmit}>
            //     <div>
            //         <label>Username:</label>
            //         <input
            //             type="text"
            //             name="username"
            //             value={username}
            //             onChange={this.handleChange}
            //         />
            //         {errors.username && <span className="error">{errors.username}</span>}
            //     </div>
            //     <div>
            //         <label>Email:</label>
            //         <input
            //             type="text"
            //             name="email"
            //             value={email}
            //             onChange={this.handleChange}
            //         />
            //         {errors.email && <span className="error">{errors.email}</span>}
            //     </div>
            //     <div>
            //         <label>Phone:</label>
            //         <input
            //             type="text"
            //             name="phone"
            //             value={phone}
            //             onChange={this.handleChange}
            //         />
            //         {errors.phone && <span className="error">{errors.phone}</span>}
            //     </div>
            //     <button type="submit">Submit</button>
            // </form>
            <div class="col-lg-6">
                <div class="contact-form-area">

                    {/* <!-- Contact Form--> */}
                    <div class="contact-form">
                        <form method="post" onSubmit={this.handleSubmit} id="contact-form">
                            <div class="row clearfix">
                                <div class="col-md-12 form-group">
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

                                <div class="col-md-6 form-group">
                                    <input type="text"
                                        value={email}
                                        onChange={this.handleChange}
                                        name="email"
                                        id="email"
                                        placeholder="Email*"
                                        // required
                                    />
                                    {errors.email && <div className="error">{errors.email}</div>}
                                </div>
                                <div class="col-md-6 form-group">
                                    <input type="text"
                                        value={phone}
                                        onChange={this.handleChange}
                                        name="phone"
                                        id="phone"
                                        placeholder="Phone*"
                                        // required
                                    />
                                    {errors.phone && <div className="error">{errors.phone}</div>}
                                </div>

                                <div class="col-md-12 form-group">
                                    <textarea
                                        name="message"
                                        value={this.state.message}
                                        onChange={this.handleChange}
                                        id="message"
                                        placeholder="Message"
                                    ></textarea>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input"
                                        type="checkbox" id="checkbox1" name="option1" value="good" />
                                    <label class="form-check-label heading">
                                        I agree that Bridge Health may contact me at the email address or phone number above.
                                    </label>
                                </div>
                                <div class="col-md-12 form-group">
                                    <button
                                        // disabled={isSubmitDisabled}
                                        // onSubmit={e => this.handleSubmit(e)}
                                        class="theme-btn btn-style-one marginleft21"
                                        type="submit"
                                        name="submit-form"
                                    ><span class="btn-title">SUBMIT</span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormValidation;
