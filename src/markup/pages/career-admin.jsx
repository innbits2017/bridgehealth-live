import React, { Component } from 'react';

class careerAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Username:', this.state.username);
        console.log('Password:', this.state.password);
    };

    handleForgotPassword = () => {
        // Handle "Forgot your password?" logic here
        console.log('Forgot password clicked');
    };

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    render() {
        const { username, password } = this.state;

        return (
            <div className="signin-form-container">
                <form className="signin-form" onSubmit={this.handleSubmit}>
                    <h2>Sign In</h2>
                    <div className="admin-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={this.handleUsernameChange}
                        />
                    </div>
                    <div className="admin-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={this.handlePasswordChange}
                        />
                    </div>
                    <button className='admin-btn' type="submit">Sign In</button>
                    <div className="forgot-password" onClick={this.handleForgotPassword}>
                        Forgot your password?
                    </div>
                </form>
            </div>
        );
    }
}

export default careerAdmin;