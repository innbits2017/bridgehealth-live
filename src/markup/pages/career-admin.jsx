import React, { Component } from 'react';

class careerAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;

        // Validate username and password
        if (!username) {
            this.setState({ error: 'Please enter a username' });
            return;
        }

        if (!password) {
            this.setState({ error: 'Please enter a password' });
            return;
        }

        // Handle form submission logic here
        console.log('Username:', username);
        console.log('Password:', password);

        // Reset the form
        this.setState({
            username: '',
            password: '',
            error: '',
        });
    };

    handleForgotPassword = () => {
        // Handle "Forgot your password?" logic here
        console.log('Forgot password clicked');
    };

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value, error: '' });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value, error: '' });
    };

    render() {
        const { username, password, error } = this.state;

        return (
            <div className="signin-form-container">
                <form className="signin-form"  onSubmit={this.handleSubmit}>
                    <h2>Sign In</h2>
                    {error && <div className="error">{error}</div>}
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