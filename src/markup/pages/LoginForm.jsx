import React from 'react';
import { Redirect } from 'react-router-dom';


class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      username: '',
      password: '',
      error: null,
      redirectToSidenav: false
    };
  }

  handleInputChange = (event) => {
    console.log("handleInputChange", event)
    this.setState({
      [event.target.name]: event.target.value,
      error: null // Clear the error message
    });

  };


  handleLogin = async (event) => {
    console.log("handleLogin", event)
    event.preventDefault();

    const { username, password } = this.state;

    if (!username || !password) {
      this.setState({ error: 'Please enter both username and password' });
      return;
    }

    const loginData = {
      username: username,
      password: password
    };

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      // Simulating a successful login
      setTimeout(() => {
        this.setState({ redirectToSidenav: true });
      }, 1000);

    } catch (error) {
      console.error('Login failed:', error.message);
      this.setState({ error: error.message });
    }
  };


  handleSignUpClick = () => {
    this.setState((prevState) => ({ checked: !prevState.checked }));
  };


  render() {
    const { checked, username, password, error, redirectToSidenav} = this.state;

    if (redirectToSidenav) {
      return <Redirect to="/sidenav" />;
    }

    return (
      <div>
        <link href="d.css" rel='stylesheet' type='text/css' />
        <div className="logo_outlet">
          <img className="only_logo1" src={require('../../assets/images/shape/logo_bridgehealth.png')} alt="logo_bridgehealth" />
        </div>
        <div className="container1">
          <div className="frame1">
            <div className="nav1">
              <h3 className="signin-active signin-wrap-1">
                <a className="btn custom-btn-1">Sign in</a>
              </h3>
            </div>
            <div ng-app ng-init="checked = false">
              <form className="form-signin1" action="" method="post" name="form">

                <label htmlFor="username" className="log-form">Username</label>
                <input
                  className="form-styling1"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleInputChange}
                  placeholder=""
                />
                <label htmlFor="password" className="log-form">Password</label>
                <input
                  className="form-styling1"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleInputChange}
                  placeholder=""
                />
                {error && <div>{error}</div>}
                <div className="btn-animate">
                  <a onClick={this.handleLogin} className="btn-signin1">Sign in</a>
                </div>
              </form>

              <form className="form-signup1" action="" method="post" name="form">
                <label htmlFor="fullname" className="log-form">Full name</label>
                <input className="form-styling1" type="text" name="fullname" placeholder="" />
                <label htmlFor="email" className="log-form">Email</label>
                <input className="form-styling1" type="text" name="email" placeholder="" />
                <label htmlFor="password" className="log-form">Password</label>
                <input className="form-styling1" type="text" name="password" placeholder="" />
                <label htmlFor="confirmpassword" className="log-form">Confirm password</label>
                <input className="form-styling1" type="text" name="confirmpassword" placeholder="" />
                <a onClick={this.handleSignUpClick} className="btn-signup">Sign Up</a>
              </form>

              <div className="success">
                <svg width="270" height="270" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" id="check" className={checked ? 'checked' : ''}>
                  <path fill="#ffffff" d="M40.61,23.03L26.67,36.97L13.495,23.788c-1.146-1.147-1.359-2.936-0.504-4.314 c3.894-6.28,11.169-10.243,19.283-9.348c9.258,1.021,16.694,8.542,17.622,17.81c1.232,12.295-8.683,22.607-20.849,22.042 c-9.9-0.46-18.128-8.344-18.972-18.218c-0.292-3.416,0.276-6.673,1.51-9.578" />
                </svg>
                <div className="successtext">
                  <p>Thanks for signing up! Check your email for confirmation.</p>
                </div>
              </div>
            </div>

            <div className="forgot">
              <a href="#">Forgot your password?</a>
            </div>

            <div>
              <div className="cover-photo"></div>
              <div className="profile-photo"></div>
              <h1 className="welcome">Welcome, Chris</h1>
              <a className="btn-goback" value="Refresh">Go back</a>
            </div>
          </div>

          <a id="refresh" value="Refresh">
            <svg className="refreshicon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 322.447 322.447" style={{ enableBackground: 'new 0 0 322.447 322.447' }} xmlSpace="preserve">
              <path d="M321.832,230.327c-2.133-6.565-9.184-10.154-15.75-8.025l-16.254,5.281C299.785,206.991,305,184.347,305,161.224 c0-84.089-68.41-152.5-152.5-152.5C68.411,8.724,0,77.135,0,161.224s68.411,152.5,152.5,152.5c6.903,0,12.5-5.597,12.5-12.5 c0-6.902-5.597-12.5-12.5-12.5c-70.304,0-127.5-57.195-127.5-127.5c0-70.304,57.196-127.5,127.5-127.5 c70.305,0,127.5,57.196,127.5,127.5c0,19.372-4.371,38.337-12.723,55.568l-5.553-17.096c-2.133-6.564-9.186-10.156-15.75-8.025 c-6.566,2.134-10.16,9.186-8.027,15.751l14.74,45.368c1.715,5.283,6.615,8.642,11.885,8.642c1.279,0,2.582-0.198,3.865-0.614 l45.369-14.738C320.371,243.946,323.965,236.895,321.832,230.327z" />
            </svg>
          </a>
        </div>
      </div>
    );
  }
}

export default LoginForm;