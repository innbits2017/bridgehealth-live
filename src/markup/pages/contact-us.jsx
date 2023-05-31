import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            phone: '',
            message: '',
        };
        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {

        const { name, value } = event.target;
        this.setState({ ...this.state, [name]: value });
        console.log(event)
    };

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state);
    };

    saveData = async (e) => {

        console.log(e, "Data is saving");

        e.preventDefault();

        const { email, username, phone, message } = this.state;

        const res = await fetch('http://localhost:8000/submit', {
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

        const res = await fetch('http://localhost:8000/register', {
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

        const { username, email } = this.state;
        const isSubmitDisabled = username === '' || email === ''

        return (
            <>
                {/* <!-- Wrapper container --> */}
                <div class="container container1 py-4 mt-5 page-wrapper1">

                    {/* <!-- Bootstrap 5 starter form --> */}
                    <form method="post" onSubmit={e => { this.sendEmail(e); this.saveData(e) }} action="#" id="contactForm">

                        {/* <!-- Name input --> */}
                        <div className="mb-3">
                            {/* <label class="form-label" for="name">Name</label> */}
                            <input
                                value={this.state.username}
                                onChange={e => this.handleChange(e)}
                                name='username'
                                className="form-control"
                                id="name"
                                type="text"
                                placeholder="Name" />
                        </div>
                        {/* <!-- Number input --> */}
                        <div className="mb-3">
                            {/* <label class="form-label" for="name">Name</label> */}
                            <input
                                value={this.state.phone}
                                onChange={e => this.handleChange(e)}
                                name='phone'
                                className="form-control"
                                id="number"
                                type="phone"
                                placeholder="Number" />
                        </div>

                        {/* <!-- Email address input --> */}
                        <div className="mb-3">
                            {/* <label class="form-label" for="emailAddress">Email Address</label> */}
                            <input
                                value={this.state.email}
                                onChange={e => this.handleChange(e)}
                                name='email'
                                className="form-control"
                                id="emailAddress"
                                type="email"
                                placeholder="Email" />
                        </div>

                        {/* <!-- Message input --> */}
                        <div className="mb-3">
                            {/* <label class="form-label" for="message">Message</label> */}
                            <textarea
                                value={this.state.message}
                                onChange={e => this.handleChange(e)}
                                name='message'
                                className="form-control"
                                id="message"
                                type="text"
                                placeholder="Message"
                                style={{ height: 15 + 'rem' }}
                            ></textarea>
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
                            <button
                                className="btn-primary btn-lg btn-submit"
                                type="submit"
                                disabled={isSubmitDisabled}
                                onSubmit={e => this.handleSubmit(e)}
                            >Submit</button>
                        </div>

                    </form>

                </div>


            </>
        )
    }
}
export default contact;